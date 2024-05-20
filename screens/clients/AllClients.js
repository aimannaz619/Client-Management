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

  const headers = {
    item1: "Name",
    item2: "Phone Number",
    item3: "Email",
    item4: "Location",
    item5: "Action",
  };

  // const itemsProps = {
  //   id: item._id,
  //   name: item.name,
  //   phoneNumber: item.phone_number,
  //   email: item.email,
  //   location: item.address,
  //   navigateTo: navigateTo,
  // };

  const requiredProps = ["name", "phone_number", "email"];
  return (
    <CSPOutput
      navigateTo="clientDetails"
      data={clients}
      headers={headers}
      requiredProps={requiredProps}
    />
  );
}
export default AllClients;
