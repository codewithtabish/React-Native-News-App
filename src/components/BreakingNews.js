import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import BreakingNewsCard from './BreakingNewsCard'
import { useNavigation } from '@react-navigation/native';

const BreakingNews = ({label,data}) => {
    const navi=useNavigation()
    const {width,height}=Dimensions.get('window')

    const handleClick=(item)=>{
        navi.navigate("NewsDetail",item)
    }
  return (
    <View>
      <Carousel
      data={data}
      renderItem={({item})=><BreakingNewsCard item={item} handleClick={handleClick}/>}
      sliderWidth={width*.9}
      itemWidth={width*.9}
      slideStyles={{display:"flex",
    alignItems:"center",
backgroundColor:"red"}}
      inActiveSlideScale={.86}
      firstItem={1}

      />
    </View>
  )
}

export default BreakingNews

const styles = StyleSheet.create({})