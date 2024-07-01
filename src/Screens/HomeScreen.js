import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { fetchTrendingMovies } from '../../api/movies'
import { useNavigation } from '@react-navigation/native'
import Card from '../components/Card';
const HomeScreen = () => {
    const [moviesData, setMoviesData] = useState([])
    const navigation = useNavigation()
    useEffect(() => {
        const getMovies = async () => {
            const response = await fetchTrendingMovies()
            setMoviesData(response.results)
        }
        getMovies()
    }, [])


    return (
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView className="m-2">
                <View className="flex-row items-center justify-between mx-2">
                    <View className="flex-row">
                        <Text className=" text-3xl text-yellow-400 font-bold">M</Text>
                        <Text className="text-white text-3xl font-bold">ovie <Text className = "text-yellow-400">E</Text>xplorer</Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate("search") }}>
                        <MagnifyingGlassIcon size={"30"} color={"white"} strokeWidth={2} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-around', paddingBottom: 30 }}
                numColumns={2}

                data={moviesData}
                renderItem={({ item }) =>
                    <Card item={item} />

                }
            />

        </View>
    )
}

export default HomeScreen