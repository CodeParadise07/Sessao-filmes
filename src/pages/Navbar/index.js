import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
import { Container, MenuList } from "./styles";

function Navbar () {
    return (
        <Container>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <nav>
                <MenuList>
                    <li><Link to="/pages/lists">Listas</Link></li>
                    <li><Link to="/pages/favorits">Favoritos</Link></li>
                    <li><Link to="/pages/login">Conta</Link></li>
                </MenuList>
            </nav>

            <input type="text" placeholder="Pesquisar"/>
            <img src="https://www.pngplay.com/wp-content/uploads/12/Anime-Profile-Pictures-Download-Free-PNG.png" alt="pefil" />
        </Container>
    );
}

export default Navbar;