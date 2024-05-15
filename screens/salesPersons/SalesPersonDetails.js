import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CSPDetails from "../../components/ClientsSalesPersonOutput/CSPDetails";
import { useEffect } from "react";
import { fetchSalesPersonById } from "../../store/salesPersons/actions";
function SalesPersonDetails({ route }) {
  const dispatch = useDispatch();
  const id = route.params?.id;
  const salesPerson = useSelector((state) => state.salesPerson.sps);
  const fetchedSalesPerson = salesPerson.find((sp) => sp.id === id);

  // useEffect(() => {
  //   if (id) {
  //     console.log("dispatch");
  //     dispatch(fetchSalesPersonById(id));
  //   }
  // }, [id]);

  return (
    <CSPDetails
      name={fetchedSalesPerson?.name}
      phoneNumber={fetchedSalesPerson?.phone_number}
      email={fetchedSalesPerson?.email}
      location={fetchedSalesPerson?.location}
      imageUrl={fetchedSalesPerson?.image}
    />
  );
}
export default SalesPersonDetails;
