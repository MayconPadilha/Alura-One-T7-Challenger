const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function criptografar(){
    document.getElementById('semMensagem').style.display = "none";
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    let stringEncriptada = document.getElementById('textoDescriptografado').value;
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }    
    
    document.getElementById('textoTradutor').style.display = "flex";

    mensagem.value = stringEncriptada;
    console.log(mensagem.value)
    textArea.value = "";
}

function descriptografar(){
    document.getElementById('semMensagem').style.display = "none";
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    let stringDescriptada = document.getElementById('textoDescriptografado').value;
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDescriptada.includes(matrizCodigo[i][1])){
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    
    document.getElementById('textoTradutor').style.display = "flex";

    mensagem.value = stringDescriptada;
    console.log(mensagem.value)
    textArea.value = "";
}

function copiar() {
    const textoCopiado = document.querySelector(".mensagem");
    textoCopiado.select();
    document.execCommand('copy');
}  