import React from 'react';
import Modal from 'react-modal';

const EditRecipeModal = (props) => {
  return (
    <Modal
      isOpen={props.recipes[props.index].editModalOpen}
      onRequestClose={props.handleCloseEditModal}
      className='modal'
    >
      <h1 className='modal__title'>Edit the recipe</h1>
      <div className='modal__body'>
        <form onSubmit={props.handleEditRecipe}>
          <label
            className='modal__label'
            htmlFor='recipeInput'
          >
            Recipe
          </label>
          <input
            name='recipeInput'
            className='modal__text-input'
            type='text'
            placeholder='Recipe name'
            defaultValue={props.recipes[props.index].name}
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
            className='modal__text-input'
            type='text'
            placeholder='Ingredients should be comma separated'
            defaultValue={props.ingredients}
            required
          />
          <button className='modal__confirm-button'>Save edit</button>
          <button className='modal__reject-button' onClick={(e) => {
            e.preventDefault;

            props.handleCloseEditModal(props.index);
            }}
          >
            Cancel edit
          </button>
        </form>
      </div>

    </Modal>
  )
}

export default EditRecipeModal;
