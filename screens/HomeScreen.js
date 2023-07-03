import { View, Text, SafeAreaView, TouchableOpacity, Platform, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../theme'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import TrendingMovies from '../components/TrendingMovies'
import { useState } from 'react'
import MovieList from '../components/MovieList'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/Loading'
import { fetchTopRatedMovies } from '../api/MovieAPI'

const ios = Platform.OS == 'ios'
const HomeScreen = () => {
    const [trending, setTrending] = useState([1, 2, 3])
    const [upcoming, setUpcoming] = useState([1, 2, 3])
    const [topRated, setTopRated] = useState([1, 2, 3])
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

    useEffect(()=>{
        getTrendingMovies()
    }, [])

    const getTrendingMovies = async ()=>{
        const data = await fetchTopRatedMovies()
        console.log('got trending movies: ', data)
        if(data && data.results) setTrending(data.results)
        setLoading(false)
    }

    return (
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
                <StatusBar style="light" />
                <View className="flex-row justify-between items-center mx-4">
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
                    <Text className="text-white text-3xl font-bold">
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            {
                loading ? (
                    <Loading />
                ) : (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 10 }}
                    >
                        { trending.length>0 && <TrendingMovies data={trending} />}

                        {/* upcoming */}
                        <MovieList title="Upcoming" data={upcoming} />

                        {/* top rated */}
                        <MovieList title="Top Rated" data={topRated} />
                    </ScrollView>
                )
            }
        </View>
    )
}

export default HomeScreen