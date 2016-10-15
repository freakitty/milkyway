/*jslint browser: true*/
/*global $*/
/* jslint expr: true */
$(function () {
    "use strict";
 
/* =================================================================== TYPED ====================================================================== */
    $(".element").typed({
        strings: ["Bienvenue,", "cliquez sur les photos pour en savoir plus."],
        typeSpeed: 30
    });

    $("#inpt_search").on('focus', function () {
        $(this).parent('label').addClass('active');
    });

    $("#inpt_search").on('blur', function () {
        if ($(this).val().length === 0) {
            $(this).parent('label').removeClass('active');
        }
    });


/* =================================================================== ASIDE ====================================================================== */
    var	$parent = $("#main"),
        $aside = $("#aside"),
        $asideTarget = $aside.find(".aside--details"),
        $asideClose = $aside.find(".close"),
        $galleryParent = $(".gallery"),
        $gallery = $galleryParent.find(".items"),
        slideClass = "show-detail";

    function showAside() {
        if (!$("html").hasClass(slideClass)) {
            $("html").toggleClass(slideClass);
        }
    }

    function loadGalleryData(target) {
        var $this = $(target),
            itemHtml = $this.find(".details").html();
        $asideTarget.html(itemHtml);
        showAside();
    }
	
    function killAside() {
        if ($("html").hasClass(slideClass)) {
            $("html").removeClass(slideClass);
        }
    }

    $gallery.on("click", function (e) {
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
        e.preventDefault();
        killAside();
    });

    $parent.on("click", function (e) {
        if ($("html").hasClass(slideClass)) {
            killAside();
        }
    });
});
