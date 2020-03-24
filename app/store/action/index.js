/**
 * Create by chengkai on 2020/3/23.
 * Describe:
 */
import * as actionTypes from './action-types';

const userInfoAction = {
  type: actionTypes.USER_INFO_ACTION,
  payload: {
    name: 'chengkai',
    age: 18,
  },
};

export { actionTypes, userInfoAction };
