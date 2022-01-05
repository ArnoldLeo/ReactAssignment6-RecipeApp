import React,{useState} from 'react'
import './style.css'

function Recipes({dish}) {
  // const [dishes, setdishes] = useState({})
    console.log(dish);
  return (
    <div>
       <div className='recipes'>
            <h1>Recipe</h1>
            <div className="card dish-card mt-3">
        <img src={dish.dish.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h3>{dish.dish.name}</h3>
          <p className="card-text">{dish.dish.procedure}</p>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Recipes
