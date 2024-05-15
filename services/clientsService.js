import axios from "axios";
import { API_URL_GET_ALL_CLIENTS } from "../config/endPoints/client";

// clientsService.js
export const fetchClients = async () => {
  try {

    console.log("why")
    const response = await axios.get(API_URL_GET_ALL_CLIENTS);

    return response.data;
  }
  catch (error) {
    console.log(error, "error")
  }
  
};
