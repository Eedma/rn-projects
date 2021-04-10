import React, {useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Color from '../constants/Color';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const StartGameScreen = ({onStartGame}) =>{

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()
    
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99){
            Alert.alert('Invalid number', 'number hast to be between 1 and 99',[{text: 'ok', style: 'destructive', onPress: resetInputHandler}])
            return
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput

    if (confirmed){
        confirmedOutput = (
            <Card>
                <BodyText>You selected</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={()=>onStartGame(selectedNumber)}>start game</MainButton>
            </Card>
        )
    }

    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} >
            <View style={styles.screen}>
                <BodyText style={styles.title}>Start a new game</BodyText>
                <Card style={styles.card}>
                    <BodyText>Select a number</BodyText>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                    />
                    <View style={styles.buttonContainer}>

                        <View style={styles.button}>
                            <Button title="reset" onPress={resetInputHandler} color={Color.primary}/>
                        </View>

                        <View style={styles.button}>
                            <Button title="confirm" onPress={confirmInputHandler} color={Color.green}/>
                        </View>
                        
                    </View>
                </Card>

                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        minWidth: 100,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100,
    }
})