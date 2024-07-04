import React from 'react';
import { TouchableOpacity, Text,  } from 'react-native';

const CustomButton = ({ onPress }) => {
  return (
    <TouchableOpacity  onPress={onPress}>
      <Text className="rounded-2xl bg-blue-500" >Go to Login/Register</Text>
    </TouchableOpacity>
  );
};



export default CustomButton;
