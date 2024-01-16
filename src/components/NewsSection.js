import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useCallback,useEffect} from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BannerAd from './BannerAd';



const NewsSection = ({data}) => {
    const navi=useNavigation()
     const { colorScheme, toggleColorScheme } = useColorScheme();
     const [urlList, seturlList] = useState([])
     const [bookMarkStatus, setbookMarkStatus] = useState([])

     const handlePress=(p)=>{
      navi.navigate("NewsDetail",p)

     }

     useEffect(() => {
       const urlList= data?.map((item)=>item.url)
       seturlList(urlList)
       
     }, [data])
     

     const toggleBookMarkAndSave=async(item,index)=>{
      try {
        const savedArticles=await AsyncStorage.getItem("savedArticles")
        const savedArticlesArray=savedArticles?JSON.parse(savedArticles):[]
        const articleBookMarked=savedArticlesArray.some((artice)=>artice.url===item.url)
        if(!articleBookMarked){
          savedArticlesArray.push(item)
          await AsyncStorage.setItem("savedArticles",JSON.stringify(savedArticlesArray))
          const updateStatus=[...bookMarkStatus]
          updateStatus[index]=true
          setbookMarkStatus(updateStatus)
          console.log("Item added to the array")
        }else{
          const updateSavedArticleArray=savedArticlesArray.filter((article)=>article.url!==item.url)
          await AsyncStorage.setItem("savedArticles",JSON.stringify(updateSavedArticleArray))
          const updateStatus=[...bookMarkStatus]

          updateStatus[index]=false
          setbookMarkStatus(updateStatus)
          console.log("Item removed from the array")
        }



        
      } catch (error) {
        console.log("Error in saving/removing the articles",error)
        
      }
       
     }

    // // MINE FUNCTION
    //  useFocusEffect(()=>{
    //   useCallback(()=>{

    //     async function  fetchData(){
    //     try {
    //      const savedArticles=  await AsyncStorage.getItem("savedArticles")
    //      const savedArticlesArray=savedArticles?JSON.parse(savedArticles):[]
    //      const isArticleBookMarkList=urlList.map((url)=>{
    //       savedArticlesArray.some((article)=>article.url===url)
    //      })
    //      setbookMarkStatus(isArticleBookMarkList)
          
    //     } catch (error) {
    //       console.log("The error in here focus effect is ",error)
          
    //     }

    //   }
    //   fetchData()

    //   },[navi,urlList]

    //   )


    //  },[])


    //  OTHER COPIED FUNCTION 
      useFocusEffect(
    useCallback(() => {
      const loadSavedArticles = async () => {
        try {
          const savedArticles = await AsyncStorage.getItem("savedArticles");
          const savedArticlesArray = savedArticles
            ? JSON.parse(savedArticles)
            : [];

          // Check if each URL in 'urlList' exists in the bookmarked list
          const isArticleBookmarkedList = urlList.map((url) =>
            savedArticlesArray.some((savedArticle) => savedArticle.url === url)
          );

          // Set the bookmark status for all items based on the loaded data
          setbookMarkStatus(isArticleBookmarkedList);
          console.log("Check if the current article is in bookmarks");
        } catch (error) {
          console.log("Error Loading Saved Articles", error);
        }
      };

      loadSavedArticles();
    }, [navi, urlList]) // Include 'navigation' in the dependencies array if needed
  );






    const  renderItem=({item,index})=>{
        return (
           <>
            <TouchableOpacity

            onPress={()=>handlePress(item,index)}
            key={index}
            className="mb-4 mx-4 space-y-1 flex-row items-center gap-3 shadow-sm py-1"
            style={{
                marginLeft:responsiveScreenWidth(1),
            }}
            >
              <Image
              className="rounded-md"
              source={{uri:item.urlToImage|| 
                "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",}}
              style={{
                width:responsiveScreenWidth(25),
                height:responsiveScreenHeight(10)
              }}
              />
                  <View className=""
              style={{width:responsiveScreenWidth(68)}}>
                   <Text className="text-neutral-600  font-medium mt-1 italic"
                   style={{
                    fontSize:responsiveScreenHeight(1.2)
                   }}
                   >
                    {item?.author?.length>20?item?.author?.slice(0,20)+"...":item?.author||"Tabish"}
                </Text>
                <View className="flex-row items-center max-w-[100%] gap-3">
                       <Text className="text-light-lightText dark:text-dark-darkText 
                       flex-1
                capitalize"
                style={{
                    fontSize:responsiveScreenFontSize(1.9)
                }}>
                       {item?.title?.length>50?item?.title?.slice(0,50)+"...":item?.title||"It seems like your message got cut off. Could you please provide more details or clarify what you mean by "}

      
                 </Text>
                 <TouchableOpacity
                 onPress={()=>toggleBookMarkAndSave(item,index)}>
                    <Ionicons 
                    className="mr-2 text-light-lightText dark:text-dark-darkText "
                    name='bookmark-outline'
                    color={bookMarkStatus[index]?"green":"gray"}
                    //  color={colorScheme=="dark"?(bookMarkStatus[index]?"green":"#ccc"):(bookMarkStatus[index]?"tomato":"#FF69B4")}

                    size={26}
                    
                    />

                 </TouchableOpacity>
                </View>
             
                 <Text className="text-gray-400 text-sm italic dark:text-dark-darkPrimary mt-1"
                    style={{
                    fontSize:responsiveScreenHeight(1.2)
                   }}
                 
                 >
                    {item?.publishedAt}
                 </Text>

              </View>

             


            </TouchableOpacity>
   
     
           </>
        )
    }




  return (
    <View className=" space-y-2  ">
    <FlatList
    data={data}
     contentContainerStyle={{ paddingBottom:responsiveScreenHeight(15) }}
    renderItem={renderItem}
    showVerticalScrollIndicator={false}
 
    />

    </View>
  )
}

export default NewsSection

const styles = StyleSheet.create({})