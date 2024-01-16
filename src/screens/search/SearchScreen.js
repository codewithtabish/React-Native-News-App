import { View, Text, TextInput, TouchableOpacity, ScrollView,BackHandler } from 'react-native'
import React ,{useState,useEffect} from 'react'
import BannerAd from '../../components/BannerAd'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { fetchSearchNews } from '../../utils/NewsApi'
import { XMarkIcon } from "react-native-heroicons/outline";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import NewsSection from '../../components/NewsSection'
import { debounce, set } from "lodash";
import Loader from '../../components/Loader'
import Animation from '../../components/Animation'

export default function SearchScreen() {
  const navi=useNavigation()
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [searchItem, setSearchItem] = useState("")

  

  const handleTextChange=async(search)=>{
    setSearchItem(search)
    if(search&&search.length>2){
      setLoading(true)
      setResults([])
      setSearchItem(search)
      try {
        const data=await fetchSearchNews(search)
        if(data&&data.articles){
          setLoading(false)
          setResults(data.articles)
          // console.log("The result is ",results)
        }
        
      } catch (error) {
        console.log("Error occur in getting the search articles",error)
        
      }
    }

  }

    // const handleTextDebounce = React.useCallback(debounce(handleTextChange, 50), []);

  const handleCrossIcon=()=>{
    setSearchItem("")
    setResults([])
    navi.navigate("Home")

  
  }


  useEffect(() => {
    if(searchItem.length<=1){
              setResults([])

    }
 
  }, [searchItem])


   useEffect(() => {
    const backAction = () => {
      setSearchItem("")
      setResults([])
      navi.goBack()
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    // Clean up the event listener when the component unmounts
    return () => backHandler.remove();
  }, []); 
  





  return (
   <>
    <View className="flex-1 bg-light-lightBackground dark:bg-dark-darkBackground">
      <View className="mx-4 flex-row justify-between items-center p-2 bg-neutral-100 dark:bg-gray-800  rounded-lg mb-10"
      style={{marginTop:responsiveScreenHeight(3)}}>
        <TextInput
        value={searchItem}
        onChangeText={handleTextChange}
        className="w-[90%] py-1 px-3 text-black tracking-wider font-medium dark:text-neutral-300"
        placeholderTextColor={"gray"}
        placeholder="search for article"
        />
        {
          searchItem.length>0 && (
            <TouchableOpacity
            onPress={handleCrossIcon}>
          <XMarkIcon size={29} color={"gray"}
          style={{textSize:22}}
          className="font-bold text-2xl"/>
        </TouchableOpacity>
          )
        }
        </View>


        {
          loading?<Loader/>
          :  <ScrollView
   >
        <NewsSection 
       data={results}/>
      </ScrollView>
        }


       

   




    </View>


               <View 
               style={{width:responsiveScreenWidth(60),
              height:responsiveScreenHeight(50)}}
               className="absolute  left-[25%] 
               -z-1
               bottom-0 top-52">
          {  searchItem.length<2
          &&<Animation/>}
          </View>
        
   </>
  )
    
  
}