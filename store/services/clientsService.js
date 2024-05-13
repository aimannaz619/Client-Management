// clientsService.js
export const fetchClients = async () => {
    try {
        const response = await fetch('../../util/ClientsData.json');
        console.log(response,"response in service")
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
