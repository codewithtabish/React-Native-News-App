import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeRouter from './Home/HomeRouter';
import BookingRouter from './Booking/screen/BookingRouter';
import OfferRouter from './offer/screen/OfferRouter';
import InboxRouter from './Inbox/screen/InBoxRouter';
import ProfileRouter from './Profile/screen/ProfileRouter';
import { Ionicons ,AntDesign,Feather,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
MaterialIcons} from '@expo/vector-icons'; // Import Ionicons
import { useTheme } from 'react-native-paper';


const Tab = createBottomTabNavigator();

function MyTabs() {
  const theme=useTheme()
  return (
    <Tab.Navigator
    screenOptions={{
    tabBarInactiveTintColor: theme.colors.cardText,
    tabBarActiveTintColor: `${theme.colors.primary}`,
    tabBarStyle: {
      position: 'absolute',
      borderTopColor: 'rgba(0, 0, 0, .2)',
      backgroundColor:theme.colors.bottomShadow
    },
  }}
    >
      <Tab.Screen name="Home" component={HomeRouter}
        options={{
       tabBarLabel: 'Home', // Set tabBarLabel to an empty string to hide the label
        headerShown:false,
        tabBarIcon:({focused})=>focused?
        <Entypo name="home" size={26} style={{color:theme.colors.primary}} />:
        <AntDesign name="home" size={26} style={{color:theme.colors.gray}} />
        
        // <AntDesign name="home" size={26} color={theme.colors.gray} />

        }}
       />

      <Tab.Screen name="Booking" component={BookingRouter}
        options={{
       tabBarLabel: 'Booking', // Set tabBarLabel to an empty string to hide the label
        headerShown:false,
        tabBarIcon:({focused})=>focused?
        <Ionicons name="ios-book" size={24} style={{color:theme.colors.primary}} />:
        <Feather name="book-open" size={26} color={theme.colors.gray} />
        }}
 
         />
      <Tab.Screen name="Offer" component={OfferRouter} 
        options={{
       tabBarLabel: 'Offer', // Set tabBarLabel to an empty string to hide the label
        headerShown:false,
        tabBarIcon:({focused})=>focused?
        <FontAwesome5 name="hand-holding-heart" size={24} style={{color:theme.colors.primary}} />:
        <MaterialCommunityIcons name="offer" size={26} color={theme.colors.gray} />

        }}
        />
      <Tab.Screen name="Inbox" component={InboxRouter}
        options={{
       tabBarLabel: 'Inbox', // Set tabBarLabel to an empty string to hide the label
        headerShown:false,
        tabBarIcon:({focused})=>focused?
        <Ionicons name="send-sharp" size={24} color={theme.colors.primary} />:
        

        <Feather name="send" size={26} color={theme.colors.gray} />

        }}
        />
      <Tab.Screen name="Profile" component={ProfileRouter} 
        options={{
       tabBarLabel: 'Profile', // Set tabBarLabel to an empty string to hide the label
        headerShown:false,
        tabBarIcon:({focused})=>focused?
        <Ionicons name="person" size={24} color={theme.colors.primary} />:
        <Ionicons name="ios-person-outline" size={26} color={theme.colors.gray} />

        }}
        />
    </Tab.Navigator>
  );
}


export default MyTabs