import React,{ useState } from 'react';
import './App.css';
import Header from './Header';
import Cards from './Cards';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedArray, setArray] = useState([]);

  const changeScoreOnClick = (selectedOne) => {
    if(!selectedArray.includes(selectedOne)){
      setArray((prevArray)=>[...prevArray].concat(selectedOne));
      console.log(selectedArray);
      setScore(score + 1);
      if (score>=bestScore) {
        setBestScore(bestScore+1);
      }
    }else{
      alert('Defeat')
      setScore(0);
      setArray([]);
    }
  
  };
  return (
    <div className="App">
      <Header score={score}  bestScore={bestScore}  > </Header>
    <Cards score={score} changeScore={changeScoreOnClick} ></Cards>
    </div>
  );
}

export default App;
