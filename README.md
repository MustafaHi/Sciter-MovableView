# MovableView
Movable view for Sciter windows, allows you to move the window using any element in it.  
Advantages:
1. Cheating windows performance setting, you will see the full window and not just a rectangle while moving it in performance mode.
2. Smoothed movement.

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
movableView("selector");
```
with the selector being any CSS selector i.e. `div` `.div` `#div`
