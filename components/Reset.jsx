import { StyleSheet, Button, View } from 'react-native';
import React from 'react';

const Reset = ({ handleReset }) => {
  return (
    <View>
      <Button
        onPress={handleReset}
        title='전체삭제'
        accessibilityLabel='전체삭제하기'
      />
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({});
