import React, { useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import CSPSummary from '../ClientsSalesPersonOutput/cspSummary';
import { getMeetingsByIdsRequest } from '../../store/salesPersons/actions';
import { formatTime, formattedTime } from '../../util/datTimeFormat';

function MeetingsList() {
  const dispatch = useDispatch();
  const route = useRoute();
  const { id } = route.params;

    const meetings = useSelector((state) => state.salesPersonReducer.meetingsById);

  useEffect(() => {
    if (id) {
      dispatch(getMeetingsByIdsRequest(id));
    }
  }, [id, dispatch]);
    
    // const limitedMeetings = meetings ? meetings.slice(0, 5) : [];

  const renderItems = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.clientName}</Text>
      <Text style={styles.itemText}>{item.date}</Text>
      <Text style={styles.itemText}>{formattedTime(item.time)}</Text>
      <Text style={styles.itemText}>{item.schedule || 'Meeting'}</Text>
    </View>
  );

  const headers = {
    clientName: 'Name',
    date: 'Date',
    time: 'Time',
    schedule: 'Schedule',
  };

  return (
    <View>
      <CSPSummary headers={headers} />
      <FlatList
        data={meetings}
        renderItem={renderItems}
        keyExtractor={(item) => item._id}  
        scrollEnabled={true}      
      />
    </View>
  );
}

export default MeetingsList;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    flex: 1,
    textAlign: 'center',
  },
});
