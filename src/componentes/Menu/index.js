import './menu.css';

const Menu = () => {
  const updateMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
  };

  return (
    
      <nav id='menu'>
        <input type='checkbox' id='responsive-menu' onClick={updateMenu} />
        <label htmlFor='responsive-menu'></label>
        <ul>
          <li><a href='/'>Espaço</a></li>
          <li>
            <a className='dropdown-arrow' href='/'>Cardápio</a>
            <ul className='sub-menus'>
              <li><a href='/'>Entrada</a></li>
              <li><a href='/'>Prato Principal</a></li>
              <li><a href='/'>Sobremesa</a></li>
              <li><a href='/'>Bebidas</a></li>
            </ul>
          </li>
          <li><a href='/'>Sobre nós</a></li>
          <li>
            <a className='dropdown-arrow' href='/'>Serviços</a>
            <ul className='sub-menus'>
              <li><a href='/'>Delivery</a></li>
              <li><a href='/'>Reserva de Mesa</a></li>
              <li><a href='/'>Jantar Romântico</a></li>
            </ul>
          </li>
          <li><a href='/'>Fale conosco</a></li>
        </ul>
      </nav>
  );
};

export default Menu;
