import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Main from './components/Main';
import NavBar from './components/NavBar';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const handleLeftPress = () => {
    // Handle left button press
    console.log('Left button pressed');
  };

  const handleRightPress = () => {
    // Handle right button press
    console.log('Right button pressed');
  };

  return (
    <View style={styles.container}>
      <NavBar title="Home" onLeftPress={handleLeftPress} onRightPress={handleRightPress} />
      <View style={styles.content}>
        <Text style={styles.title}>Home Screen</Text>
        <Button
          title="Login/Register"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', // Tailwind's gray-100 color
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: '#000',
  },
});

export default App;
