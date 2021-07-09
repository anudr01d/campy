import axios from 'axios';
import {BaseUrl} from '../Config';

function ApiCaller(method, url, data) {
  let option = {
    method,
    url: BaseUrl + url,
    data: data || 'hello from api caller',
  };

  return new Promise((resolve, reject) => {
    console.log('option', option);
    axios({...option})
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log('err is ', err);
        reject(err);
      });
  });
}

export default ApiCaller;
