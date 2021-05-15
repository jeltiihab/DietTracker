class recipeVisualisezView {
  // prettier-ignore
  _parentElement = document.querySelector('.card');

  _errorMessage = 'We could not find that recipe, Please try another one!'
  _message = ''
  _searchBtn = document.querySelector('.serachRecipe--btn')

  render() {
    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', this._generateView())
  }
  _generateView() {
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

  // prettier-ignore
  _previewWidget = function (response) {
    const elm = document.getElementById('results').contentDocument;
    let el = document.createElement('script');
    el.setAttribute('type', 'text/javascript');
    el.setAttribute('src', 'https://code.jquery.com/jquery-1.9.1.min.js');
    elm.head.appendChild(el);

    el = document.createElement('script');
    el.setAttribute('type', 'text/javascript');
    el.setAttribute(
      'src',
      'https://spoonacular.com/application/frontend/js/jquery.canvasjs.min',
    );
    elm.head.appendChild(el)
    setTimeout(function () {
      const elm = document.getElementById('results').contentDocument;
      const iframeDocument = elm;
      iframeDocument.open();
      iframeDocument.write(response);
      elm.body.style.margin = 'auto';
      elm.body.style.maxWidth = '500px';
      iframeDocument.close();

      let el = document.createElement('script');
      el.setAttribute('type', 'text/javascript');
      el.setAttribute(
        'src',
        'https://spoonacular.com/application/frontend/js/nutritionWidget.min.js?c=1',
      );
      elm.body.appendChild(el);
    }, 1000)
  }

  addHandlerRender() {
    //this._searchBtn.addEventListener('click', getRecipeInfos)
    //this._searchBtn.addEventListener('click', console.log('hellooo'))
  }

  _clear() {
    this._parentElement.innerHTML = ''
  }
}

export default new recipeVisualisezView()
