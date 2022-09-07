//Declarando constantes y accediendo a ellas mediante sus clase con querySelector
const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

//Creando funcion para el boton encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
 }

 //Creando funcion para el boton desencriptar

 function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    //mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
 }

function encriptar(stringEncriptada){
    let matrizCodigo = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++ ){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    const confirmacion = document.querySelector("#confirmaCopia")
    
    confirmacion.style.textAlign = "center"
    confirmacion.innerHTML = "Mensaje Copiado"
    confirmacion.style.color = "#0A3871"
    confirmacion.style.backgroundColor = "#c89b7b"
    confirmacion.style.padding = "25px 0 25px 0"
    confirmacion.style.fontSize = "20px"
    confirmacion.style.fontWeight = "bold"
   confirmacion.style.borderRadius = "5px"
    confirmacion.style.border = "1px solid #000000"
    confirmacion.style.display = "flex"
    document.getElementById("confirmaCopia").style.textAlign = "center";
    setTimeout(function() {
        confirmacion.style.display = "none";
    
    }, 3000)
}