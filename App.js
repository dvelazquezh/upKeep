import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Navigator } from './src/navigator/Navigator';
import { AuthProvider } from './src/context/AuthContext';
import { RolProvider } from './src/context/RolContext';


const AppState = ({children}) => {
    return(
      <AuthProvider>
        <RolProvider>
          {children}
        </RolProvider>
      </AuthProvider>
    )
}


export default function App() {
  return (

    <NavigationContainer >
      <AppState>
        <Navigator />
      </AppState>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});
