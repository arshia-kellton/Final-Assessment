
import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View} from 'react-native';
function LogoutScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  export default LogoutScreen;