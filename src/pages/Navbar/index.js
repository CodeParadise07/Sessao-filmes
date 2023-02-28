import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png"
import { Container, MenuList } from "./styles";
import { BiSearchAlt2 } from 'react-icons/bi';
import { RiMenu3Fill } from 'react-icons/ri'
import { useState } from "react";
import { MenuMobile } from "../../components/MenuMobile";

export function Navbar () {
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }



    return (
        <Container>
            <MenuMobile 
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            <Link to="/"><img src={logo} alt="logo"/></Link>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)}
                value={search}/>
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>

            <nav>
                <MenuList>
                    <li><Link to="/lists">Listas</Link></li>
                    <li><Link to="/favorits">Favoritos</Link></li>
                    <li><Link to="/login">Conta</Link></li>
                </MenuList>
            </nav>
            {/* <img src="https://www.pngplay.com/wp-content/uploads/12/Anime-Profile-Pictures-Download-Free-PNG.png" alt="pefil" /> */}

            <RiMenu3Fill size={45} onClick={() => setMenuIsVisible(!menuIsVisible)} className="mobile"/>
        </Container>
    );
}