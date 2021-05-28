import View from './View'
import * as helper from '../../Public/js/helpers.js'
import underweight from 'url:../../Public/img/underweight.svg'
import normalweight from 'url:../../Public/img/normalweight.svg'
import overweight from 'url:../../Public/img/overweight.svg'
import obeseclassone from 'url:../../Public/img/obeseclassone.svg'
import obeseclasstwo from 'url:../../Public/img/obeseclasstwo.svg'
import obeseclassthree from 'url:../../Public/img/obeseclassthree.svg'

class bmiView extends View {
  _parentElement = document.querySelector('.main')
  _errorMessage = 'We could not find that recipe, Please try another one!'
  _message = ''
  _bmiListItem = document.querySelector('#bmi')

  addHandlerRender() {
    this._bmiListItem.addEventListener('click', this.render.bind(this))
  }

  addHandlerData(handler) {
    // Here i Used The Event Delegation
    this._parentElement.addEventListener('click', (e) => {
      if (e.target.classList.contains('bmi--btn')) {
        handler()
      }
    })
  }

  getQueryData() {
    //get Query take class inputs and return me a table of inputs Values
    return helper.getQuery('bmi--inputs')
  }

  _generateView = function () {
    return `
    <div class="card">
      <div class="card-header">
          <h3>Marcos amounts</h3>
          <input type="number" name="age" id="age" placeholder="age" class="bmi--inputs">
          <input type="number" name="weight" id="weight" placeholder="weight" class="bmi--inputs">
          <input type="number" name="height" id="height" placeholder="height" class="bmi--inputs">
          <button class="bmi--btn">
          Search
          <span class="las la-arrow-right"></span>
          </button>
      </div>
    </div>`
  }

  _previewData = function (data) {
    const bmi = data.bmi
    let resImg = ''
    if (document.contains(document.querySelector('.card-body'))) {
      document.querySelector('.card-body').remove()
    }
    switch (true) {
      case data.bmi < 18:
        resImg = underweight
        break
      case data.bmi > 18 && data.bmi < 24.9:
        resImg = normalweight
        break
      case data.bmi > 24.9 && data.bmi < 29.9:
        resImg = overweight
        break
      case data.bmi > 29.9 && data.bmi < 34.9:
        resImg = obeseclassone
        break
      case data.bmi > 34.9 && data.bmi < 39.9:
        resImg = obeseclasstwo
        break
      case data.bmi > 40:
        resImg = obeseclassthree
        break
      default:
        break
    }
    const previewResult = `
    <div class="card">
      <div class="card-body">
          <div class="bmi--result">
              <p>${data.bmi.toFixed(2)}</p>
              <p>${data.health}</p> 
              <div><img class="bmi-img" src=${resImg} alt=""></div> 
          </div>
      </div>
    </div>`
    this._parentElement.insertAdjacentHTML('beforeEnd', previewResult)
  }
}

export default new bmiView()
