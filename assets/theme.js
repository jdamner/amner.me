jQuery(document).ready(function ($) {

  var $grid = $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });

  $(window).on('resize', function () {
    if ($('.grid').length > 0) {
      $grid.masonry('layout');
    }
  })


  $('#modal-window').on('show.bs.modal', function (e) {
    var button = $(e.relatedTarget)
    var modal = $(this)
    modal.find('#modal-title').html(button.data('title'))
    modal.find('#modal-content').html(button.data('content'))
    modal.find('#modal-image').html(button.data('image'))
    modal.find('#modal-meta').html(button.data('meta'))
  })


  $(".nav-link,.dropdown-item").click(function () {
    var t = $(this).attr("href");
    $('.active').removeClass('active');
    $("html, body").animate({
      scrollTop: $(t).offset().top - 50
    }, {
      duration: 300,
    });

    $('body').scrollspy({
      target: '#header-navbar',
      offset: $(t).offset().top
    });

    animateHeader();
    $(this).parent().addClass('active');
    return false;
  });

  function animateHeader() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    if (scroll < 10) {
      $('#masthead').addClass('top')
    } else {
      $('#masthead').removeClass('top')
    }
  }

  $(document).on('scroll', function (e) {
    animateHeader();
  });
});