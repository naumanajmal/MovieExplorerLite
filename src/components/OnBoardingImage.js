import { View, Text, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
var { width, height } = Dimensions.get('window')


const WelcomeText = () => {
  return (
    <View className>
    <Text className={ " text-white font-extrabold text-4xl text-left"}>Hello! Welcome To</Text>
    <Text  className = "text-white font-extrabold text-5xl text-left"><Text className = "text-yellow-400">M</Text>ovies <Text className = "text-yellow-400">E</Text>xplorer</Text>
    </View>
  )
}

const ExploreText = () => {
    return (
      <View>
      <Text className={ " text-white font-extrabold text-7xl text-center"}>Explore Unlimited Movies</Text>
      </View>
    )
  }

 

const OnBoardingImage = ({imageUrl, title}) => {
    console.log
  return (
    <View>

    <View className="w-1/2 flex-1 " style={{ width: width, height: height }}>
        <ImageBackground
            source={imageUrl}
            blurRadius={0}
            style={{

                resizeMode: "cover",
                justifyContent: "center",
            }}
        >
            <View className="h-full  justify-end pb-40 items-center" style={{ backgroundColor: 'rgba(0,0,0, 0.50)' }}>
            {title=="explore"?<ExploreText/>:<WelcomeText/>}
</View>
        </ImageBackground>

    </View>

</View>
  )
}

export default OnBoardingImage