import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Reel = ({imagen}) => {
    return (
        <View style={{marginLeft:20}} >
            <Image
                        style={{ width:80, height:80, borderRadius:40 }}
                        source={{
                            uri: imagen,
                          }}
                    />
        </View>
    )
}

export default Reel

const styles = StyleSheet.create({})
