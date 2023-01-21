let menuClick = document.getElementById('menuline').addEventListener('click', activeClass);
let menu = document.getElementById('menuslide');
let landing = document.getElementById('landing');


function activeClass(){
    menu.classList.toggle('active1');
    landing.classList.toggle('active2');


}

// for (i=0; i < 3; i++){
//     let servicecart = document.getElementsByClassName('servicecart')[i].addEventListener('mouseover', changecolor);
//     let carttitle = document.getElementsByClassName('gettitle')[i];

//     // let others = document.getElementsByClassName('mouseover')[i].addEventListener('mouseover', changecolor);

//     function changecolor(){
//         carttitle.classList.toggle('carttitle');
    
//     }

// }


let webbutton = document.getElementById('webbutt').addEventListener('click', removeGraphicAndSocial);

let graphics = document.getElementById('graphic');

let graphicbutton = document.getElementById('graphicbutt').addEventListener('click', removeWebandSocial);
let webdiv = document.getElementById('websitedisplay');

let socialbutton = document.getElementById('socialbutt').addEventListener('click', removeGraphicandWeb);
let socialdiv = document.getElementById('socialdisplay');




function removeGraphicAndSocial(){
    graphics.classList.toggle('displayactive');

    setTimeout(function(){
        graphics.classList.toggle('hidden');
    }, 500)

    socialdiv.classList.toggle('displayactive');

    setTimeout(function(){
        socialdiv.classList.toggle('hidden');
    }, 500)
    console.log('come')
}

function removeWebandSocial(){
    webdiv.classList.toggle('displayactive');

    setTimeout(function(){
        webdiv.classList.toggle('hidden');
    }, 500)

    socialdiv.classList.toggle('displayactive');

    setTimeout(function(){
        socialdiv.classList.toggle('hidden');
    }, 500)
    console.log('come')
}

function removeGraphicandWeb(){
    webdiv.classList.toggle('displayactive');

    setTimeout(function(){
        webdiv.classList.toggle('hidden');
    }, 500);

    graphics.classList.toggle('displayactive');

    setTimeout(function(){
        graphics.classList.toggle('hidden');
    }, 500)
}









