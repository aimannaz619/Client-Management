import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../Constants/styles";
import LocationPicker from "./LocationPicker";
import PrimaryButton from "../UI/PrimaryButton";
import CSPSummary from "./cspSummary";
import MeetingsList from "../Meetings/MeetingsList";
import SalesPersonDetails from "../../screens/salesPersons/SalesPersonDetails";
import { useNavigationState } from '@react-navigation/native';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { fetchSalesPersonById } from "../../store/salesPersons/actions";
import { useSelector } from "react-redux";

function CSPDetails({
  name,
  email,
  phoneNumber,
  location,
  pressHandler,
  showButton,
  buttonText,
  person,
  associatedPersons
})
{

  const salePerson = useSelector(
    (state) => state.salesPersonReducer.salePerson
  );

  const dispatch = useDispatch();
  const route = useRoute()
  const {id} = route.params
  useEffect(() => {
    if (id) {
      console.log("Dis")
      dispatch(fetchSalesPersonById(id));
    }
  }, [id]);
  const clients = associatedPersons && associatedPersons?.map(client => client.name);
  console.log(associatedPersons,"associated clients")
  const clientNames = clients?.join(', ');
  const currentRoute = useNavigationState(state => state.routes[state.index].name);
  console.log(id, "iD")
  console.log(salePerson,"sales")
  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.centerContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://www.agilitypr.com/wp-content/uploads/2020/08/client-1.jpg",
              }}
              style={styles.image}
            />
          </View>
          <Text style={[styles.textItem]}>{name}</Text>
        </View>
        <View style={styles.textView}>
          <View style={styles.textContainer}>
            <Text style={styles.textItem}>Email:</Text>
            <Text>{email}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textItem}>Phone Number:</Text>
            <Text>{phoneNumber}</Text>
          </View>
          {currentRoute === 'salesPersonDetails' ? (
          <View style={styles.textContainer}>
            <Text style={styles.textItem}>Associated Clients:</Text>
            <Text>{clientNames}</Text>
          </View>
        
      ) : (
        <View style={styles.textContainer}>
                <Text style={styles.textItem}>Associated Sales Person:</Text>
                <Text> Rois </Text>
        </View>
      )}
          {showButton && (
            <View style={styles.buttonStyle}>
              <PrimaryButton pressHandler={pressHandler}>
                {buttonText}
              </PrimaryButton>
            </View>
          )}
        </View>
      </View>
      <View>
        <Text style={[styles.textItem, styles.locationText]}>Location</Text>
        <LocationPicker location={location} />
      </View>
    </View>
  );
}

export default CSPDetails;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 30,
  },
  textView: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  centerContainer: {
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: 130,
    height: 130,
    borderColor: GlobalStyles.colors.darkCyan,
    borderRadius: 130,
    overflow: "hidden",
    borderWidth: 3,
  },
  textItem: {
    fontSize: 14,
    fontWeight: "bold",
  },
  nameText: {
    marginLeft: 20,
    fontSize: 18,
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  locationText: {
    marginTop: 50,
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonStyle: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
