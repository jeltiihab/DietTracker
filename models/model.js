import * as config from './config.js.js'
import recipeVisualisezView from './views/recipeAnalyseView.js.js'
import * as helpers from './helpers.js.js'
import macrosAmountView from './views/macrosAmountView.js.js'
import bmiView from './views/bmiView.js.js'
import idealweight from './views/idealWeightView.js.js'

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
  // 2) Send AJAX Request
  $.ajax(settings).done(function (response) {
    recipeVisualisezView._previewWidget(response)
  })
}
export const macrosAmount = async function (
  age,
  height,
  weight,
  gender,
  activityLevel,
  goal,
) {
  // 1) getting AJAX settings
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://fitness-calculator.p.rapidapi.com/macrocalculator?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activityLevel}&goal=${goal}`,
    method: 'GET',
    headers: {
      'x-rapidapi-key': '68e5644d44mshc0371b0ca9bc9acp1eb841jsna4afdd271085',
      'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
    },
  }
  // 2) Send AJAX Request
  return $.ajax(settings).done(function (response) {
    macrosAmountView._previewData(response)
  })
}

export const bmi = async function (age, weight, height) {
  // 1) getting AJAX settings
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`,
    method: 'GET',
    headers: {
      'x-rapidapi-key': '68e5644d44mshc0371b0ca9bc9acp1eb841jsna4afdd271085',
      'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
    },
  }

  $.ajax(settings).done(function (response) {
    bmiView._previewData(response)
  })
}

export const idealWeight = async function (gender, weight, height) {
  // 1) getting AJAX settings
  const settings = {
    async: true,
    crossDomain: true,
    url: `https://fitness-calculator.p.rapidapi.com/idealweight?gender=${gender}&weight=${weight}&height=${height}`,
    method: 'GET',
    headers: {
      'x-rapidapi-key': '68e5644d44mshc0371b0ca9bc9acp1eb841jsna4afdd271085',
      'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
    },
  }

  $.ajax(settings).done(function (response) {
    idealweight._previewData(response)
  })
}
