import {FlatList} from "react-native";
import CSPItem from "./cspItem";

function CSPList({ navigateTo, data }) {
  function renderItems(itemsData) {
    // return <Text>{itemsData.item.description}</Text>;
    const item = itemsData.item;
    const itemsProps = {
      id: item.id,
      name: item.name,
      phoneNumber: item.phone_number,
      email: item.email,
      location: item.address,
      navigateTo: navigateTo,
    };
    return <CSPItem {...itemsProps} />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItems}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}

export default CSPList;
