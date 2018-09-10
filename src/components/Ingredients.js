import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
const Ingredients = (props) => {
  return (
    <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: 800 } : {})}
          ><div>
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
    </div></Grow>
  )
}

export default Ingredients;
