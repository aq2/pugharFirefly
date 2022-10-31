let firstPage = 'training'

/// init
  import {$, $all, $log, $hide, $show} from './aQuery.js'

  let oldTab = $('#' + firstPage)
  let oldSection = $('.' + firstPage)
  $show(oldTab)
  $show(oldSection)


//
//
/// smerking tabs! 🚬  so easy...eventually
  const nav = $('nav')
  
  nav.addEventListener('click', (e) => {
    let newTab = e.target
    let newSection = $('.' + newTab.id)
    
    // deactivate old section and tab
    $hide(oldTab)
    $hide(oldSection)
    
    // activate new section and tab
    $show(newTab)
    $show(newSection)

    oldTab = newTab
    oldSection = newSection

    // todo position the section? scroll upo or whateva
  })

//
//
