import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import BodyText from '../components/BodyText';

const GameOver = ({restartGame, userNumber, roundsNumber}) =>{
    return (
        <View style={styles.screen}>
            <Card>
                <BodyText>The game is over</BodyText>
                <BodyText>I spent {roundsNumber} rounds to guess it</BodyText>
                <BodyText>Number was {userNumber}</BodyText>
                <Button title="restart" onPress={restartGame} />
            </Card>
        </View>
    )
};

export default GameOver;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});