# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Route.destroy_all
Workout.destroy_all
Goal.destroy_all
Friend.destroy_all
Comment.destroy_all
Cheer.destroy_all

user1 = User.create!(
  id: 1,
  first_name: 'Demo', 
  last_name: 'Demo',
  password: '123456',
  email: 'demo@demo.com', 
  birthday: '1990-01-13',
  gender: 'M'
  )
user2 = User.create!(
  id: 2,
  first_name: 'Cat',
  last_name: 'Feline',
  password: 'abcdef', 
  email: 'imfaster@yahoo.com', 
  birthday: '2000-03-29',
  gender:'F'
  )
user3 = User.create!(
  id: 3,
  first_name: 'Ash', 
  last_name: 'Ketchum',
  password: 'pokemon',
  email: 'smoothsailing@gmail.com', 
  birthday: '1986-06-14',
  gender:'M'
  )


route1 = Route.create!(
  id: 1,
  name: 'Tour de New York',
  creator_id: 1,
  activity: 'cycling',
  location: 'New York City',
  distance: "50 MI",
  markers: '[{"lat":40.737754928224,"lng":-73.99263990104978},{"lat":40.72780393671193,"lng":-74.00113713920896},{"lat":40.73964089608967,"lng":-73.98500096977537},{"lat":40.74601377115408,"lng":-73.99409902275389},{"lat":40.737754928224,"lng":-73.99263990104978}]',
  description: "This is madness!"
  )

route2 = Route.create!(
  id: 2,
  name: 'Path of Moguls',
  creator_id: 3,
  activity: 'running',
  location: "Catskills, NY",
  distance: "15 MI",
  markers: '[{"lat":40.75674223226639,"lng":-73.98508680046385},{"lat":40.74035624922381,"lng":-73.99710309685057},{"lat":40.72663313398497,"lng":-73.97925031364744},{"lat":40.761943287259584,"lng":-73.96500241936033},{"lat":40.760448025629294,"lng":-73.98989331901853},{"lat":40.75674223226639,"lng":-73.98508680046385}]',
  description: "Nothing like fresh air"
  )

route3 = Route.create!(
  id: 3,
  name: 'Boulevard of Dreams',
  creator_id: 2,
  activity: 'walking',
  location: "Miami, FL",
  distance: "20 MI",
  markers: '[{"lat":25.755614618779823,"lng":-80.19676837993164},{"lat":25.790705399755968,"lng":-80.18861446452637},{"lat":25.755614618779823,"lng":-80.19676837993164}]',
  description: "Soaking in the sun"
)

workouts1 = Workout.create!(
  id: 1,
  user_id: user1.id,
  route_id: route1.id,
  workout_name: "I can do it!!!",
  workout_date: '2021-01-13', #Date.new(2021,01,13).to_s(:db),    #'2021-01-13',
  activity: "cycling",
  distance: 50,
  duration: 38067 # 10:34:27
)

workouts2 = Workout.create!(
  id: 2,
  user_id: user2.id,
  workout_name: "New Years Resolution: run more!",
  workout_date: '2021-01-01',
  activity: "running",
  distance: 2,
  duration: 1227 # 00:20:27,
)
workouts3 = Workout.create!(
  id: 3,
  user_id: user2.id,
  workout_name: "New Years Resolution: run more!",
  workout_date: '2021-01-01',
  activity: "running",
  distance: 2,
  duration: 1227 # 00:20:27,
)

friending1 = Friend.create!(
  id: 1,
  user_id: user1.id,
  friend_id: user2.id
)
friending2 = Friend.create!(
  id: 2,
  user_id: user1.id,
  friend_id: user3.id
)

comments1 = Comment.create!(
  id: 1,
  body: "Great job Eric! Keep it up!",
  commentable_id: route1.id,
  commentable_type: "Route",
  user_id: user3.id
)
comments2 = Comment.create!(
  id: 2,
  body: "Impressive!",
  commentable_id: workouts2.id,
  commentable_type: "Workout",
  user_id: user2.id
)

goals1 = Goal.create!(
  id: 1,  
  title: "1st 5k",
  user_id: user2.id,
  goal_type: "Distance",
  goal_number: 5
)
  
cheers1 = Cheer.create!(
  id: 1,
  cheerable_id: goals1.id,
  cheerable_type: "Goal",
  user_id: 1
) 