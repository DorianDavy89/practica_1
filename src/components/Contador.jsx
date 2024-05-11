import '../styles/contador.css';

function Contador({num_clics}) {
    return(
        <div className="caja-contador">
            {num_clics}
        </div>

    );
    
}

export default Contador;