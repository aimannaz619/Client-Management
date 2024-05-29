import { useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useToast } from "react-native-toast-notifications";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../../Constants/styles";
import PrimaryButton from "../UI/PrimaryButton";
import {
  formattedDate,
  formattedTime,
  isCurrentWeek,
  maxDate,
  timeFormate2,
} from "../../util/datTimeFormat";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSalesPersonById,
  getMeetingsByIdsRequest,
  saveMeetingAction,
} from "../../store/salesPersons/actions";
import { useNavigation, useRoute } from "@react-navigation/native";

function ScheduleMeetings() {
  const route = useRoute();
  const { id } = route.params;

  //HOOKS
  const dispatch = useDispatch();
  const toast = useToast();
  const navigation = useNavigation();

  //GET DATA FROM REDUCERS

  const salePerson = useSelector(
    (state) => state.salesPersonReducer.salePerson
  );
  const meetings = useSelector(
    (state) => state.salesPersonReducer.meetingsById
  );

  //States
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [exceededLimit, setExceededLimit] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState({
    date: false,
    time: false,
  });

  const [selectedDateTime, setSelectedDateTime] = useState({
    date: null,
    time: null,
  });

  const [items, setItems] = useState([]);

  //Validation

  // const maxDate = new Date();
  // maxDate.setDate(maxDate.getDate() + 7);

  //useEffects

  useEffect(() => {
    const currentWeekMeetings = meetings.filter(isCurrentWeek);
    if (currentWeekMeetings?.length >= 5) {
      setExceededLimit(true);
    }
  }, [meetings]);
  useEffect(() => {
    if (salePerson.associatedClients) {
      setItems(salePerson.associatedClients);
    }
  }, [salePerson.associatedClients]);

  //Functions

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

  const showTimePicker = () => {
    setDatePickerVisibility({
      time: true,
    });
  };

  const hideTimePicker = () => {
    setDatePickerVisibility({
      time: false,
    });
  };

  const handleDateConfirm = (date) => {
    setSelectedDateTime({
      ...selectedDateTime,
      date: date,
    });
    hideDatePicker();
  };

  const handleTimeConfirm = (time) => {
    setSelectedDateTime({
      ...selectedDateTime,
      time: time,
    });

    hideTimePicker();
  };

  function saveMeetingHandler() {
    const payload = {
      clientId: selectedItem,
      date: selectedDateTime?.date,
      time: selectedDateTime?.time,
      salesPersonId: id,
      callbacks: {
        success: () => {
          toast.show("Your meeting is scheduled successfully", {
            type: "success",
            placement: "top",
            offset: 300,
          });
          dispatch(getMeetingsByIdsRequest(id));
          navigation.navigate("salesPersonDetails", { id });
        },
        failure: () => {
          toast.show("Failed Request", {
            placement: "top",
          });
        },
      },
    };

    dispatch(saveMeetingAction(payload));
  }

  return (
    <View style={styles.rootContainer}>
      {exceededLimit ? (
        <View style={styles.textView}>
          <Text style={styles.text}>
            A sales Person cannot have more than 5 meetings in one day!
          </Text>
        </View>
      ) : (
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.textStyle}>Associated Clients :</Text>
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
              placeholder="Select a client"
              placeholderStyle={{
                fontSize: 15,
              }}
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
                  {selectedDateTime?.date
                    ? formattedDate(selectedDateTime.date)
                    : "Select Date"}
                </Text>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible.date}
                  mode="date"
                  onConfirm={handleDateConfirm}
                  onCancel={hideDatePicker}
                  maximumDate={maxDate()}
                  minimumDate={new Date()}
                />
              </View>
            </Pressable>
            <Pressable onPress={showTimePicker}>
              <View style={styles.dateTimeStyle}>
                <IconButton
                  name="time-outline"
                  size={25}
                  onPress={showTimePicker}
                  style={styles.buttonStyle}
                />
                <Text style={styles.innerText}>
                  {" "}
                  {selectedDateTime?.time
                    ? formattedTime(selectedDateTime?.time)
                    : "Select Time"}
                </Text>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible.time}
                  mode="time"
                  onConfirm={handleTimeConfirm}
                  onCancel={hideTimePicker}
                  ShowUpDown={true}
                />
              </View>
            </Pressable>
            <View style={styles.saveButtonStyle}>
              <PrimaryButton pressHandler={saveMeetingHandler}>
                Save Meeting
              </PrimaryButton>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

export default ScheduleMeetings;

const styles = StyleSheet.create({
  textView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rootContainer: {
    flex: 1,

    justifyContent: "space-between",
  },

  outerContainer: {
    margin: 15,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.lightGreen,
  },
  innerContainer: {
    margin: 8,
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
    justifyContent: "center",
  },
});
