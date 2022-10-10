/*
 * ----------------------------------------
 * Nome portfolio esquerda
 * ----------------------------------------
 */

const slideInTop = new IntersectionObserver(entries => {
    console.log(slideInTop)
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('slide-in-top-on')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.slide-in-top-off')).forEach(element => {
    slideInTop.observe(element)
  })

/*
 * ----------------------------------------
 * ano 2015 Dna comunicação visual
 * ----------------------------------------
 */

const slideInLeft = new IntersectionObserver(entries => {
    console.log(slideInLeft)
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('slide-in-left-on')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.slide-in-left-off')).forEach(element => {
    slideInLeft.observe(element)
  })


 /*
  * ----------------------------------------
  * ano 2022 HAUSENN+
  * ----------------------------------------
  */   

const bounceTop = new IntersectionObserver(entries => {
    console.log(bounceTop)
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('bounce-in-top-on')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.bounce-in-top-off')).forEach(element => {
    bounceTop.observe(element)
  })



  
  