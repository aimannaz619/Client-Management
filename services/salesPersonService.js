// salesPersonsService.js
export const fetchSalesPersons = async () => {
    try {
        const response = await fetch('../../util/SalesPersonData.json');
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
