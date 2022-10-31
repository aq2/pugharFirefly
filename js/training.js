// get all workshops and studios!
import { aymShops } from './getCollections.js'
import { $, $all, $log, $show, $hide } from './aQuery.js'
// console.log(allYogaShops)


const aymsTable = $('#aymShops')


if (aymShops.length == 0) {
  console.log('nope')
  insertRow('to be announced')
}

function insertRow(content) {
  var row = aymsTable.insertRow()
  var cell = row.insertCell(0)
  cell.innerHTML = content
}

aymShops.forEach((shop,idx) => {
  let content = shop.date
  content += '<br>'
  content += shop.location
  content += '<br>'
  content += '<button '
  content += 'id=b' + idx + " class='yoga'" 
  content += '>more info</button>'
  insertRow(content)
})

// add click handlers to buttons
const buttons = $all('button.yoga')
buttons.forEach(button => {
  button.addEventListener('click', (b) => {
    let index = b.target.id.substring(1)
    buildWorkshopDetails(aymShops[index])
  })
})

function buildWorkshopDetails(shop) {
  // $log(shop)
  // gonna have to populate a modal with workshop details!

  // first get a modal 'popup'
  const modal = $('#modal')
  modal.classList.add('active')
  $log(modal)
  modal.children[0].innerHTML = 'AYM Workshop Details'
  modal.children[1].innerHTML = shop.location
  // etc

  $('#modalOK').addEventListener('click', (b) => {
    $log('hide modal')
    $hide(modal)
  })
}