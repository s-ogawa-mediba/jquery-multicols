/**
 * jquery.multicols.js for CakePHP
 *
 * you can get align your favorite form elements columns.
 *
 * @author Ogaaaan (Seiji Ogawa / HALTERIA.com)
 * @License none. you can use it freely. ex: This was made by me!
 */
(function($) {
  $.fn.multicols = function(options){
    var defaults = {
      cols: 3,
      tag: 'div',
      class: '',
      style: 'float: left'
    };
    // check option length
    var options = $.extend(defaults, options);
    var len = $(this).size();
    if(len<1) return false;
    // generate style, class attributes
    _style = (options.style) ? ' style="float: left; ' + options.style + '" ' : '';
    _class = (options.class) ? ' class="' + options.class + '" ' : '';

    // check column
    var column = Math.ceil(len/options.cols);
    $(this).parent().append('<div style="clear:left" class="clerfix"></div>');
    for(i=0;i<options.cols;i++) {
      $(this).slice(i*column, i*column+column).wrapAll('<'
        + options.tag
        + _class
        + _style
        + ' ></'
        + options.tag
        + '>');
    }
  }
})(jQuery);