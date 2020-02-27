import React, { Component } from 'react';

const ExerciseForm = ({onChange, form, onSubmit}) => (
    <div className="container">
        {/* Mandamos a llamar la función al recibir el submit */}
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="title" 
                    name="title"
                    // Mandamos a llamar la función al recibir un cambio
                    onChange={onChange}
                    // Guardamos la información
                    value={form.title}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="description" 
                    name="description"
                    // Mandamos a llamar la función al recibir un cambio
                    onChange={onChange}
                    // Guardamos la información
                    value={form.description}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="img" 
                    name="img"
                    // Mandamos a llamar la función al recibir un cambio
                    onChange={onChange}
                    // Guardamos la información
                    value={form.img}
                />
            </div>
            <div className="form-row">
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="leftColor" 
                        name="leftColor"
                        // Mandamos a llamar la función al recibir un cambio
                        onChange={onChange}
                        // Guardamos la información
                        value={form.leftColor}
                    />
                </div>
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="rightColor" 
                        name="rightColor"
                        // Mandamos a llamar la función al recibir un cambio
                        onChange={onChange}
                        // Guardamos la información
                        value={form.rightColor}
                    />    
                </div>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
)


export default ExerciseForm;
