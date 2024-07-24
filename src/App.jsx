import { useState } from 'react'
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'

function App(){

  let [calVal,setCalVal]=useState("")
  function onButtonClick(buttonText){
    if(buttonText==="C"){
      const backspace=calVal.slice(0,-1);
      setCalVal(backspace);
    }else if(buttonText==="="){
      const result=eval(calVal);
      setCalVal(result);
    }else if(buttonText==="AC"){
      setCalVal("");
    }else{
      const newDisplayValue=calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }


  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  )
}

export default App