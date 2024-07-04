import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Button } from 'react-native';

const NavBar = ({ title, onLeftPress, onRightPress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-300)).current; // Initial position off-screen to the left

  const toggleNavBar = () => {
    setIsVisible(!isVisible);
    Animated.timing(slideAnim, {
      toValue: isVisible ? -500 : 0, // Slide in or out
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      
      <Button style={styles.men} title="---" onPress={toggleNavBar} />
      <Animated.View style={[styles.navBar, { transform: [{ translateX: slideAnim }] }]}>
      <Button style={styles.men} title="---" onPress={toggleNavBar} />
        <TouchableOpacity onPress={onLeftPress} style={styles.button}>
        
          <Text style={styles.navText}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.navText, styles.title]}>{title}</Text>
        <TouchableOpacity onPress={onRightPress} style={styles.button}>
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  men: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3b82f6',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  navText: {
    color: '#fff',
    fontSize: 18,
  },
  title: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationColor: '#FFD700',
    textShadowColor: '#FFD700',
  },
  button: {
    
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  
});

export default NavBar;
