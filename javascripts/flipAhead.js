var flipAhead = function(wnd) {
  var self = {},
      gestureStartCoords = [],
      pageLinks = {
        prev: document.head.querySelector("link[rel='prev']") && document.head.querySelector("link[rel='prev']").href,
        next: document.head.querySelector("link[rel='next']") && document.head.querySelector("link[rel='next']").href
      };

  var cleanupGestureCoords = function(touches) {
    if(!touches) return;
    
    for(var t=0;t<touches.length;t++) {
      for(var g=0;g<gestureStartCoords.length;g++) {
        if(gestureStartCoords[g].id == touches[t].identifier) {
          gestureStartCoords.splice(g, 1);
          break;
        }
      }
    }
  };

  
  var handleGesture = function(touches) {
    var gesture = null;

    if(!touches) return;
    
    for(var i=0; i<touches.length;i++) {
      var x = touches[i].clientX;
      for(var g=0;g<gestureStartCoords.length;g++) {
        if(x < gestureStartCoords[g].x) {
          gesture = "next";
          break;
        } else if(x > gestureStartCoords[g].x) {
          gesture = "prev";
          break;
        }
      }
      if(gesture) break;
    }

    if(gesture && pageLinks[gesture]) {
      wnd.location.href = pageLinks[gesture];
    }
  };
  
  self.handle = function(event) {
    if(event.type != "touchstart"  && event.type != "touchend" && 
       event.type != "touchcancel" && event.type != "touchleave") return;
    event.preventDefault(true);

    if((event.type == "touchstart" && event.touches.length < 2)) return;
    if((event.type == "touchstart" && event.touches.length > 2)) {
      gestureStartCoords = [];
      return;
    }

    if(event.type == "touchstart") {
      for(var i=0;i<event.touches.length;i++) {
        gestureStartCoords.push({x: event.touches[i].clientX, id: event.touches[i].identifier});
      }
    } else if(event.type == "touchend") {
      handleGesture(event.changedTouches);
      cleanupGestureCoords(event.changedTouches);
    } else {
      cleanupGestureCoords(event.changedTouches);
    }

    return false;
  }
  
  return self;
}

window.FlipAhead = flipAhead(window);
