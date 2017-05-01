import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:3333';

export {getSensorTemps};

function getSensorTemps() {
  const url = `${BASE_URL}/api/sensors/temperature`;
  return axios.get(url).then(response => response.data);
}
