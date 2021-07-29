import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header";
import ToDoItem from './components/ToDoItem';
import AddTodo from './components/addTodo';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'to buy coffee', key: 1},
    {text: 'make a new app', key: 2}, 
    {text: 'go to sleep', key: 3},
  ]);
  
  const ClickHandler = (key) => {
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.key != key);
    })
  }

  const TaskHandler = (task) => {
    if(task.length>0){
      setTodos((currentTodos)=>{
        return [
          {text: task, key: Math.random().toString()},
          ...currentTodos
        ]
      })
    }else{
      Alert.alert('Oops!', 'You must enter a valid text.', [
        {text: 'Ok'}
      ]);
    } 
  }


  return (

    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}> 
        <View style={styles.header}>  
          <Header />
          <View style={styles.content}> 
            <View style={styles.list}>   
              <AddTodo TaskHandler={TaskHandler}/> 
              <FlatList 
                data={todos}
                renderItem={({item}) => (
                  <ToDoItem item={item} pressHandler={ClickHandler}/>
                )}
              />
            </View>
          </View>
        </View> 
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
