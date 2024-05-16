import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CSPDetails from "../../components/ClientsSalesPersonOutput/CSPDetails";
import { useEffect } from "react";
import { fetchSalesPersonById } from "../../store/salesPersons/actions";
function SalesPersonDetails({ route, navigation }) {
  const dispatch = useDispatch();
  const id = route.params?.id;
  const salesPerson = useSelector((state) => state.salesPerson.sps);
  const salePerson = useSelector((state) => state.salesPerson.salePerson);

  useEffect(() => {
    if (id) {
      dispatch(fetchSalesPersonById(id));
    }
  }, [id]);

  function navigateToScheduleMeeting() {
    navigation.navigate("scheduleMeeting");
  }

  return (
    <CSPDetails
      name={salePerson?.name}
      phoneNumber={salePerson?.phone_number}
      email={salePerson?.email}
      location={salePerson?.location}
      imageUrl={salePerson?.image}
      pressHandler={navigateToScheduleMeeting}
      showButton={true}
      buttonText="Schedule Meeting"
    />
  );
}
export default SalesPersonDetails;
