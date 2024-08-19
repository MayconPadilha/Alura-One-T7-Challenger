
function criptografar(){
    document.getElementById('semMensagem').style.display = "none";

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    // console.table(matrizCodigo);

    let textoEnviado = document.getElementById('textoDescriptografado').value;
    textoEnviado = textoEnviado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoEnviado.includes(matrizCodigo[i][0])){
            textoEnviado = textoEnviado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }    
    
    let textoTradutor = document.getElementById('textoTradutor');
    document.getElementById('textoTradutor').style.display = "flex";

    textoTradutor.innerHTML = `<p>${textoEnviado}</p><button>Copiar</button>`;
}

function descriptografar(){
    document.getElementById('semMensagem').style.display = "none";

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    let textoEnviado = document.getElementById('textoDescriptografado').value;
    textoEnviado = textoEnviado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoEnviado.includes(matrizCodigo[i][1])){
            textoEnviado = textoEnviado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    
    let textoTradutor = document.getElementById('textoTradutor');
    document.getElementById('textoTradutor').style.display = "flex";

    textoTradutor.innerHTML = `<p>${textoEnviado}</p><button>Copiar</button>`;
}