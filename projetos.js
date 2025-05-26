const yupi = document.querySelector('.yupi-code');
const projeto = document.querySelector('.banner');
yupi.addEventListener('mouseover',()=>{
    projeto.classList.toggle('show');
})

yupi.addEventListener('mouseout',()=>{
    projeto.classList.remove('show')
})




