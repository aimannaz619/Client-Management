import {FlatList} from "react-native";
import CSPItem from "./cspItem";

function CSPList({ navigateTo, data }) {
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

 

  return (
    <FlatList
      data={data}
      renderItem={renderItems}
      keyExtractor={(item) => item._id}
    ></FlatList>
  );
}

export default CSPList;
