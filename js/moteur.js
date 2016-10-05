/*jslint browser: true*/
/*global $, jQuery, TweenMax, TimelineMax, Power4*/
/* jslint expr: true */
$(function () {
    "use strict";
    $(".element").typed({
        strings: ["Bonjour,", "Pour commencer l'exploration veuillez cliquer sur une planète."],
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
});

