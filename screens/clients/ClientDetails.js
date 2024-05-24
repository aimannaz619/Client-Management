import { useEffect } from "react";
import CSPDetails from "../../components/ClientsSalesPersonOutput/CSPDetails";
import { useDispatch, useSelector } from "react-redux";
import { getClientsByIdsRequest } from "../../store/clients/actions";
import { ScrollView, StyleSheet } from "react-native";
function ClientDetailsScreen({ route }) {
  const dispatch = useDispatch();
  // const clients = useSelector((state) => state.client.clients);
  const clientsById = useSelector((state) => state.clientReducer.clientById);
  const id = route.params?.id;
  const date = route.params?.date;
  const time = route.params?.time;
  const address = route.params?.address

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
    <ScrollView style={styles.scrollViewStyle}>
      <CSPDetails
        name={clientsById?.client?.name}
        phoneNumber={clientsById?.client?.phone_number}
        email={clientsById?.client?.email}
        location={clientsById?.client?.location}
        imageUrl={clientsById?.client?.image}
        headers={headers}
        associatedPersons={clientsById?.associatedSalesPersons}
        person="Sales Persons"
        date={date}
        time={time}
        address={address}
      />
    </ScrollView>
  );
}
export default ClientDetailsScreen;

const styles = StyleSheet.create({
  scrollViewStyle: {
    marginBottom: 5,
  },
});
