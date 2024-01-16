import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect,useCallback} from 'react'
import SavedHeader from './components/SavedHeader'
import { useColorScheme } from "nativewind";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { Ionicons } from "@expo/vector-icons";
import Animation from '../../components/Animation';

const SavedScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation();
  const [savedArticles, setSavedArticles] = useState([]);
   const [bookMarkStatus, setbookMarkStatus] = useState([])
  const [urlList, setUrlList] = useState([]);

  // console.log("saved articles",savedArticles)

    useEffect(() => {
    const urls = savedArticles.map((item) => item.url);
    setUrlList(urls);
  }, [savedArticles]);

    const toggleBookmarkAndSave = async (item, index) => {
    try {
      const savedArticles = await AsyncStorage.getItem("savedArticles");
      let savedArticlesArray = savedArticles ? JSON.parse(savedArticles) : [];

      // Check if the article is already in the bookmarked list
      const isArticleBookmarked = savedArticlesArray.some(
        (savedArticle) => savedArticle.url === item.url
      );

      if (!isArticleBookmarked) {
        // If the article is not bookmarked, add it to the bookmarked list
        savedArticlesArray.push(item);
        await AsyncStorage.setItem(
          "savedArticles",
          JSON.stringify(savedArticlesArray)
        );
        const updatedStatus = [...bookmarkStatus];
        updatedStatus[index] = true;
        setBookmarkStatus(updatedStatus);
        console.log("Article is bookmarked");
      } else {
        // If the article is already bookmarked, remove it from the list
        const updatedSavedArticlesArray = savedArticlesArray.filter(
          (savedArticle) => savedArticle.url !== item.url
        );
        await AsyncStorage.setItem(
          "savedArticles",
          JSON.stringify(updatedSavedArticlesArray)
        );
        const updatedStatus = [...bookmarkStatus];
        updatedStatus[index] = false;
        setBookmarkStatus(updatedStatus);
        console.log("Article is removed from bookmarks");
      }
    } catch (error) {
      console.log("Error Saving/Removing Article", error);
    }
  };

  // Load saved articles from AsyncStorage when the screen gains focus
  useFocusEffect(
    useCallback(() => {
      const loadSavedArticles = async () => {
        try {
          const savedArticles = await AsyncStorage.getItem("savedArticles");
          const savedArticlesArray = savedArticles
            ? JSON.parse(savedArticles)
            : [];

          // const isArticleBookmarkedList = urlList.map((url) =>
          //   savedArticlesArray.some((savedArticle) => savedArticle.url === url)
          // );

          // Set the bookmark status for all items based on the loaded data
          // setBookmarkStatus(isArticleBookmarkedList);
          setSavedArticles(savedArticlesArray);
        } catch (error) {
          console.log("Error loading saved articles", error);
        }
      };

      loadSavedArticles();
      // console.log("Pull saved articles from AsyncStorage");
    }, [navigation, urlList]) // Include 'navigation' in the dependencies array if needed
  );





    const handlePress=(p)=>{
      navigation.navigate("NewsDetail",p)

     }



    const  renderItem=({item,index})=>{
        return (
           <>
            <TouchableOpacity

            onPress={()=>handlePress(item,index)}
            key={index}
            className="mb-4 mx-4 space-y-2 flex-row items-center gap-3 shadow-sm py-2"
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
                 onPress={()=>toggleBookmarkAndSave(item,index)}>
                    <Ionicons 
                    className="mr-2 text-light-lightText dark:text-dark-darkText "
                    name='bookmark-outline'
                    color={"green"}
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
    <View className="flex-1 bg-light-lightBackground dark:bg-dark-darkBackground">
    {
      savedArticles.length>0  && (  <SavedHeader
      // clearSaved={clearSaved}
      setSavedArticles={setSavedArticles}
      />)
    }
     
      {
        savedArticles.length>0?
          <View style={{ marginVertical: responsiveScreenHeight(2) }} className="space-y-2 ">
        <FlatList
          data={savedArticles}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.title}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingBottom: responsiveScreenHeight(2),
          }}
        />

   
      </View>:<Animation savedArticle={savedArticles}/>
      }

      

    </View>
  )
}

export default SavedScreen

const styles = StyleSheet.create({})