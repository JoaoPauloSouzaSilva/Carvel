import React, { useState, useEffect } from 'react';
import './login.css';



function Login() {
  const [Key, setKey] = useState(0);
  const [VisibilityEntrar, setVisibilityEntrar] = useState(false);
  const [VisibilityCriarConta, setVisibilityCriarConta] = useState(false);

  useEffect(() => {
    setVisibilityEntrar(Key === 0);
    setVisibilityCriarConta(Key === 1);
  }, [Key]);

  const Route = () =>{
      if (VisibilityEntrar === true) {
        setKey(1);
      } else{
        setKey(0);
      }
  }

  return (
    <div className="containerLogin">

      {VisibilityEntrar &&
        <div className='areaLogin'>

          <h3 className='titleLogin'>Fazer Login</h3>

          <div className='containerCampoTextLogin'>
            <label htmlFor="email" className='labelTextLogin'>Email</label>
            <input type="email" name="email" id="email" className="campoTextLogin" placeholder='@carvel.com'/>
          </div>

          <div className='containerCampoTextLogin'>
            <label htmlFor="password" className='labelTextLogin'>Senha</label>
            <input type="password" name="password" id="password" className="campoTextLogin" placeholder='Senha'/>
          </div>

          <div className='containerButtonsLogin'>
            <button className='buttonMudarTela' onClick={Route}>Criar conta</button>
            <button className="buttonLogin">Entrar</button>
          </div>

          <div className=' containerComunicado'>
            <p className="comunicado"> Ao prosseguir você está ciente e concorda em receber comunicações da Carvel.</p>
          </div>


        </div>
      }

      {VisibilityCriarConta && 
        <div className='areaCriarConta'>
          <h3 className='titleLogin'>Criar Conta</h3>

          <div className='containerCampoTextLogin'>
            <label htmlFor="name" className='labelTextLogin'>Nome</label>
            <input type="text" name="name" id="name" className="campoTextLogin" placeholder='Carvel'/>
          </div>

          <div className='containerCampoTextLogin'>
            <label htmlFor="email" className='labelTextLogin'>Email</label>
            <input type="email" name="email" id="email" className="campoTextLogin" placeholder='@carvel.com'/>
          </div>

          <div className='containerCampoTextLogin'>
            <label htmlFor="phone" className='labelTextLogin'>Telefone</label>
            <input type="tel" name="phone" id="phone" className="campoTextLogin" placeholder='(00) 00000-0000'/>
          </div>

          <div className='containerCampoTextLogin'>
            <label htmlFor="password" className='labelTextLogin'>Senha</label>
            <input type="password" name="password" id="password" className="campoTextLogin" placeholder='Senha'/>
          </div>

          <div className='containerCampoTextLogin'>
            <label htmlFor="password" className='labelTextLogin'>Confirmar Senha</label>
            <input type="password" name="password" id="password" className="campoTextLogin" placeholder='Senha'/>
          </div>

          <div className='containerButtonsLogin'>
            <button className='buttonMudarTela' onClick={Route}>Já tenho uma Conta</button>
            <button className="buttonLogin">Criar Conta</button>
          </div>

          <div className=' containerComunicado'>
            <p className="comunicado"> Ao prosseguir você está ciente e concorda em receber comunicações da Carvel.</p>
          </div>

        </div>
      }
    </div>
  );
}

export default Login;
