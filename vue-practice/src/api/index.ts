import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '' : 'https://api.hnpwa.com/v0',
  timeout: 6000,
});

Api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // error response 있음
      if (error.response.status === 403) console.error('authentication error');
    } else if (error.request) {
      // error response 없음
      console.log('server has a problem');
    } else {
      // request 설정에 문제가 발생
      console.log(error.message);
    }

    return Promise.reject(error);
  }
);

export default Api;
