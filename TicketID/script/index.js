const buttons = document.querySelectorAll('.menu-button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => {
            btn.classList.remove('active');
            btn.style.backgroundColor = '';
            btn.style.border = '';
        });

        button.classList.add('active');
        button.style.backgroundColor = '#cce6ff'; 
        button.style.border = '1px solid blue';
    });
});

const warn = document.getElementById('daftar');
warn.addEventListener('click', function() {
    alert('Belum Jadi!');
})

const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
menu.addEventListener('click', function(){
    nav.classList.toggle('active');
});

document.addEventListener('click', function(e){
    if (!menu.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
    }
})

const row = document.querySelector('.row');
row.document.addEventListener('DOMContentLoaded', function(){
    const kebijakanButton = document.getElementById('kebijakan');
    const benefitButton = document.getElementById('benefit');
    const kpCards = document.querySelectorAll('.row-card.kp');
    const bpCards = document.querySelectorAll('.row-card.bp');

    kebijakanButton.addEventListener('click', function() {
        kpCards.forEach(card => card.style.display = 'inline-block');
        bpCards.forEach(card => card.style.display = 'none');
    });

    benefitButton.addEventListener('click', function() {
        kpCards.forEach(card => card.style.display = 'none');
        bpCards.forEach(card => card.style.display = 'inline-block');
    });
});