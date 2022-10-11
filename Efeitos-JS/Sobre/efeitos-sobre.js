const bounceLeft = new IntersectionObserver(entries => {
    console.log(bounceLeft)
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('bounce-in-left-on')
        }
    })
        
  },{
    threshold: [0, .2, .5, .7 , 1]
  })
  
  Array.from(document.querySelectorAll('.bounce-in-left-off')).forEach(element => {
    bounceLeft.observe(element)
  })