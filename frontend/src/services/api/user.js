import axios from 'axios';
import { baseAPI } from '../../const/baseAPI';

export const createUser = async({ name, lastName, motherLastName, email, username, password }) => {
  let response = await axios.post(`${baseAPI}/user/create-user`,
    {
      name, lastName, motherLastName, email, username, password
    });
  return response;
};