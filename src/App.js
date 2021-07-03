import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import EditPage from './pages/EditPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <BrowserRouter>
        <Navbar/>
        
        <Switch>
        <Route exact path='/'  component={ HomePage }/>
        <Route exact path='/edit' component={ EditPage }/> 
        </Switch>
       </BrowserRouter> 


      </header>
    </div>
  );
}

export default App;
