import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GameOver = ({restartGame, userNumber, roundsNumber}) =>{
    return (
        <View style={styles.screen}>
            <Card>
                <Text>The game is over</Text>
                <Text>I spent {roundsNumber} rounds to guess it</Text>
                <Text>Number was {userNumber}</Text>
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