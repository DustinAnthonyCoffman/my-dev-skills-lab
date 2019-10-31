
//hide developer skills

$('li').remove();

//append the value of input field to the ol by clicking the button
var $inputF = $('#field');


   //remove an individual skill by clicking on it
   var $red = $('.red');
   var $li = $('li')
 $('.red').on('click', function() {
    
     $('.red').remove();
 });

$('.mainButton').on('click', function() {
    $inputF.addClass('list');
   $('ol').append(`<li class='list'>
                  <button class='red'>${'X'}</button>${$inputF.val()}</li>`)
    

});





$(document).on('click', '.oly', function(evt){
    $(evt.target).closest('li').remove();
  
 });

