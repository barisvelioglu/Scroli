/*
	* simpleNumeric.js 1.0
	* Copyright (c) 2013 Barýþ Velioðlu, http://barisvelioglu.net
	* simpleNumeric.js is open sourced under the MIT license.
	*/

jQuery.fn.scroli = function (options) {

    options = jQuery.extend({ speed: 1000, waitBeforeRun : 500}, options);

    return this.each(function () {

        var totalWidth = 0;
        var speed = options.speed;

        var $scrollable = $(this).find('ul');

        $scrollable.find("li:last-child").css("margin-right", "0");
        var parentLeftPoint = $scrollable.offsetParent().offset().left;

        //container width
        var containerWidth = $scrollable.parent().width();

        setTimeout(function () {
            //calculate total width of scrollable element 
            $scrollable.find("li").each(function (i, e) { totalWidth += $(e).outerWidth(true); });

            $scrollable.css("width", totalWidth);

            $scrollable.hover(function () {
                $(this).stop();
            }, function () {
                scroli(totalWidth);
            });

            scroli(totalWidth);
        }, options.waitBeforeRun);

        function scroli(width) {
            var startPoint = $scrollable.offset().left - parentLeftPoint;
            var totalSlideWidth = startPoint + width;
            var time = totalSlideWidth * speed / 100;

            width = totalWidth;

            $scrollable.animate({ "left": "-=" + totalSlideWidth + "" }, time, "linear", function () { $scrollable.css("left", containerWidth); scroli(width); });
        }

    });

};