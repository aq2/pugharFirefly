import { aymShops } from './getCollections.js'
import { $, $all, $log, $show, $hide } from './aQuery.js'

const aymsTable = $('#aymShops')
const modal = $('#modal-container')


if (aymShops.length == 0) {
  insertRow(aymsTable, 'to be announced')
}


// add table row for each shop
aymShops.forEach((shop,idx) => {
  let content = ''
  content += shop.date + ', ' + shop.time
  content += '<br>'
  content += '<br>' 
  content += shop.studio.name + ', ' + shop.studio.town 
  content += '<br>'
  content += "<button class='yoga' id=b" + idx
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
  $('#date').innerHTML = shop.date + ', ' + shop.time
  // $('#time').innerHTML = shop.time
  // etc
  let price$ = '<p>£' + shop.singlePrice + ' for individuals, '
  price$ += '£' + shop.couplePrice + ' for any couple (partner or friend)</p>'
  price$ += '£' + shop.deposit + ' non-refundable deposit if client cancels'
  price$ += '<br>Full refund for instructor cancellation'  
  $('#prices').innerHTML = price$

  $('#modalOK').addEventListener('click', (b) => {
    $hide(modal)
  })
}