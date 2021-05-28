import proteinimg from 'url:../../Public/img/proteins.svg'
import carbsimg from 'url:../../Public/img/carbs.svg'
import fatimg from 'url:../../Public/img/fat.svg'
import caloriesimg from 'url:../../Public/img/calories.svg'
import View from './View'
import * as helper from '../../Public/js/helpers'

class macrosAmountView extends View {
  _parentElement = document.querySelector('.main')
  _errorMessage = 'We could not find that recipe, Please try another one!'
  _message = ''
  _macrosAmountItem = document.querySelector('#macros-amounts')

  addHandlerRender() {
    this._macrosAmountItem.addEventListener('click', this.render.bind(this))
  }

  addHandlerData(handler) {
    // Here i Used The Event Delegation
    this._parentElement.addEventListener('click', (e) => {
      if (e.target.classList.contains('serachMacrosAmount--btn')) {
        handler()
      }
    })
  }

  // Getting parameters from the View then return a table of parameters to the controller
  getQueryData() {
    //get Query take class inputs and return me a table of inputs Values
    return helper.getQuery('macros-data')
  }

  _generateView = function () {
    return `
    <div class="card">
        <div class="card-header">
        <h3>Marcos amounts</h3>
        <input type="number" name="age" id="age" placeholder="age" class="numbers--inputs macros-data" min='1'>
        <input type="number" name="height" id="height" placeholder="height" class="numbers--inputs macros-data" min='1'>
        <input type="number" name="weight" id="weight" placeholder="weight" class="numbers--inputs macros-data" min='1'>
        <select name="gender" id="gender" class="macros-data">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <select name="activity" id="activity" class="macros-data">
          <option value="1">BMR</option>
          <option value="2">little or no exercise</option>
          <option value="3">Exercise 1-3 times/week</option>
          <option value="4">Exercise 4-5 times/week</option>
          <option value="5">Daily exercise or intense exercise 3-4 times/week</option>
          <option value="6">Intense exercise 6-7 times/week</option>
          <option value="7">Very intense exercise daily, or physical job</option>
        </select>
        <select name="goal" id="goal" class="macros-data">
          <option value="maintain">maintain weight</option>
          <option value="mildlose">Mild weight loss</option>
          <option value="weightlose">Weight loss</option>
          <option value="extremelose">Extreme weight loss</option>
          <option value="mildgain">Mild weight gain</option>
          <option value="weightgain">Weight gain</option>
          <option value="extremegain">Extreme weight gain</option>
        </select>
        <button class="serachMacrosAmount--btn">
          Search
          <span class="las la-arrow-right"></span>
        </button>
    </div>
  </div>`
  }

  _previewData = function (data) {
    if (document.contains(document.querySelector('.card-body'))) {
      document.querySelector('.card-body').remove()
    }
    const previewResult = `
    <div class="card">
    <div class="card-body">
        <div class="macro--amounts">
            <div class="macro--amount">
              <p>Balanced Diet</p>
              <div class="macro--items">
                <div class="macro--item protein--color">
                  <img src=${proteinimg} alt="">
                  <p>PROTEIN</p>
                  <span>${data.balanced.protein.toFixed(0)}g</span>
                </div>
                <div class="macro--item carbs--color">
                  <img src=${carbsimg} alt="">
                  <p>CARBS</p>
                  <span>${data.balanced.carbs.toFixed(0)}g</span>
                </div>
                <div class="macro--item fat--color">
                  <img src=${fatimg} alt="">
                  <p>FAT</p>
                  <span>${data.balanced.fat.toFixed(0)}g</span>
                </div>
                <div class="macro--item calories--color">
                  <img src=${caloriesimg} alt="">
                  <p>CALORIES</p>
                  <span>${data.calorie.toFixed(0)}</span>
                </div>
              </div>
            </div>
            <div class="macro--amount">
              <p>Height Protein Diet</p>
              <div class="macro--items">
                <div class="macro--item protein--color">
                  <img src=${proteinimg} alt="">
                  <p>PROTEIN</p>
                  <span>${data.highprotein.protein.toFixed(0)}g</span>
                </div>
                <div class="macro--item carbs--color">
                  <img src=${carbsimg} alt="">
                  <p>CARBS</p>
                  <span>${data.highprotein.carbs.toFixed(0)}g</span>
                </div>
                <div class="macro--item fat--color">
                  <img src="${fatimg}" alt="">
                  <p>FAT</p>
                  <span>${data.highprotein.fat.toFixed(0)}g</span>
                </div>
                <div class="macro--item calories--color">
                  <img src="${caloriesimg}" alt="">
                  <p>CALORIES</p>
                  <span>${data.calorie.toFixed(0)}</span>
                </div>
              </div>
            </div>
            <div class="macro--amount">
              <p>Low carbs Diet</p>
              <div class="macro--items">
                <div class="macro--item protein--color">
                  <img src=${proteinimg} alt="">
                  <p>PROTEIN</p>
                  <span>${data.lowcarbs.protein.toFixed(0)}g</span>
                </div>
                <div class="macro--item carbs--color">
                  <img src=${carbsimg} alt="">
                  <p>CARBS</p>
                  <span>${data.lowcarbs.protein.toFixed(0)}g</span>
                </div>
                <div class="macro--item fat--color">
                  <img src="${fatimg}" alt="">
                  <p>FAT</p>
                  <span>${data.lowcarbs.protein.toFixed(0)}g</span>
                </div>
                <div class="macro--item calories--color">
                  <img src="${caloriesimg}" alt="">
                  <p>CALORIES</p>
                  <span>${data.calorie.toFixed(0)}</span>
                </div>
              </div>
            </div>
            <div class="macro--amount">
              <p>Low fat Diet</p>
              <div class="macro--items">
                <div class="macro--item protein--color">
                  <img src=${proteinimg} alt="">
                  <p>PROTEIN</p>
                  <span>${data.lowfat.protein.toFixed(0)}g</span>
                </div>
                <div class="macro--item carbs--color">
                  <img src=${carbsimg} alt="">
                  <p>CARBS</p>
                  <span>${data.lowfat.protein.toFixed(0)}g</span>
                </div>
                <div class="macro--item fat--color">
                  <img src="${fatimg}" alt="">
                  <p>FAT</p>
                  <span>${data.lowfat.protein.toFixed(0)}g</span>
                </div>
                <div class="macro--item calories--color">
                  <img src="${caloriesimg}" alt="">
                  <p>CALORIES</p>
                  <span>${data.calorie.toFixed(0)}</span>
                </div>
              </div>
            </div>
        </div>
  </div>
  </div>`
    this._parentElement.insertAdjacentHTML('beforeEnd', previewResult)
  }
}

export default new macrosAmountView()
