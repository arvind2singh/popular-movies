const url = "https://www.kingvrx.com/api";

export function userLogin(email, password) {
  return fetch(`${url}/login.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((d) => d.json())
    .catch((e) => e);
}

export function resetPasscode(oldpass, newpass, cpass, session_id) {
  return fetch(`${url}/password/change_password.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
    },
    body: JSON.stringify({
      old_pwd: oldpass,
      new_pwd: newpass,
      cnf_pwd: cpass,
      token_id: session_id
    }),
  })
    .then((d) => d.json())
    .catch((e) => e);
}

export function change_status(name, symbol, status, session_id) {
  return fetch(`${url}/token/update_status.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
    },
    body: JSON.stringify({
      token_name: name,
      token_symbol: symbol,
      token_status: status,
      token_id: session_id
    }),
  })
    .then((d) => d.json())
    .catch((e) => e);
}

export function changeCurrencyStatus(name, symbol, status, session_id) {
  console.log("name>",name);
  console.log("symbol>",symbol);
  console.log("status>",status);
  console.log("name>",name);
  return fetch(`${url}/currency/update_status.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
    },
    body: JSON.stringify({
      coin_name: name,
      coin_symbol: symbol,
      coin_status: status,
      token_id: session_id
    }),
  })
    .then((d) => d.json())
    .catch((e) => e);
}

export function isBuy(name, symbol, status, session_id) {
  return fetch(`${url}/token/isbuy.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
    },
    body: JSON.stringify({
      token_name: name,
      token_symbol: symbol,
      token_status: status,
      token_id: session_id
    }),
  })
    .then((d) => d.json())
    .catch((e) => e);
}

export function isSell(name, symbol, status, session_id) {
  return fetch(`${url}/token/issell.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
    },
    body: JSON.stringify({
      token_name: name,
      token_symbol: symbol,
      token_status: status,
      token_id: session_id
    }),
  })
    .then((d) => d.json())
    .catch((e) => e);
}

export function isCoinBuy(name, symbol, status, session_id) {
  return fetch(`${url}/currency/isbuy.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
    },
    body: JSON.stringify({
      coin_name: name,
      coin_symbol: symbol,
      coin_status: status,
      token_id: session_id
    }),
  })
    .then((d) => d.json())
    .catch((e) => e);
}

export function isCoinSell(name, symbol, status, session_id) {
  return fetch(`${url}/currency/issell.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
    },
    body: JSON.stringify({
      coin_name: name,
      coin_symbol: symbol,
      coin_status: status,
      token_id: session_id
    }),
  })
    .then((d) => d.json())
    .catch((e) => e);
}

export function sendMeassge(subject, message, session_id) {
  return fetch(`${url}/mailing_list.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
    },
    body: JSON.stringify({
      subject: subject,
      message: message,
      token_id: session_id
    }),
  })
    .then((d) => d.json())
    .catch((e) => e);
}

export function getPending(session_id) {
  return fetch(`${url}/kyc/get_pending.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}
export function pendingBank(session_id) {
  return fetch(`${url}/bank/pending_bank.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}
export function confirmBankList(session_id) {
  return fetch(`${url}/bank/confirm_bank_list.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}
export function rejectBankList(session_id) {
  return fetch(`${url}/bank/reject_bank_list.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}

export function deleteUser(user_id, session_id) {
  return fetch(`${url}/admin/delete_user.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({ 
      user_id: user_id,
      token_id: session_id 
    }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}

export function sendMail(email, subject, message, session_id) {
  return fetch(`${url}/mail.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({ 
      email: email,
      subject: subject,
      message: message,
      token_id: session_id 
    }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}

export function getTotalUser(session_id) {
  return fetch(`${url}/kyc/confirm_kyc.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}

export function getRejectUser(session_id) {
  return fetch(`${url}/kyc/reject_kyc.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}

export function getAllConfirm(session_id) {
  return fetch(`${url}/kyc/total_all_confirm_member.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}

export async function updateKyc(txt, msg, id, session_id) {
  let body = null;
  if (txt === "reject") {
    body = {
      msg: msg,
      user_id: id,
      status: 0,
      token_id: session_id,
    };
  } else {
    body = {
      msg: msg,
      user_id: id,
      status: 1,
      token_id: session_id,
    };
  }
  return fetch(`${url}/kyc/get_approved.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}

export async function bankApproved(txt, id, session_id) {
  let body = null;
  if (txt === "reject") {
    body = {
      msg: "Bank Details Not Correct!!",
      user_id: id,
      status: 0,
      token_id: session_id,
    };
  } else {
    body = {
      msg: "Approved!",
      user_id: id,
      status: 1,
      token_id: session_id,
    };
  }
  return fetch(`${url}/bank/bank_approved.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}

export async function userDetails(id, session_id) {
  return fetch(`${url}/kyc/user_details.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({
      user_id: id,
      token_id: session_id
    }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}
export async function orderList(session_id) {
  return fetch(`${url}/order/open_order_list.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({
      token_id: session_id
    }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}

export async function WalletList(session_id) {
  return fetch(`${url}/wallet_list.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({
      token_id: session_id
    }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}

export async function closeOrderList(session_id) {
  return fetch(`${url}/order/close_order_list.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({
      token_id: session_id
    }),
  })
    .then((res) => res.json())
    .catch((e) => {
      return e;
    });
}

export function getCoinsData() {
  return fetch(`${url}/currency_socket_copy.php`)
    .then((d) => d.json())
    .catch((e) => e);
}


export function get_wallet(session_id) {
  return fetch(`${url}/user_wallet.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function userLogout() {
  return fetch(`${url}/logout`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function allFeeList(session_id) {
  return fetch(`${url}/fee/fee_list.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({
      token_id: session_id
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function setReferral(referral_fee, session_id) {
  return fetch(`${url}/fee/commision_fee.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({
      token_id: session_id,
      commision_fee: referral_fee
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function setAllFee(fee, symbol, name, txt, session_id) {
  return fetch(`${url}/fee/set_fee.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({
      token_id: session_id,
      fee: fee,
      symbol: symbol,
      name: name,
      txt: txt
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function getFee(symbol, name, txt, session_id) {
  return fetch(`${url}/fee/get_fee.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({
      token_id: session_id,
      symbol: symbol,
      name: name,
      txt: txt
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}


export function setDepositefee(deposit_fee, session_id) {
  return fetch(`${url}/fee/set_deposit_fee.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({
      token_id: session_id,
      deposit_fee: deposit_fee,
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function request_token(body, session_id) {
  console.log(body.token_addess)
  return fetch(`${url}/token/save_token.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
      // "cache-control": "no-cache",
    },
    body: JSON.stringify({
      token_coin:body.token_listing,
      token_blockchain:body.token_blockchain,
      token_type: body.token_type,
      token_name: body.token_name,
      token_symbol: body.token_symbol,
      token_logo: body.token_logo,
      token_supply: body.token_supply,
      token_decimal: body.token_decimal,
      circulating_supply:body.circulating_supply,
      amount_exchange: body.amount_list,
      wallet_addres: body.token_addess,
      token_id: session_id
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}
export function getAllCoin(session_id) {
  return fetch(`${url}/currency/coin.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function getToken(session_id) {
  return fetch(`${url}/token/token.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}
export function getCoin(session_id) {
  return fetch(`${url}/token/coin.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function getPairList(session_id, token_name) {
  return fetch(`${url}/token/paired_list.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ 
      token_id: session_id,
      token_name:token_name 
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function delete_token(name, symbol, session_id) {
  return fetch(`${url}/token/delete_token.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      // "content-type": "application/json",
    },
    body: JSON.stringify({
      token_name: name,
      token_symbol: symbol,
      token_id: session_id
    }),
  })
    .then((d) => d.json())
    .catch((e) => e);
}

export function getTokenList(session_id) {
  return fetch(`${url}/token/token_list.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function getCoinList(session_id) {
  return fetch(`${url}/currency/coin_list.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ token_id: session_id }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function updateToken(price, currency, comp_currency, session_id) {
  return fetch(`${url}/token/update_token.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ 
      token_id: session_id,
      price: price,
      token_name: currency,
      currency_type: comp_currency
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function unPareToken(currency, comp_currency, session_id) {
  return fetch(`${url}/token/unpair_token.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ 
      token_id: session_id,
      token_name: currency,
      currency_type: comp_currency
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function unPareCoin(currency, comp_currency, session_id) {
  return fetch(`${url}/currency/unpare_coin.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ 
      token_id: session_id,
      coin_name: currency,
      currency_type: comp_currency
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function updateCurrency(price, currency, comp_currency, session_id) {
  return fetch(`${url}/currency/update_currency.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ 
      token_id: session_id,
      price: price,
      token_name: currency,
      currency_type: comp_currency
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function saveAdminWallet(symbol, name, wallet_address, session_id) {
  return fetch(`${url}/admin/save_wallet.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ 
      token_id: session_id,
      symbol:symbol,
      name:name,
      wallet_address:wallet_address
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function saveBalance(symbol, name, email, balance, session_id) {
  return fetch(`${url}/admin/save_balance.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ 
      token_id: session_id,
      symbol:symbol,
      name:name,
      email:email,
      balance:balance
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function createBuyOffer(
  price,
  quantity,
  currency_type,
  compare_currency,
  session_id
) {
  return fetch(`${url}/buy_stack.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    // headers: {
    //   "content-type": "application/json",
    //   "cache-control": "no-cache",
    // },
    body: JSON.stringify({
      price: price,
      quantity: quantity,
      currency_type: currency_type,
      compare_currency: compare_currency,
      token_id: session_id,
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}

export function createSellOffer(
  price,
  quantity,
  currency_type,
  compare_currency,
  session_id
) {
  return fetch(`${url}/sell_stack.php`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({
      price: price,
      quantity: quantity,
      currency_type: currency_type,
      compare_currency: compare_currency,
      token_id: session_id,
    }),
  })
    .then((res) => res.json())
    .catch((e) => e);
}