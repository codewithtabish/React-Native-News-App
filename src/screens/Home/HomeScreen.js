import { StyleSheet, Text, TouchableOpacity, View,StatusBar } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useColorScheme } from "nativewind";
import { useQuery } from "@tanstack/react-query";
import { fetchBreakingNews, fetchRecommendedNews } from '../../utils/NewsApi';
import HomeHeader from './HomeHeader';
import { AntDesign } from '@expo/vector-icons';
import Loader from '../../components/Loader';
import MiniHeader from '../../components/MiniHeader';
import BreakingNews from '../../components/BreakingNews';
import NewsSection from '../../components/NewsSection';
// import BreakingNews from '../../components/BreakingNews';
// import { useQuery } from 'react-query';


const HomeScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [breakingNews, setbreakingNews] = useState(null)
  const [recommendedNews, setrecommendedNews] = useState(null)

  useEffect(() => {
    async function fetchData(){
     const response= await fetchBreakingNews()
     setbreakingNews(response?.articles)

  
    }

    async function fetecgRecommendedNews(){
      
     const recommendedResponse=await fetchBreakingNews()
     setrecommendedNews(recommendedResponse?.articles)

    }

    fetchData()
    fetecgRecommendedNews()
   
  }, [])

  
  // Breaking News
  const { isLoading: isBreakingNewsLoading } = useQuery({
    queryKey: ["breakingNewss"],
    queryFn: fetchBreakingNews,
    onSuccess: (data) => {
      setbreakingNews(data.articles);
    },
    onError: (error) => {
      console.log("Error fetching breaking news", error);
    },
  });
  

    const { isLoading:isRecommendedLoading } = useQuery({
      queryKey:["breakingNews"],
      queryFn:fetchRecommendedNews,
      onSuccess: (data) => {
        setrecommendedNews(data)
    },
    onError:(error)=>{
      console.log("fetching recommended news error is",error)
    }
    });
    
    

    useEffect(() => {
    StatusBar.setBarStyle(colorScheme=="dark"?"light-content":"dark-content");
    StatusBar.setBackgroundColor(colorScheme=="dark"?"#1a1a1a":"#fff"); // Set your desired background color
  
  }, [colorScheme])


       
  return (
    <>
    <View className="flex-1 bg-light-lightBackground dark:bg-dark-darkBackground">
       <HomeHeader/>
       {
        isBreakingNewsLoading?
        <Loader/>:<View>
          <MiniHeader label={"Breaking News"}/>
          <BreakingNews label={"Breaking News"} data={breakingNews}/>
        </View>
        
       }
       {
        isRecommendedLoading?
        null:<View>
          <MiniHeader label={""}/>
          <NewsSection label={"Breaking News"} data={recommendedNews}/>
        </View>
        
       }


    </View>
    
 
    </>
 
  )
}

export default HomeScreen

const styles = StyleSheet.create({})