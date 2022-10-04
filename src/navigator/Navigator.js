import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProtectedScreen from '../screens/ProtectedScreen';
import { AuthContext } from '../context/AuthContext';
import Formularios from '../screens/gymbe/Formularios';
import Onboarding from '../screens/Onboarding';
import OnboardingClient from '../components/onboarding/OnboardingClient';
import OnboardingServices from '../components/onboarding/OnboardingServices';
import OnboardingClient1 from '../components/onboarding/OnboardingClient1';
import OnboardingClient2 from '../components/onboarding/OnboardingClient2';

const Stack = createStackNavigator();

export const Navigator = () => {

    const { status } = useContext(AuthContext)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                }
            }}
        >

            {
                status !== 'authenticated' ?
                    (
                        <>
                            <Stack.Screen name="LoginScreen" component={LoginScreen} />
                            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                        </>
                    ) :
                    (
                        <>
                            <Stack.Screen name="Onboarding" component={Onboarding} />
                            <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
                            <Stack.Screen name="Formularios" component={Formularios} />
                            <Stack.Screen name="OnboardingClient" component={OnboardingClient} />
                            <Stack.Screen name="OnboardingClient1" component={OnboardingClient1} />
                            <Stack.Screen name="OnboardingClient2" component={OnboardingClient2} />
                            <Stack.Screen name="OnboardingServices" component={OnboardingServices} />
                        </>
                    )
            }
        </Stack.Navigator>
    );
}