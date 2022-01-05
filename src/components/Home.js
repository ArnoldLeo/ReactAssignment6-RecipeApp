import React, { useState } from 'react'
import Recipes from './Recipes'
import './style.css'

function Home() {
    const [dish, setdish] = useState({})
    const [receipes, setReceipes] = useState([
        {
            id: 1,
            name: 'Hyderbadi Biriyani',
            procedure: `Half boiled rice layered with fried onions, mint, cooked mutton, sealed with dough and slow cooked \'dum\' style. 
            Clean the meat. Now in a pan add meat, salt, ginger garlic paste, red chilli powder, green chilli paste, sauteed brown onions, cardamom powder, cinnamon, cumin seeds, cloves, mace, mint leaves and lemon juice.
            Mix all of these ingredients thoroughly together.
            Add curd, clarified butter, semi cooked rice, saffron, water and oil. Mix it well.
            Now apply sticky dough on the sides of the pan.
            Cover with lid to seal it and cook for about 25 minutes.
            Hyderabadi Biryani is ready to eat. Garnish it with boiled eggs, sliced carrots, cucumbers and serve hot.`,
            image: 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/r87wnsjxzu9ysekmniju'
        },
        {
            id: 2,
            name: 'Gulab Seviyan Kheer',
            procedure: `First of all, heat ghee in a pan or kadhai and roast the chopped dry fruits in it and keep aside.
            Now put vermicelli in the same pan and roast it till it becomes light golden brown. You can also use roasted vermicelli if you want.
            Add full cream milk to the vermicelli and cook it for a while. Add almond paste and cook it for a while.
            Add condensed milk and cook the kheer on low flame till it thickens. At this time, add rose syrup to it and mix it well.
            Add roasted dry fruits and mix, add rose petals and mix again.
            Remove in a serving bowl and serve`,
            image: 'https://www.cookwithkushi.com/wp-content/uploads/2021/07/IMG_8093f.jpg'
        }
    ])
let sendData=(index)=>{
    let dishToSend=receipes[index]
    // dish.push(receipes[index])
setdish({dish:dishToSend})
}
    return (
        <div>
            <header className='mt-2 border'>
                <h1>Recipes App</h1>
            </header>
            <div className='recipe-list'>
                <h2>Dishes</h2>
                {receipes.map((item, idx) => {
                    return <div  key={idx}>
                        <div className="card" onClick={()=>sendData(idx)} style={{ width: '18rem' }}>
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body mb-1">
                                <h3 className="card-text">{item.name}</h3>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div >
                <Recipes dish={dish}/>
                </div>
        </div>
    )
}

export default Home
