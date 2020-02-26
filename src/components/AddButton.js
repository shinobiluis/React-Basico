import React from 'react';
import butonImg from './../images/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => {
    return (
        <Link to="/exercice/new">
            <img src={butonImg} className="Fitness-Add" alt="hola" />
        </Link>
    );
}

export default AddButton;
