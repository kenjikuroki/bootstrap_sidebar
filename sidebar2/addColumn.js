//enterで処理
$("#rowAdd").click(function() {
    //処理を記載。
    $('#rowAdd').on('click', function() {
        $('table').append('<tr>' +  + '</tr>');
        for( var i = 0; i < $('table tr:first td').length; i++) {
          if( i != 0 ) {
            $('table tr:last').append('<td><input type="number" name="data_value' + (i + 1) + '" /></td>');
          } else {
            $('table tr:last').append('<td><input type="text" name="data_value' + (i + 1) + '" /></td>');
          }
        }
      });
    alert($("#mytextbox").val());
  });
  $("#mytextbox").keypress(function(e){
    if(e.which == 13){
      $("#mybutton").click();
    }
  });


$(function() {
    //行追加
    $('#rowAdd').on('click', function() {
      $('table').append('<tr>' +  + '</tr>');
      for( var i = 0; i < $('table tr:first td').length; i++) {
        if( i != 0 ) {
          $('table tr:last').append('<td><input type="number" name="data_value' + (i + 1) + '" /></td>');
        } else {
          $('table tr:last').append('<td><input type="text" name="data_value' + (i + 1) + '" /></td>');
        }
      }
    });
   
    //sidebar行追加
    $(function() {
        $('button#add').click(function(){
        var tr_form = '' +
        '<tr>' +
          '<td><input type="text" name="text[]"></td>' +
          '<td><label><input ></label></td>' +
        '</tr>';
        $(tr_form).appendTo($('table > tbody'));
      });
      });

    //行削除
    //$('#rowRemove').on('click', function() {
      //if( $('table tr').length > 3) {
        //$('table tr:last').remove();
      //}
    //});
   
      //列追加
    $('#colAdd').on('click', function() {
      var cell = $('table tr:first td').length;
      $('table tr').each(function(i) {
        if(i != 0) { 
          $(this).append('<td><input type="number" name="data_value'+ (cell + 1) +'" /></td>');
        } else {
          $(this).append('<td><input type="text" name="data_value'+ (cell + 1) +'" /></td>');
        } 
      });
    });
   
    //列削除
    //$('#colRemove').on('click', function() {
      //if($('table tr:first td').length > 2) {
        //$('table tr').each(function() {
          //$(this).children(':last').remove();
        //});
      //}
    //});
   
  });

  
  