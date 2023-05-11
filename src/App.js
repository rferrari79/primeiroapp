import React from 'react';
import Home from './pages/home';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Detalhes from './pages/detalhes/detalhes';
// import Button from './components/button/button';
//import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

function App() {
  


  //  const [carregando, setCarregando] = useState(true)
  //  const [contador, setContador] = useState(0)

  //  const callBack = useCallback(() => {
  //     console.log('qualquer coisa')
  //  }, [])

  //  const valorMemorizado = useMemo(() => {
  //     return "Qualquer coisa"
  //  }, [])

  //  console.log(valorMemorizado)

//   const video = useRef();

//  function callBack() {
//   console.log(video.current)
//  }
  
//   useEffect(() => {    
//   }, [])

//   useEffect(() => {
//     console.log('Carregando')
  
//     return() => {


//     }  
  
//   }, [carregando])

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contato' element={<Contato />}/>
          <Route path='/fotos' element={<Fotos />}/>
          <Route path='/detalhes/:id' element={<Detalhes />}/>
        </Routes>
      </BrowserRouter>






        /* {carregando ? <span>carregando...</span> 
        :
        <div> 
          <button onClick={() => setContador(contador + 1)}>Adicionar</button>
          <span>{contador}</span>
        </div>
        }
        <button onClick={() => callBack()}>{carregando ? 'Carregar site' : 'Voltar para carregamento'}</button>
        <Button name='Alterar valor' active onClick={setContador} /> */
  );  

  //   function evento() {
  //     alert('O evento foi disparado')
  //   }

  //   window.addEventListener('scroll', () => console.log('Evento ocorreu'))

  // return (
  //   <div style={{height: '200vh'}}>
  //     <Header />
  //     <Button onClick={() => evento()} name='Botao 1' active />
  //     <Button name='Botao 2' />
  //     <Button name='Botao 3' />
  //     <span onClick={() => evento()}> </span>
  //   </div>
  // );
}

export default App;
