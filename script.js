let audios = [
    {caminho:'Paula Fernandes.mp3', legenda:'Topic'},
    {caminho:'Paula Fernandes1.mp3', legenda:'Pura Nata'},
    {caminho:'Paula Fernandes2.mp3', legenda:'Confissões'},
    {caminho:'Paula Fernandes3.mp3', legenda:'Surto De Amor'},
    {caminho:'Paula Fernandes4.mp3', legenda:'A Litte Death'},
    {caminho:'Arash.mp3', legenda:'BARRAS & BARRAS'},
    {caminho:'Helena.mp3', legenda:'Evoque'},
    {caminho:'Hayit', legenda:'King For A Day'},
    {caminho:'matuto.mp3', legenda:'Caraphernelia'},
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

