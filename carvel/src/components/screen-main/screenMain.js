import './screenMain.css';

function ScreenMain() {
  return (
    <div className="containerScreenMain">
      <div className='containerMarcas_01'>
        <div className='containerMarcas_02'>
          <h4 className='titleContainerMarcas'>Revendedor</h4>
          <div className='mainMarcas'>
            <div className='containerButtonMarcas'>
                <img className="LogoMarca" src="/logo_Ram.png" alt="Logo RAM" />
                <img className="LogoMarca" src="/logo_Ram.png" alt="Logo RAM" />
                <img className="LogoMarca" src="/logo_Ram.png" alt="Logo RAM" />
                <img className="LogoMarca" src="/logo_Ram.png" alt="Logo RAM" />
                <img className="LogoMarca" src="/logo_Ram.png" alt="Logo RAM" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenMain;
