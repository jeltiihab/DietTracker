class recipeAnalyseView {
  _parentElement = document.querySelector('.card')
  _errorMessage = 'We could not find that recipe, Please try another one!'
  _message = ''
  _searchBtn = document.querySelector('.serachRecipe--btn')
  _container = document.querySelector('.card')
  _foodAnalyseContainer = document.querySelector('#food-analyse')

  // Method to Clean Container then render the view
  render() {
    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', this._generateView())
  }
  // Creating our View html
  _generateView() {
    this._setActiveSlider()
    return `                
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
  <iframe class="card-body" id="results">
  </iframe>`
  }
  // This function will take two paraméters the response from our AJAX call and the elm that i will add canva to it
  _previewWidget = function (response, elm) {
    // const elm = document.getElementById('results').contentDocument;
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
      //   const elm = document.getElementById('results').contentDocument;
      const iframeDocument = elm
      iframeDocument.open()
      iframeDocument.write(response)
      elm.body.style.margin = 'auto'
      elm.body.style.maxWidth = '500px'
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

  // Here i use one of the design patterns to link the view with the controller
  addHandlerData(handler) {
    this._container.addEventListener('click', (e) => {
      if (e.target.classList.contains('serachRecipe--btn')) handler()
    })
  }
  // Using Bind method to set the good this keyword because in addeventlistener the this keyword will be in this case {_foodAnalyseContainer}
  addHandlerRender() {
    this._foodAnalyseContainer.addEventListener('click', this.render.bind(this))
  }
  // Clearing container
  _clear() {
    this._parentElement.innerHTML = ''
  }
  // Toogling active class between sidbar items
  _setActiveSlider() {
    let sidebarBtns = document.querySelectorAll('.sb--btn')
    sidebarBtns.forEach((btn) => {
      btn.addEventListener('click', function () {
        sidebarBtns.forEach((btn) => {
          btn.classList.remove('active')
          console.log('t3')
        })
        this.classList.add('active')
      })
    })
  }
}

export default new recipeAnalyseView()
