import axios from "axios";
import {
  API_URL_GET_SALE_PERSON_BY_ID,
  API_URL_GET_ALL_SALES_PERSONS,
  API_URL_ADD_MEETING,
} from "../config/endPoints/salesPerson";

// salesPersonsService.js

export const fetchSalesPersons = async () => {
  try {
    const response = await axios.get(API_URL_GET_ALL_SALES_PERSONS);

    return response.data;
  } catch (error) {}
};

export const fetchSalesPersonByIdService = async (id) => {
  try {
    const response = await axios.get(`${API_URL_GET_SALE_PERSON_BY_ID}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const saveMeetingService = async (payload) => {
  
  try {
    const response = await axios.post(API_URL_ADD_MEETING, 
      payload,
    );

  
    return response;
  } catch (error) {
    
    throw error;
  }
};
