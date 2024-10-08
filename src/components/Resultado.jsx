import { useContext } from "react";
import AppContext from "../AppContext";

function Resultado() {
  const { valorINSS, valorBruto, nome, telefone, valorLiquido } =
    useContext(AppContext);

  return (
    <>
      <div className="resultado-container">
        <p>Nome: {nome}</p>
        <p>Telefone: {telefone}</p>
        <p>Valor Bruto: {valorBruto}</p>
        <p>Valor INSS: {valorINSS}</p>
        <p>Valor Líquido: {valorLiquido}</p>
      </div>
    </>
  );
}

export default Resultado;
