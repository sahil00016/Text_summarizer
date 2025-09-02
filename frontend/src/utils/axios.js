import * as axios from 'axios';

// Prefer env-configured API URL (for Render), fallback to local dev
const envApiUrl = process.env.REACT_APP_API_URL;
const serverURL = envApiUrl && envApiUrl.length > 0
  ? envApiUrl
  : `http://${window.location.hostname}:8000`;

var instance = axios.create();
instance.defaults.baseURL = serverURL;

export { instance as default };