/*!
 * Custom jQuery plugin (https://github.com/kovarp/jquery.plugin)
 * Version 1.0.0
 *
 * Copyright 2017 Pavel Kovář - Frontend developer [www.pavelkovar.cz]
 * Licensed under MIT (https://github.com/kovarp/jquery.plugin/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
	throw new Error('Custom jQuery plugin requires jQuery')
}

/**
 * ------------------------------------------------------------------------
 * Custom jQuery plugin
 * ------------------------------------------------------------------------
 */

(function ($) {
	// Global variables
	var config;

	var methods = {
		init:   function (options) {
			var element = $(this);

			var defaults = {
				background: 'blue'
			};

			config = $.extend(defaults, options);

			element.css('background', config.background);
		},
		toggle: function () {
			var element = $(this);

			if (element.is(':visible')) {
				element.jqueryPlugin('hide');
			} else {
				element.jqueryPlugin('show');
			}
		},
		show:   function () {
			var element = $(this);

			element.fadeIn(500);
		},
		hide:   function () {
			var element = $(this);

			element.fadeOut(500);
		}
	};

	$.fn.jqueryPlugin = function (methodOrOptions) {
		if (methods[methodOrOptions]) {
			return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
			return methods.init.apply(this, arguments);
		}
		else {
			$.error('Method ' + methodOrOptions + ' does not exist on Custom jQuery plugin');
		}
	}
}(jQuery));