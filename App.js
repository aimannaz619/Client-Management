import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllClients from './screens/clients/AllClients';
import ClientDetails from './screens/clients/ClientDetails';
import AllSalesPersons from './screens/salesPersons/AllSalesPersons';
import SalesPersonDetails from './screens/salesPersons/SalesPersonDetails';

export default function App() {
  return (
    <View style={styles.container}>
       <AllClients />
      <ClientDetails />
      <AllSalesPersons />
      <SalesPersonDetails/>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
