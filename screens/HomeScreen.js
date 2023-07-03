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
import { fetchTopRatedMovies, fetchUpcomingMovies } from '../api/MovieAPI'

const ios = Platform.OS == 'ios'
const HomeScreen = () => {
    const [trending, setTrending] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [topRated, setTopRated] = useState([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useEffect(()=>{
        getTrendingMovies()
        getUpcomingMovies()
        getTopRatedMovies()
    }, [])

    const getTrendingMovies = async ()=>{
        const data = await fetchTopRatedMovies()
        console.log('PPPP got trending movies: ', data)
        if(data && data.results) setTrending(data.results)
        setLoading(false)
    }

    const getUpcomingMovies = async ()=>{
        const data = await fetchUpcomingMovies()
        console.log('PPPP got upcoming movies', data)
        if(data && data.results) setUpcoming(data.results)
    }

    const getTopRatedMovies = async ()=>{
        const data = await fetchTopRatedMovies()
        console.log('PPPP got top rated movies', data)
        if(data && data.results) setTopRated(data.results)
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
                        { upcoming.length>0 && <MovieList title="Upcoming" data={upcoming} /> }

                        {/* top rated */}
                        { topRated.length>0 && <MovieList title="Top Rated" data={topRated} /> }
                    </ScrollView>
                )
            }
        </View>
    )
}

export default HomeScreen