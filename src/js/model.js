import * as config from './config.js'
import recipeVisualisezView from './views/recipeAnalyseView.js'
import * as helpers from './helpers'

//getting Recipe Ingredients nutrition this function take two parameters / Query Search / Number of Servings /
export const getRecipeInfos = async function (
  query,
  servings = config.DEFAULT_SERVINGS,
) {
  // 1) getting AJAX settings
  const settings = {
    async: true,
    crossDomain: true,
    url: `${config.BASE_URL}=${config.API_KEY}`,
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      accept: 'text/html',
    },
    data: {
      ingredientList: `${query}`,
      servings: `${servings}`,
      showBacklink: 'true',
      defaultCss: 'true',
    },
  }
  const elm = document.getElementById('results').contentDocument
  const data = await helpers.AJAX(settings)
  console.log(data)
  recipeVisualisezView._previewWidget(data, elm)

  // $.ajax(settings).done(function (response) {
  //   const elm = document.getElementById('results').contentDocument
  //   recipeVisualisezView._previewWidget(response, elm)
  // })
}
