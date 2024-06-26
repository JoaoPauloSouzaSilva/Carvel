import React, { useEffect, useRef } from 'react';
import './screenVender.css';


// function ScreenVender({ onLogin }) {
  function ScreenVender() {
    const button1Ref = useRef(null);
    const button2Ref = useRef(null);
    const button3Ref = useRef(null);

    useEffect(() => {
      const handleClickVender = () => {
        window.open('https://api.whatsapp.com/send/?phone=55038999063100&text=Ol%C3%A1%2C+estou+interessado+em+vender+meu+ve%C3%ADculo+atrav%C3%A9s+da+Carvel.&type=phone_number&app_absent=0', '_blank');
      };

      const handleClickDuvida = () => {
        window.open('https://api.whatsapp.com/send/?phone=55038999063100&text=Ol%C3%A1%2C+tenho+uma+d%C3%BAvida+que+gostaria+de+esclarecer.&type=phone_number&app_absent=0', '_blank');
      };

      const button1 = button1Ref.current;
      const button2 = button2Ref.current;
      const button3 = button3Ref.current;
  
      button1.addEventListener('click', handleClickVender);
      button2.addEventListener('click', handleClickVender);
      button3.addEventListener('click', handleClickDuvida);
  
      return () => {
        button1.removeEventListener('click', handleClickVender);
        button2.removeEventListener('click', handleClickVender);
        button3.removeEventListener('click', handleClickDuvida);
      };
    }, []);

  return (
    <div className="containerScreenVender">
      <div className="mainScreenVender01">
        <div className="left">
          <div className="containerTextScreenVender">
          <h1 id="titleScreenVender">
            Somos o melhor lugar para você <mark> vender seu veículo rápido</mark>.
          </h1>
          </div>
          {/* <button id="actionScreenVender01" onClick={onLogin}> */}
          <button id="actionScreenVender01" ref={button1Ref}>
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
                  <img className='imageMotivos' src="/motivo01.png" alt="Motivo 01" />
                  <p className='titleMotivos'>Milhões de compradores!</p>
                  <p className='textMotivos'>São 80 milhões de pessoas de olho na Carvel.</p>
                </li>

                <li className='motivos'>
                  <img className='imageMotivos' src="/motivo02.png" alt="Motivo 02" />
                  <p className='titleMotivos'>Planos para todos os bolsos</p>
                  <p className='textMotivos'>Escolha o melhor plano para vender e parcele em até 12x.</p>
                </li>

                <li className='motivos'>
                  <img className='imageMotivos' src="/motivo03.png" alt="Motivo 03" />
                  <p className='titleMotivos'>Vendas com Financiamento</p>
                  <p className='textMotivos'>Aproveite os mlehores beneficios e venda financiando par pessoas físicas.</p>
                </li>

                <li className='motivos'>
                  <img className='imageMotivos' src="/motivo04.png" alt="Motivo 04" />
                  <p className='titleMotivos'>Prático, intuitivo e muito fácil!</p>
                  <p className='textMotivos'>Anuncie seu veiculo na Carvel e venda em poucos passos.</p>
                </li>

              </ul>
            </div>
          </div>
          {/* <button id="actionScreenVender02" onClick={onLogin}> */}
            <button id="actionScreenVender02" ref={button2Ref}>
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

        <div className='containerOpnioes'>
        <div className='mainOpnioes'>
            <ul className="listOpnioes">

              <li className='Opnioes'>
                <div className='topOpnioes'>
                  <img className='imageOpnioes' src="/user.png" alt="People" />
                  <img className='starsOptions' src="/estrelas.png" alt="Eavaliação" />
                </div>
                <div className='containerTextOpnioes'>
                  <p className='textOpnioes'>"Ótimo atendimento! Encontrei o carro dos meus sonhos com a ajuda atenciosa da equipe."</p>
                </div>
              </li>
                            
              <li className='Opnioes'>
                <div className='topOpnioes'>
                  <img className='imageOpnioes' src="/user.png" alt="People" />
                  <img className='starsOptions' src="/estrelas.png" alt="Eavaliação" />
                </div>
                <div className='containerTextOpnioes'>
                  <p className='textOpnioes'>"Excelente variedade de veículos e preços competitivos. Recomendo!"</p>
                </div>
              </li>
                            
              <li className='Opnioes'>
                <div className='topOpnioes'>
                  <img className='imageOpnioes' src="/user.png" alt="People" />
                  <img className='starsOptions' src="/estrelas.png" alt="Eavaliação" />
                </div>
                <div className='containerTextOpnioes'>
                  <p className='textOpnioes'>"A venda do meu carro foi rápida e sem complicações. Estou muito satisfeito com a minha escolha."</p>
                </div>
              </li>
                            
              <li className='Opnioes'>
                <div className='topOpnioes'>
                  <img className='imageOpnioes' src="/user.png" alt="People" />
                  <img className='starsOptions' src="/estrelas.png" alt="Eavaliação" />
                </div>
                <div className='containerTextOpnioes'>
                  <p className='textOpnioes'>"A loja possui uma equipe muito profissional e prestativa. Fiquei impressionado com o serviço oferecido."</p>
                </div>
              </li>
          
            </ul>
          </div>
        </div>

        <div className="containerDuvida">
          <h5 className="textScreenVenderDuvida">
            Ainda com dúvidas relacionadas a vender na Carvel?
          </h5>

          <button id='buttonScreenVenderWhatsapp' ref={button3Ref}>
            <img id='imageWhatsappScreenVender' src="/whatsapp.png" alt="Logo whatsapp" />
            <p id='textWhatsappScreenVender' >Acesse o SAC</p>
          </button>
        </div>

      </div>

    </div>
  );
}

export default ScreenVender;
