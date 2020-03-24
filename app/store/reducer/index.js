/**
 * Create by chengkai on 2020/3/23.
 * Describe:
 */
import { actionTypes } from '../action';

let initState = {};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.USER_INFO_ACTION:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default reducer;
