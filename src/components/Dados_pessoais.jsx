import { useContext } from "react";
import AppContext from "../AppContext";

function Calculo() {
  const { nome, setNome, telefone, setTelefone } = useContext(AppContext);

  return (
    <>
      <div className="dados-container">
        <label>Nome: </label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="dados-container">
        <label>Telefone: </label>
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
    </>
  );
}

export default Calculo;
