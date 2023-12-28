import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import  { useEffect, useRef } from 'react'
import LottieView from 'lottie-react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const CustomDialog = () => {
    const {appDialouge}=useSelector((state)=>state.app)

  const animationRef = useRef(null);
  const theme = useTheme();
  const navi=useNavigation()


    useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
  }, [animationRef]);

      
    return <>{appDialouge &&   <View style={styles.container}>
    

      <Modal visible={appDialouge} transparent animationType="slide">
        <View style={styles.modalContainer}>
        
                 <View style={styles.dialog}>

            <View style={styles.header}>
              {/* <AntDesign name={iconName} size={22} color="red" /> */}
              {/* <Text style={styles.title}>Error</Text> */}
            </View>
              <LottieView
                  ref={animationRef}
                  source={require('../../assets/anim/loader.json')}
                  autoPlay={true}
                  loop={true}
                  style={{ width:responsiveScreenWidth(30),height:responsiveHeight(30) }}
                />
            {/* <Text style={styles.dialogText}>{errorTtitle}</Text> */}
            {/* <Text style={styles.smallText}>{errorSubtitle}</Text> */}
            {/* <Button onPress={hideDialog} color="blue">
              Close
            </Button> */}
          </View>

        </View>
      </Modal>
    </View>}</>


    

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"red",
    position:"absolute",
    // top:"50%",

    // left:"50%",
    // right:"50%"
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  dialog: {
    // backgroundColor: 'white',
    // padding: 20,
    // borderRadius: 10,
    elevation: 5,
    // backgroundColor:"yellow",


    // width:responsiveScreenWidth(65)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  dialogText: {
    fontSize: 18,
    marginBottom: 10,
  },
  smallText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
})


export default CustomDialog;
