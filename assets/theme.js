// once documnet is ready (interactive), then load images as needed.
document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "interactive") {
    // lazy load images
    var lazy = document.getElementsByClassName('lazy');
    for (var i = 0; i < lazy.length; i++) {
      lazy[i].src = lazy[i].getAttribute('data-src');
      lazy[i].removeAttribute('data-src');
    }


    var elem = document.querySelector('.grid')
    if (elem.length > 0) {
      console.log(elem)
      var msnry = new Masonry(elem, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      });
      msnry.imagesLoaded().progress(function () {
        msnry.masonry('layout');
      })
      window.setInterval(function () {
        msnry.masonry('layout');
      }, 1000);

      window.onresize = function () {
        msnry.masonry('layout');
      }
    }
  }





  window.onscroll = function () {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    if (scroll < 30) {
      document.getElementById('masthead').classList.add('top')
    } else {
      document.getElementById('masthead').classList.remove('top')
    }
  }
});