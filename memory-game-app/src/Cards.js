/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect,useRef} from "react";
import mikasaPic from "./imgs/mikasa.jpg";
import erenPic from "./imgs/eren.png";
import arminPic from "./imgs/armin.jpg";
import anniePic from "./imgs/annie.jpg";
import erwinPic from "./imgs/erwin.jpg";
import grishaPic from "./imgs/grisha.jpg";
import hangePic from "./imgs/hange.jpg";
import leviPic from "./imgs/levi.jpg";
import pieckPic from "./imgs/pieck.jpg";
import rienerPic from "./imgs/riener.jpg";
import sashaPic from "./imgs/sasha.jpg";
import zekePic from "./imgs/zeke.jpg";
import './cars.css'





const Card = (props)=>{
    const cardRef = useRef(null);
    useEffect(()=>{

        const element = cardRef.current;

        const handleClick = (e) => {
            e.stopPropagation();
            let selectedOne =e.target.id;

            props.changeScore(selectedOne);
          };
      
        
          element.addEventListener('click', handleClick);
      
          return () => {
            element.removeEventListener('click', handleClick);
          };
        

    })

return(
    <div ref={cardRef}  id={props.id} className="card-div" >

        <img id={props.id} style={{width:300,height:200}} src={props.imgSrc}></img>
        <h3 id={props.id} >{props.imgName}</h3>
    </div>
    
)
}


function Cards(props) {

    const [imgs, setImgs] = useState([mikasaPic, erenPic,arminPic,anniePic,erwinPic
        ,grishaPic,hangePic,leviPic,pieckPic,rienerPic,sashaPic,zekePic]);
    let cards= [];
    for (let i = 0;i < imgs.length; i++) {  

        let name = imgs[i].toString().slice(31,imgs[i].toString().indexOf('.'));
        let x = name.charAt(0).toUpperCase() + name.slice(1);
               
        cards.push(<Card changeScore={props.changeScore}  imgName={x} id={x} key={x} imgSrc={imgs[i]}></Card>)
    };
    function shuffleArray(array) {
        // Create a copy of the original array
        const shuffledArray = [...array];
      
        // Iterate over the array from the last element to the first
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          // Generate a random index between 0 and i (inclusive)
          const randomIndex = Math.floor(Math.random() * (i + 1));
      
          // Swap the elements at randomIndex and i
          [shuffledArray[randomIndex], shuffledArray[i]] = [shuffledArray[i], shuffledArray[randomIndex]];
        }
      
        return shuffledArray;
      }

    useEffect(()=>{
        setImgs((prevImgs) => shuffleArray([...prevImgs]));
        
    },[props.score]);

    return(
        
        <div className="cards-container">
           {cards}
        </div>
    )
    
};

export default Cards;