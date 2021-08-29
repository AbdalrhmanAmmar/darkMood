body = document.querySelector('body')
darkmood = document.getElementById('darkmood')
h1 = document.querySelector('h1')
darkmood.onclick = function(){
    darkmood.classList.toggle('active')
    body.classList.toggle("actv")
    h1.classList.toggle('active')
    
}
