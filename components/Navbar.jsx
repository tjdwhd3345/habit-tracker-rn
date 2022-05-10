import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Navbar = ({ totalCount }) => {
  return (
    <View style={styles.navbar}>
      {console.log('navbar.jsx render')}
      <Text style={styles.navbarText}>Habit Tracker App</Text>
      <Text style={styles.navbarCount}>{totalCount}</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: '2rem',
    padding: '1em',
    backgroundColor: 'blanchedalmond',
    width: '100%',
  },
  navbarText: {
    fontSize: '2rem',
  },
  navbarCount: {
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '2rem',
    width: '2.5rem',
    height: '2.5rem',
    lineHeight: '2.5rem',
    marginLeft: '0.2em',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '50%',
  },
});
