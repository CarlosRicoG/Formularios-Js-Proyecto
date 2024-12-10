function RegistroUsuario(){ 

    const user = { 
        nombre:document.getElementById("nombre").value,   
        documento:document.getElementById("documento").value,
        email:document.getElementById("email").value,
        ciudad:document.getElementById("ciudad").value,
        fechanacimiento:document.getElementById("fechanacimiento").value,
        password:document.getElementById("contraseña").value
    } 

    localStorage.setItem('user', JSON.stringify(user))
    console.log(user)
    alert("Usuario Registrado....")
    window.location.href = 'index.html'

}
