import { Container, MenuList } from "./styles";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function MenuMobile({menuIsVisible, setMenuIsVisible}) {
  const handleCloseMenu = () => {
    setMenuIsVisible(false);
  };

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} >
      <IoClose size={45} onClick={handleCloseMenu} />
      <nav>
        <MenuList>
          <li><Link to="/" onClick={handleCloseMenu}>Home</Link></li>
          <li><Link to="/lists" onClick={handleCloseMenu}>Listas</Link></li>
          <li><Link to="/favorites" onClick={handleCloseMenu}>Favoritos</Link></li>
          <li><Link to="/login" onClick={handleCloseMenu}>Conta</Link></li>
        </MenuList>
      </nav>
    </Container>
  );
}
