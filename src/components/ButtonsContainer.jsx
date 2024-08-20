import styles from './ButtonsContainer.module.css'

function ButtonsContainer({onButtonClick}){
   const buttonNames =['clr','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=','.','AC'];
   return(
      <>
       <div className={styles.buttonContainer}>
         {
            buttonNames.map(buttonName=><button className={styles.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>)
         }
        </div>
      </>
   )
}
export default ButtonsContainer