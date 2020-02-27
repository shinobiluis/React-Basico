import React, { Component, useState, useEffect } from 'react';
import Loading from './../components/Loading' //agregamos el componente de loading
import FatalError from './500' //agregamos el componente de error
import Exercices from './Exercices'

const ExercicesContainer = () => {
    /**
     * Aqui especificamos las variables del state de bajo
     * ademas de declarar la funcion que usara y en useState
     * definimos el valor por defecto de cada uno.
     */
    const [data, setData] = useState([]);
    const [loading, setLoadin] = useState(false)
    const [error, setError] = useState(null)

    /**
    * Este evento se ejecuta en cuanto el componente se renderea
    * por lo que es bueno que lo usemos en el momento de hacer el
    * consumo de un API
    * Internamoente usamos setData, setLoadin y setError estos 3 son los que
    * colocamos arriba y lo unico que se hace es pasar el valor que ahora debe tener
    */
    useEffect(() => {
        const fetchExercises = async () => {
            try {
                let res = await fetch('http://localhost:8000/api/exercises')
                let data = await res.json();
                console.log(data)
                // actualizamos el estado del componente
                setData(data)
                setLoadin(false)
            } catch (error) {
                // si hay un error cambiamos los datos
                setLoadin(false)
                setError(error)
            }        
        }
        fetchExercises()
    }, [])

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