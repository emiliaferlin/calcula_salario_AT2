import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";

function Calculo() {
  const { horas, valorHora, setHoras, setValorHora, calculaSalarioINSS } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleCalcular = () => {
    calculaSalarioINSS();
    navigate("/privado/resultado");
  };

  return (
    <>
      <div className="calculo-container">
        <label>Horas trabalhadas: </label>
        <input
          type="number"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
        />
      </div>
      <div className="calculo-container">
        <label>Valor Hora: </label>
        <input
          type="number"
          value={valorHora}
          onChange={(e) => setValorHora(e.target.value)}
        />
      </div>
      <div className="calculo-container">
        <button className="calcular-button" onClick={handleCalcular}>
          Calcular e Finalizar
        </button>
      </div>
    </>
  );
}

export default Calculo;
