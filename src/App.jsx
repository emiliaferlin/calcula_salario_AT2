import { useState } from "react";
import AppContext from "./AppContext";
import Tabela from "./components/Resultado";
import Calculo from "./components/Calculo";
import DadosPessoais from "./components/Dados_pessoais";
import "./App.css";

function App() {
  const [horas, setHoras] = useState(0);
  const [valorHora, setValorHora] = useState(0.0);
  const [valorINSS, setValorINSS] = useState(0.0);
  const [valorBruto, setValorBruto] = useState(0.0);
  const [valorLiquido, setValorLiquido] = useState(0.0);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telaAtiva, setTelaAtiva] = useState(1);

  const calculaSalarioINSS = () => {
    const valorBrutoCalculado = horas * valorHora * 5;
    setValorBruto(valorBrutoCalculado);

    if (valorBrutoCalculado > 0 && valorBrutoCalculado <= 1302) {
      setValorINSS(valorBrutoCalculado * 0.075);
    } else if (valorBrutoCalculado > 1302 && valorBrutoCalculado <= 2571.29) {
      setValorINSS(valorBrutoCalculado * 0.09);
    } else if (
      valorBrutoCalculado > 2571.29 &&
      valorBrutoCalculado <= 3856.94
    ) {
      setValorINSS(valorBrutoCalculado * 0.12);
    } else if (
      valorBrutoCalculado > 3856.94 &&
      valorBrutoCalculado <= 7507.49
    ) {
      setValorINSS(valorBrutoCalculado * 0.14);
    } else if (valorBrutoCalculado > 7507.49) {
      setValorINSS(valorBrutoCalculado * 0.14);
    }

    setValorLiquido(valorBruto - valorINSS);
    setTelaAtiva(4);
  };

  const renderizarTela = () => {
    switch (telaAtiva) {
      case 1:
        return (
          <>
            <div className="view">
              <button className="calcular-button" onClick={() => proximaTela()}>
                Começar
              </button>
            </div>
          </>
        );

      case 2:
        return <DadosPessoais />;
      case 3:
        return <Calculo />;
      case 4:
        return <Tabela />;
      default:
        return <DadosPessoais />;
    }
  };

  const proximaTela = () => {
    setTelaAtiva((prevTela) => (prevTela < 4 ? prevTela + 1 : 4));
  };

  const voltarTela = () => {
    setTelaAtiva((prevTela) => (prevTela > 1 ? prevTela - 1 : 1));
  };

  return (
    <AppContext.Provider
      value={{
        nome,
        setNome,
        telefone,
        setTelefone,
        valorBruto,
        setValorBruto,
        valorINSS,
        setValorINSS,
        valorHora,
        setValorHora,
        horas,
        setHoras,
        valorLiquido,
        setValorLiquido,
        calculaSalarioINSS,
      }}
    >
      <div className="view">
        <h1>Calcular salário</h1>
        {renderizarTela()}
      </div>
      {telaAtiva > 1 ? (
        <div className="view">
          <button className="todos-button" onClick={() => voltarTela()}>
            Voltar
          </button>
          <div className="view_espaco"></div>
          {telaAtiva > 2 ? null : (
            <button className="todos-button" onClick={() => proximaTela()}>
              Próximo
            </button>
          )}
        </div>
      ) : null}
    </AppContext.Provider>
  );
}

export default App;
