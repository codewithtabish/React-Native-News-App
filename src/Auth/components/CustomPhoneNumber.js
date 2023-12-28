import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput as PaperTextInput, useTheme } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input';

const CustomPhoneInput = ({ value, onChangeText }) => {
  const theme = useTheme();

  const handlePhoneChange = (phoneNumber) => {
    // Handle phone number change
    onChangeText(phoneNumber);
  };

  return (
    <View style={styles.container}>
      
      <PhoneInput
        initialCountry={'us'}
        // initialValue={value}
        textProps={{
          placeholder: 'Enter a phone number...',
        }}
        // onChangePhoneNumber={handlePhoneChange}
      />
      <PaperTextInput
        left={<PaperTextInput.Icon name="phone" color={theme.colors.iconColor} />}
        placeholder='Mobile'
        mode="outlined"
        // value={value}
        // onChangeText={onChangeText}
        style={{
          ...styles.input,
          borderColor: theme.colors.primaryBackground,
          backgroundColor: 'white',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 10,
    elevation: 2,
  },
});

export default CustomPhoneInput;
