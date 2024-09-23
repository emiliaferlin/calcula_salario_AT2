import { useContext } from "react";
import AppContext from "./AppContext";

function Tabela() {

    const { media, color } = useContext(AppContext);

    return (
        <>
            {
                media >= 0 &&
                <h1 style={{ backgroundColor: color }}>Média: {media}</h1>
            }
        </>
    )
}

export default Tabela;