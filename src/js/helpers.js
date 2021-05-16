import { async } from 'regenerator-runtime'

export const AJAX = async function (settings) {
  $.ajax(settings).done(function (response) {
    console.log('res' + response)
    return response
  })
}
