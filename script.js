let audios = [
    {caminho:'Paula Fernandes.mp3', legenda:'Matuto de verdade'},
    {caminho:'Paula Fernandes1.mp3', legenda:'Arash'},
    {caminho:'Paula Fernandes2.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes3.mp3', legenda:'Hayit'},
    {caminho:'Paula Fernandes4.mp3', legenda:'Helena'},
    {caminho:'Arash.mp3', legenda:'BARRAS & BARRAS'},
    {caminho:'Helena.mp3', legenda:'Evoque'},
    {caminho:'Hayit', legenda:'King For A Day'},
    {caminho:'matuto.mp3', legenda:'Paula Fernandes'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});

