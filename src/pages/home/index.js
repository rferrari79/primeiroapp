import React, {lazy, Suspense, useState} from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/header/header";
// import Profile from "../../components/profile/profile";
import './styles.css';
import Video from '../../assets/video.mp4'
import Cards from "../../components/cards";

function Home(){
    // const produtos = [
    //     {nome: 'Batedeira', id: 20},
    //     {nome: 'Ventilador', id: 22},
    //     {nome: 'Computador', id: 30}
    // ]

    return (
        <>
            <Header />
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src={Video} />
                        Seu navegador nao possui suporte para videos.
                    </video>                
                    <div id='sinopse'>
                        <p className='description'>
                            Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.
                        </p>
                        <button className='button'>Comprar ingresso</button>
                    </div>
                </div>
            </div>
            <Cards />
        </>
        
            /* {produtos.map((produto, index) => (
                <Link key={index} to={`detalhes/${produto.id}`}>
                    <span style={{display: 'block'}}>{produto.nome}</span>
                </Link>
            ))} */
        
    )
}

export default Home;