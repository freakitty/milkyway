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
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});
/***************
    SUN
**************/
    function sunH() {
        $('#sunHover').css('display', 'block');
    }
    function sunO() {
        $('#sunHover').css('display', 'none');
    }
    $('#globalSun').mouseover(function () {
        sunH();
    });
    $('#globalSun').mouseout(function () {
        sunO();
    });
/***************
    MERCURY
**************/
    function mercuryH() {
        $('#mercuryHover').css('display', 'block');
    }
    function mercuryO() {
        $('#mercuryHover').css('display', 'none');
    }
    $('#globalMercury').mouseover(function () {
        mercuryH();
    });
    $('#globalMercury').mouseout(function () {
        mercuryO();
    });
/***************
    VENUS
**************/
    function venusH() {
        $('#venusHover').css('display', 'block');
    }
    function venusO() {
        $('#venusHover').css('display', 'none');
    }
    $('#globalVenus').mouseover(function () {
        venusH();
    });
    $('#globalVenus').mouseout(function () {
        venusO();
    });
/***************
    TERRE
**************/
    function earthH() {
        $('#earthHover').css('display', 'block');
    }
    function earthO() {
        $('#earthHover').css('display', 'none');
    }
    $('#globalEarth').mouseover(function () {
        earthH();
    });
    $('#globalEarth').mouseout(function () {
        earthO();
    });
/***************
    MARS
**************/
    function marsH() {
        $('#marsHover').css('display', 'block');
    }
    function marsO() {
        $('#marsHover').css('display', 'none');
    }
    $('#globalMars').mouseover(function () {
        marsH();
    });
    $('#globalMars').mouseout(function () {
        marsO();
    });
/***************
    JUPITER
**************/
    function jupiterH() {
        $('#jupiterHover').css('display', 'block');
    }
    function jupiterO() {
        $('#jupiterHover').css('display', 'none');
    }
    $('#globalJupiter').mouseover(function () {
        jupiterH();
    });
    $('#globalJupiter').mouseout(function () {
        jupiterO();
    });
/***************
    SATURN
**************/
    function saturnH() {
        $('#saturnHover').css('display', 'block');
    }
    function saturnO() {
        $('#saturnHover').css('display', 'none');
    }
    $('#globalSaturn').mouseover(function () {
        saturnH();
    });
    $('#globalSaturn').mouseout(function () {
        saturnO();
    });
/***************
    URANUS
**************/
    function uranusH() {
        $('#uranusHover').css('display', 'block');
    }
    function uranusO() {
        $('#uranusHover').css('display', 'none');
    }
    $('#globalUranus').mouseover(function () {
        uranusH();
    });
    $('#globalUranus').mouseout(function () {
        uranusO();
    });
/***************
    NEPTUNE
**************/
    function neptuneH() {
        $('#neptuneHover').css('display', 'block');
    }
    function neptuneO() {
        $('#neptuneHover').css('display', 'none');
    }
    $('#globalNeptune').mouseover(function () {
        neptuneH();
    });
    $('#globalNeptune').mouseout(function () {
        neptuneO();
    });
});

