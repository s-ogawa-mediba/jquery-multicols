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
      wrapper: {
        tag: 'div',
        class: '',
        style: ''
      },
      columns: {
        tag: 'div',
        class: '',
        style: ''
      }
    };
    // check option length
    var options = $.extend(defaults, options);

    // set length of elements
    var len = $(this).size();
    if(len<=1) return false;

    // check column
    var column = Math.ceil(len/options.cols);

    // generate style, class attributes of wrapper
    var _wtag   = (options.wrapper.tag) ? options.wrapper.tag : 'div';
    var _wstyle = (options.wrapper.style) ? ' style="clear:left;' + options.wrapper.style + '" ' : '';
    var _wclass = (options.wrapper.class) ? ' class="' + options.wrapper.class + '" ' : '';

    // generate style, class attributes of columns
    var _ctag   = (options.columns.tag) ? options.columns.tag : 'div';
    var _cstyle = (options.columns.style) ? ' style="float: left; ' + options.columns.style + '" ' : '';
    var _cclass = (options.columns.class) ? ' class="' + options.columns.class + '" ' : '';

    $(this).wrapAll('<'
      + _wtag
      + _wclass
      + _wstyle
      + ' ></'
      + _wtag
      + '>');
    for(i=0;i<options.cols;i++) {
      $(this).slice(i*column, i*column+column).wrapAll('<'
        + _ctag
        + _cclass
        + _cstyle
        + ' ></'
        + _ctag
        + '>');
    }
  }
})(jQuery);