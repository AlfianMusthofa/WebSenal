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
                </div>
            </a>`);
            });
        });
    });
});