import View from './View'

class recipeAnalyseView extends View {
  _parentElement = document.querySelector('.main')
  _errorMessage = 'We could not find that recipe, Please try another one!'
  _message = ''
  _AnalyseSearchBtn = document.querySelector('.serachRecipe--btn')
  _foodAnalyseItem = document.querySelector('#food-analyse')

  // Here i use one of the design patterns to link the view with the controller
  addHandlerData(handler) {
    // Here i Used The Event Delegation
    this._parentElement.addEventListener('click', (e) => {
      if (e.target.classList.contains('serachRecipe--btn')) handler()
    })
  }
  // Using Bind method to set the good this keyword because in addeventlistener the this keyword will be in this case {_foodAnalyseItem}
  addHandlerRender() {
    this._foodAnalyseItem.addEventListener('click', this.render.bind(this))
  }

  _generateView() {
    return ` 
    <div class="card">
        <div class="card-header">
              <h3>Nutrition Analysis</h3>
              <textarea id="searchQuery" v-model="ingredients" name="ingredients" style="height:80px;width: 50%;padding:10px"
              placeholder="one ingredient per line, such as &quot;200 grams of Oats&quot;"></textarea>
              <input id="servings" name="servings" type="number" placeholder="Servings" min='1' />
              <button class="serachRecipe--btn">
              Search
              <span class="las la-arrow-right"></span>
            </button>
      </div>
      <div class="card-body">

      </div>
  </div>
`
  }

  _previewWidget = function (response) {
    // 1) Create the frame element
    const resultCard = document.createElement('iframe')
    resultCard.setAttribute('id', 'results')
    document
      .querySelector('.card-body')
      .insertAdjacentElement('afterbegin', resultCard)
    // 2) Select frame element to add header scripts and result nto it
    const elm = document.querySelector('#results').contentDocument
    let el = document.createElement('script')
    el.setAttribute('type', 'text/javascript')
    el.setAttribute('src', 'https://code.jquery.com/jquery-1.9.1.min.js')
    elm.head.appendChild(el)

    el = document.createElement('script')
    el.setAttribute('type', 'text/javascript')
    el.setAttribute(
      'src',
      'https://spoonacular.com/application/frontend/js/jquery.canvasjs.min',
    )
    elm.head.appendChild(el)
    // Waiting for JQuery to Load
    setTimeout(function () {
      const iframeDocument = elm
      iframeDocument.open()
      iframeDocument.write(response)
      elm.body.style.margin = 'auto'
      elm.body.style.maxWidth = '500px'
      elm.body.style.backgroundColor = '#fff'
      iframeDocument.close()

      let el = document.createElement('script')
      el.setAttribute('type', 'text/javascript')
      el.setAttribute(
        'src',
        'https://spoonacular.com/application/frontend/js/nutritionWidget.min.js?c=1',
      )
      elm.body.appendChild(el)
    }, 1000)
  }
}

export default new recipeAnalyseView()
