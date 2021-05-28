export default class View {
  // Clearing container
  _clear() {
    this._parentElement.innerHTML = ''
  }
  // Method to Clean Container then render the view
  render() {
    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin', this._generateView())
  }
}
