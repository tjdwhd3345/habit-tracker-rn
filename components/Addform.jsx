import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useRef } from 'react';
import { Button, TextInput } from 'react-native-web';

const Addform = ({ handleAddHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleAdd = () => {
    console.log(habitName);
    if (habitName) {
      handleAddHabit(habitName);
    }
  };
  return (
    <View style={styles.container}>
      {console.log('addform.jsx render')}
      <TextInput
        style={styles.addInput}
        onChangeText={(text) => setHabitName(text)}
        placeholder='습관을 입력하세요'
      />
      <Button
        onPress={handleAdd}
        title='추가'
        style={styles.addButton}
        accessibilityLabel='습관 추가하기'
      />
    </View>
  );
};

export default Addform;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  addInput: {
    fontSize: '2rem',
    marginRight: '0.2em',
    border: '1px solid',
  },
  addButton: {
    height: '100%',
    fontSize: '1.5rem',
    padding: '0.3em 0.5em',
    backgroundColor: '#008000',
    color: 'white',
    width: '40px',
  },
});
