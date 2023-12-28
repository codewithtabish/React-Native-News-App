import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { TextInput,useTheme } from 'react-native-paper';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
      const [fullName, setfullName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
    const theme=useTheme()
    const [mobile, setMobile] = useState()
    const navi=useNavigation()

  const goToLogin=()=>{
    navi.navigate("LOGIN")

  }


  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:theme.colors.primaryBackground,
    }}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.primaryBackground} />
       <ScrollView>
        <View style={{paddingVertical:responsiveScreenHeight(3),marginHorizontal:responsiveScreenWidth(5)
      }}>
        <View style={styles.imageContainer}>
         <Image source={require('../../../assets/logo.png')} style={styles.image} />
       </View>
       <View>
         <Text style={[styles.welcomeText,{color:theme.colors.primary}]}>
            
              Embark on a journey of unforgettable moments with us!  ✈️✈️✈️
        </Text>
       </View>

       {/* SIGNUP SUBCONTAUNER */}
       <View style={{marginTop:responsiveScreenHeight(2.5)}}>
            {/* FULL NAME */}
            <View>
              
            <TextInput
            cursorColor={theme.colors.gray}
          left={<TextInput.Icon icon="account-circle" color={theme.colors.iconColor} />} 
            placeholder='FullName'
            
            outlineStyle={{elevation:responsiveScreenHeight(.5),borderRadius:10,
            borderColor:theme.colors.primaryBackground}}
              style={{
         ...styles.input,
         borderColor: theme.colors.primaryBackground,
       backgroundColor:  'white', // Use a conditional expression
           }}
              label="FullName"
              mode="outlined"
              theme={{
                colors: {
                //   primary: theme.colors.primary, // primary color
                  primary:theme.colors.gray, // primary color
                //    underlineColor: 'red',
                },
              }}
              value={fullName}
                  onChangeText={(p)=>setfullName(p)}
              
            />

            </View>
            {/*  EMAIL */}
            <View>
              
            <TextInput
            cursorColor={theme.colors.gray}
             left={<TextInput.Icon icon="email" color={theme.colors.iconColor} />} 
            placeholder='0347-9000919'
            
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
      
            {/*  PHONE */}
            <View>
              
            <TextInput
            cursorColor={theme.colors.gray}
               left={<TextInput.Icon icon="phone" color={theme.colors.iconColor} />} 
        //   right={<TextInput.Icon icon="eye" color={theme.colors.iconColor} />} 
            placeholder='Password'
            
            outlineStyle={{elevation:responsiveScreenHeight(.5),borderRadius:10,
            borderColor:theme.colors.primaryBackground}}
              style={{
         ...styles.input,
         borderColor: theme.colors.primaryBackground,
       backgroundColor:  'white', // Use a conditional expression
           }}
              label="Phone"
              mode="outlined"
              theme={{
                colors: {
                  primary:theme.colors.gray, // primary color
                //    underlineColor: 'red',
                },
              }}
              value={mobile}
                  onChangeText={(p)=>setMobile(p)}
              
            />

            </View>

      




  

     


{/* MID CONTAINER */}
       </View>

       
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
            </View>



          {/* signUP BUTTON */}
            <TouchableOpacity
              style={{
                marginVertical:responsiveScreenHeight(.9),
                backgroundColor: theme.colors.primary,
                paddingHorizontal:responsiveScreenWidth(4),
                paddingVertical:responsiveScreenHeight(1.4),
                borderRadius:8
              }}
            //   onPress={signUpUser}
            >
              <Text style={{color:theme.colors.primaryText,
              textAlign:"center"}}>SignUp</Text>
            </TouchableOpacity>
          {/* END signUP BUTTON */}
      
       {/* SIGNUP SUBCONTAUNER */}

      {/* BOTTOM CONTAINER */}
      <View style={{
        marginVertical:responsiveScreenHeight(1.2),
      elevation:20,
      justifyContent:"flex-end",
    flexDirection:"row",alignItems:"center",
    }}>
        <Text style={{color:theme.colors.primaryBlack,
        fontStyle:"italic"}}>Already have an Account ? 
      
        </Text>

          <TouchableOpacity
        onPress={goToLogin}
        >
          <Text style={{color:theme.colors.primary,
        fontSize:responsiveScreenFontSize(2.1),
        fontWeight:"700"}}> SignIn </Text>
        </TouchableOpacity>


      </View>
     
   
        </View>
   
      
       </ScrollView>


  
    </SafeAreaView>
  );
};

export default SignUpScreen;


const styles = StyleSheet.create({
  imageContainer: {
   
  },
  image: {
    width:responsiveScreenWidth(15),
    height:responsiveScreenHeight(13),
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

