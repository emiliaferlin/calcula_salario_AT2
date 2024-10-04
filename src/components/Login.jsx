import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";

const Login = () => {
  const { nome, setNome, telefone, setTelefone, setIsAuthenticated } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (nome && telefone) {
      localStorage.setItem("nome", nome);
      localStorage.setItem("telefone", telefone);
      setIsAuthenticated(true);
      navigate("/privado");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("nome");
    localStorage.removeItem("telefone");
    setNome("");
    setTelefone("");
    setIsAuthenticated(false);
    navigate("/");
  };

  const isAuth = !!localStorage.getItem("nome");

  return (
    <>
      {!isAuth ? (
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
          <div className="dados-container">
            <button className="todos-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </>
      ) : (
        <div className="dados-container">
          <button className="todos-button" onClick={handleLogout}>
            Sair
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
