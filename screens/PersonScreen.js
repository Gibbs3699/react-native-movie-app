import { View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles, theme } from '../theme'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid'
import MovieList from '../components/MovieList'

var { width, height } = Dimensions.get('window')
const ios = Platform.OS == 'ios'
const verticalMargin = ios ? '' : 'my-3'

const PersonScreen = () => {
    const navigation = useNavigation()
    const [isFavourite, toggleFavourite] = useState(false)
    const [personMovies, setPersonMovies] = useState([1,2,3,4])
    return (
        <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{ paddingBottom: 20 }}>
            <SafeAreaView className={"z-20 w-full flex-row justify-between items-center px-4" + verticalMargin}>
                <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size="35" color={isFavourite ? 'red' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            <View>
                <View className="flex-row justify-center"
                    style={{
                        shadowColor: 'gray',
                        shadowRadius: 40,
                        shadowOffset: { width: 0, height: 5 },
                        shadowOpacity: 1
                    }}
                >
                    <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                        <Image source={require('../assets/images/castImage2.png')}
                            style={{ height: height * 0.43, width: width * 0.74 }}
                        />
                    </View>
                </View>

                <View className="mt-6">
                    <Text className="text-3xl text-white font-bold text-center">
                        {/* Keanu Reeves */}
                        Keanu Reeves
                    </Text>
                    <Text className="text-neutral-500 text-base text-center">
                        Beirut, Lebanon
                        {/* Beirut, Lebanon */}
                    </Text>
                </View>

                <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full ">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold ">Gender</Text>
                        <Text className="text-neutral-300 text-sm">
                            {/* Male */}
                            Male
                        </Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">
                            {/* 1964-09-02 */}
                            1964-09-02
                        </Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">known for</Text>
                        <Text className="text-neutral-300 text-sm">
                            {/* Acting */}
                            Acting
                        </Text>
                    </View>
                    <View className="px-2 items-center">
                        <Text className="text-white font-semibold">Popularity</Text>
                        <Text className="text-neutral-300 text-sm">
                            {/* 84.23 % */}
                            84.23 %
                        </Text>
                    </View>

                </View>

                <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-lg">Biography</Text>
                    <Text className="text-neutral-400 tracking-wide">
                        When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?
                    </Text>
                </View>

                {/* person movies */}
                <MovieList title="Movies" hideSeeAll={true} data={personMovies} />
            </View>
        </ScrollView>
    )
}

export default PersonScreen