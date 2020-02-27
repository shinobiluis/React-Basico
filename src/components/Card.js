import React from 'react'
import circlesImg from './../images/circles.png';
import './../styles/Card.css';

const Card = ({title, description, img, leftColor, rightColor}) => (
    <div className="card mx-auto Fitness-Card" 
        style={{
            backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
        }}
        >
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        {/* Usamos el state para colocar la imagen */}
                        <img src={img} alt="imagen" className="float-right"/>
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
)
export default Card;