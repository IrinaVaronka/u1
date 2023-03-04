import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AccountList from './Components/accountList';
import NewAccount from './Components/newAccount';

function App() {




  return (
   
    <div className="App">
      <header className="App-header">

      <NewAccount />

      <AccountList />



      </header>
    </div>
    
   
  );
}

export default App;
