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

const bbtn = document.querySelectorAll('.menu-button-hotel1');
bbtn.forEach(button => {
    button.addEventListener('click', function() {
        bbtn.forEach(btn => {
            btn.classList.remove('active');
            btn.style.backgroundColor = '';
            btn.style.border = '';
        });

        button.classList.add('active');
        button.style.backgroundColor = '#cce6ff'; 
        button.style.border = '1px solid blue';

    });
});


const summaryButtons = document.querySelectorAll('.summary-button');

summaryButtons.forEach(button => {
    button.addEventListener('click', function() {
        summaryButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.style.backgroundColor = '';
            btn.style.color = 'black';
        });

        button.style.backgroundColor = '#3399ff';
        button.style.color = 'white';
    });
});


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



// MENDAPATKAN DATA DARI JSON

$.getJSON('JSON/data-tempat.json', function(data) {
    $.each(data, function(i, data) {
        $('#daftar-tempat1').append('<div class="card"><a href="#"><div class="card-images"><img src="image/hotel/'+ data.image +'"></div><div class="caption"><h3 class="hotel-name">'+data.name+'</h3><div class="starate">'+data.rating+'<p class="address">'+data.address+'</p></div><div class="review-caps">'+data.review+'</div><div class="price"><h3 class="price">'+data.price+'</h3></div></div></a></div>');
    })
});