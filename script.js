 window.addEventListener('scroll', function() {
            const menu = document.querySelector('.menu');
            let scrollPosition = window.scrollY;

            if (scrollPosition > 0) {
                menu.classList.add('scrolled');
            } else {
                menu.classList.remove('scrolled');
            }
        });


document.addEventListener('DOMContentLoaded', () => {
  // Habilita o scroll suave nativo
  document.documentElement.style.scrollBehavior = 'smooth';
});










let projetoAtual = 0;
const cards = document.querySelectorAll('.card');

function mudarProjeto(direcao) {
    cards[projetoAtual].classList.remove('active');
    
    projetoAtual = (projetoAtual + direcao + cards.length) % cards.length;
    
    cards[projetoAtual].classList.add('active');
    
    void cards[projetoAtual].offsetWidth;
}











const yupi = document.querySelector('.yupi-code');
const projeto = document.querySelector('.yupi-project');
yupi.addEventListener('mouseover',()=>{
    projeto.classList.toggle('show');
})

yupi.addEventListener('mouseout',()=>{
    projeto.classList.remove('show')
})




