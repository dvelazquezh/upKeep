import React, { createContext, useEffect, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authReducer } from './AuthReducer'
import * as Google from 'expo-google-app-auth';


export const AuthContext = createContext({})

const authInitialState = {
    status: 'checking',
    token: null,
    user: null,
    error: null
}

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState)

    useEffect(() => {
        checkToken()
    }, [])


    const signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: '533830029814-9nkesa1q73jrbkc7gguhsn0mk84f8dt1.apps.googleusercontent.com',
                androidClientId: '533830029814-4kfgb9lkm42vrn8all5u33pjtdq144cd.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });
            const { type, accessToken, user } = result;
            // const { name, photoUrl, id, email } = user;
            if (result.type === 'success') {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: user
                })
                const jsonValue = JSON.stringify(user)
                await AsyncStorage.setItem('user', jsonValue)
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    // const saveNewTrainer = async (values) => {
    //     console.log(values);
    //     const data = await db.collection('trainers').add({
    //         ...values
    //     })
    // }

    const checkToken = async () => {
        const user = await AsyncStorage.getItem('user')
        console.log('user',user);
        if (user) {
            dispatch({ type: 'LOGIN', payload: JSON.parse(user) })
        }
    }


    const singIn = async ({ email, password }) => {
        console.log('LOGIN', email, password)
        dispatch({
            type: 'LOGIN',
            payload: {
                user: email
            }
        })

        await AsyncStorage.setItem('user', email)

    }
    const singUp = () => { }
    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
        AsyncStorage.removeItem('user')
    }
    const RemoveError = () => { }


    return (
        <AuthContext.Provider value={{
            ...state,
            singUp,
            singIn,
            logOut,
            signInWithGoogleAsync,
            RemoveError
        }}>
            {children}
        </AuthContext.Provider>
    )
}