import * as types from '../constants/ActionTypes';

export function add(num) {
  return { type: types.ADD, num };
}
