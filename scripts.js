$(document).ready(function () {
    // Show loader while quotes are being loaded
    $('#quotes-loader').show();
    $('#quotes-carousel').hide(); // Hide the carousel until quotes are loaded

    $.ajax({
        url: "https://smileschool-api.hbtn.info/quotes",
        method: "GET",
        beforeSend: function () {
            $('#quotes-loader').show();  // Ensure loader is visible before the request
            $('#quotes-carousel').hide();  // Hide carousel while loading
        },
        success: function (quotes) {
            let quotesContent = '';

            quotes.forEach(function (quote, index) {
                quotesContent += `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <div class="d-flex justify-content-center align-items-center text-center">
              <div class="d-flex align-items-center">
                <img src="${quote.pic_url}" alt="quote author" class="rounded-circle mr-4" style="width: 100px; height: 100px;" />
                <div>
                  <p>${quote.text}</p>
                  <h5>${quote.name}</h5>
                  <small>${quote.title}</small>
                </div>
              </div>
            </div>
          </div>
        `;
            });

            $('#quotes-content').html(quotesContent); // Add the fetched quotes to the carousel
            $('#quotes-loader').hide(); // Hide the loader after quotes are fetched
            $('#quotes-carousel').show(); // Show the carousel after quotes are loaded
        },
        error: function () {
            $('#quotes-loader').text('Failed to load quotes. Please try again.');
        }
    });

    // Show spinner while changing carousel items
    $('#quotes-carousel').on('slide.bs.carousel', function () {
        $('#quotes-loader').show(); // Show the loader when the slide event starts
    });

    $('#quotes-carousel').on('slid.bs.carousel', function () {
        $('#quotes-loader').hide(); // Hide the loader when the slide event ends
    });
});


$(document).ready(function () {
    console.log('Document ready');

    $('#quotes-loader').show();
    $('#quotes-carousel').hide();

    $.ajax({
        url: "https://smileschool-api.hbtn.info/quotes",
        method: "GET",
        beforeSend: function () {
            console.log('Before send');
            $('#quotes-loader').show();
            $('#quotes-carousel').hide();
        },
        success: function (quotes) {
            console.log('Quotes loaded successfully');
            let quotesContent = '';

            quotes.forEach(function (quote, index) {
                quotesContent += `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <div class="d-flex justify-content-center align-items-center text-center">
              <div class="d-flex align-items-center">
                <img src="${quote.pic_url}" alt="quote author" class="rounded-circle mr-4" style="width: 100px; height: 100px;" />
                <div>
                  <p>${quote.text}</p>
                  <h5>${quote.name}</h5>
                  <small>${quote.title}</small>
                </div>
              </div>
            </div>
          </div>
        `;
            });

            $('#quotes-content').html(quotesContent);
            $('#quotes-loader').hide();
            $('#quotes-carousel').show();
        },
        error: function () {
            console.error('Failed to load quotes');
            $('#quotes-loader').text('Failed to load quotes. Please try again.');
        }
    });

    $('#quotes-carousel').on('slide.bs.carousel', function () {
        console.log('Carousel sliding');
        $('#quotes-loader').show();
    });

    $('#quotes-carousel').on('slid.bs.carousel', function () {
        console.log('Carousel slid');
        $('#quotes-loader').hide();
    });
});
