import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const Habit = ({ habit, handlePlus, handleMinus, handleDelete }) => {
  console.log('habit', habit);

  const handleIncrement = () => {
    handlePlus(habit);
  };
  const handleDecrement = () => {
    handleMinus(habit);
  };
  const handleRemove = () => {
    handleDelete(habit);
  };

  return (
    <View styles={styles.container}>
      {console.log('habit.jsx render')}
      <Text>{habit.name}</Text>
      <Text>{habit.count}</Text>
      <Button
        onPress={handleIncrement}
        title='+'
        style={styles.plusButton}
        accessibilityLabel='횟수 증가하기'
      />
      <Button
        onPress={handleDecrement}
        title='-'
        style={styles.minusButton}
        accessibilityLabel='횟수 감소하기'
      />
      <Button
        onPress={handleRemove}
        title='삭제'
        style={styles.deleteButton}
        accessibilityLabel='습관 삭제하기'
      />
    </View>
  );
};

export default Habit;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
});
