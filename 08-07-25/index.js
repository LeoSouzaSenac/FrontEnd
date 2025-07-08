const nav = document.querySelector('nav');
const menu = document.querySelector('span');

menu.addEventListener('click', () => {
    nav.classList.toggle('showNav');  // adiciona estilo
    nav.classList.toggle('ativo');    // ativa animação
});
