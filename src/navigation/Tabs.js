import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import SavedScreen from '../screens/saved/SavedScreen';
import DiscoveredScreen from '../screens/Discovered/DiscoveredScreen';
import SearchScreen from '../screens/search/SearchScreen';
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

const Tab = createBottomTabNavigator();

export default function Tabs() {
    const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
     <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Discovered") {
              iconName = "compass-outline";
            } else if (route.name === "Saved") {
              iconName = "bookmark-outline";
            } else if (route.name === "Search") {
              iconName = "search-outline";
            }

            const customizeSize = 25;

            return (
              <Ionicons
                name={iconName}
                size={customizeSize}
                color={colorScheme=="dark"?focused?"white":"gray":focused?"#33CC66":"gray"}
              />
            );
          },
          tabBarActiveTintColor:`${colorScheme==="dark"?"#ffffff":"green"}`,
          tabBarInActiveTintColor:"gray",
          tabBarLabelStyle:{
            fontSize:9
          },
           tabBarStyle: {
            backgroundColor: colorScheme == "dark" ? "#1a1a1a" : "#fff",

            // borderTopWidth: 0,
            padding: 8,
            // height: 60,
          },

          
        })}
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discovered" component={DiscoveredScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name='Search' component={SearchScreen}/>
    </Tab.Navigator>
  );
}