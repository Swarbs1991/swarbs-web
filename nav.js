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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Work Dropdowns
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