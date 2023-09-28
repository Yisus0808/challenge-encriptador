$(document).ready(function() {
    const textArea = $(".text-area");
    const mensaje = $(".mensaje");

    function encriptar(stringEncriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

        stringEncriptada = stringEncriptada.toLowerCase();

        $.each(matrizCodigo, function(i, codigo) {
            if (stringEncriptada.includes(codigo[0])) {
                stringEncriptada = stringEncriptada.replaceAll(codigo[0], codigo[1]);
            }
        });

        return stringEncriptada;
    }

    function desencriptar(stringDesencriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

        stringDesencriptada = stringDesencriptada.toLowerCase();

        $.each(matrizCodigo, function(i, codigo) {
            if (stringDesencriptada.includes(codigo[1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(codigo[1], codigo[0]);
            }
        });

        return stringDesencriptada;
    }

    window.btnEncriptar = function(){
        const textoEncriptado = encriptar(textArea.val());
        mensaje.val(textoEncriptado);
        textArea.val("");
        mensaje.css("background-image", "none");
    };

    window.btnDesencriptar = function(){
        const textoDesencriptado = desencriptar(textArea.val());
        mensaje.val(textoDesencriptado);
        textArea.val("");
        mensaje.css("background-image", "none");
    };

    window.btnCopiar = function(){
        mensaje.select();
        document.execCommand("copy");
    };
});
