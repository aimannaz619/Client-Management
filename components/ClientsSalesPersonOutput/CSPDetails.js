import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../Constants/styles";
import LocationPicker from "./LocationPicker";
import PrimaryButton from "../UI/PrimaryButton";

import { formattedDate, formattedTime } from "../../util/datTimeFormat";

function CSPDetails({
  name,
  email,
  phoneNumber,
  location,
  pressHandler,
  showButton,
  buttonText,
  person,
  date,
  time,
  address,
  associatedPersons,
}) {
  const clients = associatedPersons?.map((client) => client.name);
  const clientNames = clients?.join(", ");

  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.centerContainer}>
          <View style={[styles.imageContainer]}>
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
          <View style={styles.textContainer}>
            <Text style={styles.textItem}>Associated {person}:</Text>
            <Text>{clientNames}</Text>
          </View>
          {date && (
            <View style={styles.textContainer}>
              <Text style={styles.textItem}>Meeting Date: </Text>
              <Text>{formattedDate(date)}</Text>
            </View>
          )}
          {time && (
            <View style={styles.textContainer}>
              <Text style={styles.textItem}>Meeting Time: </Text>
              <Text>{formattedTime(time)}</Text>
            </View>
          )}
          {address && (
            <View style={styles.textContainer}>
              <Text style={styles.textItem}>Meeting Address: </Text>
              <Text>{address}</Text>
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
    width: 200,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
