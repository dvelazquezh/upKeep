import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, FontAwesome,Foundation  } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../screens/gymbe/Profile'
import Hoy from '../screens/gymbe/Hoy';
import Encuentra from '../screens/gymbe/Encuentra';
import Trainers from '../screens/gymbe/Trainers';
import { StatusBar } from 'native-base';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        inactiveTintColor: '#c2d7d8',
        activeTintColor: '#33f',
        labelStyle: { fontSize: 15 },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        style: {
          // position: 'absolute',
          backgroundColor: 'white',
          // bottom: 30,
          // marginHorizontal: 20,
          borderRadius: 10,
          height: (Platform.OS === 'ios' ? '12%' : '07%'),
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          }
        }
      }}
    >
      <Tab.Screen name="Directorio" component={Hoy}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // position: 'absolute',
              // top: '25%'
            }} >
              <MaterialIcons name="book" size={27}  color={focused ? '#33f' : '#c2d7d8'} />
            </View>
          )
        }}
      />
      <Tab.Screen name="Contratistas" component={Encuentra}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // position: 'absolute',
              // top: '25%'
            }} >
              <Foundation name="map" size={27}  color={focused ? '#33f' : '#c2d7d8'} />
            </View>
          )
        }}
      />
      <Tab.Screen name="Materiales" component={Trainers}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // position: 'absolute',
              // top: '25%'
            }} >
              <FontAwesome name="simplybuilt" size={24} color={focused ? '#33f' : '#c2d7d8'} />
            </View>
          )
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // position: 'absolute',
              // top: '25%'
            }} >
              <FontAwesome
                name="user"
                size={27}
                color={focused ? '#33f' : '#c2d7d8'}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

