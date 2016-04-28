/*global jQuery, $;*/
/* exported $ */
jQuery(function($) {

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
      $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
      $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
  });

//jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $('a.page-scroll').bind('click',  function(event) {
      var $anchor = $(this);
      var offsetScroll=40;
      console.log($($anchor.attr('href')).selector);
      if($($anchor.attr('href')).selector=='#aboutme'){
        offsetScroll=0;
        console.log(offsetScroll);
      }
      $('html,  body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top-offsetScroll
      },  1500,  'easeInOutExpo');
      event.preventDefault();
    });
  });


  'use strict';
  jQuery(document).ready(function(){

    $('#nav').affix({
      offset: {
        top: $('#banner').height()
      }
    });

    $('.skill-icon').mouseenter(function(){


      $(this).removeClass('live');
      $('.skill-icon').removeClass('around');
      $(this).parent().children().removeClass('acting');
      $( '.skills-area .skills-icons').removeClass('selected');





      $(this).parent().children().addClass('acting');
      $(this).addClass('live');
      $(this).prev().addClass('around');
      $(this).next().addClass('around');
      var indexIcon= $(this).index();

      var indexRow= $(this).parent().index();
      var nextRow=indexRow+2;


      $( '.skills-area .skills-icons:nth-child('+(indexRow)+' ) .skill-icon:nth-child('+(indexIcon+1)+" )").addClass('around');
      if(indexRow<=2) {
        $(".skills-area .skills-icons:nth-child(" + (indexRow) + " ) .skill-icon:nth-child(" + (indexIcon) + " )").addClass('around');
      }
      if(indexRow>2) {
        $(".skills-area .skills-icons:nth-child(" + (indexRow) + " ) .skill-icon:nth-child(" + (indexIcon + 2) + " )").addClass('around');
      }

      $( ".skills-area .skills-icons:nth-child("+(nextRow)+" ) .skill-icon:nth-child("+(indexIcon+1)+" )").addClass('around');
      if(indexRow>=2){
        $( ".skills-area .skills-icons:nth-child("+(nextRow)+" ) .skill-icon:nth-child("+(indexIcon)+" )").addClass('around');
      }
      if(indexRow<2) {
        $(".skills-area .skills-icons:nth-child(" + (nextRow) + " ) .skill-icon:nth-child(" + (indexIcon + 2) + " )").addClass('around');
      }
      $( ".skills-area .skills-icons:nth-child("+(indexRow+1)+"  )").addClass('selected');


    });
    $('.skill-icon').mouseleave(function(){

      $(this).removeClass('live');
      $('.skill-icon').removeClass('around');
      $(this).parent().children().removeClass('acting');
      $( ".skills-area .skills-icons").removeClass('selected');
 });
    $('#cform').submit(function(){

      var action = $(this).attr('action');

      $('#message').slideUp(750, function() {
        $('#message').hide();

        $('#submit')
          .before('<img src="images/ajax-loader.gif" class="contact-loader" />')
          .attr('disabled', 'disabled');

        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            comments: $('#comments').val()
          },
          function(data){
            document.getElementById('message').innerHTML = data;
            $('#message').slideDown('slow');
            $('#cform img.contact-loader').fadeOut('slow', function(){
              $(this).remove();
            });
            $('#submit').removeAttr('disabled');
            if(data.match('success') != null){
              $('#cform').slideUp('slow');
            }
          }
        );

      });

      return false;

    });

  });

});
