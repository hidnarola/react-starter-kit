// using axios for fetching the node api
import axios from 'axios';

import { setUser } from '../actions/Useractions';

//  register user
export function RegisterUser(user) {
  return dispatch =>
    axios.post(`/registerUser`, user).then(response => {
      dispatch(setUser(response.data));
    });
}

//  login user
export function LoginUser(usercredentials) {
  console.log(usercredentials);
  return dispatch =>
    axios.post(`/loginUser`, usercredentials).then(response => {
      dispatch(setUser(response.data));
    });
}
