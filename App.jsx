import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import LoginFrom from './src/Beats/LoginFrom';
import RegisterForm from './src/Beats/RegisterForm';
import HomePage from './src/Beats/HomePage';
import CurrentStudent from './src/Beats/CurrentStudent';
import AddNewStudent from './src/Beats/AddNewStudent';

const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() =>{
    setTimeout(()=>{
      SplashScreen.hide();
    },100);
    
  },[]);
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Login" component={LoginFrom}/>
        <Stack.Screen name="Register" component={RegisterForm} /> 
        <Stack.Screen name="Home" component={HomePage}/>
        <Stack.Screen name="CurrentStudent" component={CurrentStudent} />
        <Stack.Screen name="AddNewStudent" component={AddNewStudent}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
};
export default App;