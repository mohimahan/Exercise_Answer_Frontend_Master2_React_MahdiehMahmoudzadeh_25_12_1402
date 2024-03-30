import React, {useEffect, useState} from "react";
import Comp from './components/Comp'
import './styles/my-style.css'


export default function App() {
  const arrA = [];
  const arrB = [];
  const arrC = [];
  const arrD = [];

  const [dataA, setDataA] = useState([]);
  const [dataB, setDataB] = useState([]);
  const [dataC, setDataC] = useState([]);
  const [dataD, setDataD] = useState([]);
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/chairs.json")
  
    .then((response) => response.json())
    .then(json => {
      json.forEach(function(item) {
        switch (item.section) {
          case "A": 
            arrA.push(item);
            break;
          case "B": 
            arrB.push(item);
            break;
          case "C": 
            arrC.push(item);
            break;
          case "D": 
            arrD.push(item);  
        } 
      }) 
      
      setDataA(arrA);
      setDataB(arrB);
      setDataC(arrC);
      setDataD(arrD)
    }) 
  }, [])

  const updatePriceHandler = (price) => {
    setSum((prevSum) => prevSum + price );
    setCount((prevCount) => prevCount + 1);
      
  }
  
  return (
    <>
      <div className="stage">
        Stage 
      </div>

      <div className="sum-count">
        <div className="count">Count : {count}</div>

        <div className="sum">Sum : {sum}</div>
      </div>

      <div className="container">
        
        <div className="b"> 
          {dataB.map((data) => (<Comp key={data.number} number={data.number} price={data.price} updatePriceHandler={updatePriceHandler}/>))}
        </div>

        <div className="a">
          {dataA.map((data) => (<Comp key={data.number} number={data.number} price={data.price} updatePriceHandler={updatePriceHandler}/>))}
        </div>

        <div className="c">
          {dataC.map((data) => (<Comp key={data.number} number={data.number} price={data.price} updatePriceHandler={updatePriceHandler}/>))}
        </div>

        <div className="d">
          {dataD.map((data) => (<Comp key={data.number} number={data.number} price={data.price} updatePriceHandler={updatePriceHandler}/>))}
        </div> 
        
      </div>

    </>
  )

}