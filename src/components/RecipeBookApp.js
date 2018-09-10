import React from 'react';
import Header from './Header';
import Recipes from './Recipes';
import AddRecipeModal from './AddRecipeModal';
import EditRecipeModal from './EditRecipeModal';
import Zoom from '@material-ui/core/Zoom';
import Slide from '@material-ui/core/Slide';
export default class RecipeBookApp extends React.Component {
  state = {
    addModalOpen: false,
    recipes: [
      {
        name: 'Chilli rice',
        ingredients: 'brown rice, minced beef, onions, chilli powder, jalapenos, too much cumin, cocoa powder, kidney beans, corn, sour cream, cerveza',
        visible: false,
        editModalOpen: false
      },
      {
        name: 'Mashed Potatoes',
        ingredients: 'Large brushed sebagos, full cream, extra virgin olive oil, butter, black pepper',
        visible: false,
        editModalOpen: false
      }
    ]
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('recipes');
      const recipes = JSON.parse(json);
      if (recipes) {
        this.setState(() => ({
          addModalOpen: false,
          recipes
        }));
      }
    } catch (e) {
      // Do nothing
    }

  }
  componentDidUpdate(prevProps, prevState) {
      const json = JSON.stringify(this.state.recipes);
      localStorage.setItem('recipes', json);
  }

  handleAdd = () => {
    this.setState(() => ({ addModalOpen: true }));
  }
  handleCloseAdd = () => {
    this.setState(() => ({ addModalOpen: false }));
  }
  addRecipe = (e) => {
    e.preventDefault();

    const name = e.target.elements.recipeInput.value.trim();
    const ingredients = e.target.elements.ingredientsInput.value.trim();

    const recipe = {
      name,
      ingredients,
      visible: false
    }

    const stateCopy = Object.assign({}, this.state);
    stateCopy.recipes = stateCopy.recipes.slice();
    stateCopy.recipes.push(recipe);
    stateCopy.addModalOpen = false;
    this.setState(() => (stateCopy))
  }
  openEditRecipeModal = (index) => {
    const stateCopy = Object.assign({}, this.state);
    stateCopy.recipes = stateCopy.recipes.slice();
    stateCopy.recipes[index].editModalOpen = true;
    this.setState(() => stateCopy);
  }
  handleCloseEditModal = (index) => {
    const stateCopy = Object.assign({}, this.state);
    stateCopy.recipes = stateCopy.recipes.slice();
    stateCopy.recipes.forEach((recipe) => {recipe.editModalOpen = false});
    this.setState(() => stateCopy);
  }
  handleVisibility = (key) => {

    const stateCopy = Object.assign({}, this.state);
    stateCopy.recipes = stateCopy.recipes.slice();

    stateCopy.recipes.forEach((recipe) => {
      if (recipe.name !== stateCopy.recipes[key].name) {
        recipe.visible = false;
      }
    });

    stateCopy.recipes[key] = Object.assign({}, stateCopy.recipes[key]);
    stateCopy.recipes[key].visible = !stateCopy.recipes[key].visible;
    this.setState(() => (stateCopy));
  }
  handleDeleteRecipe = (index) => {
    const stateCopy = Object.assign({}, this.state);
    stateCopy.recipes.splice(index, 1);
    this.setState(() => (stateCopy));
  }
  handleEditRecipe = (e) => {
    e.preventDefault();

    const defaultName = e.target.elements.recipeInput.defaultValue;
    const name = e.target.elements.recipeInput.value.trim();
    const ingredients = e.target.elements.ingredientsInput.value.trim();
    const index = this.state.recipes.findIndex((recipe) => {
      return recipe.name === defaultName;
    });

    const recipe = {
      name,
      ingredients,
      visible: true,
      editModalOpen: false
    }

    const stateCopy = Object.assign({}, this.state);
    stateCopy.recipes.splice(index, 1, recipe);
    stateCopy.recipes.forEach((recipe) => {recipe.editModalOpen = false});
    this.setState(() => (stateCopy))

  }


  render() {
    return (
      <div className="container">
        <Header />

        <Recipes
          {...this.state}
          handleVisibility={this.handleVisibility}
          handleEditRecipe={this.handleEditRecipe}
          handleDeleteRecipe={this.handleDeleteRecipe}
          openEditRecipeModal={this.openEditRecipeModal}
          handleCloseEditModal={this.handleCloseEditModal}
        />
        <Slide direction="down" in={true} mountOnEnter unmountOnExit style={{ transitionDelay: 1600}}><button
          className='container__add-recipe-button'
          name='add-recipe'
          onClick={this.handleAdd}
        >
          Add Recipe
        </button></Slide>
        <AddRecipeModal
          {...this.state}
          handleCloseAdd={this.handleCloseAdd}
          addRecipe={this.addRecipe}
        />
      </div>
    )
  }
}
