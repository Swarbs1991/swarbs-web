//Code clipped from nav.js with scrolling restructure
//Nav Links
$('li.about-me').click(function(){
	$('#about-me').toggleClass('reveal');
	$('nav#main').toggleClass('reveal');
	$('button.menu-btn').toggleClass('spin');
});

$('li.about-site').click(function(){
	$('#about-site').toggleClass('reveal');
	$('nav#main').toggleClass('reveal');
	$('button.menu-btn').toggleClass('spin');
});

$('li.web-work').click(function(){
	$('#web-work').toggleClass('reveal');
	$('nav#main').toggleClass('reveal');
	$('button.menu-btn').toggleClass('spin');
});

$('li.design-work').click(function(){
	$('#design-work').toggleClass('reveal');
	$('nav#main').toggleClass('reveal');
	$('button.menu-btn').toggleClass('spin');
});

$('li.cv').click(function(){
	$('#cv').toggleClass('reveal');
	$('nav#main').toggleClass('reveal');
	$('button.menu-btn').toggleClass('spin');
});

//Web Work Dropdowns and plus animations
$('.three li').click(function(){
	$('canvas').addClass('restrain');
});

//Collapse open Divs when expanding another
/*
function toggle(id) {
    var e = document.getElementByClassName();
    var coll = ['col'];
    for (index = 0; index < coll.length; index++) {
      if (e != coll[index]) {
        e.style.display = 'none';
      } else {        
        if (e.style.display == '') {
          e.style.display = 'none';
	  } else {
          e.style.display = '';
        }
      }
    }
  }
 */