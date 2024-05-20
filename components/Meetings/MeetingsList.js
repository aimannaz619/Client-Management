import React, { useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import CSPSummary from "../ClientsSalesPersonOutput/cspSummary";
import { getMeetingsByIdsRequest } from "../../store/salesPersons/actions";
import { formatTime } from "../../util/datTimeFormat";
import moment from "moment";
import CSPOutput from "../ClientsSalesPersonOutput/cspOutput";

function MeetingsList() {
  const dispatch = useDispatch();
  const route = useRoute();
  const { id } = route.params;

  const meetings = useSelector(
    (state) => state.salesPersonReducer.meetingsById
  );

  useEffect(() => {
    if (id) {
      dispatch(getMeetingsByIdsRequest(id));
    }
  }, [id, dispatch]);

  //     const startOfWeek = moment().startOf('isoWeek');
  //     console.log(startOfWeek,"startOfWeek")
  //   const endOfWeek = moment().endOf('isoWeek');

  //   const currentWeekMeetings = meetings
  //     .filter(meeting => {
  //         const meetingDate = moment(meeting.date);
  //       return meetingDate.isBetween(startOfWeek, endOfWeek, 'day', '[]');
  //     })
  //         .slice(0, 5); // Limit to 5 meetings

  //     console.log(currentWeekMeetings,"currentWeekMeetings")

  const renderItems = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.clientName}</Text>
      <Text style={styles.itemText}>{item.date}</Text>
      <Text style={styles.itemText}>{formatTime(item.time)}</Text>
      <Text style={styles.itemText}>{item.schedule || "Meeting"}</Text>
    </View>
  );

  const headers = {
    clientName: "Name",
    date: "Date",
    time: "Time",
    schedule: "Schedule",
  };

  return <CSPOutput headers={headers} />;
}

export default MeetingsList;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    flex: 1,
    textAlign: "center",
  },
});
