import { View, Text } from "react-native";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchClientsRequest } from "../../store/clients/actions";
import CSPOutput from "../../components/ClientsSalesPersonOutput/cspOutput";
function AllClients() {
  const dispatch = useDispatch();

  const client = useSelector((state) => state.client)
  useEffect(() => {
      dispatch(fetchClientsRequest());
  }, [dispatch]);
  console.log(client.clients,"client")


  return <CSPOutput />;
}
export default AllClients;
