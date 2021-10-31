import axios from 'axios';
import { baseAPI } from '../../const/baseAPI';

export const login = async({ username, password }) => {
  let response = await axios.post(`${baseAPI}/login`, {username, password});
  return response;
};