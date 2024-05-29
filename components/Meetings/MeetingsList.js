import React, {  useState } from "react";
import {
 
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import CSPSummary from "../ClientsSalesPersonOutput/cspSummary";
import { formattedDate, formattedTime } from "../../util/datTimeFormat";
import PrimaryButton from "../UI/PrimaryButton";

function MeetingsList({ headers, meetings }) {
 
  const navigation = useNavigation();
  
 
  const [expanded, setExpanded] = useState(false);
  function toggleExpand() {
    setExpanded(!expanded);
  }

  function handlePress() {
    toggleExpand();
  }

  function navigateHandler(id, date, time, address) {
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
              {item.date && formattedDate(item.date)}
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
