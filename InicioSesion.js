function Ingreso() {
    let email = document.getElementById("email").value
    let password = document.getElementById("contraseña").value

    const data = JSON.parse(localStorage.getItem('user'))

    if (data.email === "" && data.password === "") {
        alert('Campos Vacios, Por favor Completar..')
    return }

    if (data.email === email && data.password === password) {
        alert("Bienvenido")
        window.location.replace('panel.html')
    } else {
        alert("usuario o contraseña incorrectos")

    }
}
