import './App.css';
import Buttons from './components/Buttons';
import Display from './components/Display';

function App() {
  return (
    <>
      <h1 className='Heading'>Calculator. </h1>

      <div>
        <Display></Display>
      </div>
      <Buttons></Buttons>

    </>
  );
}

export default App;
