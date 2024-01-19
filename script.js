window.addEventListener('scroll', setScrollVar)
window.addEventListener('resize', setScrollVar)


function setScrollVar(){
  const htmlElement = document.documentElement
  const procentOfScreenSightScrell = htmlElement.scrollTop / htmlElement.clientHeight
  console.log( Math.min(procentOfScreenSightScrell * 100, 100));
  htmlElement.style.setProperty("--scroll", Math.min(procentOfScreenSightScrell * 100, 100))
}

setScrollVar()