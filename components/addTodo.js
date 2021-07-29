import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function AddTodo({TaskHandler}){

    const [newtask, setNewtask] = useState('');

    const changeHandler = (value) => {
        setNewtask(value);
    }

    return(
        <View>
            <TextInput 
                style = {styles.newTask}
                placeholder = 'Enter Your Task Here...'
                onChangeText = {changeHandler}
            />
            <Button 
                onPress = {() => TaskHandler(newtask)}
                title = 'Add Task'
                color = 'coral'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    newTask: {
        padding: 10,
        marginBottom: 25,
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderColor: 'gray',
        
    }
})