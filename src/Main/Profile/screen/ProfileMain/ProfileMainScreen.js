import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import React from 'react'
import { TextInput,useTheme } from 'react-native-paper';

const ProfileMainScreen = () => {
  const theme=useTheme()

  return (
   <>
        <StatusBar barStyle="dark-content" backgroundColor={theme.colors.primaryBackground} />
    <View style={{padding:30}}>
      <Text>
        so, "Lorem ipsum" is a placeholder text commonly used in the printing and typesetting industry. It's used to fill space in a document to give an impression of how the final text will look. The full phrase is "Lorem ipsum dolor sit amet, consectetur adipiscing elit," and it doesn't have a specific meaning as it's nonsensical Latin. It's just a standard placeholder text. Is there anything specific you'd like to know or discuss related to "Lorem ipsum"?
      </Text>
      
    </View>
   </>
  )
}

export default ProfileMainScreen

const styles = StyleSheet.create({})