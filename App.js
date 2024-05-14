import { StyleSheet, Text, View } from "react-native";
import AllClients from "./screens/clients/AllClients";
import AllSalesPersons from "./screens/salesPersons/AllSalesPersons";
import { Provider } from "react-redux";
import store from "./store";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import IconButton from "./components/UI/IconButton";
import { GlobalStyles } from "./Constants/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClientDetailsScreen from "./screens/clients/ClientDetails";
import Map from "./screens/Map";

export default function App() {
  const Drawer = createDrawerNavigator();
  const stack = createNativeStackNavigator();
  function DrawerNavigation() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.darkCyan,
          },
          sceneContainerStyle: {
            backgroundColor: GlobalStyles.colors.brightCyan,
          },

          drawerContentStyle: {
            backgroundColor: GlobalStyles.colors.brightCyan,
          },
          drawerActiveBackgroundColor: GlobalStyles.colors.darkCyan,
        }}
      >
        <Drawer.Screen
          name="clients"
          component={AllClients}
          options={{
            title: "Clients",
            headerRight: () => {
              return <IconButton name="add" size={24} color="black" />;
            },
            drawerIcon: ({ size }) => (
              <IconButton
                name="person-circle-outline"
                color="black"
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="salesPerson"
          component={AllSalesPersons}
          options={{
            title: "Sales Person",
            drawerIcon: ({ size }) => (
              <IconButton
                name="person-circle-outline"
                color="black"
                size={size}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.darkCyan,
            },
            contentStyle: {
              backgroundColor: GlobalStyles.colors.brightCyan,
            },
          }}
        >
          <stack.Screen
            name="ClientSalePersons"
            component={DrawerNavigation}
            options={{
              // title: "All Categories",
              headerShown: false,
            }}
          />
          <stack.Screen name="clientDetails" component={ClientDetailsScreen} />
          <stack.Screen
            name="map"
            component={Map}
            options={{
              title: "Map",
            }}
          />
        </stack.Navigator>

        {/* <DrawerNavigation /> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
