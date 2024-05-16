import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CSPDetails from "../../components/ClientsSalesPersonOutput/CSPDetails";
import { useEffect } from "react";
import { fetchSalesPersonById } from "../../store/salesPersons/actions";
function SalesPersonDetails({ route }) {
  const dispatch = useDispatch();
  const id = route.params?.id;
  const salePerson = useSelector((state) => state.salesPerson.salePerson);

  useEffect(() => {
    if (id) {
   
      dispatch(fetchSalesPersonById(id));
    }
  }, [id]);

  return (
    <CSPDetails
      name={salePerson?.salesPerson?.name}
      phoneNumber={salePerson?.salesPerson?.phone_number}
      email={salePerson?.salesPerson?.email}
      location={salePerson?.salesPerson?.location}
      imageUrl={salePerson?.salesPerson?.image}
      associatedClients={salePerson?.associatedClients}
    />
  );
}
export default SalesPersonDetails;
