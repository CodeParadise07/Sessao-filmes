import { useEffect } from 'react'
import { Container } from '../../components/building/styles'

function Favorits () {

    useEffect( () => {
        document.title = "Sessão Fácil / Favorits"
    }, [])

    return (
        <Container>
            <h1>Página de Favoritos</h1>
            <img src="https://media.tenor.com/1uRoZGYtPzEAAAAC/anime-girl.gif" alt="girl anime stop" />
            <span>Opa, está página ainda está em construção...</span>
        </Container>
    )
}

export default Favorits;