
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{id:1 , name: "Joao", email: "teste@tes.com", bio:"Estudante", role: "usuario"}}/>
      

    </div>
  );
}

export default App;
