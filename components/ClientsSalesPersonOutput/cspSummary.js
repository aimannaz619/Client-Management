import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../Constants/styles';

const CSPSummary = ({ headers }) => {
  return (
    <View style={styles.headerContainer}>
      {Object.values(headers).map((header, index) => (
        <Text key={index} style={styles.headerText}>
          {header}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: GlobalStyles.colors.bottleGreen,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 8,
    marginTop: 15,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    color: GlobalStyles.colors.white,
    fontWeight: 'bold',
  },
});

export default CSPSummary;
