import { StyleSheet, Text, View } from "react-native";
import AllClients from "./screens/clients/AllClients";
import ClientDetails from "./screens/clients/ClientDetails";
import AllSalesPersons from "./screens/salesPersons/AllSalesPersons";
import SalesPersonDetails from "./screens/salesPersons/SalesPersonDetails";
import { Provider } from "react-redux";
import store from "./store";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import IconButton from "./components/UI/IconButton";
import { GlobalStyles } from "./Constants/styles";

export default function App() {
  const Drawer = createDrawerNavigator();

  function DrawerNavigation() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.brightCyan,
          },
          sceneContainerStyle: {
            backgroundColor: GlobalStyles.colors.lightGreen,
          },
          headerTintColor: "white",
          drawerContentStyle: {
            backgroundColor: GlobalStyles.colors.brightCyan,
          },
          drawerActiveBackgroundColor: GlobalStyles.colors.darkCyan,
          drawerLabelStyle: { color: GlobalStyles.colors.white },
        }}
      >
        <Drawer.Screen
          name="clients"
          component={AllClients}
          options={{
            title: "Clients",
            headerRight: () => {
              return <IconButton size={24} color="white" />;
            },
          }}
        />
        <Drawer.Screen
          name="salesPerson"
          component={AllSalesPersons}
          options={{
            title: "Sales Person",
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
