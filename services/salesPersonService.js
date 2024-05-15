// salesPersonsService.js
import axios from 'axios'
import { API_URL_GET_ALL_SALES_PERSONS } from '../config/endPoints/salesPerson';


export const fetchSalesPersons = async () => {
  try {

    const response = await axios.get(API_URL_GET_ALL_SALES_PERSONS);

    return response.data;
  }
  catch (error) {
  
  }
  
};