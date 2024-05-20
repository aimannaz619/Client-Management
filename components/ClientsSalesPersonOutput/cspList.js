import { FlatList, StyleSheet, Text, View } from "react-native";
import CSPItem from "./cspItem";
import CSPSummary from "./cspSummary";

function CSPList({ navigateTo, data, headers, items, requiredProps }) {
  function renderItems(itemsData) {
    const itemsProps = itemsData.item;
    const id = itemsData.item.id;
    console.log(requiredProps, "requiredProps");
    const filteredProps = requiredProps?.reduce((acc, prop) => {
      if (itemsProps[prop]) {
        acc[prop] = itemsProps[prop];
      }
      return acc;
    }, {});
    

    console.log(filteredProps, "filtered props");
    console.log(itemsProps, "items props");
    return <CSPItem items={filteredProps} id={id} navigateTo={navigateTo}/>;
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
