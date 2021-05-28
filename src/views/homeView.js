import View from './View'
import scaleImg from 'url:../../Public/img/weightscale.svg'
import heightImg from 'url:../../Public/img/height.svg'
import caloriesImg from 'url:../../Public/img/calories.svg'
import goalImg from 'url:../../Public/img/goal.svg'

class HomeView extends View {
  _parentElement = document.querySelector('.main')
  _homeListItem = document.querySelector('#home')
  addHandlerRender() {
    // Rendering home elements on loading the page
    this.render()
    this._homeListItem.addEventListener('click', this.render.bind(this))
  }

  _generateView = function () {
    return `
    <!--CARDS START-->
    <div class="cards">
      <div class="card-single">
        <div>
          <h1>75 kg</h1>
          <span>Current weight</span>
        </div>
        <div>
          <!-- <span class="las la-weight"></span> -->
          <img src="${scaleImg}" alt="" height="60px" width="40px">
        </div>
      </div>
      <div class="card-single">
        <div>
          <h1>179 cm</h1>
          <span>Current height</span>
        </div>
        <div>
          <!-- <span class="las la-ruler-vertical"></span> -->
          <img src="${heightImg}" alt="" height="60px" width="40px">
        </div>
      </div>
      <div class="card-single">
        <div>
          <h1>2500</h1>
          <span>Calories per day</span>
        </div>
        <div>
          <!-- <span class="las la-apple-alt"></span> -->
          <img src="${caloriesImg}" alt="" height="60px" width="40px">
        </div>
      </div>
      <div class="card-single">
        <div>
          <h1>66 kg</h1>
          <span>Weight goal</span>
        </div>
        <div>
          <!-- <span class="las la-burn"></span> -->
          <img src="${goalImg}" alt="" height="60px" width="40px">
        </div>
      </div>
      </div>
    
    <!--CARDS END-->
    `
  }
}

export default new HomeView()
