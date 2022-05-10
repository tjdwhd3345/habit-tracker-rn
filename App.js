import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Addform from './components/Addform';
import Habits from './components/Habits';
import Navbar from './components/Navbar';
import Reset from './components/Reset';

export default function App() {
  const [habits, setHabits] = useState([
    { name: '달리기', count: 0 },
    { name: '독서', count: 0 },
    { name: '코딩', count: 0 },
    { name: '1', count: 0 },
    { name: '2', count: 0 },
    { name: '3', count: 0 },
    { name: '4', count: 0 },
    { name: '5', count: 0 },
    { name: '6', count: 0 },
  ]);

  const handleAddHabit = (habitName) => {
    const hasHabit = habits.some((habit) => {
      return habit.name.toLowerCase() === habitName.toLowerCase();
    });
    if (!hasHabit) {
      //habits.push();
      setHabits((habits) => {
        return [
          ...habits,
          {
            name: habitName,
            count: 0,
          },
        ];
      });
      console.log(habits);
    }
  };

  const handlePlus = (habit) => {
    setHabits((habits) => {
      return habits.map((item) => {
        if (item.name === habit.name) {
          return { ...habit, count: item.count + 1 };
        }
        return item;
      });
    });
  };

  const handleMinus = (habit) => {
    setHabits((habits) => {
      return habits.map((item) => {
        if (item.name === habit.name) {
          const count = habit.count - 1;
          return {
            ...habit,
            count: count < 0 ? 0 : count,
          };
        }
        return item;
      });
    });
  };

  const handleDelete = (habit) => {
    setHabits((habits) => {
      return habits.filter((item) => {
        return item.name !== habit.name;
      });
    });
  };

  const handleReset = () => {
    setHabits(() => {
      return [];
    });
  };

  return (
    <View style={[styles.container]}>
      {console.log('app.js render', habits)}
      <Navbar totalCount={habits.filter((habit) => habit.count > 0).length} />
      <Addform handleAddHabit={handleAddHabit} />
      <Habits
        habits={habits}
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        handleDelete={handleDelete}
      />
      <StatusBar style='auto' />
      <Reset handleReset={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '99vh',
  },
});
