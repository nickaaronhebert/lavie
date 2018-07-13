export function sessionLogin(payload) {
  return {
      type: 'SESSION_LOGIN',
      payload: payload
  };
}

export function sessionRegister(payload) {
  return {
    type: 'SESSION_REGISTER',
    payload: payload
  };
}

export function sessionLogout() {
  return {
    type: 'SESSION_LOGOUT'
  };
}

export function confirmUserEmail(payload) {
  return {
    type: 'CONFIRM_USER_EMAIL',
    payload: payload
  };
}