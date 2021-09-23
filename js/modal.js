const modalBtns = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')

modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden')
  })
})

// modalBtn.addEventListener('click', () => {
//   modal.classList.remove('hidden')
// })

modal.addEventListener('click', (event) => {
  //console.log(event.target)
  const target = event.target


  //modal__close
  if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
    modal.classList.add('hidden')
  }
})