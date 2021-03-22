import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/containers/Home'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
// import mockMovies from './src/mockMovies'


const moviesReducer=(state=[], action) =>{
  switch(action.type) {
    case 'ADD_MOVIES':
      return action.payload
    default:
      return state
  }
}
const store=createStore(moviesReducer)

export default function App() {
  return (
   <Provider store={store}>

     <Home />
   </Provider>

  );
}

const styles = StyleSheet.create({});
