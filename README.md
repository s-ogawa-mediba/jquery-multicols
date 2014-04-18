#jquery.multicols.js

## Change from single column to Multi Columns automaticaly

You can change layout of checkboxes, radio buttons and other form elements to any columns from one column without to edit HTML files if you use this plugin.

This plugin can display correct DOM.
Not display rectangles of copy of that elements.
*Their plugin is so suck.

We knows that some frameworks display HTML Forms without line feed.
But, You should NOT be customize HTML Tags by server side script.

I hope that your tags will be customized by DOM before rendering html by this plugin.

So, the best way to customize column is to use this plugin!!

Enjoy.

## Install

put your js directory and call this plugin file after jquery.
```
<script type="text/javascript" src="/js/jquery.js">
<script type="text/javascript" src="/js/jquery-multicols.js">
```

## How to use

You can set one of the elements farmland those that are in a line to jquery selector.

### 9 elements of input tags ( often display from some framework).

```
<div class="checkbox"><input type="checkbox" /></div>
<div class="checkbox"><input type="checkbox" /></div>
<div class="checkbox"><input type="checkbox" /></div>
<div class="checkbox"><input type="checkbox" /></div>
<div class="checkbox"><input type="checkbox" /></div>
<div class="checkbox"><input type="checkbox" /></div>
<div class="checkbox"><input type="checkbox" /></div>
<div class="checkbox"><input type="checkbox" /></div>
<div class="checkbox"><input type="checkbox" /></div>
```

### Change 1 colum to 3 columns without edit HTML

```
$('.checkbox').multicols({ cols: 3 });
```

### Output DOM example

```
<div> <- wrapper
  <div> <- columns
    <div class="checkbox"><input type="checkbox" /></div>
    <div class="checkbox"><input type="checkbox" /></div>
    <div class="checkbox"><input type="checkbox" /></div>
  </div>
  <div> <- columns
    <div class="checkbox"><input type="checkbox" /></div>
    <div class="checkbox"><input type="checkbox" /></div>
    <div class="checkbox"><input type="checkbox" /></div>
  </div>
  <div> <- columns
    <div class="checkbox"><input type="checkbox" /></div>
    <div class="checkbox"><input type="checkbox" /></div>
    <div class="checkbox"><input type="checkbox" /></div>
  </div>
</div>
```

### Other options

```
$('.checkbox').multicols({
  cols: 3,
  wrapper: { tag: 'div', class: 'inputarea', style: 'margin: 1em;'},
  columns: { tag: 'div' }
});
```
