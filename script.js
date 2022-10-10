const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 0; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});



// barra de progresso 
// const indicator = document.querySelector('.linha');
// const maxHeight = document.body.scrollHeight - window.innerHeight;

// window.addEventListener('scroll', () =>{
//     const percentage = (window.scrollY / maxHeight) * 200;

//     indicator.style.width = `${percentage}%`;
// });


// const observer = new IntersectionObserver(entries => {
//     console.log(entries)

//     Array.from(entries).forEach(entry =>{
//         if (entry.intersectionRatio  > 0) {
//             entry.target.classList.add('init-hidden-off')
//         }
//     })
        
    
// },{
//     threshold: [0, .2, .5, .7 , 1]
// })

// Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
//     observer.observe(element)
// })




const observer = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry =>{
        if (entry.intersectionRatio  > 0) {
            entry.target.classList.add('init-hidden-off')
        }
    })
        
},{
    threshold: [0, .2, .5, .7 , 1]
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})





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






