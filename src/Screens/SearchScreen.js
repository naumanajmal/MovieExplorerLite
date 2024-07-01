import { View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { searchMovie } from '../../api/movies'
import Card from '../components/Card'
const SearchScreen = () => {
    const navigation = useNavigation()
    const [query, setQuery] = useState('')
    const [moviesData, setMoviesData] = useState([])
    const handleTextChange = async (text) => {
        setQuery(text)
        const response = await searchMovie(text)
        setMoviesData(response.results)

    }


    return (
        <SafeAreaView className="flex-1 p-2 bg-neutral-800">
            <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
                <TextInput
                    onChangeText={(text) => { handleTextChange(text) }}
                    value={query}
                    placeholder='Search Movie' placeholderTextColor={'lightgray'}
                    className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
                />
                <TouchableOpacity className="p-3 m-1 bg-neutral-500 rounded-full" onPress={() => { navigation.navigate('Home') }}>
                    <XMarkIcon size={"25"} color={'white'} />
                </TouchableOpacity>
            </View>

            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-around', paddingBottom: 30 }}
                numColumns={2}

                data={moviesData}
                renderItem={({ item }) =>
                    <Card item={item} />

                }
            />
        </SafeAreaView>
    )
}

export default SearchScreen