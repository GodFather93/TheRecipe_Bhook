import React from 'react';
import Modal from 'react-modal';
import Grow from '@material-ui/core/Grow';

const AddRecipeModal = (props) => {
  return (

    <Modal
      isOpen={props.addModalOpen}
      onRequestClose={props.handleCloseAdd}
      className='modal'
    >

      <h1 className='modal__title'>Add a recipe</h1>
      <div className='modal__body'>
        <form onSubmit={props.addRecipe}>
          <label
            className='modal__label'
            htmlFor='recipeInput'
          >
            Recipe
          </label>
          <input
            name='recipeInput'
            type='text'
            className='modal__text-input'
            placeholder='Recipe name'
            required
          />
          <label
            className='modal__label'
            htmlFor='ingredientsInput'
          >
            Ingredients Description
          </label>
          <input
            name='ingredientsInput'
            type='text'
            className='modal__text-input'
            placeholder='Ingredients should be comma separated'
            required
          />
          <button className='modal__confirm-button'>Add</button>
          <button className='modal__reject-button' onClick={(e) => {
            e.preventDefault;

            props.handleCloseAdd(props.index);
            }}
          >
            Cancel
          </button>
        </form>
      </div>

    </Modal>
  )
}

export default AddRecipeModal;
