import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const[goalsList, setGoalList] = useState([]);
  const[isAddMode, setAddMode] = useState(false);

  const addGoalHandler = goalTitle => {

    if(goalTitle.length === 0){
      return;
    }
    
    setGoalList(currentGoals =>[
      ...currentGoals,
      {
        key: currentGoals.length.toString(),
        value: goalTitle
      }
    ]);
    setAddMode(false);
  }

  const deleteTasks = () => {
    setGoalList([]);
  }

  const deleteSelectedTasks = goalID => {
    setGoalList(currentGoals => {
      return currentGoals.filter(goals => goalID !== goals.key)
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="add new goal" onPress={()=> setAddMode(true)}/>
      <GoalInput 
        isVisible={isAddMode}
        addGoalHandler={addGoalHandler} 
        deleteTasks={deleteTasks} 
      />
      <FlatList data={goalsList} renderItem={itemData => (
        <GoalItem title={itemData.item.value} onDelete={() => deleteSelectedTasks(itemData.item.key)}/>
      )}/>
    </View>
  );
}

// FlatList optmizizes scrolling by only rendering what's required

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 40,
    marginVertical: 60
  },
})

