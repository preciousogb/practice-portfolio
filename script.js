let menu = document.querySelector('.menu')
let main = document.querySelector('.main')
let sidebar = document.querySelector('#sidebar')
let close = document.querySelector('.close')
console.log(menu)

menu.addEventListener('click', function open(){
    sidebar.style.marginLeft = '0'
    sidebar.style.display = 'block'
})
 
close.addEventListener('click', function close(){
    sidebar.style.marginLeft = '-250px'
})


