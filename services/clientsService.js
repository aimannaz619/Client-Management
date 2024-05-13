import axios from "axios";

// clientsService.js
export const fetchClients = async () => {

  try {
    const response = require("../util/ClientsData.json");
   
    
    return response;
  } catch (error) {
    throw error;
  }
};
