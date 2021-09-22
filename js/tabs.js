const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
const tabsTitles = document.querySelectorAll('.design__title')

//console.log(tabsTitles);

for (let btn of tabsHandlerElems) {
  btn.addEventListener('click', () => {
    tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
    btn.classList.add('design-list__item_active')

    //console.dir(btn.dataset.tabsHandler)
    tabsContentElems.forEach(content => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove('hidden')
      } else {
        content.classList.add('hidden')
      }
    })

    tabsHandlerElems.forEach((btn, index) => {
      if (btn.classList.contains('design-list__item_active')) {
        tabsTitles[index].classList.remove('hidden')
      } else {
        tabsTitles[index].classList.add('hidden')
      }
    })
  })
}


//console.log(tabsContentElems)