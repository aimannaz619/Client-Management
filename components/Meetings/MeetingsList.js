import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import CSPSummary from "../ClientsSalesPersonOutput/cspSummary";
import { getMeetingsByIdsRequest } from "../../store/salesPersons/actions";
import { formattedTime } from "../../util/datTimeFormat";
import PrimaryButton from "../UI/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../Constants/styles";

function MeetingsList({ headers, meetings }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [expanded, setExpanded] = useState(false);
  function toggleExpand() {
    setExpanded(!expanded);
  }

  function handlePress() {
    toggleExpand();
  }

  function navigateHandler(id, date, time, address) {
    console.log(address,"Address")
    navigation.navigate("clientDetails", {
      id: id,
      date: date,
      time: time,
      address: address
    });
  }

  function header() {
    return <CSPSummary headers={headers} />;
  }
  console.log(meetings,"Meetings")

  return (
    <ScrollView>
      {header()}
      {meetings?.map((item) => (
        <Pressable key={item._id} onPress={handlePress}>
          <View style={styles.itemContainer}>
            <View style={styles.itemText}>
              <Text numberOfLines={expanded ? null : 1} ellipsizeMode="tail">
                {item.clientName}
              </Text>
            </View>
            <View style={styles.itemText}>
              <Text numberOfLines={expanded ? null : 1} ellipsizeMode="tail">
                {item.date}
              </Text>
            </View>
            <View style={styles.itemText}>
              <Text numberOfLines={expanded ? null : 1} ellipsizeMode="tail">
                {formattedTime(item.time)}
              </Text>
            </View>
            <View style={styles.itemText}>
              <PrimaryButton
                pressHandler={() =>
                  navigateHandler(item.clientId, item.date, item.time, item.address)
                }
              >
                View
              </PrimaryButton>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

export default MeetingsList;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: GlobalStyles.colors.lightGreen,
    marginVertical: 4,
    // elevation: 4,
    borderRadius: 8,
    marginHorizontal: 14,
    borderBottomWidth: 2,
  },
  itemText: {
    flex: 1,
    padding: 10,
  },
});
