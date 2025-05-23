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






const yupi = document.querySelector('.yupi-code');
const projeto = document.querySelector('.projetos');
yupi.addEventListener('mouseover',()=>{
    projeto.classList.toggle('show');
})

yupi.addEventListener('mouseout',()=>{
    projeto.classList.remove('show')
})

