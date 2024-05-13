import { View, Text } from "react-native";
import CSPDetails from "../../components/ClientsSalesPersonOutput/CSPDetails";
function SalesPersonDetails({ route }) {
  const id = route.params?.id;
  return <CSPDetails />;
}
export default SalesPersonDetails;
