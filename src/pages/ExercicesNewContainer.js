import React, { Component } from 'react';
import FatalError from './500'
import ExercicesNew from './ExercicesNew'

export class ExercicesNewContainer extends Component {
    // Declaramos el state del componente que se llenara por medio del componente hijo
    constructor(props){
        super(props)
        // Declaramos las props a usar en el componente
        this.state={
            form:{
                title:'',
                description:'',
                img:'',
                leftColor:'',
                rightColor:''
            },
            loading:false,
            error:null
        }
    }

    // Esta es la funcion que pasaremos al hijo
    handleChange = (e) =>{        
        this.setState({
            form:{
                ...this.state.form, //Agrega los valores nuevos
                [e.target.name]: e.target.value // agregamos los valores del formulario
            }
        })
    }

    /**
     * Recibimos el submit e imprimimos el state
     */
     handleSubmit = async (e) =>{
        this.setState({
            loading:true
        })
        e.preventDefault()
        console.log(this.state.form)
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                // le mandamos el state 
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch ('http://localhost:8000/api/exercises', config)
            let json = await res.json()
            this.setState({
                loading:false
            })
            this.props.history.push('/exercice')
        } catch (error) {
            this.setState({
                loading:false,
                error
            })
        }

    }

    render() {
        if(this.state.error)
            return <FatalError></FatalError>
        
            return <ExercicesNew
                form={this.state.form} 
                onChange={this.handleChange} 
                onSubmit={this.handleSubmit}
            ></ExercicesNew>
        
    }
}

export default ExercicesNewContainer;
