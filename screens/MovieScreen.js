import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../theme'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline'
import { useRoute } from '@react-navigation/native'

const ios = Platform.OS == "ios"
const topMargin = ios ? "" : "mt-3"

const MovieScreen = () => {
    const {params: item} = useRoute()
    useEffect(() => {

    }, [item])
    const [isFavourite, toggleFavourite] = useState(false);

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900"
        >
            <View className="w-full">
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 " + topMargin}>
                    <TouchableOpacity style={styles.background} className="rounded-xl p-1">
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