import { View, Text, SafeAreaView, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../theme'
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'

const ios = Platform.OS == 'ios'
const HomeScreen = () => {
    return (
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView className={ios? "-mb-2" : "mb-3"}>
                <StatusBar style="light"/>
                <View className="flex-row justify-between items-center mx-4">
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
                    <Text className="text-white text-3xl font-bold">
                            <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen