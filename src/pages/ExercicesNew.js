import React from 'react';
import ExerciseForm from './../components/ExerciseForm'
import Card from './../components/Card'

const ExercicesNew = ({form, onChange, onSubmit}) => {
    return (
        <div className="row">
            <div className="col-sm">
                <Card {...form}></Card>
            </div>
            <div className="col-sm">
                <ExerciseForm 
                    onChange={onChange} //le pasamos la funcion al hijo
                    form={form} // le pasamos el props al hijo
                    onSubmit={onSubmit} // le pasamos la funcion al hijo
                ></ExerciseForm>
            </div>
        </div>
        
    );
}

export default ExercicesNew;
