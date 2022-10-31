// get all workshops and studios!
import { allYogaShops } from './getCollections.js'
import { $, $all, $log } from './aQuery.js'
console.log(allYogaShops)


const yogaShopsTable = $('#yogaShops')


if (allYogaShops.length == 0) {
  console.log('nope')
  insertRow('to be announced')
}

function insertRow(content) {
  var row = yogaShopsTable.insertRow()
  var cell = row.insertCell(0)
  cell.innerHTML = content
}

allYogaShops.forEach((shop,idx) => {
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
const buttons = $all('button')
buttons.forEach(button => {
  button.addEventListener('click', (b) => {
    // $log(b.target)
    // $log(b.target.id)
    // $log(b.target.className)
    let index = b.target.id.substring(1)
    // let index = parseInt(b.target.id)
    $log(index)
  })
})
