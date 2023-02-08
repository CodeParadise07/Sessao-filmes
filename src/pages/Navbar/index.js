import logo from "../../images/logo.png"
import { Container, MenuList } from "./styles";

function Navbar () {
    return (
        <Container>
            <img src={logo} alt="logo"/>
            <nav>
                <MenuList>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Listas</a></li>
                    <li><a href="#">Favoritos</a></li>
                    <li><a href="#">Conta</a></li>
                </MenuList>
            </nav>

            <input type="text" placeholder="Pesquisar"/>

            <button>Sair</button>
        </Container>
    );
}

export default Navbar;