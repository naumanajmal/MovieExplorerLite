import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
var {width, height} = Dimensions.get('window')
const Card = ({item}) => {
  return (
    <View className = " w-1/2 items-center justify-center space-y-1 " style={{width:'45%'}}>
        <Image  className = "rounded-2xl"
        source={item.backdrop_path?{uri:`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}:require('../../assets/poster.jpg')}
        style={{
            width:width*0.44,
            height:height*0.3
        }}
        />

        
      <Text className = "text-neutral-300 text-center text-lg">{item.title.length>15 ?item.title.slice(0,15)+'...':item.title}</Text>
    </View>
  )
}

export default Card