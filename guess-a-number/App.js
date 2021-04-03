import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameOver from './screens/GameOver';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = selectedNumber =>{
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandler = numberOfRounds =>{
    setGuessRounds(numberOfRounds);
  }

  const configNewGameHandler = () =>{
    setUserNumber(undefined)
    setGuessRounds(0)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if(guessRounds > 0){
    content = (
      <GameOver 
        restartGame={configNewGameHandler}
        userNumber={userNumber}
        roundsNumber={guessRounds}
      />
    )
  }



  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
