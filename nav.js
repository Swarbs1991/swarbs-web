//Nav Burger Button
$('button.menu-btn').click(function(){
	$('button.menu-btn').toggleClass('spin');
	$('nav#main').toggleClass('reveal');
	$('#about-me').removeClass('reveal');
	$('#about-site').removeClass('reveal');
	$('#web-work').removeClass('reveal');
	$('#design-work').removeClass('reveal');
	$('#cv').removeClass('reveal');
	$('#web-work .col').removeClass('reveal');
	$('.plus').removeClass('spin');
	$('canvas').removeClass('restrain');
});

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

$('li.LS').click(function(){
	$('.LS .plus').toggleClass('spin');
	/*
	$('.toolally .plus').removeClass('spin');
	$('.fabl .plus').removeClass('spin');
	$('.bay .plus').removeClass('spin');
	*/
});


$('li.fabl').click(function(){
	$('.fabl .plus').toggleClass('spin');
	/*
	$('.LS .plus').removeClass('spin');
	$('.toolally .plus').removeClass('spin');
	$('.bay .plus').removeClass('spin');
	*/
});

$('li.toolally').click(function(){
	$('.toolally .plus').toggleClass('spin');
	/*
	$('.LS .plus').removeClass('spin');
	$('.fabl .plus').removeClass('spin');
	$('.bay .plus').removeClass('spin');
	*/
});

$('li.bay').click(function(){
	$('.bay .plus').toggleClass('spin');
	/*
	$('.LS .plus').removeClass('spin');
	$('.fabl .plus').removeClass('spin');
	$('.toolally .plus').removeClass('spin');
	*/
});

//Collapsibles 
var coll = document.getElementsByClassName("secrets");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var coll = document.getElementsByClassName("toolally");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var coll = document.getElementsByClassName("fabl");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var coll = document.getElementsByClassName("bay");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

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
