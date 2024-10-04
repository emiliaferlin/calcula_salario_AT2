import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContext from "./AppContext";
import Resultado from "./components/Resultado";
import Calculo from "./components/Calculo";
import Home from "./components/Home";
import MenuPrivado from "./components/MenuPrivado";
import MenuPublico from "./components/MenuPublico";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [horas, setHoras] = useState(0);
  const [valorHora, setValorHora] = useState(0.0);
  const [valorINSS, setValorINSS] = useState(0.0);
  const [valorBruto, setValorBruto] = useState(0.0);
  const [valorLiquido, setValorLiquido] = useState(0.0);
  const [nome, setNome] = useState(localStorage.getItem("nome") || "");
  const [telefone, setTelefone] = useState(localStorage.getItem("telefone") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("nome"));

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

    setValorLiquido(valorBrutoCalculado - valorINSS);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MenuPublico />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/privado",
      element: isAuthenticated ? <MenuPrivado /> : <Login />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "calculo",
          element: <Calculo />,
        },
        {
          path: "resultado",
          element: <Resultado />,
        },
      ],
    },
  ]);

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
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
