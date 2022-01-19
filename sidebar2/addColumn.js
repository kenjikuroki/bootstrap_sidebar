var minCount = 1;
var maxCount = 30;

$(function(){
$('#demo-plus').on('click', function(){
  var inputCount = $('#demo-area .unit').length;
  if (inputCount < maxCount){
    var element = $('#demo-area .unit:last-child').clone(true);
    var inputList = element[0].querySelectorAll('input[type="text"]');
    for (var i = 0; i < inputList.length; i++) {
      inputList[i].value = "";
    }
    $('#demo-area .unit').parent().append(element);
  }
});
$('.demo-minus').on('click', function(){
  var inputCount = $('#demo-area .unit').length;
  if (inputCount > minCount){
    $(this).parents('.unit').remove();
  }
});
});

$(function(){
  $('#main-plus').on('click', function(){
    var inputCount = $('#main-area .unit').length;
    if (inputCount < maxCount){
      var element = $('#main-area .unit:last-child').clone(true);
      var inputList = element[0].querySelectorAll('input[type="text"]');
      for (var i = 0; i < inputList.length; i++) {
        inputList[i].value = "";
      }
      $('#main-area .unit').parent().append(element);
    }
  });
  $('.main-minus').on('click', function(){
    var inputCount = $('#main-area .unit').length;
    if (inputCount > minCount){
      $(this).parents('.unit').remove();
    }
  });
  });