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
 * portfolio pag1
 * ----------------------------------------
 */

const slideInLeft1 = new IntersectionObserver(entries => {
    console.log(slideInLeft1)
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('slide-in-left-on-1')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.slide-in-left-off-1')).forEach(element => {
    slideInLeft1.observe(element)
  })


  const slideInLeft2 = new IntersectionObserver(entries => {
    console.log(slideInLeft2)
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('slide-in-left-on-2')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.slide-in-left-off-2')).forEach(element => {
    slideInLeft2.observe(element)
  })

  const slideInLeft3 = new IntersectionObserver(entries => {
    console.log(slideInLeft3)
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('slide-in-left-on-3')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.slide-in-left-off-3')).forEach(element => {
    slideInLeft3.observe(element)
  })

  const slideInLeft4 = new IntersectionObserver(entries => {
    console.log(slideInLeft4)
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('slide-in-left-on-4')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.slide-in-left-off-4')).forEach(element => {
    slideInLeft4.observe(element)
  })

/*
 * ----------------------------------------
 * portfolio pag 2
 * ----------------------------------------
 */

const slideInBckCenter1 = new IntersectionObserver(entries => {
  console.log(slideInBckCenter1)
  Array.from(entries).forEach(entry =>{
      if (entry.intersectionRatio  > 0) {
          entry.target.classList.add('slide-in-bck-center-on-1')
      }
  })
      
},{
  threshold: [0, .2, .5, .7 , 1]
})

Array.from(document.querySelectorAll('.slide-in-bck-center-off-1')).forEach(element => {
  slideInBckCenter1.observe(element)
})


const slideInBckCenter2 = new IntersectionObserver(entries => {
  console.log(slideInBckCenter2)
  Array.from(entries).forEach(entry =>{
      if (entry.intersectionRatio  > 0) {
          entry.target.classList.add('slide-in-bck-center-on-2')
      }
  })
      
},{
  threshold: [0, .2, .5, .7 , 1]
})

Array.from(document.querySelectorAll('.slide-in-bck-center-off-2')).forEach(element => {
  slideInBckCenter2.observe(element)
})

const slideInBckCenter3 = new IntersectionObserver(entries => {
  console.log(slideInBckCenter3)
  Array.from(entries).forEach(entry =>{
      if (entry.intersectionRatio  > 0) {
          entry.target.classList.add('slide-in-bck-center-on-3')
      }
  })
      
},{
  threshold: [0, .2, .5, .7 , 1]
})

Array.from(document.querySelectorAll('.slide-in-bck-center-off-3')).forEach(element => {
  slideInBckCenter3.observe(element)
})

const slideInBckCenter4 = new IntersectionObserver(entries => {
  console.log(slideInBckCenter4)
  Array.from(entries).forEach(entry =>{
      if (entry.intersectionRatio  > 0) {
          entry.target.classList.add('slide-in-bck-center-on-4')
      }
  })
      
},{
  threshold: [0, .2, .5, .7 , 1]
})

Array.from(document.querySelectorAll('.slide-in-bck-center-off-4')).forEach(element => {
  slideInBckCenter4.observe(element)
})


const slideInCenter1 = new IntersectionObserver(entries => {
  console.log(slideInCenter1)
  Array.from(entries).forEach(entry =>{
      if (entry.intersectionRatio  > 0) {
          entry.target.classList.add('slide-in-center-on-1')
      }
  })
      
},{
  threshold: [0, .2, .5, .7 , 1]
})

Array.from(document.querySelectorAll('.slide-in-center-off-1')).forEach(element => {
  slideInCenter1.observe(element)
})


const slideInCenter2 = new IntersectionObserver(entries => {
  console.log(slideInCenter2)
  Array.from(entries).forEach(entry =>{
      if (entry.intersectionRatio  > 0) {
          entry.target.classList.add('slide-in-center-on-2')
      }
  })
      
},{
  threshold: [0, .2, .5, .7 , 1]
})

Array.from(document.querySelectorAll('.slide-in-center-off-2')).forEach(element => {
  slideInCenter2.observe(element)
})

const slideInCenter3 = new IntersectionObserver(entries => {
  console.log(slideInCenter3)
  Array.from(entries).forEach(entry =>{
      if (entry.intersectionRatio  > 0) {
          entry.target.classList.add('slide-in-center-on-3')
      }
  })
      
},{
  threshold: [0, .2, .5, .7 , 1]
})

Array.from(document.querySelectorAll('.slide-in-center-off-3')).forEach(element => {
  slideInCenter3.observe(element)
})

const slideInCenter4 = new IntersectionObserver(entries => {
  console.log(slideInCenter4)
  Array.from(entries).forEach(entry =>{
      if (entry.intersectionRatio  > 0) {
          entry.target.classList.add('slide-in-center-on-4')
      }
  })
      
},{
  threshold: [0, .2, .5, .7 , 1]
})

Array.from(document.querySelectorAll('.slide-in-center-off-4')).forEach(element => {
  slideInCenter4.observe(element)
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

  

  const bounceRight = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  >= 0) {
            entry.target.classList.add('bounce-in-right-on')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.bounce-in-right-off')).forEach(element => {
    bounceRight.observe(element)
  })


  const bounceLeft = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  >= 0) {
            entry.target.classList.add('bounce-in-left-on')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.bounce-in-left-off')).forEach(element => {
    bounceLeft.observe(element)
  })


  





  
  