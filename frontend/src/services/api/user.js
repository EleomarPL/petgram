import axios from 'axios';
import { baseAPI } from '../../const/baseApi';

export const createUser = async({ name, lastName, motherLastName, email, username, password }) => {
  let response = await axios.post(`${baseAPI}/create-user`,
    {
      name, lastName, motherLastName, email, username, password
    });
  return response;
};