import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/Login';
const Stack = createNativeStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}} initialRouteName="Signup">
        <Stack.Screen name="Signup" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;