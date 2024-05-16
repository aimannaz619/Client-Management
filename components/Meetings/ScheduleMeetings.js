import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../../Constants/styles";

function ScheduleMeetings() {
  const [open, setOpen] = useState(false);
  const [id, setValue] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
  
    hideDatePicker();
  };
  const [items, setItems] = useState([
    { name: "Apple", id: "apple" },
    { name: "Banana", id: "banana" },
  ]);

  return (
    <View style={styles.dropDownStyle}>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.textStyle}>Associated Clients :</Text>
          <DropDownPicker
            open={open}
            schema={{
              label: "name",
              value: "id",
            }}
            value={id}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
          <IconButton
            name="calendar-number-outline"
            size={45}
            onPress={showDatePicker}
            style={styles.buttonStyle}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>
    </View>
  );
}

export default ScheduleMeetings;

const styles = StyleSheet.create({
  dropDownStyle: {
    flex: 1,

    justifyContent: "space-between",
    // marginTop: 20,
    // marginHorizontal: 14,
  },
  outerContainer: {
    // flex: 1,
    margin: 15,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.lightGreen,
  },
  innerContainer: {
    margin: 8,
  },
  textStyle: {
    fontSize: 17,
  },
  buttonStyle: {
    marginHorizontal: 0,
    padding: 0,
  },
});
