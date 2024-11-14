/*
const pergunta1 = document.getElementById("pergunta1")
const pergunta2 = document.getElementById("pergunta2")

let perguntas = [pergunta1, pergunta2]
*/


let perguntaAtiva = 0;
const questoes = document.querySelectorAll(".questao")

function ativar() {
    
    questoes[perguntaAtiva].classList.toggle("ativa")
    
}



function responder(correta) {
    if (correta) {
        // Avançar para a próxima pergunta
        
        questoes[perguntaAtiva].classList.remove("ativa")
        perguntaAtiva += 1
        ativar()
    } else {
        // Entrar no modo tela cheia e exibir imagem de erro
        setTimeout(() => {
            goFullScreen();
            exibirErro();
        }, 2000);
    }
}





// Função para exibir a imagem de erro e tocar o som
function exibirErro() {
    const telaCheiaErro = document.getElementById("telaCheiaErro");
    const somErro = document.getElementById("somErro");

    telaCheiaErro.style.display = "flex";  // Exibe a imagem em tela cheia
    somErro.play();  // Toca o som de erro

    // Clica na tela para sair do modo de erro
    telaCheiaErro.addEventListener("click", () => {
        telaCheiaErro.style.display = "none";
        sairTelaCheia();
    });
}

// Função para entrar no modo tela cheia
function goFullScreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari e Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
}

// Função para sair do modo tela cheia
function sairTelaCheia() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari e Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}
