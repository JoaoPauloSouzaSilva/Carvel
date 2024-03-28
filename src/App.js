import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import ScreenVender from './components/screen-vender/screenVender';
import ScreenMain from './components/screen-main/screenMain';
import ScreenComprar from './components/screen-comprar/screenComprar';
import Login from './components/login/login';

function App() {

  const [KeyScreen, setKeyScreen] = useState(0);
  const [VisibilityScreenMain, setVisibilityScreenMain] = useState(false);
  const [VisibilityScreenComprar, setVisibilityScreenComprar] = useState(false);
  const [VisibilityScreenVender, setVisibilityScreenVender] = useState(false);
  const [VisibilityScreenServicos, setVisibilityScreenServicos] = useState(false);
  const [VisibilityScreenLogin, setVisibilityScreenLogin] = useState(false);

  useEffect(() => {
    setVisibilityScreenMain(KeyScreen === 0);
    setVisibilityScreenComprar(KeyScreen === 1);
    setVisibilityScreenVender(KeyScreen === 2);
    setVisibilityScreenServicos(KeyScreen === 3);
    setVisibilityScreenLogin(KeyScreen === 4);
  }, [KeyScreen]);

  const routes = (valor) => {
    setKeyScreen(valor)
  }

  const handleLogin = () => {
    setKeyScreen(4);
  };
  
  return (
    <div className="App">
     <NavBar Navigation={routes}/>

      {VisibilityScreenMain &&
      <ScreenMain/>
      }

      {VisibilityScreenComprar &&
      <ScreenComprar/>
      }

      {VisibilityScreenVender &&
        <ScreenVender onLogin={handleLogin}/>
      }

      {VisibilityScreenServicos &&
      <h1>Serviços</h1>
      }

      {VisibilityScreenLogin &&
        <Login/>
      }

    </div>
  );
}

export default App;
