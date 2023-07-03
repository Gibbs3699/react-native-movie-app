import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'
import { image500 } from '../api/MovieAPI'

var { width, height } = Dimensions.get('window')
const TrendingMovies = ({ data }) => {
    const nagivation = useNavigation();
    const handleClick = (item) => {
        nagivation.navigate("Movie", item)
    }
    return (
        <View className="mt-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
            <Carousel
                data={data}
                renderItem={({item}) => <MovieCard item={item} handleClick={handleClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width * 0.62}
                sliderStyle={{ display: 'flex', alignItems: 'center' }}
            />
        </View>
    )
}

const MovieCard = ({ item, handleClick }) => {
    return (
        <TouchableWithoutFeedback onPress={ ()=> handleClick(item)}>
            <Image
                source={{uri: image500(item.poster_path)}}
                style={{
                    width: width * 0.6,
                    height: height * 0.4
                }}
                className="rounded-3xl"
            />
        </TouchableWithoutFeedback>
    )
}

export default TrendingMovies