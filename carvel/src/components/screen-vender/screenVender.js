import './screenVender.css';


function ScreenVender() {
  return (
    <div className="containerScreenVender">
      <div className="mainScreenVender01">
        <div className="left">
          <div className="containerTextScreenVender">
          <h1 id="titleScreenVender">
            Somos o melhor lugar para você <mark> vender seu veiculo rápido</mark>.
          </h1>
          </div>
          <button id="actionScreenVender01">
            Vender Veiculo
          </button>  
        </div>
        <div className="right">
          <img id="carrosScreenVender" src="/carros.png" alt="Carros" />
        </div>
      </div>

      <div className="mainScreenVender02">
          <h4 className="textScreenVender">
            <mark>Motivos de sobra</mark> para você vender seu carro aqui.
          </h4>

          <div className="containerMotivos">
            <div className='mainMotivos'>
              <ul className="listMotivos">

                <li className='motivos'>
                  <img className='imageMotivos' src="/motivo02.png" alt="Motivo 01" />
                  <p className='titleMotivos'>Milhões de compradores!</p>
                  <p className='textMotivos'>São 80 milhões de pessoas de olho na Carvel.</p>
                </li>

                <li className='motivos'>
                  <img className='imageMotivos' src="/motivo02.png" alt="Motivo 02" />
                  <p className='titleMotivos'>Planos para todos os bolsos</p>
                  <p className='textMotivos'>Escolha o melhor plano para vender e parcele em até 12x.</p>
                </li>

                <li className='motivos'>
                  <img className='imageMotivos' src="/motivo02.png" alt="Motivo 03" />
                  <p className='titleMotivos'>Vendas com Financiamento</p>
                  <p className='textMotivos'>Aproveite os mlehores beneficios e venda financiando par pessoas físicas.</p>
                </li>

                <li className='motivos'>
                  <img className='imageMotivos' src="/motivo02.png" alt="Motivo 04" />
                  <p className='titleMotivos'>Prático, intuitivo e muito fácil!</p>
                  <p className='textMotivos'>Anuncie seu veiculo na Carvel e venda em poucos passos.</p>
                </li>

              </ul>
            </div>
          </div>
          <button id="actionScreenVender02">
            Vender Veiculo
          </button>
      </div>

      <div className='maincreenVender03'>
        <h4 className="textScreenVender">
          <mark>Opiniões de quem já vendeu</mark> por aqui.
        </h4>

        <div className='containerOpnioes'>
        <div className='mainOpnioes'>
            <ul className="listOpnioes">
              <li className='Opnioes'>
                <div className='topOpnioes'>
                  <img className='imageOpnioes' src="/user.png" alt="People" />
                  <img className='starsOptions' src="/estrelas.png" alt="Eavaliação" />
                </div>
                <div className='containerTextOpnioes'>
                  <p className='textOpnioes'>"Já vendi e comprei carros pela Carvel. Tudo muito tranquilo e seguro."</p>
                </div>
              </li>

              <li className='Opnioes'>
                <div className='topOpnioes'>
                  <img className='imageOpnioes' src="/user.png" alt="People" />
                  <img className='starsOptions' src="/estrelas.png" alt="Eavaliação" />
                </div>
                <div className='containerTextOpnioes'>
                  <p className='textOpnioes'>"Creio ser o melhor meio de anuncio automotivo."</p>
                </div>
              </li>

              <li className='Opnioes'>
                <div className='topOpnioes'>
                  <img className='imageOpnioes' src="/user.png" alt="People" />
                  <img className='starsOptions' src="/estrelas.png" alt="Eavaliação" />
                </div>
                <div className='containerTextOpnioes'>
                  <p className='textOpnioes'>"Tive experiência anterior na venda de um outro carro meu e foi muito rápido e descomplicado."</p>
                </div>
              </li>

              <li className='Opnioes'>
                <div className='topOpnioes'>
                  <img className='imageOpnioes' src="/user.png" alt="People" />
                  <img className='starsOptions' src="/estrelas.png" alt="Eavaliação" />
                </div>
                <div className='containerTextOpnioes'>
                  <p className='textOpnioes'>"Facilidade de cadastro e informações mercadológicas sobre o preço praticado na minha cidade."</p>
                </div>
              </li>

              

            </ul>
          </div>
        </div>

        <div className="containerDuvida">
          <h5 className="textScreenVenderDuvida">
            Ainda com dúvidas relacionadas a vender na Carvel?
          </h5>

          <button id='buttonScreenVenderWhatsapp'>
            <img id='imageWhatsappScreenVender' src="/whatsapp.png" alt="Logo whatsapp" />
            <p id='textWhatsappScreenVender' >Acesse o SAC</p>
          </button>
        </div>

      </div>

    </div>
  );
}

export default ScreenVender;
