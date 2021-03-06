class Api::CommentsController < ApplicationController

  def index
    comment_id = comment_params[:commentable_id].to_i
    
    # need comments related to the instance only
    # grabs all ROUTE comments and preloads User table (rids N+1)
    @comments = Comment.where("commentable_type ILIKE 'Route'").where(commentable_id: comment_id).includes(:user)
  end
  # SQL version
  # SELECT *
  # FROM Comment
  # JOIN User
  # ON Comment.user_id = User.id
  
  # Use if showing a single comment
  # def show
  #   @comment = Comment.find(params[:id])
  # end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  # def update
  #   Update does not exist
  # end
  
  def destroy
    # limits delete to only current users comments
    # @comment = current_user.comments.find(params[:id])
    @comment = Comment.find(params[:id])
    route_owner = @comment.commentable.creator_id
    @routes = User.find(route_owner).routes

    if @comment 
      @comment.destroy
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:commentable_id, :commentable_type, :user_id, :body)
  end

end
