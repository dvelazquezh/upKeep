import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthContext } from '../../context/AuthContext'


const Profile = () => {

    const {status, user, logOut} = useContext(AuthContext)

    return (
        <View>
            <Text>{JSON.stringify(user?.name)}</Text>
            <Text>{JSON.stringify(user?.photoUrl)}</Text>
            <Text>{JSON.stringify(user?.email)}</Text>
            <Text>{JSON.stringify(status)}</Text>
            <TouchableOpacity
                onPress={ () => {logOut()} }
            >
                <Text>Salir</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile
