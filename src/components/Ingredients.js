import React from 'react';

const Ingredients = (props) => {
  return (
    <div>
      <ul>
        {
          props.ingredients.split(',').map((ingredient, i) => {
            return (
              <li
                key={i}
                className="recipe__list-item"
              >
                {ingredient}
              </li>
            )
          })
        }
      </ul>
       <p className="recipe__list-item">Recipe Added on: {(new Date()).toLocaleDateString('en-US')} </p>
    </div>
  )
}

export default Ingredients;
