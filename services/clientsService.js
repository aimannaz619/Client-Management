import axios from "axios";
import {
  API_URL_GET_ALL_CLIENTS,
  API_URL_GET_CLIENTS_BY_ID,
} from "../config/endPoints/client";

// clientsService.js
export const fetchClients = async () => {
  try {
    const response = await axios.get(API_URL_GET_ALL_CLIENTS);

    return response.data;
  } catch (error) {}
};

export const getClientsByIds = async (id) => {
  try {
    const response = await axios.get(`${API_URL_GET_CLIENTS_BY_ID}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
