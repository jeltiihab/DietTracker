import * as model from './model.js'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import recipeAnalyseView from './views/recipeAnalyseView.js'

const _container = document.querySelector('.card')

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

// Here i used Event delegation
// _container.addEventListener('click', function (e) {
//   if (e.target.classList.contains('serachRecipe--btn')) controlRecipeInfos()
// })

recipeAnalyseView.addHandlerData(controlRecipeInfos)
recipeAnalyseView.addHandlerRender()

// init()
