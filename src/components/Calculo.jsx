import { useContext } from "react";
import AppContext from "../AppContext";

function Calculo() {
  const { horas, valorHora, setHoras, setValorHora, calculaSalarioINSS } =
    useContext(AppContext);

  return (
    <>
      <div>
        <label>Horas trabalhadas: </label>
        <input
          type="number"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
        />
      </div>
      <div>
        <label>Valor Hora: </label>
        <input
          type="number"
          value={valorHora}
          onChange={(e) => setValorHora(e.target.value)}
        />
      </div>
      <button onClick={() => calculaSalarioINSS()}>Calcular e Finalizar</button>
    </>
  );
}

export default Calculo;
