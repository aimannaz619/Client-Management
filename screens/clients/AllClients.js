import { View, Text } from "react-native";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { fetchClientsRequest } from "../../store/clients/actions";
import CSPOutput from "../../components/ClientsSalesPersonOutput/cspOutput";
function AllClients() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchClientsRequest());
  }, [dispatch]);

  return <CSPOutput />;
}
export default AllClients;
