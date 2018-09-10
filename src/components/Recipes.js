import React from 'react';
import Recipe from './Recipe';
import Zoom from '@material-ui/core/Zoom';
const Recipes = (props) => {
return (
    <Zoom in={true} style={{ transitionDelay: 1000 }}><div>
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

    </div></Zoom>
  )
}

export default Recipes;
