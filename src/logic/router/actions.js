const ROOT = 'ROUTER';

export const RESOLVE_ROUTE = `${ROOT}/RESOLVE_ROUTE`;

export const NAVIGATE_TO_ROUTE = `${ROOT}/NAVIGATE_TO_ROUTE`;


export function resolveRoute(payload) {
  return {
    type: RESOLVE_ROUTE,
    payload: payload
  }
}

export function navigateToRoute(payload) {
  return {
    type: NAVIGATE_TO_ROUTE,
    payload: payload
  }
}

