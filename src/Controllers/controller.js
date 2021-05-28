import 'core-js/stable'
import * as model from '../models/model.js'
import 'regenerator-runtime/runtime'
import * as helpers from '../../Public/js/helpers'
import home from '../views/homeView.js'
import bmiView from '../views/bmiView.js'
import idealWeightView from '../views/idealWeightView.js'
import recipeAnalyseView from '../views/recipeAnalyseView.js'
import macrosAmountView from '../views/macrosAmountView.js'

const recipeAnalyseControl = function () {
  try {
    // Move to view
    const query = document.querySelector('#searchQuery').value
    let srv = +document.querySelector('#servings').value
    // Move to view

    srv = srv === 0 ? 1 : srv
    if (!query) return

    model.getRecipeInfos(query, srv)
  } catch (err) {
    console.log(err)
  }
}

const macrosAmountControl = function () {
  try {
    model.macrosAmount(...macrosAmountView.getQueryData())
  } catch (err) {
    console.log(err)
  }
}

const bmiControl = function () {
  try {
    model.bmi(...bmiView.getQueryData())
  } catch (err) {
    console.log(err)
  }
}

const idealWeightControl = function () {
  try {
    model.idealWeight(...idealWeightView.getQueryData())
  } catch (err) {
    console.log(err)
  }
}

const init = function () {
  //
  recipeAnalyseView.addHandlerRender()
  recipeAnalyseView.addHandlerData(recipeAnalyseControl)
  //
  macrosAmountView.addHandlerRender()
  macrosAmountView.addHandlerData(macrosAmountControl)
  //
  bmiView.addHandlerData(bmiControl)
  bmiView.addHandlerRender()
  //
  idealWeightView.addHandlerRender()
  idealWeightView.addHandlerData(idealWeightControl)

  home.addHandlerRender()

  helpers.setActiveSlider()
}

init()
