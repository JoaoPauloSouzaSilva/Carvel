import React from 'react';
import './navbar.css';

function NavBar({Navigation}) {
  return (
    <div className="container">

      <img id="logo" src="/logo.png" alt="Logo Carvel" onClick={() => Navigation(0)}/>


      <div className="container-options-navigation">
        <div className="options-navigation">
          <ul id='listOptionsNavBar'>
            <li className='optionsNavBar' onClick={() => Navigation(0)}>Início</li>
            <li className='optionsNavBar' onClick={() => Navigation(1)}>Comprar</li>
            <li className='optionsNavBar' onClick={() => Navigation(2)}>Vender</li>
            <li className='optionsNavBar' onClick={() => Navigation(3)}>Serviços</li>
          </ul>
        </div>
      </div>

     <div className="option-login">
        {/* <button id="button-login" onClick={() => Navigation(4)}> */}
        <button id="button-login">
          <img id="icon-user" src="/user.png" alt="Login" />
          <p>Entrar</p>
        </button>
        {/* https://www.flaticon.com/br/icone-gratis/do-utilizador_8238768?term=usuario&page=1&position=11&origin=search&related_id=8238768 */}
     </div>


    </div>
  );
}

export default NavBar;
