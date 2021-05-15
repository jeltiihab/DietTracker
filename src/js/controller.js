import * as model from './model.js'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import recipeVisualisezView from './views/recipeVisualizerView.js'

const _container = document.querySelector('.card')
const _foodAnalyse = document.querySelector('#food-analyse')

const controlRecipeInfos = function () {
  try {
    const query = document.querySelector('#searchQuery').value
    let srv = +document.querySelector('#servings').value
    srv = srv === 0 ? 1 : srv
    if (!query) return

    model.getRecipeInfos(query, srv)
  } catch (err) {
    console.log(err)
  }
}

_container.addEventListener('click', function (e) {
  if (e.target.classList.contains('serachRecipe--btn')) controlRecipeInfos()
})

_foodAnalyse.addEventListener('click', function () {
  recipeVisualisezView.render()
})

// init()
