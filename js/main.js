$(function () {
   $('[data-toggle="tooltip"]').tooltip();
});

$('.dropdown-toggle').dropdown();

//IBG
jQuery(document)[0].querySelectorAll(".ibg").forEach(el => {
   if (el.querySelector('img')) {
      el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
      el.querySelector('img').style.display = 'none';
   }
});


//accordion
jQuery(document).ready(function() {
   jQuery('.pull-up').click(function(event) {
      if (jQuery('.section').hasClass('one')){
         jQuery('.pull-up').not(jQuery(this)).removeClass('.active');
         jQuery('.toolbar__list').not(jQuery(this).next()).slideUp(300);
      }
      jQuery(this).toggleClass('active').next().slideToggle(300);
   });
});