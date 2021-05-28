import View from './View'
import * as helper from '../../Public/js/helpers'

class idealWeoghtView extends View {
  _parentElement = document.querySelector('.main')
  _errorMessage = 'We could not find that recipe, Please try another one!'
  _message = ''
  _idealWeightItem = document.querySelector('#ideal-weight')

  addHandlerRender() {
    this._idealWeightItem.addEventListener('click', this.render.bind(this))
  }

  addHandlerData(handler) {
    // Here i Used The Event Delegation
    this._parentElement.addEventListener('click', (e) => {
      if (e.target.classList.contains('ideal-weight--btn')) {
        handler()
      }
    })
  }

  getQueryData() {
    //get Query take class inputs and return me a table of inputs Values
    return helper.getQuery('idealweight-inputs')
  }

  _generateView = function () {
    return `
    <div class="card">
        <div class="card-header">
            <h3>Ideal Weight</h3>
            <select name="gender" id="gender" class="idealweight-inputs">
            <option value="female">Female</option>
            <option value="male">Male</option>
            </select>
            <input type="number" name="weight" id="weight" placeholder="weight" class="idealweight-inputs"/>
            <input type="number" name="height" id="height" placeholder="height" class="idealweight-inputs"/>
            <button class="ideal-weight--btn">
            Search
            <span class="las la-arrow-right"></span>
            </button>
        </div>
    </div>

`
  }

  _previewData = function (data) {
    const bmi = data.bmi
    let resImg = ''
    if (document.contains(document.querySelector('.card-body'))) {
      document.querySelector('.card-body').remove()
    }
    const previewResult = `
    <div class="card">
        <div class="card-body">
            <div class="ideal-weight--items">
                <div class="fat--color macro--amount">
                    <p>HAMWI Formula</p>
                    <p>${data.Hamwi.toFixed(2)} Kg</p>
                </div>
                <div class="protein--color macro--amount">
                    <p>DEVINE Formula</p>
                    <p>${data.Devine.toFixed(2)} Kg</p>
                </div>
                <div class="carbs--color macro--amount">
                    <p>MILLER Formula</p>
                    <p>${data.Miller.toFixed(2)} Kg</p>
                </div>
                <div class="calories--color macro--amount">
                    <p>ROBINSON Formula</p>
                    <p>${data.Robinson.toFixed(2)} Kg</p>
                </div>
            </div>
        </div>
    </div>`
    this._parentElement.insertAdjacentHTML('beforeEnd', previewResult)
  }
}

export default new idealWeoghtView()
