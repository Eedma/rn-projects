import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CategoryMealsScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text> category meals screen</Text>
            <Button title="go to details" onPress={()=> props.navigation.navigate('MealDetail')} />
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

export default CategoryMealsScreen;