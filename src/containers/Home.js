import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView,FlatList, StyleSheet, Text, View } from 'react-native'
// import mockMovies from '../mockMovies'
import MovieRow from '../components/MovieRow'

export default function Home() {

    const movies = useSelector(state=>state)
    const dispatch = useDispatch()
    const fetchData = async () =>{
        const response = await fetch('http://www.omdbapi.com/?apikey=8a00c4a5&s=Batman')
        const data= await response.json() 
        addMovies(data.Search)
    }
    
    const addMovies=(movies)=>dispatch({
        type:'ADD_MOVIES',
        payload: movies
      }) 

    useEffect(()=>{
        fetchData()

    },[movies])

    return (    
        <SafeAreaView style={styles.container}>
            <FlatList 
            data= {movies}
            renderItem={({item:movie}) => <MovieRow movie={movie}/>
 
            }
            keyExtractor={(movie) => movie.imdbID}
            />
            
        </SafeAreaView>
    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });
