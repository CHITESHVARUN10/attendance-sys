import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('YOUR_API_ENDPOINT/forgot-password', {
        email,
      });
      if (response.data.success) {
        alert('Password reset link sent');
      } else {
        alert('Failed to send reset link');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl mb-6">Forgot Password</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border w-full p-2 mb-4"
      />
      <Button title="Reset Password" onPress={handleForgotPassword} />
    </View>
  );
};

export default ForgotPassword;
