import axios from "axios";
import { API_URL_GET_SALE_PERSON_BY_ID } from "../config/endPoints/salesPerson";

// salesPersonsService.js
export const fetchSalesPersons = async () => {
  try {
    const response = require("../util/SalesPersonData.json");

    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchSalesPersonByIdService = async () => {
  try {
    const response = await axios.get(API_URL_GET_SALE_PERSON_BY_ID);
  } catch (error) {}
};
