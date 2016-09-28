/*global $, jQuery, TweenMax, THREE*/
var renderer, scene, camera, composer, circle, skelet;

window.onload = function () {
    "use strict";
    init();
    animate();
};

function init() {
    "use strict";
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);
    document.getElementById('soleil').appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 400;
    scene.add(camera);
    
    circle = new THREE.Object3D();
    skelet = new THREE.Object3D();

    scene.add(circle);
    scene.add(skelet);


    var geom = new THREE.IcosahedronGeometry(10, 1),
        geom2 = new THREE.IcosahedronGeometry(15, 1),
        material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            shading: THREE.FlatShading
        }),
        mat = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            shading: THREE.FlatShading
        }),
        mat2 = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            wireframe: true,
            side: THREE.DoubleSide
        }),

        planet = new THREE.Mesh(geom, mat);
    planet.scale.x = planet.scale.y = planet.scale.z = 16;
    circle.add(planet);

    var planet2 = new THREE.Mesh(geom2, mat2);
    planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
    skelet.add(planet2);

    var ambientLight = new THREE.AmbientLight(0x999999);
    scene.add(ambientLight);
  
    var lights = [];
    lights[0] = new THREE.DirectionalLight(0xffffff, 1);
    lights[0].position.set(1, 0, 0);
    lights[1] = new THREE.DirectionalLight(0x11E8BB, 1);
    lights[1].position.set(0.75, 1, 0.5);
    lights[2] = new THREE.DirectionalLight(0x8200C9, 1);
    lights[2].position.set(-0.75, -1, 0.5);
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {
    "use strict";
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    "use strict";
    requestAnimationFrame(animate);

    circle.rotation.x -= 0.0010;
    circle.rotation.y -= 0.0010;
    skelet.rotation.x -= 0.0010;
    skelet.rotation.y += 0.0020;
    renderer.clear();

    renderer.render(scene, camera);
}
function logoDown() {
    "use strict";
    TweenMax.to('#logo', 0.3, {top: '30px'});
}
function logoUp() {
    "use strict";
    TweenMax.to('#logo', 0.6, {top: '-20px'});
}
$('#logo').mouseover(function () {
    "use strict";
    logoDown();
});
$('#logo').mouseout(function () {
    "use strict";
    logoUp();
});
$(function () {
    "use strict";
    $(".element").typed({
        strings: ["Bienvenue sur le Soleil,", "cliquez sur les points repère pour explorer l'étoile."],
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
        /****** INFOS PLANET *********/
    
    /***MASSE***/
    function openMasse() {
        $('#masseInfos').css('display', 'block');
        $('#masseInfos').animate({opacity : 1});
        $('#closeMasse').css('display','block');
        $('#closeMasse').animate({opacity : 1});
        
    }
    $('#masse').click(function () {
        openMasse();
    });
    function closeMasse() {
        $('#masseInfos').css('display', 'none');
        $('#masseInfos').animate({opacity : 0});
        $('#closeMasse').css('display','none');
        $('#closeMasse').animate({opacity : 0});
    }
    $('#closeMasse').click(function () {
        closeMasse();
    });
    
    /***TEMPERATURE***/
    function openTemp() {
        $('#tempInfos').css('display', 'block');
        $('#tempInfos').animate({opacity : 1});
        $('#closeTemp').css('display','block');
        $('#closeTemp').animate({opacity : 1});
        
    }
    $('#temperature').click(function () {
        openTemp();
    });
    function closeTemp() {
        $('#tempInfos').css('display', 'none');
        $('#tempInfos').animate({opacity : 0});
        $('#closeTemp').css('display','none');
        $('#closeTemp').animate({opacity : 0});
    }
    $('#closeTemp').click(function () {
        closeTemp();
    });
    
    /***GRAVITE***/
    function openGrav() {
        $('#graviteInfos').css('display', 'block');
        $('#graviteInfos').animate({opacity : 1});
        $('#closeGravite').css('display','block');
        $('#closeGravite').animate({opacity : 1});
        
    }
    $('#gravite').click(function () {
        openGrav();
    });
    function closeGrav() {
        $('#graviteInfos').css('display', 'none');
        $('#graviteInfos').animate({opacity : 0});
        $('#closeGravite').css('display','none');
        $('#closeGravite').animate({opacity : 0});
    }
    $('#closeGravite').click(function () {
        closeGrav();
    });
    
    /***IDCARD***/
    function openId() {
        $('#idInfos').css('display', 'block');
        $('#idInfos').animate({opacity : 1});
        $('#closeId').css('display','block');
        $('#closeId').animate({opacity : 1});
        
    }
    $('#idCarte').click(function () {
        openId();
        closeGrav();
        closeMasse();
        closeTemp();
    });
    function closeId() {
        $('#idInfos').css('display', 'none');
        $('#idInfos').animate({opacity : 0});
        $('#closeId').css('display','none');
        $('#closeId').animate({opacity : 0});
    }
    $('#closeId').click(function () {
        closeId();
    });
});