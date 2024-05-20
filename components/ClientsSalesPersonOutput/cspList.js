import { FlatList, StyleSheet, Text, View } from "react-native";
import CSPItem from "./cspItem";
import CSPSummary from "./cspSummary";

function CSPList({ navigateTo, data, headers }) {
  function renderItems(itemsData) {
    const item = itemsData.item;
    const itemsProps = {
      id: item._id,
      name: item.name,
      phoneNumber: item.phone_number,
      email: item.email,
      location: item.address,
      navigateTo: navigateTo,
    };
    return <CSPItem {...itemsProps} />;
  }

  function ListHeader() {
    return <CSPSummary headers={headers} />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItems}
      keyExtractor={(item) => item._id}
      ListHeaderComponent={ListHeader}
    ></FlatList>
  );
}

export default CSPList;

const styles = StyleSheet.create({
  headerFooterStyle: {
    width: "100%",
    height: 45,
    backgroundColor: "#606070",
  },
});
