import React from 'react'
import './style.css'

function Recipes({ dish }) {
  console.log('recipe', dish);
  // const{dish}=dish
  return (
    <div>
      <h1 className='mt-2 dish-head'>Recipe</h1>
      <div className="dish-card border mt-3">
        <img src={dish.image} className="card-img-top" alt={dish.name} />
        <div className="card-body">
          <h3>{dish.name}</h3>
          <p className="card-text">{dish.procedure}</p>
        </div>
      </div>
    </div>
  )
}

export default Recipes
