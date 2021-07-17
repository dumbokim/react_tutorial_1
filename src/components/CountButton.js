import React, { useState, useEffect } from 'react';
import '../styles/CountButton.css';

// component first letter Capital! 
const CountButton = (props) => {

  // using useState
  const [currentCount, setCurrentCount] = useState(0);

  // function of clicking with useState
  const handleClick = () => {
    setCurrentCount(currentCount+props.incrementBy);
  }

  // !!!!don't forget to put the array on 2nd argument!!!!(common mistake)
  useEffect(() => {
    console.log("called");
  }, []) // [] is effected element which is considered on useEffect

  return (

    <div 
    // style can be in or out of <div></div>
    style={{
      color: 'blue',
      border: '1px solid black',
      borderRadius: '10px',
    }}>

      {/* using function of onClick */}
      <button onClick={handleClick} 
      style={{
        background: props.buttonColor,
        borderRadius: '10px',
      }}>
        +{props.incrementBy} 
      </button>

      {/* count number using useState */}
      <div className={'count-display'}>{currentCount}</div>

    </div>
  )
}


export default CountButton;