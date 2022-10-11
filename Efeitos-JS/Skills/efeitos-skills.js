const bounceInRight = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('bounce-in-right-on')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.bounce-in-right-off')).forEach(element => {
    bounceInRight.observe(element)
  })

  const bounceInLeft = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('bounce-in-left-on')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.bounce-in-left-off')).forEach(element => {
    bounceInLeft.observe(element)
  })

  const bounceInTop = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('bounce-in-top-on')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.bounce-in-top-off')).forEach(element => {
    bounceInTop.observe(element)
  })

  const bounceInBottom = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('bounce-in-bottom-on')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.bounce-in-bottom-off')).forEach(element => {
    bounceInBottom.observe(element)
  })