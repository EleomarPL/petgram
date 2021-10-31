import axios from 'axios';
import { baseAPI } from '../../const/baseAPI';

const BASE_API = `${baseAPI}/login`;

export const login = async({ username, password }) => {
  let response = await axios.post(`${BASE_API}/`, {username, password});
  return response;
};