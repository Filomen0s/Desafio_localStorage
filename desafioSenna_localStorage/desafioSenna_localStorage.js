function enviarNumeros(){

    let numeroEnviadoVariavel = document.getElementById("number").value

    localStorage.setItem("numeroEnviado", numeroEnviadoVariavel)
    
    localStorage.getItem("numeroEnviado")

}