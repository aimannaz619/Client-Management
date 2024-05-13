import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../Constants/styles";

function CSPDetails({ name, email, phoneNumber, location }) {
  return (
    
      <View style={styles.rootContainer}>
        <View style={styles.innerContainer}>
          <View style = {styles.centerContainer}>
            <View style={styles.imageContainer}></View>
            <Text style={[styles.textItem]}>Natasha Shareef</Text>
          </View>
          <View>
            <View style={styles.textContainer}>
              <Text style={styles.textItem}>Email:</Text>
              <Text>{email}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textItem}>Phone Number:</Text>
              <Text>{phoneNumber}</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={[styles.textItem , styles.locationText]}>Location</Text>
          <View>{location}</View>
        </View>
      </View>
    
  );
}

export default CSPDetails;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 30,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  centerContainer: {
    justifyContent: "center",
    alignItems:"center"
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
    fontSize:18
  },
  textContainer: {
    flexDirection: "row",
  },

  
  locationText: {
    marginTop: 50,
    fontSize:18
  }
});
