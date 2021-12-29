import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/Login';
import DrawerNavigatorRoutes from './src/screens/DrawerNavigatorRoutes';

const Stack = createNativeStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}} initialRouteName="Login">
        <Stack.Screen name="Signup" component={RegisterScreen}
        options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen}
        options={{headerShown: false}} />
          {/* Navigation Drawer as a landing page */}
          <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigatorRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;