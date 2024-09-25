import { useContext } from "react";
import AppContext from "../AppContext";

function Tabela() {
  const { valorINSS, valorBruto, nome, telefone, valorLiquido } =
    useContext(AppContext);

  return (
    <>
      <div>
        <p>Nome: {nome}</p>
        <p>Telefone: {telefone}</p>
        <p>Valor Bruto: {valorBruto}</p>
        <p>Valor INSS: {valorINSS}</p>
        <p>Valor Líquido: {valorLiquido}</p>
      </div>
    </>
  );
}

export default Tabela;
