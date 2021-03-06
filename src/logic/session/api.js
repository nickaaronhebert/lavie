import axios from 'axios';
import { sessionService } from 'redux-react-session';
import config from '../apiConfig';

export default class SessionAPI {
  static logout() {
    sessionService.deleteSession();
    sessionService.deleteUser();
    return true;
  }

  static register(mail, firstname, lastname, pass, passConfirm) {
    return axios({
      method: 'POST',
      url: `${config.getEnvironmentBaseUrl()}/users`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: mail,
        password: pass,
        access_token: '28S9sv7xXlOHJkPJHkMXbiljc9V18dzR'
      }
    })
    .then(response => {
      if (response.data.hasOwnProperty('token')) {
          const token = response.data.token;

          sessionService
          .saveSession(token);

          sessionService
          .saveUser(response.data.user);
        
      }
      return response.data;
    })
    .catch(error => {

      throw new Error(error);
    });
  }

  

  static login(mail, pass) {
    return axios({
      method: 'POST',
      url: `${config.getEnvironmentBaseUrl()}/auth`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ''
      },
      auth: {
        username: mail,
        password: pass
      },
      data: {
        access_token: '28S9sv7xXlOHJkPJHkMXbiljc9V18dzR'
      }
    })
    .then(response => {
      if (response.data.hasOwnProperty('token')) {
        const token = response.data.token;

        sessionService
        .saveSession(token);

        sessionService
        .saveUser(response.data.user);

        return response.data;
      }
    })
    .catch(error => {
      return error;
      throw new Error(error);
    });
  }
}