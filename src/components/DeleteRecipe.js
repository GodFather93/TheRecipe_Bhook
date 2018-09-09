import React from 'react';

const DeleteRecipe = (props) => {
  return (
      <div className="recipe__delete">
        <button
          className="recipe__button"
          onClick={(e) => {
            props.handleDeleteRecipe(props.index);
          }}
        >
          Delete
        </button>
      </div>
    )
  }

export default DeleteRecipe;
