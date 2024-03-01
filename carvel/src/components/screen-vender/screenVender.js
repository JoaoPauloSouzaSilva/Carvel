import './screenVender.css';

function ScreenVender() {
  return (
    <div className="containerScreenVender">
      <div className="mainScreenVender01">
        <div className="left">
          <div className="containerTextScreenVender">
          <p id="textScreenVender">
            Somos o melhor lugar para você <mark> vender seu veiculo rápido</mark>.
          </p>
          </div>
          <button id="actionScreenVender">
            Vender Veiculo
          </button>  
        </div>
        <div className="right">
          <img id="carrosScreenVender" src="/carros.png" alt="." />
        </div>
      </div>

      <div className="mainScreenVender02">

      </div>

    </div>
  );
}

export default ScreenVender;
