import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Display from './components/Display';

function App() {

  const [CalVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("")

    } else if (buttonText === "=") {
      const result = eval(CalVal);
      setCalVal(result)

    } else {
      const DisplayFinalValue = CalVal + buttonText;
      setCalVal(DisplayFinalValue)
    }
  }

  return (
    <>
      <h1 className='Heading'>Calculator. </h1>
      <div>
        <Display displayValue={CalVal}></Display>
      </div>
      <Buttons onButtonClick={onButtonClick} ></Buttons>

    </>
  );
}

export default App;
