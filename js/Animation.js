const section = document.querySelector('section');
section.classList.remove('TeamAnimation');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
// const section = entry.target.querySelector('section');
  
  if(entry.isIntersecting) {
  section.classList.add('TeamAnimation');
    return;
  }
  
  section.classList.remove('TeamAnimation');
});
});

observer.observe(document.querySelector((.Animation_container));


// var sections = document.querySelectorAll('section');
// var options = {
// rootMargin: '0px',
// threshold: 0.25
// }
// var callback = (entries) => {
//   entries.forEach((entry) => {
//     var target = entry.target;
//     if (entry.intersectionRatio >= 0.25) {
//       target.classList.add("is-inview");
//     } else {
//       target.classList.remove("is-inview");
//     }
//   })
// }
// var observer = new intersectionObserver(callback, options)
// sections.forEach((section, index) => {
//   observer.observe(section)
// })

// var container = document.querySelector('.Animation_container');
// container.addEventListener('scroll', function () {
// cols.forEach((e, i) => {
// var top = (e.getBoundingClientRect().top);
// if (top == 0) {
// e.classList.add('is-inview')
// } else {
// e.classList.remove('is-inview')
// }
// });
// })
// container.dispatchEvent(newCustomEvent('scroll'));
