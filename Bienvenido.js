const nameUser = document.getElementById("Bienvenido") 

const data = JSON.parse(localStorage.getItem('user')) 
let nombre = document.getElementById('nombre') 
nameUser.innerHTML = "Bienvenid@ " + `${data.nombre}` 
