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
                <img className="LogoMarca" src="/logo_Jepp.png" alt="Logo Jeep" />
                <img className="LogoMarca" src="/logo_Fiat.png" alt="Logo Fiat" />
                <img className="LogoMarca" src="/logo_Hyundai.png" alt="Logo Hyundai" />
            </div>
          </div>
        </div>
      </div>

      <div className='containerCategorias_01'>
        <div className='containerCategorias_02'>
          <h4 className='titleContainerCategorias'>Categorias</h4>
          <div className='mainCategorias'>
            <div className='containerButtonCategorias'>
                <div className='capaCategoria'>
                  <img  className="imgCapa" src="/hatches.png" alt="" />
                  <p className='titleCategoria'>Hatches</p>
                </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ScreenMain;
