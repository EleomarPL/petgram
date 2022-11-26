import axios from 'axios';
import { BASE_API as baseAPI } from './BASE_API';

const BASE_API = `${baseAPI}/user`;

export const createUser = async({ name, lastName, motherLastName, email, username, password }) => {
  let response = await axios.post(`${BASE_API}/create-user`,
    {
      name, lastName, motherLastName, email, username, password
    });
  return response;
};