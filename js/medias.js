/*jslint browser: true*/
/*global $*/
/* jslint expr: true */
var	$parent = $("#main"),
    $aside = $("#aside"),
    $asideTarget = $aside.find(".aside--details"),
    $asideClose = $aside.find(".close"),
    $galleryParent = $(".gallery"),
    $gallery = $galleryParent.find(".items"),
    slideClass = "show-detail";

function showAside() {
    "use strict";
    if (!$("html").hasClass(slideClass)) {
        $("html").toggleClass(slideClass);
    }
}

function loadGalleryData(target) {
    "use strict";
    var $this = $(target),
        itemHtml = $this.find(".details").html();
    $asideTarget.html(itemHtml);
    showAside();
}

		
function killAside() {
    "use strict";
    if ($("html").hasClass(slideClass)) {
        $("html").removeClass(slideClass);
    }
}

$gallery.on("click", function (e) {
    "use strict";
    e.preventDefault();
	e.stopPropagation();
	if (!$("html").hasClass(slideClass)) {
        $gallery.removeClass("active");
        $(this).addClass("active");
        $(this).attr("true");
        loadGalleryData($(this));
    } else {
        killAside();
        $(this).attr("false");
    }
});

$asideClose.on("click", function (e) {
    "use strict";
    e.preventDefault();
    killAside();
});

$parent.on("click", function (e) {
    "use strict";
    if ($("html").hasClass(slideClass)) {
        killAside();
    }
});
