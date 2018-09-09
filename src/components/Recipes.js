import React from 'react';
import Recipe from './Recipe';

const Recipes = (props) => {
return (
    <div>
      {props.recipes.map((recipe, i) => {
        return (
          <Recipe
            key={i}
            index={i}
            name={recipe.name}
            ingredients={recipe.ingredients}
            visible={recipe.visible}
            
            {...props}

          />

        )
      })}

    </div>
  )
}

export default Recipes;
