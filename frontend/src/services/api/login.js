import axios from 'axios';
import { BASE_API as baseAPI } from './BASE_API';

const BASE_API = `${baseAPI}/login`;

export const login = async({ username, password }) => {
  let response = await axios.post(`${BASE_API}/`, {username, password});
  return response;
};