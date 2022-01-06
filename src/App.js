import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import './components/style.css'
import RecipeList from './components/RecipeList';
import { useState } from 'react';
import Recipes from './components/Recipes';

function App() {
  const [sendDish, setsendDish] = useState(false)
  const [dish, setdish] = useState({})
  let getData = (data) => {
    // console.log(data);
    setdish(data);
    setsendDish(true);
  }
  return (
    <div className="App">
      <Router>
        <div className='row'>
          <Home />
          <br />
          <div className='col col-md-4' style={{ float: 'left'}}>
            <RecipeList getData={getData} />
          </div>
          <div className='col col-md-7' style={{ float: 'right'}} >
            {
              sendDish ? <Recipes dish={dish} /> : <div className='home-msg mt-3'>
                <h1 >Welcome to Receipe App</h1>
                <p>One place to find all the new recipes and impress your dear ones!!</p>
              </div>
            }
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
