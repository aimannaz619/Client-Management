import { useEffect } from "react";
import CSPDetails from "../../components/ClientsSalesPersonOutput/CSPDetails";
import { useDispatch, useSelector } from "react-redux";
import { getClientsByIdsRequest } from "../../store/clients/actions";
function ClientDetailsScreen({ route }) {
  const dispatch = useDispatch();
  // const clients = useSelector((state) => state.client.clients);
  const clientsById = useSelector((state) => state.clientReducer.clientById);
  const id = route.params?.id;


  useEffect(() => {
    if (id) {
      dispatch(getClientsByIdsRequest(id));
    }
  }, [id]);
 
  const headers = {
    salePersonName: "Name",
    date: "Date",
    time: "Time",
    schedule: "Schedule",
  };
  return (
    <CSPDetails
      name={clientsById?.name}
      phoneNumber={clientsById?.phone_number}
      email={clientsById?.email}
      location={clientsById?.location}
      imageUrl={clientsById?.image}
      headers={headers}
      person= "Sales Persons"
    />
  );
}
export default ClientDetailsScreen;
