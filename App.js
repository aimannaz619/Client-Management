import { StyleSheet, Text, View } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";
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
import SalesPersonDetails from "./screens/salesPersons/SalesPersonDetails";

import ScheduleMeetingsScreen from "./screens/salesPersons/ScheduleMeetings";

import TrackingScreen from "./screens/tracking/Tracking";
import Tracking from "./components/Tracking/Tracking";

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
        <Drawer.Screen
          name="tracking"
          component={Tracking}
          options={{
            title: "Track",
            drawerIcon: ({ size }) => (
              <IconButton name="bar-chart-sharp" color="black" size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <ToastProvider
        textStyle={{ fontSize: 18 }}
        offset={50} // offset for both top and bottom toasts
        offsetTop={30}
        offsetBottom={40}
        swipeEnabled={true}
      >
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
            <stack.Screen
              name="clientDetails"
              component={ClientDetailsScreen}
              options={{
                title: "Client's Info",
              }}
            />
            <stack.Screen
              name="salesPersonDetails"
              component={SalesPersonDetails}
              options={{
                title: "Sales Person's Info",
              }}
            />
            <stack.Screen
              name="map"
              component={Map}
              options={{
                title: "Map",
              }}
            />
            <stack.Screen
              name="scheduleMeeting"
              component={ScheduleMeetingsScreen}
              options={{
                title: "Schedule Meetings",
              }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
