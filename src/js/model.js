import * as config from './config.js'
import recipeVisualisezView from './views/recipeVisualizerView.js'

export const getRecipeInfos = function (
  query,
  servings = config.DEFAULT_SERVINGS,
) {
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

  $.ajax(settings).done(function (response) {
    //console.log(response)
    recipeVisualisezView._previewWidget(response)
  })
}
