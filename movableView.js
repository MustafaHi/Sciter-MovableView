// Movable View v1.2 EXPERIMENTAL JS PORT 02
// https://github.com/MustafaHi/Sciter-MovableView

// Call movableView('selector' [, screenBound:bool(false)]);

Number.prototype.limit = function(min,max) {
  if (this < min) return min;
  if (this > max) return max;
  return this;
}

function movableView(s, screenBound = false)
{
  var xoff,yoff, minXY, maxX, maxY;
  var dragging = false;

  function screenBounds()
  {
    if (screenBound)
    {
      [maxX, maxY] = Window.this.screenBox("workarea", "dimension");
      var [w, h]   = Window.this.box("dimension", "border");
      maxX -= w;
      maxY -= h;
      minXY = 0;
    }
    else
    {
      maxX = Number.MAX_SAFE_INTEGER;
      maxY = Number.MAX_SAFE_INTEGER;
      minXY = Number.MIN_SAFE_INTEGER;
    }
  }

  function onMouseDown(e)
  {
    screenBounds();
    var [x,y] = Window.this.box("position", "border", "screen");
    xoff = e.screenX - x; yoff = e.screenY - y;
    dragging = true;

    document.on("mouseup"  , onMouseUp   );
    document.on("mousemove", onMouseMove );
    e.preventDefault();
    e.stopPropagation();
  }
  
  function onMouseMove(e)
  {
    if(dragging)
    {
      e.preventDefault();
      Window.this.move((e.screenX - xoff).limit(minXY, maxX), (e.screenY - yoff).limit(minXY, maxY));
    }
  }

  function onMouseUp(e)
  {
    if(dragging) { dragging = false; }
    document.off("mouseup");
    document.off("mousemove");
    e.preventDefault();
  }

  const elements = document.querySelectorAll(s);
  for(var i=0; i<elements.length; ++i) {
    elements[i].on("mousedown", onMouseDown );
  }
  return true;
}

