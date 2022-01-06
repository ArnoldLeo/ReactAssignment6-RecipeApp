import React, { useState } from 'react'

function RecipeList(props) {

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
        },
        {
            id:3,
            name:'Dahi Puri',
            procedure:`Chop peeled potatoes, onions, tomatoes and coriander leaves finely. Keep the pooris or golgappas, green mint coriander chutney, sweet chutney and red chutney on the side. 
            Whip the curd or yogurt using a wired whisk until it is smooth. Alternatively, you can use chilled yogurt instead. Make sure the yogurt is fresh and not sour and don’t add any sugar as the sweetness will come from the tamarind date chutney.
            Arrange as many puris or golgappas as you like on a plate. Then break them from the top center using your fingers or spoon to create space for the potatoes and chutneys.
            Stuff the chopped boiled potatoes in the pooris.
            Now add the chopped onions and tomatoes on top. 
            Top the stuffed puris with green chutney, sweet chutney and red chutney. Add each chutney less or more according to your taste preferences.
            Next add the whisked curd or yogurt with a spoon. Don’t add too much of curd as it will make the puri go soggy fast. Depending upon the size and number of the puris you can add 1 to 2 tablespoons of the whisked and chilled curd.
            Sprinkle few pinches of chaat masala powder, roasted cumin powder, red chili powder and black salt or regular salt over the curd.
            Add the sev on top and make sure that each puri is covered with the sev. Finally, garnish puris with chopped coriander leaves.`,
            image:'https://cdn3.foodviva.com/static-content/food-images/snacks-recipes/dahi-puri/dahi-puri.jpg'
        }
    ])
    let sendData = (index) => {
        let dishToSend = receipes[index];
        props.getData(dishToSend);
    }
    return (
        <div>
            <div className='recipe-list col md-4 border ms-4 mt-2 px-4 py-3' style={{float:'left'}}>
                <h2>Dishes</h2>
                {receipes.map((item, idx) => {
                    return <div key={idx}>
                        <div className="card mb-4" onClick={() => sendData(idx)} style={{ width: '18rem' }}>
                            <div>{item.id}</div>
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body mb-1">
                                <h3 className="card-text">{item.name}</h3>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default RecipeList
