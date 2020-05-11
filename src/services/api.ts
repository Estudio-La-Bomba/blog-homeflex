import axios from 'axios';

const api = axios.create({
  baseURL: 'https://homeflexutilidades.com.br/wp-json/wp/v2/posts',
});

export default api;
