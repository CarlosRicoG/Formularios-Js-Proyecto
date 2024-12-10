function logOut(){
    const exit = confirm("¿Esta seguro que desea Salir?")
    if(exit){
        window.location.replace('index.html')
    }
}