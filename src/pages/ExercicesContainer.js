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

/**
Apartir de aqui es el contenido del componente pero arriba lo estaremos
pasanso a un funcional component que usa hooks.
*/

// class ExercicesContainer extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             data:[], // Data lo ponemos como vacio
//             loading:true, //iniciamos loading en true
//             error:null // iniciamos error en null
//         }
//     }

//     // Mantamos a llamar la funcion que hace la peticion del api
//     async componentDidMount(){
//         await this.fetchExercises()
//     }

//     // Realizamos el fetch
//     fetchExercises = async () => {
//         try {
//             let res = await fetch('http://localhost:8000/api/exercises')
//             let data = await res.json();
//             console.log(data)
//             // actualizamos el estado del componente
//             this.setState({
//                 data,
//                 // si todo sale bien ponemos loadin en false
//                 loading: false 
//             })
//         } catch (error) {
//             // si hay un error cambiamos los datos
//             this.setState({
//                 loading: false,
//                 error
//             })
//         }        
//     }
//     render() {
//         // si loading esta en true mostramos el loading
//         if(this.state.loading)
//             return (<Loading></Loading>)
//         // si el error existe mostramos error
//         if(this.state.error)
//             return (<FatalError></FatalError>)
//         // si todo pasa normal mostramos el componente normal
//         return <Exercices exercices={this.state.data}></Exercices>
//     }
// }

export default ExercicesContainer;