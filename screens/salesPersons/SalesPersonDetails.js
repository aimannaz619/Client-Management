import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CSPDetails from "../../components/ClientsSalesPersonOutput/CSPDetails";
import { useEffect } from "react";
import { fetchSalesPersonById } from "../../store/salesPersons/actions";
import MeetingsList from "../../components/Meetings/MeetingsList";
function SalesPersonDetails({ route, navigation }) {
  const dispatch = useDispatch();
  const id = route.params?.id;
  const salePerson = useSelector(
    (state) => state.salesPersonReducer.salePerson
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchSalesPersonById(id));
    }
  }, [id]);

  function navigateToScheduleMeeting() {
    navigation.navigate("scheduleMeeting", {
      id,
    });
  }

  return (
    <View>
      <CSPDetails
        name={salePerson?.salesPerson?.name}
        phoneNumber={salePerson?.salesPerson?.phone_number}
        email={salePerson?.salesPerson?.email}
        location={salePerson?.salesPerson?.location}
        imageUrl={salePerson?.salesPerson?.image}
        associatedClients={salePerson?.associatedClients}
        pressHandler={navigateToScheduleMeeting}
        showButton={true}
        buttonText="Schedule Meeting"
        meetingsList={"ABC"}
      />
      <MeetingsList />
    </View>
  );
}
export default SalesPersonDetails;
