let texto = document.querySelector('.codigo');
let containerResultado = document.querySelector('.decodificador_resultado');

function criptografar(){
    let codigo = texto.value;
    let resulCripto = codigo.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    containerResultado.innerHTML = '<textarea readonly class="codigo_resultado">' + resulCripto + '</textarea>' + '<button class ="btn-copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar(){
    let codigo = texto.value;
    let resulDescripto = codigo.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    containerResultado.innerHTML = '<textarea readonly class="codigo_resultado">' + resulDescripto + '</textarea>' + '<button class ="btn-copiar" onclick="copiar()">Copiar</button>';
}

function copiar(){
    let codigoResultado = document.querySelector('.codigo_resultado');
    codigoResultado.select();
    document.execCommand('copy');
}