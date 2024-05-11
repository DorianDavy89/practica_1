import React from "react";
import '../styles/candidata.css';
import Contador from "./Contador";
import Boton from "./Boton";
import { useState } from "react";

function Candidata(props) {

    const [numeroLikes, SetNumeroLikes] = useState(0);

    const drivenLiked = () => {
        SetNumeroLikes(numeroLikes + 1)
    }

    const drivenNotLiked = () => {
        SetNumeroLikes(numeroLikes - 1)
    }

    return (
        <div className="contenedor-candidata">
            <img className="imagen-candidata"
                src={require(`../images/${props.imagen}.jpg`)} alt="Foto de Candidata" />
            <div className="contenedor-datos-candida" >
                <p className="texto_datos"><strong>Nombre:</strong> {props.nombre}</p>
                <p className="texto_datos"><strong>Edad:</strong> {props.edad} años</p>
                <p className="texto_datos"><strong>Signo Zodiacal:</strong> {props.signo}</p>
                <p className="texto_datos"><strong>Hobby:</strong> {props.hobby}</p>
                <p className="texto_datos"><strong>Frase:</strong> {props.frase}</p>
            </div>

            <div>
                <Contador
                    num_clics={numeroLikes}
                />
                <Boton
                    caption="like"
                    is_liked={true}
                    drivenClic={drivenLiked}

                />
                <Boton
                    caption="Not like"
                    is_liked={false}
                    drivenClic={drivenNotLiked}
                />
            </div>

        </div>

    );
}

export default Candidata;