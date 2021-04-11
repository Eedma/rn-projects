import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MealsDetailScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>meals detail screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MealsDetailScreen;