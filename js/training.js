import { aymShops, studios } from './getCollections.js'
import { $, $all, $log, $show, $hide } from './aQuery.js'

const aymsTable = $('#aymShops')
const modal = $('#modal-container')
// 

if (aymShops.length == 0) {
  $log('nope')
  insertRow(aymsTable, 'to be announced')
}

// add table row for each shop
aymShops.forEach((shop,idx) => {
  let content = shop.studio.name
  content += ', ' + shop.studio.town
  content += '<br>' + shop.date
  content += '<br>' + shop.time
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
  $show(modal)
  $('#details').innerHTML = 'Ayurvedic Yoga Massage Workshop Details'
  
  $('#studioName').innerHTML = shop.studio.name
  $('#studioAddress').innerHTML = shop.studio.address
  $('#date').innerHTML = shop.date
  $('#time').innerHTML = shop.time
  // etc

  $('#modalOK').addEventListener('click', (b) => {
    $hide(modal)
  })
}