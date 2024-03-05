let textoArea = document.querySelector(".container__conteudo__textarea");
let textoSemMensagem = document.querySelector(".container__info__mensagem");
let mudarCampoMensagem = document.querySelector(".container__info__cripto");
let paragrafo = document.querySelector(".container__info__cripto p");

function btnCripto(params) {
    const criptografiaEfetivada = criptografar(textoArea.value);

    textoSemMensagem.classList.add("d-none");
    mudarCampoMensagem.classList.remove("d-none");
    textoArea.value = "";

    let minusculas = criptografiaEfetivada.toLowerCase();
    let comAcento = criptografiaEfetivada;
    let semAcento = comAcento.normalize("NFD");

    function temCaracterEspecial(str) {
        const specialChars = /[@#$%^&*()_+\-=\[\]{};':"\\|<>\/~]/;
        return specialChars.test(str);
    }

    if (criptografiaEfetivada === minusculas && criptografiaEfetivada === semAcento && temCaracterEspecial(criptografiaEfetivada) == false && criptografiaEfetivada != "") {
        paragrafo.textContent = criptografiaEfetivada;
    } else {
        paragrafo.textContent = "Apenas letras minúsculas e sem acento.";
    }

    return criptografiaEfetivada;
}

function criptografar(textoCriptografado) {

    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matriz);

    for (let index = 0; index < matriz.length; index++) {
        if (textoCriptografado.includes(matriz[index][0])) {
            textoCriptografado = textoCriptografado.replaceAll(matriz[index][0], matriz[index][1]);
        }

    }

    return textoCriptografado;
}

function btnDescriptografar() {

    function descriptografar(textoDescriptografado) {

        let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        console.table(matriz);

        for (let index = 0; index < matriz.length; index++) {
            if (textoDescriptografado.includes(matriz[index][1])) {
                textoDescriptografado = textoDescriptografado.replaceAll(matriz[index][1], matriz[index][0]);
            }

        }

        return textoDescriptografado;
    }

    const descriptografiaEfetivada = descriptografar(textoArea.value);

    textoSemMensagem.classList.add("d-none");
    mudarCampoMensagem.classList.remove("d-none");
    paragrafo.textContent = descriptografiaEfetivada;

    return descriptografiaEfetivada;
}

function copiarTexto() {
    let textoCopiado = document.querySelector(".container__info__cripto p");
    let btnCopy = document.querySelector(".container__info__cripto__botao");
    let areaTransferenciat1 = document.querySelector(".container__info__t1");
    let areaTransferenciat2 = document.querySelector(".container__info__t2");
    navigator.clipboard.writeText(textoCopiado.innerText);
    textoSemMensagem.classList.remove("d-none");
    mudarCampoMensagem.classList.add("d-none");
    areaTransferenciat1.innerHTML = "Mensagem copiada!";
    areaTransferenciat2.innerHTML = "Clique no botão de descriptografar.";

}