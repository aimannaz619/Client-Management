// salesPersonsService.js
export const fetchSalesPersons = async () => {
  try {
    const response = require("../util/SalesPersonData.json");

    return response;
  } catch (error) {
    throw error;
  }
};
