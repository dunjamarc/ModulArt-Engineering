var main = function(){
  $('#slideshow img').slideshowify({ parentEl :'#slideshow' });

  $('#myTopnav').on('click', function(){
  	$('.nav-justified').toggleClass('responsive');
  });
};

$(document).ready(main);
