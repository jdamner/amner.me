// once documnet is ready (interactive), then load images as needed.

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "interactive") {
    // lazy load images
    var lazy = document.getElementsByClassName('lazy');
    for (var i = 0; i < lazy.length; i++) {
      lazy[i].src = lazy[i].getAttribute('data-src');
      lazy[i].removeAttribute('data-src');
    }

    window.onscroll = function () {
      var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      if (scroll < 30) {
        document.getElementById('masthead').classList.add('top')
      } else {
        document.getElementById('masthead').classList.remove('top')
      }
    }
  }
});