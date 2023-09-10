const fileNumbers = [1];

$(document).ready(function() {
    fileNumbers.forEach(function(number) {
        $.getJSON('JSON/jelajah-jakarta'+ number + '.json', function(data) {
            $.each(data, function(i, data) {
                $('#JelajahiJakarta'+ number).append(`<a href="#">
                <div class="card">
                    <img src="image/Jelajahi Jakarta/${data.image}">
                    <div class="caption">
                        <p class="title">${data.destination}</p>
                        <div class="details">
                            <p class="tanggal">${data.date}</p>
                            <div class="maskapai">
                                <img src="image/Jelajahi Jakarta/${data['maskapai-image']}">
                                <p class="maskapai-name">${data['maskapai-name']}</p>
                            </div>
                            <p class="kelas">${data.class}</p>
                        </div>
                        <div class="harga">
                            <p>Mulai dari</p>
                            <h3>${data.price}</h3>
                        </div>
                    </div>
                    <div class="pp">
                        <p>SEKALI JALAN</p>
                    </div>
                    <div class="disc">
                        <p>Domestic Deals</p>
                    </div>
                </div>
            </a>`);
            });
        });
    });
});


$.getJSON('JSON/jelajah-jakarta2.json', function(data) {
    $.each(data, function(i, data) {
        $('#JelajahiJakarta2').append(`<a href="#">
        <div class="card">
            <img src="image/Jelajahi Jakarta/${data.image}">
            <div class="caption">
                <div class="name">
                    <h3>${data.name}</h3>
                </div>
                <div class="rating">
                    <div class="star-img">
                        ${data.rating}
                    </div>
                    <p class="address">${data.address}</p>
                </div>
                <div class="review">
                    <i class="fa-solid fa-award"></i>
                    <p>${data.review}</p>
                </div>
                <div class="price">
                    <p>${data ["last-price"]}</p>
                    <h3>${data ["new-price"]}</h3>
                </div>
            </div>
        </div>
    </a>`);
    })
});



function changePlaceholder() {
            const inputElement = document.querySelector('#searchInput');
            const placeholders = ["Staycation di Bandung", "Tur ke Bali", "Event di Jakarta"];
            let counter = 0;

            setInterval(() => {
                inputElement.placeholder = placeholders[counter];
                counter = (counter + 1) % placeholders.length;
            }, 1500)
        }
        changePlaceholder();