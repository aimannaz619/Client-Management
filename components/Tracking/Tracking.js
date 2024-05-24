import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSalesPersonById,
  fetchSpsRequest,
  getMeetingsByIdsRequest,
} from "../../store/salesPersons/actions";
import DropDownPicker from "react-native-dropdown-picker";
import { GlobalStyles } from "../../Constants/styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import IconButton from "../UI/IconButton";
import PrimaryButton from "../UI/PrimaryButton";
import { formattedDate } from "../../util/datTimeFormat";

import { useNavigationState } from "@react-navigation/native";

import MapView, { Marker, Polyline } from "react-native-maps";

function Tracking() {
  const dispatch = useDispatch();
  const currentRoute = useNavigationState(
    (state) => state.routes[state.index].name
  );
  const salesPerson = useSelector((state) => state.salesPersonReducer.sps);

  const meetings = useSelector(
    (state) => state.salesPersonReducer.meetingsById
  );
  const salePerson = useSelector(
    (state) => state.salesPersonReducer.salePerson
  );


  const [selectedItem, setSelectedItem] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [coords, setCoords] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [filteredMeeting, setFilteredMeeting] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const selectedDateTime = formattedDate(selectedDate)

  useEffect(() => {
    dispatch(fetchSpsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (selectedItem) {
      dispatch(fetchSalesPersonById(selectedItem));
      
    }
  }, [dispatch, selectedItem]);


  useEffect(() => {
    setSelectedItem(null);
    setSelectedDate(null);
    setFilteredMeeting([]);
  }, [currentRoute === "tracking"]);
  useEffect(() => {
    if (salesPerson) {
      setItems(salesPerson);
    }
  }, [salesPerson]);

  const showDatePicker = () => {
    setDatePickerVisibility({
      date: true,
    });
  };

  const hideDatePicker = () => {
    setDatePickerVisibility({
      date: false,
    });
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  useEffect(() => {
    if (selectedItem) {
      dispatch(getMeetingsByIdsRequest(selectedItem));
    }
  }, [selectedItem, dispatch]);
  

  function trackMeetingsHandler() {
    if (meetings) {
      const filteredMeetings = meetings?.filter(
        (item) => item.date === formattedDate(selectedDate)
      );
  
      const filteredLocations = filteredMeetings?.map((item) => item.location);
  
      setFilteredMeeting(filteredLocations);
      
      if (filteredLocations.length === 0) {
        setShowMessage(true);
      } else {
        setShowMessage(false);
      }
      
    } else {
      setShowMessage(true);
    }
  }

  useEffect(() => {
    if (filteredMeeting.length > 0) {
      const mappedCoords = filteredMeeting?.map((meeting) => ({
        coordinates: {
          latitude: meeting?.latitude,
          longitude: meeting?.longitude,
        },
        title: "meeting",
      }));
      setCoords(mappedCoords);
      const coordinates = mappedCoords?.map((marker) => marker?.coordinates);
      setCoordinates(coordinates);
    }
  }, [filteredMeeting]);

  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            {/* <SearchableDropdown
              textInputProps={{
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                  padding: 12,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 5,
                },
                onTextChange: (text) => alert(text),
              }}
              onItemSelect={setItems}
              items={items}
              value={selectedItem}
              containerStyle={{ padding: 5 }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: "#ddd",
                borderColor: "#bbb",
                borderWidth: 1,
                borderRadius: 5,
              }}
              schema={{
                label: "name",
                value: "_id",
              }}
            /> */}
            <Text style={styles.textStyle}>Associated Sales Persons :</Text>
            <DropDownPicker
              style={styles.dropDownStyle}
              open={open}
              schema={{
                label: "name",
                value: "_id",
              }}
              value={selectedItem}
              items={items}
              setOpen={setOpen}
              setValue={setSelectedItem}
              setItems={setItems}
              placeholder="Select a sale person"
              placeholderStyle={{
                fontSize: 15,
              }}
              onChangeValue={() => setShowMessage(false)}
            />

            <Pressable onPress={showDatePicker}>
              <View style={styles.dateTimeStyle}>
                <IconButton
                  name="calendar-number-outline"
                  size={25}
                  onPress={showDatePicker}
                  style={styles.buttonStyle}
                />

                <Text style={styles.innerText}>
                  {selectedDate ? formattedDate(selectedDate) : "Select Date"}
                </Text>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible.date}
                  mode="date"
                  onConfirm={handleDateConfirm}
                  onCancel={hideDatePicker}
                  maximumDate={new Date()}
                />
              </View>
            </Pressable>

            <View style={styles.saveButtonStyle}>
              <PrimaryButton pressHandler={trackMeetingsHandler}>
                Track
              </PrimaryButton>
            </View>
          </View>
        </View>
        {filteredMeeting.length > 0 ? (
          <View>
            <View>
              <Text style={styles.meetingText}>Meeting Locations</Text>
            </View>
            <MapView style={styles.map} zoomEnabled={true}>
              {coords?.map((marker, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: marker?.coordinates?.latitude,
                    longitude: marker?.coordinates?.longitude,
                  }}
                >
                  <View style={styles.marker}>
                    <View style={styles.dot} />
                    <Text>`Meeting {index + 1}`</Text>
                  </View>
                </Marker>
              ))}
              <Polyline
                coordinates={coordinates}
                strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                strokeWidth={6}
              />
            </MapView>
          </View>
        ) : (
          <View style={styles.textView}>
          <Text style={styles.text}>
            {(selectedDate && showMessage) && `${salePerson.salesPerson.name} doesn't have any meetings scheduled on ${selectedDateTime}`}
          </Text>
        </View>
        
        )}
      </View>
    </>
  );
}

export default Tracking;

const styles = StyleSheet.create({
  map: {
    // flex: 1,
    width: "100%",
    height: "100%",
    margin: 6,
    borderWidth: 2,
    borderColor: "black",
  },
  meetingText: {
    textAlign: "center",
    color: GlobalStyles.colors.bottleGreen,
    fontSize: 25,
    fontWeight: "bold",
  },
  textView: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rootContainer: {
    flex: 1,
    // margin:8,
    justifyContent: "space-between",
  },

  outerContainer: {
    margin: 15,
  },
  innerContainer: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.lightGreen,
  },
  dropDownStyle: {
    marginVertical: 8,
  },
  textStyle: {
    fontSize: 17,
  },
  buttonStyle: {
    marginHorizontal: 0,
    padding: 0,
  },
  dateTimeStyle: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 8,
    padding: 10,
    alignItems: "center",
  },
  innerText: {
    fontSize: 15,
    marginLeft: 5,
  },
  saveButtonStyle: {
    // width: 200,
    // marginTop: 20,
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    backgroundColor: "red",
  },
  marker: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 1,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: "red", // Customize dot color here
    borderRadius: 5,
    marginRight: 10,
  },
});
