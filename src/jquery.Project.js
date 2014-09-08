/*
 * Project
 * https://github.com/jasancheg/project
 *
 * Copyright (c) 2014 Jose Antonio Sanchez
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.Project = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.Project = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.Project.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.Project.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].Project = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
