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

const App = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [isSignedIn, setIsSignedIn] = useState(true);

  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Trade" component={Trade} />
        <Tab.Screen name="Portifolio" component={Portifolio} />
      </Tab.Navigator>
    );
  }

  return(
    <NavigationContainer>

        { isSignedIn ? (
          <>
            <MyTabs />
          </>
        ) : (
          <>
            <Stack.Navigator
              screenOptions={{
                contentStyle:{
                  backgroundColor:'#FFFFFF'
                }
              }}>
              <Stack.Screen name="Login" component={Login} options={{title: ""}} />
              <Stack.Screen name="NewAccount" component={NewAccount} options={{title: ""}} />        
            </Stack.Navigator>
          </>

        )}

    </NavigationContainer>
  )
}

export default App;