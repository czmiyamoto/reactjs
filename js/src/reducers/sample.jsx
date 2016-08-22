import { ADD } from '../constants/ActionTypes';

const initialState = {
  num: 0,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {
        num: state.num + action.num,
      });

    default:
      return state;
  }
}
