/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react';
import logo from "./logo.png";
import './header.css'

const Score = ({score,bestScore})=>{ 
   
 
    
    return(
        <div className='score-div'>
            <h5>Current Score:{score}</h5>
            <h5>Best Score :{bestScore}</h5>
        </div>
    )

}

function Header({score,bestScore}) {
    
    
    return(
        <header
         >
            <img style={{width:'5rem',
            
            }} src={logo}  ></img>
            <h2>Remember The Titan</h2> 
            <Score score={score}  bestScore={bestScore}></Score>

        </header>
    );
};
export default Header