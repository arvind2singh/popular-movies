import { AUTH_FORGET, AUTH_LOGIN, AUTH_LOGOUT, SEND_OTP } from "../constant";
let session = localStorage.getItem("exchange-inrx-session");

const initialState = {
  user: {
    id: 0,
    email: "",
    kyc: 0,
    verify: 0,
    token: session ? session : "",
  },
  otp_send: false,
  isLoggedIn: session ? true : false,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      localStorage.setItem("exchange-inrx-session", action.data.token);
      return {
        ...state,
        user: { ...action.data },
        otp_send: false,
        isLoggedIn: true,
      };
    case SEND_OTP:
      return {
        ...state,
        otp_send: true,
        user: { ...action.data },
      };
    case AUTH_FORGET:
      return {
        ...state,
      };

    case AUTH_LOGOUT:
      localStorage.removeItem("exchange-inrx-session");
      return {
        ...state,
        user: '',
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
}
