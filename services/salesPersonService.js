// salesPersonsService.js
export const fetchSalesPersons = async () => {
    try {
        const response = require('../util/SalesPersonData.json');
        console.log("response")
        return response;
    } catch (error) {
        throw error;
    }
};
