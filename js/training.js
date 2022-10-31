import { aymShops, studios } from './getCollections.js'
import { $, $all, $log, $show, $hide } from './aQuery.js'

const modal = $('#modal')
const aymsTable = $('#aymShops')
// 

if (aymShops.length == 0) {
  $log('nope')
  insertRow(aymsTable, 'to be announced')
}

// add table row for each shop
aymShops.forEach((shop,idx) => {
  let content = shop.date
  content += '<br>'
  content += shop.location
  content += '<br>'
  content += '<button '
  content += 'id=b' + idx + " class='yoga'" 
  content += '>more info</button>'
  insertRow(aymsTable, content)
})

// add click handlers to buttons
const buttons = $all('button.yoga')
buttons.forEach(button => {
  button.addEventListener('click', (b) => {
    let index = b.target.id.substring(1)
    buildWorkshopDetails(aymShops[index])
  })
})

// insert content into new table row
function insertRow(table, content) {
  var row = table.insertRow()
  var cell = row.insertCell(0)
  cell.innerHTML = content
}


function buildWorkshopDetails(shop) {
  // $log(shop)
  // $log(studios)

  $show(modal)
  modal.children[0].innerHTML = 'AYM Workshop Details'
  modal.children[1].innerHTML = shop.location
  // etc

  $('#modalOK').addEventListener('click', (b) => {
    $hide(modal)
  })
}