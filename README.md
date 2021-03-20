# MovableView v1.2
Movable view for Sciter windows, allows you to move the window using any element in it.  
Advantages:
1. Cheating windows performance setting, you will see the full window and not just a rectangle while moving it in performance mode.
2. Optional prevent crossing screen bounds.
3. Does NOT conflict with CSS cursor properties, unlike `role="window-caption"`.
4. Allows dragging beyond the top edge of the screen, which is prevented by Aero Snap on Windows when using `role="window-caption"`.

Using inside a compiled application should use less than 1% CPU (while moving the view).


## Install
Add this file to your resources/UI folder
```php
movableView.tis
```

Then add the file to your project either from HTML :
```html
<script src="movableView.tis" type="text/tiscript"></script>
```
or from your main script file :
```php
include "movableView.tis";
```

Then initiate it by calling
```js
movableView("selector" [, screenBound:bool(false)]);
```
with the selector being any CSS selector i.e. `div` `.div` `#div`  
the second parameter will prevent window from going past the screen boundaries.
