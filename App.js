import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
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
    <View className="flex-1 bg-gray-100">
      <NavBar title="Home" onLeftPress={handleLeftPress} onRightPress={handleRightPress} />
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-2xl mb-6 text-black">Home Screen</Text>
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

export default App;
