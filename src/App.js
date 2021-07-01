import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import TabNavigationLogin from "./TabNavigationLogin/TabnavigationLogin"

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="TabNavigationLogin" component={TabNavigationLogin} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}