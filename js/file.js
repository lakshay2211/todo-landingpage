window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    scrollLock: true,
    rewind:true,
    arrows: {   
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
        }
        },{
        breakpoint: 1024,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
        }
        }
    ]
    });});