import React, { useState } from "react";
import { useFonts } from 'expo-font';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from "./src/Login"
import NewAccount from "./src/NewAccount"
import Home from "./src/AppContent/Home"
import Trade from "./src/AppContent/Trade"
import Portifolio from "./src/AppContent/Portifolio"
import Terms from "./src/Terms"
import Privacy from "./src/Privacy"
import { Image } from "react-native";
import HomeIcon from "./assets/images/home_icon.png"
import TradeIcon from "./assets/images/trade_icon.png"
import PortifolioIcon from "./assets/images/portifolio_icon.png"

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import combineReducers from './src/reducer'

import FundsDetails from "./src/AppContent/FundsDetails";

const App = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const store  = createStore(combineReducers);

  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }} sceneContainerStyle={{backgroundColor: '#FFFFFF'}}>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return(
              <Image source={HomeIcon} />
            )
          }
        }} />
        <Tab.Screen name="Trade" component={Trade}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return(
              <Image source={TradeIcon} />
            )
          }
        }}         
        />
        <Tab.Screen name="Portifolio" component={Portifolio} 
         options={{
          tabBarIcon: ({size, focused, color}) => {
            return(
              <Image source={PortifolioIcon} />
            )
          }
        }}          
        />
      </Tab.Navigator>
    );
  }

  return(
    <Provider store={store}>
      <NavigationContainer>

      <Stack.Navigator
          screenOptions={{
          contentStyle:{
            backgroundColor:'#FFFFFF'
          }
        }}     
      >
        <Stack.Screen name="Login" component={Login} options={{title: ""}} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="FundsDetails" component={FundsDetails} />
        <Stack.Screen name="NewAccount" component={NewAccount} options={{title: ""}} />
        <Stack.Screen name="Terms" component={Terms} options={{title: ""}} />
        <Stack.Screen name="Privacy" component={Privacy} options={{title: ""}} />    
      </Stack.Navigator>     

      </NavigationContainer>
    </Provider>
  )
}

export default App;