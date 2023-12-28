import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { TextInput,useTheme } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function AuthModal({ isModalVisible, setModalVisible }) {
    const theme=useTheme()
    const navi=useNavigation()
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    navi.navigate('SIGNUP')


  };

  return (
    <View
      style={{
        position: "absolute",
        flex:1,
        // top: "50%",
        // bottom: "50%",
        height: responsiveScreenHeight(50),
        width: responsiveScreenWidth(80),
        justifyContent: "center",
        alignItems: "center",
        zIndex: -5,
      }}
    >
      <View style={{ borderRadius: 20, padding: 20 }}>
        <Modal isVisible={isModalVisible}>
          <View style={{  justifyContent: "center",
          padding:15,
          borderRadius:20,


        backgroundColor:"#ccc" }}>
            <View style={{justifyContent:"space-between",alignItems:"center",
            flexDirection:"row",

        marginVertical:responsiveScreenHeight(1.2)}}>
                <Text style={{fontSize:responsiveScreenHeight(2.3),
                fontWeight:"bold",
                color:theme.colors.primary}}>Account Type!</Text>
                <TouchableOpacity onPress={()=>setModalVisible(false)} >
                    <Entypo name="cross" size={26} color={theme.colors.primary} />
            </TouchableOpacity>
            
            </View>
          <View>
              <TouchableOpacity onPress={toggleModal} style={{ padding: 10,backgroundColor:theme.colors.primary,
              marginVertical:responsiveScreenHeight(1)
            ,borderRadius:12 }}>
              <Text style={{color:theme.colors.primaryText,
              textAlign:"center",
            fontSize:responsiveScreenFontSize(1.4)}}>MEMBER LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} style={{ backgroundColor:theme.colors.primary, padding: 10 ,
              marginVertical:responsiveScreenHeight(1),
            borderRadius:12}}>
              <Text  style={{color:theme.colors.primaryText,
              textAlign:"center",
            fontSize:responsiveScreenFontSize(1.4)}}>CUSTOMER LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} style={{ backgroundColor:theme.colors.primary, padding: 10,
              marginVertical:responsiveScreenHeight(1),
            borderRadius:12 }}>
              <Text  style={{color:theme.colors.primaryText,
            fontSize:responsiveScreenFontSize(1.4),
            textAlign:"center"}}>AGENT LOGIN</Text>
            </TouchableOpacity>
          </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export default AuthModal;
