console.log(1)
console.log(2)
setTimeout(() => {
    console.log('callback function fired')
}, 2000);
console.log(3)
console.log(4)
const getTodo = (callback) => {
    const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200) {
        callback()
    }
    else if(request.readyState === 200) {
        callback()
    }
})
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
request.send();
}
getTodo( () => {
    console.log('callback is fired')
});
