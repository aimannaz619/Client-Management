import { FlatList, Text } from "react-native";
import CSPItem from "./cspItem";

function CSPList({ navigateTo }) {
  function renderItems(itemsData) {
    // return <Text>{itemsData.item.description}</Text>;
    const item = itemsData.item;
    const itemsProps = {
      id: item.id,
      name: item.name,
      phoneNumber: item.phoneNumber,
      email: item.email,
      location: item.location,
      navigateTo: navigateTo,
    };
    return <CSPItem {...itemsProps} />;
  }

  const clients = [
    {
      id: "C1",
      name: "Aiman",
      phoneNumber: "222222",
      email: "aiman@gmail.com",
      location: "multan",
    },

    {
      id: "C2",
      name: "Natasha",
      phoneNumber: "111111",
      email: "natasha@gmail.com",
      location: "multan",
    },
    {
      id: "C3",
      name: "khushar",
      phoneNumber: "222222",
      email: "aiman@gmail.com",
      location: "multan",
    },
    {
      id: "C4",
      name: "Aiman",
      phoneNumber: "222222",
      email: "aiman@gmail.com",
      location: "multan",
    },
  ];
  return (
    <FlatList
      data={clients}
      renderItem={renderItems}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}

export default CSPList;
