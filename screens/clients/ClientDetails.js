
import CSPDetails from "../../components/ClientsSalesPersonOutput/CSPDetails";
import { useSelector } from "react-redux";
function ClientDetailsScreen({ route }) {
  const clients = useSelector((state) => state.client.clients);
  const id = route.params?.id;

  const fetchedClient = clients.find((client) => client.id === id);

  return (
    <CSPDetails
      name={fetchedClient.name}
      phoneNumber={fetchedClient.phone_number}
      email={fetchedClient.email}
      location={fetchedClient.location}
      imageUrl={fetchedClient.image}
    />
  );
}
export default ClientDetailsScreen;
