$(document).ready(function () {
  $(".popup-vimeo").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    closeOnContentClick: false,
    closeOnBgClick: true, // This allows closing by clicking outside the popup
    iframe: {
      patterns: {
        vimeo: {
          index: "vimeo.com/",
          id: function(url) {
            var match = url.match(/^.*vimeo.com\/(\d+)/);
            return (match && match[1]) ? match[1] : null;
          },
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        }
      }
    }
  });
});
