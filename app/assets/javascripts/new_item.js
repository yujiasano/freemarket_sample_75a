$(function () {
  var dataBox = new DataTransfer();
  var file_field = document.querySelector('input[type=file]')

  $('#upload-image').change(function(){
    var files = $('input[type="file"]').prop('files')[0];
    $.each(this.files, function(i, file){
      var fileReader = new FileReader();
      dataBox.items.add(file)
      file_field.files = dataBox.files

      var num = $('.item-image').length + 1 + i
      fileReader.readAsDataURL(file);
      //画像が10枚になったら超えたらドロップボックスを削除する
      if (num == 10){
        $('#image-box__container').css('display', 'none')   
      }
      fileReader.onloadend = function() {
        var src = fileReader.result
        var html= `<div class='item-image' data-image="${file.name}">
        <div class='item-image__content--icon'>
          <img src=${src} height="118" >
          <hr class='item-image__content--icon--hr'>
          <div class='item-image__operetion--edit'>編集</>
        </div>
    </div>`
        $('#image-box__container').before(html);
      };
      $('#image-box__container').attr('class', `item-num-${num}`)
    });
  });
  //編集ボタンをクリックすると発火するイベント
  $(document).on("click", '.item-image__operetion--edit', function(){
    var target_image = $(this).parent().parent()
    var target_name = $(target_image).data('image')
    //プレビューがひとつだけの場合、file_fieldをクリア
    if(file_field.files.length==1){
      //inputタグに入ったファイルを削除
      $('input[type=file]').val(null)
      dataBox.clearData();
      console.log(dataBox)
    }else{
      //プレビューが複数の場合
      $.each(file_field.files, function(i,input){
        if(input.name==target_name){
          dataBox.items.remove(i) 
        }
      })
      file_field.files = dataBox.files
    }
    //プレビューを削除
    target_image.remove()
    var num = $('.item-image').length
    $('#image-box__container').show()
    $('#image-box__container').attr('class', `item-num-${num}`)
  })

  
  var dropArea = document.getElementById("image-box-1");

  //loadイベント発生時に発火するイベント
  window.onload = function(e){
    //ドラッグした要素がドロップターゲットの上にある時にイベントが発火
    dropArea.addEventListener("dragover", function(e){
      e.preventDefault();
      $('#border-line').css({'border': '1px solid rgb(204, 204, 204)','box-shadow': '0px 0px 4px'})
    },false);
    dropArea.addEventListener("dragleave", function(e){
      e.preventDefault();
      $('#border-line').css({'border': '1px dashed rgb(204, 204, 204)','box-shadow': '0px 0px 0px'})      
    },false);
    dropArea.addEventListener("drop", function(e) {
      e.preventDefault();
      $('#border-line').css({'border': '1px dashed rgb(204, 204, 204)','box-shadow': '0px 0px 0px'});
      var files = e.dataTransfer.files;
      $.each(files, function(i,file){

        var fileReader = new FileReader();

        dataBox.items.add(file)
        file_field.files = dataBox.files
        var num = $('.item-image').length + i + 1
        fileReader.readAsDataURL(file);
        
        if (num==10){
          $('#image-box__container').css('display', 'none')   
        }
        
        fileReader.onload = function() {
          var src = fileReader.result
          var html =`<div class='item-image' data-image="${file.name}">
          <div class='item-image__content--icon'>
            <img src=${src} height="118" >
            <hr class='item-image__content--icon--hr'>
            <div class='item-image__operetion--edit'>編集</>
          </div>
      </div>`
        $('#image-box__container').before(html);
        };
        $('#image-box__container').attr('class', `item-num-${num}`)
      })
    })
  }
  //価格表示
  $('#sell-price').on('input', function(){
    var data = $('#sell-price').val();
    var profit = Math.round(data * 0.9)
    var fee = (data - profit)
    $('#furima_fee').html(fee)
    $('#furima_fee').prepend('¥')
    $('#revenue').html(profit)
    $('#revenue').prepend('¥')
    if(profit == '') {
    $('#revenue').html('');
    $('#furima_fee').html('');
    }
  })
});

  
