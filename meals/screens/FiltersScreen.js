import React from 'react';
import { StyleSheet, View } from 'react-native';

const FiltersScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>cat screen!</Text>
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

export default FiltersScreen;