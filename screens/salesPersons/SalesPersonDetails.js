import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import CSPDetails from "../../components/ClientsSalesPersonOutput/CSPDetails";
function SalesPersonDetails({ route }) {
  const id = route.params?.id;
  const salesPerson = useSelector((state) => state.salesPerson.sps);
  const fetchedSalesPerson = salesPerson.find((sp) => sp.id === id);
  return <CSPDetails
  name={fetchedSalesPerson.name}
  phoneNumber={fetchedSalesPerson.phone_number}
  email={fetchedSalesPerson.email}
  location={fetchedSalesPerson.address}
  imageUrl={fetchedSalesPerson.image}
/>;
}
export default SalesPersonDetails;
