import { View, Text, Image, Dimensions, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
import OnBoardingImage from '../components/OnBoardingImage';



const OnBoardingScreen = () => {
const navigation = useNavigation()

const handleDone=()=>{
navigation.navigate("Home")
navigation.reset({
    index: 0,
    routes: [{ name: 'Home' }],
  });
}


    return (
        <View className="flex-1 bg-neutral-800">
            <Onboarding
            onSkip={handleDone}
            onDone={handleDone}
            
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#808080',
                        image: (<OnBoardingImage imageUrl = {require("../../assets/batman.jpg")} title={"welcome"}/>),
                        title: 'asdf',
                        subtitle: 'asdf',
                    },
                    {
                        backgroundColor: '#808080',
                        image: (<OnBoardingImage imageUrl = {require("../../assets/multipleposters.jpg")} title={"explore"}/>),
                        title: 'asdf',
                        subtitle: 'asdf',
                    },

                ]}
            />
        </View>
    )
}

export default OnBoardingScreen