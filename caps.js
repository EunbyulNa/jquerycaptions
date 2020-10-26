$(function () {
var time = 300;
var $first = $('.cards'); //제이쿼리 객체만들기


$first .on('mouseover', function(){
  $(this).find('strong, span').stop().animate({'opacity':'1'}, time);
  })
  .on('mouseout', function(){
    $(this).find('strong, span').stop().animate({'opacity':'0'}, time);
  });

});


$(function () {
  var time = 300;
  var $se = $('.cardss'); //제이쿼리 객체만들기


  $se .on('mouseover', function(){
    $(this).find('strong').stop().animate({'left':0}, time);
  })
  .on('mouseout', function(){
    $(this).find('strong').stop().animate({'left':-300}, time);
  });

  $se .on('mouseover', function(){
    $(this).find('span').stop().animate({'opacity':'0'}, time);
  })
  .on('mouseout', function(){
    $(this).find('span').stop().animate({'opacity':'1'}, time);
  });

//세번째
var $th = $('.th');
  $th .on('mouseover', function(){
    $(this).find('strong').stop().animate({'bottom':4}, 'easeOutQuart');
    $(this).find('img').stop().animate({'top':'-50px'},800,'easeOutQuart');
  })
  .on('mouseout', function(){
    $(this).find('strong').stop().animate({'bottom':-50}, 'easeOutQuart');
    $(this).find('img').stop().animate({'top':'0'},800,'easeOutQuart');
  });

//네번째
  var $fo = $('.four');
    $fo .on('mouseover', function(){
      $(this).find('strong').stop().animate({'left':0}, time);
    })
    .on('mouseout', function(){
      $(this).find('strong').stop().animate({'left':-150}, time);
    });

});
