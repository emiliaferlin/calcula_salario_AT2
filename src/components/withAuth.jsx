import { Navigate } from "react-router-dom";

const withAuth = (Component) => {

    const AuthRoute = () => {
        const isAuth = !!localStorage.getItem("nome");

        if (isAuth){
            return <Component/>
        } else {
            return <Navigate to="/login"/>
        }
    }

    return AuthRoute;
}

export default withAuth;