var flipAhead = function(wnd) {
  var self = {},
      gestureStartCoords = [],
      pageLinks = {
        prev: document.head.querySelector("link[rel='prev']") && document.head.querySelector("link[rel='prev']").href,
        next: document.head.querySelector("link[rel='next']") && document.head.querySelector("link[rel='next']").href
      };
  
  var handleGesture = function(touches) {
    var gesture = null;
    
    for(var i=0; i<touches.length;i++) {
      if(touches[i].clientX < gestureStartCoords[i]) {
        gesture = "next";
        break;
      } else if(touches[i].clientX > gestureStartCoords[i]) {
        gesture = "prev";
        break;
      }
    }

    if(gesture && pageLinks[gesture]) {
      wnd.location.href = pageLinks[gesture];
    }
  };
  
  self.handle = function(event) {
    
    if(event.type != "touchstart" && event.type != "touchend") return;

    if(event.type == "touchstart") {
      for(var i=0;i<event.touches.length;i++) {
        gestureStartCoords.push(event.touches[i].clientX);
      }
    } else if(event.type == "touchend") {
      handleGesture(event.changedTouches);
    }
    
    event.preventDefault(true);
    return false;
  }
  
  return self;
}

window.FlipAhead = flipAhead(window);