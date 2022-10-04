// import React, { useState } from 'react'
// import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
// import OnboardingRol from '../components/onboarding/OnboardingRol';


// const slides = [
//     // {
//     //     key: 'one',
//     //     title: 'Lorem ipsum',
//     //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, delectus.',
//     //     image: require('../assets/gymBe/masajista.png'),
//     //     backgroundColor: '#59b2ab',
//     // },
//     // {
//     //     key: 'two',
//     //     title: 'Lorem ipsum ',
//     //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, delectus.',
//     //     image: require('../assets/gymBe/masajista.png'),
//     //     backgroundColor: '#febe29',
//     // },
//     {
//         key: 'three',
//         title: 'Lorem ipsum ',
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, delectus.',
//         image: require('../assets/gymBe/masajista.png'),
//         backgroundColor: '#22bcb5',
//         componente: OnboardingRol
//     }
// ];


// const Onboarding = () => {
//     const { height, width } = Dimensions.get('window');

//     const [activeIndex, setactiveIndex] = useState(0)
//     const [final, setfinal] = useState(slides.length - 1)


//     const renderItem = ({ item }) => {
//         return (
//             <>

//                 {
//                     item.componente ? <item.componente activeIndex={activeIndex} final={final} /> :
//                         <>
//                             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Image style={{ resizeMode: 'contain', width: 500, height: 300 }} source={item.image} />
//                                 <Text style={{ color: 'white', marginTop: 15, fontSize: 22, fontWeight: 'bold', textAlign: 'center' }} >{item.title}</Text>
//                                 <Text style={{ color: 'white', marginTop: 15, fontSize: 16, textAlign: 'center' }} >{item.text}</Text>
//                             </View>
//                         </>
//                 }
//             </>
//         )
//     }

//     return (
//         <LinearGradient
//             colors={['#333fff', '#737cff', '#737cff']}
//             style={{ flex: 1 }}>
//             <View style={{ flex: 1 }} >
//                 <Carousel
//                     data={slides}
//                     renderItem={(item) => renderItem(item)}
//                     layout='default'
//                     sliderWidth={width}
//                     itemWidth={width}

//                     onSnapToItem={(index) => setactiveIndex(index)}
//                 />


//                 {/* {
//                     activeIndex == final && (
//                         <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }} >
//                             <Text style={{ textAlign: 'center' }} >Al continuar, acepto los <Text style={{ color: 'blue' }} >Términos de uso</Text> y la <Text style={{ color: 'blue' }} >politica de privacidad</Text>.</Text>
//                         </View>

//                     )
//                 } */}
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
//                     <Pagination
//                         dotsLength={slides.length}
//                         activeDotIndex={activeIndex}
//                         dotStyle={{
//                             width: 10,
//                             height: 10,
//                             borderRadius: 5,
//                             marginHorizontal: 8,
//                             backgroundColor: 'blue'
//                         }}
//                     />
//                     {/* {
//                         activeIndex == final && (
//                             <Text>
//                                 <TouchableOpacity
//                                     onPress={() => navigation.navigate('ProtectedScreen')}
//                                     style={{ backgroundColor: '#333fff', width: 60, height: 60, borderRadius: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
//                                     <AntDesign name="check" size={30} color="white" />
//                                 </TouchableOpacity>
//                             </Text>

//                         )
//                     } */}
//                 </View>
//             </View>
//         </LinearGradient>
//     )
// }

// export default Onboarding

// const styles = StyleSheet.create({})


import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import OnboardingRol from '../components/onboarding/OnboardingRol'

const Onboarding = () => {
    return (
        <LinearGradient
            colors={['#333fff', '#737cff', '#737cff']}
            style={{ flex: 1 }}>
            <View style={{ flex: 1 }} >

                <OnboardingRol />
            </View>
        </LinearGradient>

    )
}

export default Onboarding

const styles = StyleSheet.create({})
