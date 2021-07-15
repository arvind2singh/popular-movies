import {
  GET_COIN_DATA,
  CHANGE_ACTIVE_COIN,
  SET_USER_BALANCE,
} from "../constant";

const initialState = {
  coins: [],
  currency_graph: [],
  wallet: [],
};

export default function coinDBReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COIN_DATA:
      return {
        ...state,
        coins: { ...action.data },
        // currency_graph: { ...action.data.currency_graph },
      };
    case SET_USER_BALANCE:
      return {
        ...state,
        wallet: [...action.data ],
      };
    default:
      return {
        ...state,
      };
  }
}
