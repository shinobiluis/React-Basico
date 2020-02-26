import React from 'react';
import Welcome from './../components/Welcome'
import ExercicesList from './../components/ExercicesList'
import AddButton from './../components/AddButton'

const Exercices = ({exercices}) => {
    return (
        <React.Fragment>
            <Welcome 
                username="Luis"
            ></Welcome>
            <ExercicesList exercices={exercices}/>
            <AddButton />
        </React.Fragment>
    );
}

export default Exercices;
