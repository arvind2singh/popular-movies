import { NotificationManager } from "react-notifications";
import {  AUTH_LOGIN, AUTH_LOGOUT } from "../constant";
import {
  userLogin, userLogout
} from "../helpers/api_functions";

export function user_Login(email, password, resolve, reject) {
  return (dispatch) => {
    userLogin(email, password)
      .then((res) => {
        if (res.status === 1 && parseInt(res.role) === 2) {
          dispatch({ type: AUTH_LOGIN, data: res });
          resolve();
        } else {
          NotificationManager.error("Login Credential is Wrong!", "Error", 3000);
          reject();
        }
      })
      .catch((e) => {
        console.log(e);
        NotificationManager.error(e.message);
        reject();
      });
  };
}

export function user_logout(cb) {
  return (dispatch) => {
    userLogout();
    dispatch({ type: AUTH_LOGOUT });
    cb();
  };
}
