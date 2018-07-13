import { call, put, takeLatest } from 'redux-saga/effects';
import sessionAPI from './api';
import * as actions from './actions';
import * as sessionActions from '../session/actions';
import qs from 'qs';
import { push } from 'react-router-redux';

function* resolveRoute(action) {
    try {
      const {
        payload: {
          location,
          match,
          routeId,
        },
      } = action;

      const { params } = match;
      const { search = '' } = location;
      const queryParams = qs.parse(search.slice(1, search.length));

      switch (routeId) {
        case 'LOG_OUT':
          yield put(sessionActions.sessionLogout())
          break;
        case 'EMAIL_TEMPLATE_LIST':
          yield put(emailTemplateActions.fetchMany())
          break;
        case 'CONFIRM_USER_EMAIL':
          var params = {id: params.id, emailConfirmationToken: queryParams.email_confirmation_token}
          yield put(sessionActions.sessionConfirmUserEmail(params))
          break;

        default:
            break;

      }
    }
    catch(err) {
    }
    
}

function* navigateToRoute(action) {
  try {
    const {
      payload: {
        to,
        replace,
      },
    } = action;

    yield put(push(to));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

function* sagas() {
    yield takeLatest(actions.RESOLVE_ROUTE, resolveRoute);
    yield takeLatest(actions.NAVIGATE_TO_ROUTE, navigateToRoute);


}

export default sagas;
