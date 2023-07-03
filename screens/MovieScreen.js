import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Platform, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles, theme } from '../theme'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/Cast'

var { width, height } = Dimensions.get('window')
const ios = Platform.OS == "ios"
const topMargin = ios ? "" : "mt-3"

const MovieScreen = () => {
    let movieName = "Ant-Man and the Wasp: Quantumania"
    const { params: item } = useRoute()
    const navigation = useNavigation()
    const [cast, setCast] = useState([1,2,3,4,5])
    useEffect(() => {

    }, [item])
    const [isFavourite, toggleFavourite] = useState(false);

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900">

            <View className="w-full">
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 " + topMargin}>
                    <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                        <HeartIcon size="35" color={isFavourite ? theme.background : 'white'} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image
                        // source={require('../assets/images/moviePoster2.png')} 
                        source={require('../assets/images/moviePoster2.png')}
                        style={{ width, height: height * 0.55 }}
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                        style={{ width, height: height * 0.40 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0"
                    />
                </View>



            </View>

            {/* movie details */}

            <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                {/* title */}
                <Text className="text-white text-center text-3xl font-bold tracking-widest">
                    {
                        movieName
                    }
                </Text>

                {/* status, release year, runtime */}
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Released • 2020 • 170 min
                </Text>



                {/* genres  */}
                <View className="flex-row justify-center mx-4 space-x-2">
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Action •
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Thrill •
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Comedy •
                    </Text>
                </View>

                {/* description */}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?
                </Text>

            </View>

            <Cast navigation={navigation} cast={cast}/>

        </ScrollView>
    )
}

export default MovieScreen