import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.min(min)
    max = Math.max(max)
    const rndmN = Math.floor(Math.random() * (max - min)) + min;
    if(rndmN === exclude){
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndmN
    }
}

const GameScreen = ({userChoice, onGameOver}) => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, userChoice)
    )

    const [rounds, setRounds] = useState(0)


    const currentMin = useRef(1);
    const currentMax = useRef(100);
    // useRef is like state, but doesn't rerender when it changes

    const nextGuessHandler = direction =>{
        if((direction === 'lower' && userChoice > currentGuess) || (direction === 'greater' && userChoice < currentGuess)){
            Alert.alert('That\'s wrong','press correct button to continue',[
                {text: 'sorry', style: 'cancel'}
            ])
            return;
        } else if (direction === 'lower'){
            currentMax.current = currentGuess;
        } else if (direction === 'greater'){
            currentMin.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentMin.current, currentMax.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(currRounds => currRounds +1)
    }


    useEffect(()=>{
        if(currentGuess === userChoice){
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])


    return (
        <View style={styles.screen}>
            <Text>computer guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={()=>nextGuessHandler('lower')} />
                <Button title="GREATER" onPress={()=>nextGuessHandler('greater')} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen;