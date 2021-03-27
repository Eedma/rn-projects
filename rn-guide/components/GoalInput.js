import React , {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';

const GoalInput = props => {

    const[enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return(
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="some txt" style={styles.input} 
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <Button title="add" onPress={addGoalHandler}/>
                    <Button title="del" onPress={props.deleteTasks} color="red"/>
                </View>
                
        </View>
      </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        borderWidth: 1,
        padding: 10
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    }
})