import React from "react";
import '../styles/boton.css'

function Boton({ caption, is_liked, drivenClic }) {
    return (
        <button
            className={is_liked ? 'button-liked' : 'button-disliked'}
            onClick={drivenClic}
        >
            {caption}
        </button>
    );
    
}

export default Boton;