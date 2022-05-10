import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Habit from './Habit';

const Habits = ({ habits, handlePlus, handleMinus, handleDelete }) => {
  const renderHabit = ({ item, index }) => {
    console.log('renderHabit', item, index);
    return (
      <Habit
        habit={item}
        key={index}
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        handleDelete={handleDelete}
      />
    );
  };
  return (
    <View style={styles.container}>
      {console.log('habits.jsx render', habits)}
      <FlatList data={habits} renderItem={renderHabit} />
    </View>
  );
};

export default Habits;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxHeight: '80vh',
  },
});
