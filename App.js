
import { StyleSheet, Text, View } from "react-native";
import AllClients from "./screens/clients/AllClients";
import ClientDetails from "./screens/clients/ClientDetails";
import AllSalesPersons from "./screens/salesPersons/AllSalesPersons";
import SalesPersonDetails from "./screens/salesPersons/SalesPersonDetails";
import { Provider } from "react-redux";
import store from "./store";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  const Drawer = createDrawerNavigator()
 
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AllClients />
        <ClientDetails />
        <AllSalesPersons />
        <SalesPersonDetails />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
