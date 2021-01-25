import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions'

const modalsReducer = (state = null, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case OPEN_MODAL:
      // debugger
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default modalsReducer