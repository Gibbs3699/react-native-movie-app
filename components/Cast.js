import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { fallbackPersonImage, image185 } from '../api/MovieAPI';

const Cast = ({ cast, navigation }) => {
    let personName = 'Keanu Reevs';
    let characterName = 'John Wick'
    return (
        <View className="my-6">
            <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    cast && cast.map((person, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                className="mr-5 items-center"
                                onPress={() => navigation.navigate('Person', person)}
                            >
                                <Image
                                    className="rounded-2xl h-24 w-20"
                                    // source={require('../assets/images/castImage1.png')}
                                    source={{uri: image185(person?.profile_path) || fallbackPersonImage}}

                                />
                                <Text className="text-white text-xs mt-1">
                                    {
                                        person?.character.length>10? person?.character.slice(0,10) + '...' : person?.character
                                    }
                                </Text>
                                <Text className="text-neutral-400 text-xs mt-1">
                                    {
                                        person?.original_name.length>10? person?.original_name.slice(0,10) + '...' : person?.original_name
                                    }
                                </Text>

                            </TouchableOpacity>
                        )
                    })

                }
            </ScrollView>

        </View>
    )
}

export default Cast