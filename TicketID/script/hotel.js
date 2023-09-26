$.getJSON('JSON/hotel.json', function (data) {
    $.each(data, function (i, data) {
        $('#hotel-list').append(`<a href="#">
        <div class="card">
            <div class="img">
                <img src="image/CardImage/${data.image}" alt="">
            </div>
            <div class="caption">
                <div class="row">
                    <h4 class="title">${data.name}</h4>
                    <div class="rating">
                        <div class="star">
                            ${data.star}
                        </div>
                        <div class="address">
                            <p class="addr">${data.address}</p>
                        </div>
                    </div>
                    <div class="review">
                        <div class="logo">
                            <i class="fa-solid fa-award"></i>
                        </div>
                        <p class="userreview">${data.review}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="banner">
                        <p>BCA Travel Fair</p>
                    </div>
                    <div class="price">
                        <p class="last-price">${data.lastPrice}</p>
                        <h3 class="current-price">${data.currentPrice}</h3>
                        <p class="sk">/kamar/malam (termasuk pajak)</p>
                    </div>
                </div>
                <div class="row">
                    <p>Pembatalan Gratis</p>
                    <p>Kolam Renang</p>
                    <p>Bathub</p>
                </div>
            </div>
        </div>
    </a>`);
    })
})