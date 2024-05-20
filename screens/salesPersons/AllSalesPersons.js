import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSpsRequest } from "../../store/salesPersons/actions";
import CSPOutput from "../../components/ClientsSalesPersonOutput/cspOutput";
import { Text } from "react-native";

function AllSalesPersons() {
  const dispatch = useDispatch();
  const salesPerson = useSelector((state) => state.salesPersonReducer.sps);

  useEffect(() => {
    dispatch(fetchSpsRequest());
  }, [dispatch]);

  const headers = {
    item1: "Name",
    item2: "Phone Number",
    item3: "Email",
    item4: "Location",
    item5: "Action",
  };
  return (
    <CSPOutput
      navigateTo="salesPersonDetails"
      data={salesPerson}
      headers={headers}
    />
  );
}
export default AllSalesPersons;
