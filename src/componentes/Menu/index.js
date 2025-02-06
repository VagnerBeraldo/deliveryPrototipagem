import { useState } from "react";
import './menu.css';

const Menu = () => {
  const updateMenu = () => {
    const menu = document.getElementById('menu');
    if (menu) {
      menu.classList.toggle('open');
    }
  };

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav id="menu">
      <input type="checkbox" id="responsive-menu" onClick={updateMenu} />
      <label htmlFor="responsive-menu"></label>
      <ul>
        <li><a href="/">Espaço</a></li>
        
        
        <li>
          <a 
            className="dropdown-arrow" 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("cardapio");
            }}
          >
            Cardápio
          </a>
          {activeDropdown === "cardapio" && (
            <ul className="sub-menus">
              <li><a href="/">Entrada</a></li>
              <li><a href="/">Prato Principal</a></li>
              <li><a href="/">Sobremesa</a></li>
              <li><a href="/">Bebidas</a></li>
            </ul>
          )}
        </li>

        <li><a href="/">Sobre nós</a></li>

        
        <li>
          <a 
            className="dropdown-arrow" 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("servicos");
            }}
          >
            Serviços
          </a>
          {activeDropdown === "servicos" && (
            <ul className="sub-menus">
              <li><a href="/">Delivery</a></li>
              <li><a href="/">Reserva de Mesa</a></li>
              <li><a href="/">Jantar Romântico</a></li>
            </ul>
          )}
        </li>

        <li><a href="/">Fale conosco</a></li>
      </ul>
    </nav>
  );
};

export default Menu;

