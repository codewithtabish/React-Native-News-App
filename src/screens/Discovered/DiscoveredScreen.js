import { ActivityIndicator, ScrollView, StyleSheet, Text, View  } from 'react-native'
import React,{useState,useEffect} from 'react'
import {useColorScheme} from 'nativewind'
import DiscoverHeader from './components/DiscoverHeader';
import DiscoredSearch from './components/DiscoredSearch';
import { categories } from '../../constants';
import DIscoverCategories from './DIscoverCategories';
import { fetchDiscoverNews } from '../../utils/NewsApi'
import { useQuery } from "@tanstack/react-query";
import Loader from '../../components/Loader';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import NewsSection from '../../components/NewsSection';
import BannerAd from '../../components/BannerAd';






const DiscoveredScreen = () => {
   const { colorScheme, toggleColorScheme } = useColorScheme();
     const [activeCategory, setActiveCategory] = useState("business");
     const [newsMain, setNewsMain] = useState([]);
     const [discoverNews, setDiscoverNews] = useState([]);

     const handleCategories=(cat)=>{
      setActiveCategory(cat)
      setDiscoverNews([])

     }


   const { isLoading: isDiscoverLoading } = useQuery({
    queryKey: ["discoverNews", activeCategory], // Include the category as part of the key
    queryFn: () => fetchDiscoverNews(activeCategory), // You can skip the query if the category is "business"
    onSuccess: (data) => {
      // Filter out articles with title "[Removed]"
      const filteredNews = data.articles.filter(
        (article) => article.title !== "[Removed]"
      );
      setDiscoverNews(filteredNews);
    },
    onError: (error) => {
      console.log("Error fetching discover news", error);
    },
  });

    useEffect(() => {
    async function fetchData(){
     const response= await fetchDiscoverNews(activeCategory)
           // Filter out articles with title "[Removed]"
      const filteredNews = response?.articles?.filter(
        (article) => article.title !== "[Removed]"
      );
      setDiscoverNews(filteredNews);

  
    }

    // async function fetecgRecommendedNews(){
      
    //  const recommendedResponse=await fetchBreakingNews()
    //  setrecommendedNews(recommendedResponse?.articles)

    // }

    fetchData()
    // fetecgRecommendedNews()
   
  }, [activeCategory])






  return (
   <>
    <View className="bg-light-lightBackground dark:bg-dark-darkBackground flex-1">
     <DiscoverHeader/>
     <DiscoredSearch/>
     <DIscoverCategories
     activeCategory={activeCategory}
     categories={categories}
     handleCategories={handleCategories}
     />
       <View className="h-full">
          {/* News */}
          <View className="my-4 mx-4 flex-row justify-between items-center">
            <Text
              className="text- text-light-lightText dark:text-dark-darkText font-semibold"
              style={{
                fontFamily: "SpaceGroteskBold",
              }}
            >
              Discover
            </Text>

            <Text
              className="text-base text-green-800 dark:text-neutral-300"
              style={{
                fontFamily: "SpaceGroteskBold",
              }}
            >
              {/* View all */}
            </Text>
          </View>
      
        
          {isDiscoverLoading ? (
            <View className="mt-8 flex-1 justify-center items-center">
              <ActivityIndicator size="large" color="red" />
            </View>
          ) :(
            <ScrollView
            contentContainerStyle={{paddingBottom:responsiveScreenHeight(16)}}
            >
            <NewsSection
            data={discoverNews}
            />

            </ScrollView>
          )
}


        
        </View>

    </View>
        <BannerAd/>
   </>
  )
}

export default DiscoveredScreen

const styles = StyleSheet.create({})