const linksHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')
const newArray = [...linksHead, mainScroll]

//console.log(newArray)


newArray.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    //console.dir(event.target.getAttribute('href').substr(1));

    const ID = event.target.getAttribute('href').substr(1)

    //console.log(document.getElementById(ID));

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})