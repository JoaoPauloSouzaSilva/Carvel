import './navbar.css';

function NavBar() {
  return (
    <div className="container">

      <img id="logo" src="/logo.png" alt="Logo Carvel" />


      <div className="container-options-navigation">
        <div className="options-navigation">
          <ul id='listOptionsNavBar'>
            <li className='optionsNavBar'><button>Comprar</button></li>
            <li className='optionsNavBar'><button>Vender</button></li>
            <li className='optionsNavBar'><button>Serviços</button></li>
          </ul>
        </div>
      </div>

     <div className="option-login">
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
