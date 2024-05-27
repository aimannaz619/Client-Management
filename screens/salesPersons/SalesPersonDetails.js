import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CSPDetails from "../../components/ClientsSalesPersonOutput/CSPDetails";
import { useEffect, useState } from "react";
import {
  fetchSalesPersonById,
  getMeetingsByIdsRequest,
} from "../../store/salesPersons/actions";
import MeetingsList from "../../components/Meetings/MeetingsList";
import moment from "moment";
import { formattedDate, isCurrentWeek } from "../../util/datTimeFormat";
function SalesPersonDetails({ route, navigation }) {
  const dispatch = useDispatch();
  const id = route.params?.id;
  const salePerson = useSelector(
    (state) => state.salesPersonReducer.salePerson
  );
  const meetings = useSelector(
    (state) => state.salesPersonReducer.meetingsById
  );

  const [meetingState, setMeetingsState] = useState([]);
  useEffect(() => {
    if (id) {
      dispatch(getMeetingsByIdsRequest(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(fetchSalesPersonById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {

   
    const currentWeekMeetings = meetings.filter(isCurrentWeek);

  
    setMeetingsState(currentWeekMeetings);
  }, [meetings]);

  function navigateToScheduleMeeting() {
    navigation.navigate("scheduleMeeting", {
      id,
    });
  }

  const headers = {
    clientName: "Name",
    date: "Date",
    time: "Time",
    Action: "Action",
  };

  return (
    <ScrollView style={styles.scrollViewStyle}>
      <CSPDetails
        name={salePerson?.salesPerson?.name}
        phoneNumber={salePerson?.salesPerson?.phone_number}
        email={salePerson?.salesPerson?.email}
        location={salePerson?.salesPerson?.location}
        imageUrl={salePerson?.salesPerson?.image}
        associatedPersons={salePerson?.associatedClients}
        pressHandler={navigateToScheduleMeeting}
        showButton={true}
        buttonText="Schedule Meeting"
        headers={headers}
        person="Clients"
      />
      <MeetingsList meetings={meetingState} headers={headers} />
    </ScrollView>
  );
}
export default SalesPersonDetails;

const styles = StyleSheet.create({
  scrollViewStyle: {
    marginBottom: 5,
  },
});
