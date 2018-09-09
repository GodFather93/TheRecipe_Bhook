import React from 'react';

const EditRecipe = (props) => {
  return (
      <div className="recipe__edit">
        <button
          className="recipe__button"
          onClick={(e) => {
            props.openEditRecipeModal(props.index);
          }
        }
        >
          Edit
        </button>
      </div>
  )
}

export default EditRecipe;