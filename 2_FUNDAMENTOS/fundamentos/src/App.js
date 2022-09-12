//components 
import FirstComponent from './components/FirstComponent';

//styles / CSS
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenger from './components/Challenger';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FirstComponent/>
        <TemplateExpressions/>
        <MyComponent/>
        <Events/>
        <Challenger/>
     
      </header>
    </div>
  );
}

export default App;
