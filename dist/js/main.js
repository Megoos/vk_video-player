$(function() {
  var section = $(".mv__playlist-list"),
    display = $(".mv__playlist-cont"),
    scrollPosition = 0;
  isScroll = true;

  var performTransition = function(scroll) {
    var heightSection = section.outerHeight(),
      heighDisplay = display.outerHeight(),
      workWindow = heightSection - heighDisplay;

    console.log(workWindow);
    scrollPosition += scroll;

    if (scrollPosition > 0) scrollPosition = 0;

    if (scrollPosition <= workWindow) scrollPosition = workWindow;

    var position = scrollPosition + "px";
    console.log(position);

    display.css({
      transform: "translateY(" + position + ")",
      "-webkit-transform": "translateY(" + position + ")"
    });
  };

  section.on({
    wheel: function(e) {
      var deltaY = e.originalEvent.deltaY / -10;
      performTransition(deltaY);
    },
    touchmove: function(e) {
      e.preventDefault();
    }
  });
});
