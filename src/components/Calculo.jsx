import { useContext } from "react";
import AppContext from "./AppContext";

function Calculo() {
    
    const { nota1, setNota1, nota2,
        setNota2, calculaMedia } = useContext(AppContext);

    return (
        <>
            <div>
                <label>Nota 1</label>
                <input type="number" value={nota1}
                    onChange={e => setNota1(e.target.value)} />
            </div>
            <div>
                <label>Nota 2</label>
                <input type="number" value={nota2}
                    onChange={e => setNota2(e.target.value)} />
            </div>   
            <button onClick={()=> calculaMedia()}>Calcular</button>         
        </>
    )
}

export default Calculo;