$(document).ready(function(){
  console.log('Ready!');

});

var datedisplayed = document.querySelector('#currentDay');
var timeNow = dayjs().format('dddd, MMM D, YYYY, h:mm:ss a');

datedisplayed.textContent = timeNow;


function hour(){
  var NowHour = dayjs().hour();

  $('.time-block').each(function(){
    var blocks = parseInt($(this).attr('id').split('-')[1]);

    if(blocks < NowHour ) {
      $(this).addClass('past');
    } else if (blocks === NowHour){
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}
hour();

function textdisp(){
  $('.time-block').each(function(){
    var blocktime = $(this).attr('id');
    $(this).children('.description').val(localStorage.getItem(blocktime));
  });
  textdisp();
}


$('.saveBtn').on('click',function(){
  var value = $(this).siblings('.description').val();
  var time = $(this).present().attr('id');
  localStorage.setItem(time,value);
});


