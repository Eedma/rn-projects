import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.min(min)
    max = Math.max(max)
    const rndmN = Math.floor(Math.random() * (max - min)) + min;
    if (rndmN === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndmN
    }
}

const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <Text>{itemData.item}</Text>
    </View>
)

const GameScreen = ({ userChoice, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userChoice).toString()

    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    const [pastGuesses, setPastGuesses] = useState([initialGuess])

    const currentMin = useRef(1);
    const currentMax = useRef(100);
    // useRef is like state, but doesn't rerender when it changes

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && userChoice > currentGuess) || (direction === 'greater' && userChoice < currentGuess)) {
            Alert.alert('That\'s wrong', 'press correct button to continue', [
                { text: 'sorry', style: 'cancel' }
            ])
            return;
        } else if (direction === 'lower') {
            currentMax.current = currentGuess;
        } else if (direction === 'greater') {
            currentMin.current = currentGuess + 1;
        }

        const nextNumber = generateRandomBetween(currentMin.current, currentMax.current, currentGuess)
        setCurrentGuess(nextNumber)
        /* setRounds(currRounds => currRounds +1) */
        setPastGuesses(currentPastGuess => [nextNumber.toString(), ...currentPastGuess])
    }


    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver])


    return (
        <View style={styles.screen}>
            <BodyText>computer guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton onPress={() => nextGuessHandler('greater')}>
                    <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>

            <View style={styles.listContainer}>
            {/* <ScrollView contentContainerStyle={styles.list}>
                {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
            </ScrollView> */}
            <FlatList 
                data={pastGuesses}
                renderItem={renderListItem.bind(this, pastGuesses.length)}
                keyExtractor={item => item}
                contentContainerStyle={styles.list}
            />
            </View>
            
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
        width: 400,
        maxWidth: '90%'
    },
    listItem: {
        borderColor: 'black',
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listContainer: {
        flex: 1,
        width: '50%',
    },
    list:{
        flexGrow: 1, // unfuck the scrollview
        /* alignItems: 'center', */
        justifyContent: 'flex-end'
    }
})

export default GameScreen;