import { useEffect } from "react";
import { Container } from "../../components/building/styles";

function Login () {

    useEffect( () => {
        document.title = "Sessão Fácil / Login"
    }, [])

    return (
        <Container>
            <h1>Página de Login</h1>
            <img src="https://media.tenor.com/1uRoZGYtPzEAAAAC/anime-girl.gif" alt="girl anime stop" />
            <span>Opa, está página ainda está em construção...</span>
        </Container>
    )
}

export default Login;