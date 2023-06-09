import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setAllGoals((currentAllGoals) => [
      ...currentAllGoals,
      {text: enteredGoal, id: Math.random().toString()},
    ]);
    endGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setAllGoals((currentAllGoals) => {
      return currentAllGoals.filter((goal) => goal.id !== id);
    });
  };

  const startAddGoalHandler = () => {
    setModalOpen(true);
  };

  const endGoalHandler = () => {
    setModalOpen(false);
  };


  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Add Goal' color="#a065ec" onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={ addGoalHandler } 
                modalOpen={ modalOpen }
                endGoalHandler={ endGoalHandler } />
      <View style={styles.goalsContainer}>
        
        <FlatList data={allGoals} 
                  renderItem={(itemData) => {
                        return <GoalItem item = { itemData.item.text }
                                        id = { itemData.item.id }
                                        onDeleteGoal= { deleteGoalHandler } />;
                  }} 
                  keyExtractor={(item, index) => {
                    return item.id;
                  }}
                  alwaysBounceVertical={false} />
      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 3,
  },
});
