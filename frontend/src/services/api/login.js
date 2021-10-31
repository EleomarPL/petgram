import axios from 'axios';
import { baseAPI } from '../../const/baseApi';

export const login = async({ username, password }) => {
  let response = await axios.post(`${baseAPI}/login'`, {username, password});
  return response;
};