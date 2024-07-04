import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('YOUR_API_ENDPOINT/login', {
        email,
        password,
      });
      if (response.data.success) {
        navigation.navigate('Main');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl mb-6">Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border w-full p-2 mb-4"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border w-full p-2 mb-4"
      />
      <Button title="Login" onPress={handleLogin} />
      <View className="flex-row justify-between mt-4 w-full">
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text className="text-blue-500">Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text className="text-blue-500">Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
