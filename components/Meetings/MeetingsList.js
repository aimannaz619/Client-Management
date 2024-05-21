import React, { useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import CSPSummary from "../ClientsSalesPersonOutput/cspSummary";
import { getMeetingsByIdsRequest } from "../../store/salesPersons/actions";
import { formattedTime } from "../../util/datTimeFormat";
import PrimaryButton from "../UI/PrimaryButton";
import { Ionicons } from '@expo/vector-icons';543wx

function MeetingsList({ headers }) {
  const dispatch = useDispatch();
  const navigation = useNavigation()
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

 

  function navigateHandler(id) {
    navigation.navigate("clientDetails", {
      id: id,
    });
  }

  const renderItems = ({ item }) => (
    (
      <View style={styles.itemContainer}>
        <View style={styles.itemText}>
          <Text>{item.clientName}</Text>
        </View>
        <View style={styles.itemText}>
          <Text>{item.date}</Text>
        </View>
        <View style={styles.itemText}>
          <Text>{formattedTime(item.time)}</Text>
        </View>
        <View style={styles.itemIcon}>
                  <Ionicons name="eye" size={24} color="black"
                    onPress={() => navigateHandler(item.clientId)} 
 />
      </View>
      </View>
    )

  );

  function header() {
    return <CSPSummary headers={headers} />;
  }

  return (
    <View>
      <FlatList
        data={meetings}
        renderItem={renderItems}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={header}
      />
    </View>
  );
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
    itemIcon: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
