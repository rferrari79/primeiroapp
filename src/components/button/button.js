import React from "react";
import './styles.css'

function Button({name, active, onClick}){
    return (
        <div className='containerButton'>
            <button onClick={() => onClick(20)} className={active ? 'button' : 'disabledButton'}>{name}</button>
            <span>Dados salvados com sucesso</span>        
        </div>
        
    )
}

export default Button