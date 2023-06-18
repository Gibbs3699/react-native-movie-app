import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Platform, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles, theme } from '../theme'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation, useRoute } from '@react-navigation/native'

var { width, height } = Dimensions.get('window')
const ios = Platform.OS == "ios"
const topMargin = ios ? "" : "mt-3"

const MovieScreen = () => {
    const {params: item} = useRoute()
    const navigation = useNavigation()
    useEffect(() => {

    }, [item])
    const [isFavourite, toggleFavourite] = useState(false);

    return (
        <ScrollView
            contentContainerStyle={{padding: 20 }}
            className="flex-1 bg-neutral-900"
        >
            <View className="w-full">
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 " + topMargin}>
                    <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                        <HeartIcon size="35" color={isFavourite ? theme.background : 'white'} />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}

export default MovieScreen