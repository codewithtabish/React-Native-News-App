import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { TextInput,useTheme } from 'react-native-paper';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import AuthModal from '../../components/AuthModal';
import { loginUser } from '../../services/apiMethods';
import { useToast } from "react-native-toast-notifications";
import { assignToDialouge } from '../../redux/reducers/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import CustomDialog from '../../components/CustomDialog';
import { assignToLoginToken } from '../../redux/reducers/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
    const theme=useTheme()
    const navi=useNavigation()
    const [isModalVisible, setModalVisible] = useState(false)
    const toast=useToast()
    const [isToastVisible, setToastVisible] = useState(false);
    const dispatch = useDispatch();

  const goToSignUp=()=>{
    setModalVisible(true)
    // navi.navigate('SIGNUP')

  }

  const handleLogin=async()=>{
     if(!email||!password){
      if(!isToastVisible){
        toast.show("please fill all the fields",{
        type:"warning",
        placement: "top",
         duration: 5000,
        offset: 30,
       animationType: "slide-in | zoom-in",
      })
       setToastVisible(true)
      setTimeout(() => {
        setToastVisible(false)
      }, 5000);
      }
     
      return
   
      // setDialogVisible(true)
      // console.log(fullName,email,password,mobile)
    }

    dispatch(assignToDialouge(true))
       setTimeout(async() => {
           // console.log("object",email)
    const obj={email:email.toLowerCase().trim(),password:password.trim()}       
   const response=await loginUser(obj)
   console.log("The response here is ",response)
      if(response?.errors?.length>0){
         toast.show(response?.errors[0]?.msg,{
        type:"warning",
        placement: "top",
         duration: 2000,
        offset: 30,
       animationType: "slide-in | zoom-in",
      })
      setEmail("")
      setPassword("")
       dispatch(assignToDialouge(false))
       return

    }
     if(response.status==="failed"){
          // console.log("object",email)
         toast.show(response?.message,{
        type:"warning",
        placement: "top",
         duration: 2000,
        offset: 30,
       animationType: "slide-in | zoom-in",
      })
      setEmail("")
      setPassword("")
      dispatch(assignToDialouge(false))
      setEmail("")
      setPassword("")
       return
    }

    if(response.status==="success"){
          // console.log("object",email)
         toast.show(response?.message,{
        type:"success",
        placement: "top",
         duration: 3000,
        offset: 30,
       animationType: "slide-in | zoom-in",
      })
      setEmail("")
      setPassword("")
        dispatch(assignToDialouge(false))
    await AsyncStorage.setItem('loginToken',response?.token)  
    dispatch(assignToLoginToken(response?.token))
    return
    
    }
    
   }, 4000);  
    // const myEmail = email.toLowerCase();

    // const obj={email:myEmail,password}
    // const response=await loginUser(obj)
    // console.log(response)

  }


 return (
   <>
    <SafeAreaView style={{ flex: 1,backgroundColor:theme.colors.primaryBackground,
    }}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.primaryBackground} />
       <ScrollView>
        <View style={{paddingVertical:responsiveScreenHeight(3),marginHorizontal:responsiveScreenWidth(5),
        height:responsiveScreenHeight(90),
        justifyContent:"center"
      }}>
        <View style={styles.imageContainer}>
         <Image source={require('../../../assets/logo.png')} style={styles.image} />
       </View>
       <View>
         <Text style={[styles.welcomeText,{color:theme.colors.primary}]}>
            Embark on a journey with us! 👨‍👩‍👧‍👦✈️
        </Text>
       </View>

       {/* LOGIN SUBCONTAUNER */}
       <View style={{marginTop:responsiveScreenHeight(2.5)}}>
      
            {/*  EMAIL */}
            <View>
              
            <TextInput
            cursorColor={theme.colors.gray}
             left={<TextInput.Icon icon="email" color={theme.colors.iconColor} />} 
            placeholder='Email'
            
            outlineStyle={{elevation:responsiveScreenHeight(.5),borderRadius:10,
            borderColor:theme.colors.primaryBackground}}
              style={{
         ...styles.input,
         borderColor: theme.colors.primaryBackground,
       backgroundColor:  'white', // Use a conditional expression
           }}
              label="Email"
              mode="outlined"
              theme={{
                colors: {
                //   primary: theme.colors.primary, // primary color
                  primary:theme.colors.gray, // primary color
                //    underlineColor: 'red',
                },
              }}
              value={email}
                  onChangeText={(p)=>setEmail(p)}
              
            />

            </View>
            {/*  PASSWORD */}
            <View>
              
            <TextInput
            cursorColor={theme.colors.gray}
               left={<TextInput.Icon icon="lock" color={theme.colors.iconColor} />} 
          right={<TextInput.Icon icon="eye" color={theme.colors.iconColor} />} 
            placeholder='Password'
            
            outlineStyle={{elevation:responsiveScreenHeight(.5),borderRadius:10,
            borderColor:theme.colors.primaryBackground}}
              style={{
         ...styles.input,
         borderColor: theme.colors.primaryBackground,
       backgroundColor:  'white', // Use a conditional expression
           }}
              label="Password"
              mode="outlined"
              theme={{
                colors: {
                  primary:theme.colors.gray, // primary color
                //    underlineColor: 'red',
                },
              }}
              value={password}
                  onChangeText={(p)=>setPassword(p)}
              
            />

            </View>

            </View>
      
        


{/* MID CONTAINER */}
       {/* </View>

       
            <View style={{marginHorizontal:responsiveScreenWidth(5),
            flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:theme.colors.primaryBlack,
              fontSize:responsiveScreenFontSize(1.7),
              lineHeight:responsiveScreenHeight(2.7)
              }}>By creating an account and logged in. You agree to 
                our
                <Text style={{color:theme.colors.primary,
                textAlign:"center",
                fontSize:responsiveScreenFontSize(1.9),fontWeight:"bold",
                fontStyle:"italic"}}> Terms & conditions </Text> and <Text style={{color:theme.colors.primary,
                fontSize:responsiveScreenFontSize(1.7),fontWeight:"bold",
                fontStyle:"italic",textAlign:"center",
                }}> Privacy Policy</Text>
              </Text>
            </View> */}



          {/* LOGIN BUTTON */}
            <TouchableOpacity
            onPress={handleLogin}

              style={{
                marginVertical:responsiveScreenHeight(.8),
                backgroundColor: theme.colors.primary,
                paddingHorizontal:responsiveScreenWidth(4),
                paddingVertical:responsiveScreenHeight(1.4),
                borderRadius:8
              }}
            //   onPress={signUpUser}
            >
              <Text style={{color:theme.colors.primaryText,
              textAlign:"center"}}>Login</Text>
            </TouchableOpacity>

          {/* BOTTOM CONTAINER */}
      <View style={{
      justifyContent:"flex-end",
    flexDirection:"row",alignItems:"center"}}>
        <Text style={{color:theme.colors.primaryBlack,
        fontStyle:"italic"}}>Don`t` have an Account ? 
      
        </Text>

          <TouchableOpacity
          style={{padding:5}}
        onPress={goToSignUp}
        >
          <Text style={{color:theme.colors.primary,
        fontSize:responsiveScreenFontSize(2.1),
        fontWeight:"700"}}> create an Account </Text>
        </TouchableOpacity>


      </View>
      
       {/* SIGNUP SUBCONTAUNER */}
     
   
        </View>
   
      
       </ScrollView>

  
  
    </SafeAreaView>
    <AuthModal isModalVisible={isModalVisible} setModalVisible={setModalVisible}/>
    <CustomDialog/>
   </>
  )
}

export default LoginScreen



const styles = StyleSheet.create({
  imageContainer: {
   
  },
  image: {
    width:responsiveScreenWidth(15),
    height:responsiveScreenHeight(12),
    resizeMode: 'center', // You can adjust the resizeMode as needed
    marginHorizontal:"auto"
  },
    welcomeText: {
    fontSize: responsiveScreenFontSize(2.2),
    fontStyle:"italic",
    // fontWeight:"bold"
  },
  
   input: {
    marginBottom:responsiveScreenHeight(2.1),
  }
});

