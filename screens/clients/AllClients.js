import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientsRequest } from "../../store/clients/actions";
import CSPOutput from "../../components/ClientsSalesPersonOutput/cspOutput";
function AllClients() {
  const dispatch = useDispatch();

  const clients = useSelector((state) => state.clientReducer.clients);


  useEffect(() => {
    dispatch(fetchClientsRequest());
  }, [dispatch]);
 

  return <CSPOutput navigateTo="clientDetails" data={clients} />;
}
export default AllClients;
