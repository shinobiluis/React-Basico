import React, { Component } from 'react';
import Loading from './../components/Loading' //agregamos el componente de loading
import FatalError from './500' //agregamos el componente de error
import Exercices from './Exercices'
import useFetch from './../hooks/useFetch' // agreamos el custom hook

const ExercicesContainer = () => {
    /**
     * Usamos el custom hook useFetch y le pasamos una url 
     * este hook retornara 3 valores por eso se declaran como
     * constantes
     */
    const {data, loading, error} = useFetch('http://localhost:8000/api/exercises');

    // si loading esta en true mostramos el loading
    if(loading)
        return (<Loading></Loading>)

    // si el error existe mostramos error
    if(error)
        return (<FatalError></FatalError>)

    // si todo pasa normal mostramos el componente normal
    return <Exercices exercices={data}></Exercices>
            
}

export default ExercicesContainer;