// console.log(1)
// console.log(2)
// setTimeout(() => {
//     console.log('callback function fired')
// }, 2000);
// console.log(3)
// console.log(4)
// const getTodo = (callback) => {
//     const request = new XMLHttpRequest();
// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);
//     if(request.readyState === 4 && request.status === 200) {
//         callback()
//     }
//     else if(request.readyState === 200) {
//         callback()
//     }
// })
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
// request.send();
// }
// getTodo( () => {
//     console.log('callback is fired')
// });
let wrapper = document.getElementsByTagName('body');
console.log(wrapper);
let togger = document.getElementById('togger');
console.log(togger);
let btn1 = document.querySelector('.btn1');
console.log(btn1)
let btn2 = document.querySelector('.btn2');
console.log(btn2)
let btn3 = document.querySelector('.btn3');
console.log(btn3);
let darkMode = document.getElementById('drkmode');
console.log(darkMode);
// p's button
let p1 = document.getElementById('p1');
console.log(p1);
let p2 = document.getElementById('p2');
console.log(p2);
let p3 = document.getElementById('p3');
console.log(p3);

btn1.addEventListener('click', (e) => {
    e.preventDefault()
  btn1.classList.toggle('ri-subtract-line');
  btn1.classList.toggle('ri-add-line');
  p1.classList.toggle('remove');
})
btn2.addEventListener('click', (e) => {
    e.preventDefault()
  btn2.classList.toggle('ri-subtract-line');
  btn2.classList.toggle('ri-add-line');
  p2.classList.toggle('remove');
})
btn3.addEventListener('click', (e) => {
    e.preventDefault()
  btn3.classList.toggle('ri-subtract-line');
  btn3.classList.toggle('ri-add-line');
  p3.classList.toggle('remove');
})
// Event listeners
togger.addEventListener('click', (e) => {
    e.preventDefault();
    togger.classList.toggle('ri-sun-line');
})


