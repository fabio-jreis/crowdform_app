import React from "react";

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import Login from "./src/Login";
import NewAccount from "./src/NewAccount";

const App = () => {

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NewAccount" component={NewAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;