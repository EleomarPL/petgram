import axios from 'axios';
import { baseAPI } from '../../const/baseAPI';

const BASE_API = `${baseAPI}/user`;

export const createUser = async({ name, lastName, motherLastName, email, username, password }) => {
  let response = await axios.post(`${BASE_API}}/create-user`,
    {
      name, lastName, motherLastName, email, username, password
    });
  return response;
};