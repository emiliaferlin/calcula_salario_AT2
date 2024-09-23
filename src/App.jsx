import { useState, useEffect } from "react";
import AppContext from "./AppContext";
import Tabela from "./components/Resultado";
import Calculo from "./components/Calculo";
import DadosPessoais from "./components/Dados_pessoais"

function App() {

  const [horas, setHoras] = useState(0);
  const [valorHora, setValorHora] = useState(0.0);
  const [valorINSS, setValorINSS] = useState(0.0);
  const [valorButo, setValorBruto] = useState(0.0);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [primeiraTela, setPrimeiraTela] = useState(true);
  const [segundaTela, setSegundaTela] = useState(false);
  const [terceiraTela, setTerceiraTela] = useState(false);
  const [quartaTela, setQuartaTela] = useState(false);

  const calculaSalarioINSS = () => {
    setValorBruto((Float(horas) * Float(valorHora)) * 5);
    if(valorButo > 0 && valorButo < 1302){
      setValorINSS(Float(valorButo) * 0.075);
    }else if(valorButo > 1.302 && valorButo < 2571.29){
      setValorINSS(Float(valorButo) * 0.09);
    }else if(valorButo > 2571.29 && valorButo < 3856.94){
      setValorINSS(Float(valorButo) * 0.12);
    }else if(valorButo > 3856.94 && valorButo < 7507.49){
      setValorINSS(Float(valorButo) * 0.14);
    }else if(valorButo > 7507.49) {
      setValorINSS(Float(valorButo) * 0.14);
    }
  
  }

  return (
    <AppContext.Provider value = {
      { nome, setNome, telefone, setTelefone, valorButo, setValorBruto, valorINSS, setValorINSS, valorHora, setValorHora, horas, setHoras, calculaSalarioINSS,
        primeiraTela, setPrimeiraTela, segundaTela, setSegundaTela, terceiraTela, setTerceiraTela, quartaTela, setQuartaTela
       }
    }>
      <DadosPessoais/>
      <Calculo />
      <Tabela />
    </AppContext.Provider>
  );
}

export default App;
