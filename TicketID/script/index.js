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


$(document).ready(function() {
    for (let i = 1; i <= 6; i++) { 
        $('.menu-button-hotel' + i).on('click', function() {
            $('.menu-button-hotel' + i).removeClass('active');
            $('.menu-button-hotel' + i).css('backgroundColor', 'transparent');
            $('.menu-button-hotel' + i).css('border', '1px solid #bfbfbf');
            $(this).addClass('active');
            $(this).css('backgroundColor','#cce6ff');
            $(this).css('border','1px solid #429dff');

            let cityName = $(this).html();

            $.getJSON('JSON/data-tempat' + i + '.json', function(data) {
                let content = '';
                $.each(data, function(j, data) {
                    if (data.city == cityName) {
                        content += `<a href="${data.link}">
                        <div class="card">
                            <img src="image/tempat${i}/${data.image}">
                            <div class="caption">
                                <div class="hotel-name">
                                    <h3>${data.name}</h3>
                                </div>
                                <div class="rating">
                                    <div class="star">
                                        ${data.rating}
                                    </div>
                                    <p>${data.address}</p>
                                </div>
                                <div class="review">
                                    <div class="logo">
                                        <i class="fa-solid fa-award"></i>
                                    </div>
                                    <p>${data.review}</p>
                                </div>
                                <div class="price">
                                    <p>${data["last-price"]}</p>
                                    <h3>${data.price}</h3>
                                </div>
                            </div>
                        </div>
                    </a>`
                    }
                });
                
                $('#daftar-tempat' + i).html(content);
            });
        });
    }
});



const fileNumbers = [1, 2, 3, 4, 5, 6];
$(document).ready(function() {
    fileNumbers.forEach(function(number) {
        $.getJSON('JSON/data-tempat' + number + '.json', function(data) {
            $.each(data, function(i, data) {
                $('#daftar-tempat'+ number).append(`<a href="${data.link}">
                <div class="card">
                    <img src="image/tempat${number}/${data.image}">
                    <div class="caption">
                        <div class="hotel-name">
                            <h3>${data.name}</h3>
                        </div>
                        <div class="rating">
                            <div class="star">
                                ${data.rating}
                            </div>
                            <p>${data.address}</p>
                        </div>
                        <div class="review">
                            <div class="logo">
                                <i class="fa-solid fa-award"></i>
                            </div>
                            <p>${data.review}</p>
                        </div>
                        <div class="price">
                            <p>${data["last-price"]}</p>
                            <h3>${data.price}</h3>
                        </div>
                    </div>
                </div>
            </a>`);
            });
        });
    });
});

$(document).ready(function(){
    $.getJSON('JSON/data-tempat7.json', function(data) {
        $.each(data, function(i, data) {
            $('#event-row').append(`<a href="#" class="">
            <div class="card">
                <img src="image/tempat7/${data.image}">
                <div class="caption">
                    <p class="date">${data.date}</p>
                    <h3 class="event-name">${data.name}</h3>
                    <p class="address">${data.address}</p>
                    <div class="price">
                        <h3>${data.price}</h3>
                    </div>
                </div>
            </div>
        </a>`)
        })
    })
})