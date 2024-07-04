import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavBar = ({ title, onLeftPress, onRightPress }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={onLeftPress} style={styles.button}>
        <Text style={styles.navText}>Back</Text>
      </TouchableOpacity>
      <Text style={[styles.navText, styles.title]}>{title}</Text>
      <TouchableOpacity onPress={onRightPress} style={styles.button}>
        <Text style={styles.navText}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3b82f6', // Tailwind's blue-500 color
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  navText: {
    color: '#fff',
    fontSize: 18,
  },
  title: {
    fontWeight: 'bold',
    textDecorationLine:"underline",
    textDecorationColor:"  #FFD700",
    textShadowColor:" #FFD700"
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default NavBar;
