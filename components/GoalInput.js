import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

const GoalInput = ({ onAddGoal, modalOpen, endGoalHandler }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const addGoalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={modalOpen} animationType="slide">
        <View style={styles.inputContainer}>
        <Image style={styles.imageContainer} source={require('../assets/images/goal.png')} />
        <TextInput placeholder='Your Goal' 
                  style={styles.textInput} 
                  onChangeText={goalInputHandler} 
                  value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title='Cancel' onPress={endGoalHandler} color='#f31282' />
            </View>
            <View style={styles.button}>
                <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
            </View>
        </View>
      </View>
      </Modal>
    )
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  imageContainer: {
    width: 100,
    height: 100,
    margin: 20
  }
})
export default GoalInput;