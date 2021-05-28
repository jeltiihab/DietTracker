import { async } from 'regenerator-runtime'

// Toogling active class between sidbar items
export const setActiveSlider = function () {
  let sidebarBtns = document.querySelectorAll('.sb--btn')
  sidebarBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      sidebarBtns.forEach((btn) => {
        btn.classList.remove('active')
      })
      this.classList.add('active')
    })
  })
}

export const getQuery = function (items) {
  const inputs = document.getElementsByClassName(items),
    names = [].map.call(inputs, function (input) {
      if (!isNaN(input.value)) return +input.value
      return input.value
    })
  return names
}
