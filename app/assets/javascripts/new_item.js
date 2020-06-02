$(function(){

  //プレビューのhtmlを定義
  function buildHTML(count) {
    var html = `<div class="preview-box" id="preview-box__${count}">
                  <div class="upper-box">
                    <img src="" alt="preview">
                  </div>
                  <div class="lower-box">
                    <div class="delete-box" id="delete_btn_${count}">
                      <span>削除</span>
                    </div>
                  </div>
                </div>`
    return html;
  }

  // 投稿編集時
    //items/:i/editページへリンクした際のアクション
    if (window.location.href.match(/\/items\/\d+\/edit/)){

      var count = $('.preview-box').length;
      if (count == 1) { 
        $('.label-content').css('width', '491px');
      } else if (count == 2) {
        $('.label-content').css('width', '363px');
      } else if (count == 3) {
        $('.label-content').css('width', '234px');
      } else if (count == 4) {
        $('.label-content').css('width', '106px');
      } else if (count == 5) {
        $('.label-content').css('width', '620px');
      } else if (count == 6) {
        $('.label-content').css('width', '491px');
      } else if (count == 7) {
        $('.label-content').css('width', '363px');
      } else if (count == 8) {
        $('.label-content').css('width', '234px');
      } else if (count == 9) {
        $('.label-content').css('width', '106px');
      } else if (count == 10) { 
        $('.label-content').hide();
      }
      //プレビューにidを追加
      $('.preview-box').each(function(index, box){
        $(box).attr('id', `preview-box__${index}`);
      })
      //削除ボタンにidを追加
      $('.delete-box').each(function(index, box){
        $(box).attr('id', `delete_btn_${index}`);
      })
      var count = $('.preview-box').length;
      //プレビューが10枚あるときは、投稿ボックスを消しておく
      if (count == 10) {
        $('.label-content').hide();
      }
    }

  // プレビューの追加
  $(document).on('change', '.hidden-field', function() {
    //hidden-fieldのidの数値のみ取得
    var id = $(this).attr('id').replace(/[^0-9]/g, '');
    //labelボックスのidとforを更新
    $('.label-box').attr({id: `label-box--${id}`,for: `item_images_attributes_${id}_image`});
    //選択したfileのオブジェクトを取得
    var file = this.files[0];
    var reader = new FileReader();
    //readAsDataURLで指定したFileオブジェクトを読み込む
    reader.readAsDataURL(file);
    //読み込み時に発火するイベント
    reader.onload = function() {
      var image = this.result;

      //プレビューが元々なかった場合はhtmlを追加
      if ($(`#preview-box__${id}`).length == 0) {
        var count = $('.preview-box').length;
        var html = buildHTML(id);

        $('.label-content').before(html)
      }
      //イメージを追加
      $(`#preview-box__${id} img`).attr('src', `${image}`);
      var count = $('.preview-box').length;
      
      if (count == 1) { 
        $('.label-content').css('width', '491px');
      } else if (count == 2) {
        $('.label-content').css('width', '363px');
      } else if (count == 3) {
        $('.label-content').css('width', '234px');
      } else if (count == 4) {
        $('.label-content').css('width', '106px');
      } else if (count == 5) {
        $('.label-content').css('width', '620px');
      } else if (count == 6) {
        $('.label-content').css('width', '491px');
      } else if (count == 7) {
        $('.label-content').css('width', '363px');
      } else if (count == 8) {
        $('.label-content').css('width', '234px');
      } else if (count == 9) {
        $('.label-content').css('width', '106px');
      } else if (count == 10) { 
        $('.label-content').hide();
      }
      //ラベルのidとforの値を変更
      if(count < 10){
        //プレビューの数でラベルのオプションを更新する
        $('.label-box').attr({id: `label-box--${count}`,for: `item_images_attributes_${count}_image`});
      }
      //プレビュー削除したフィールドにdestroy用のチェックボックスがあった場合、チェックを外す
      if ($(`#item_images_attributes_${id}__destroy`)){
        $(`#item_images_attributes_${id}__destroy`).prop('checked',false);
      } 
    }
  });

  // 画像の削除
  $(document).on('click', '.delete-box', function() {
    var count = $('.preview-box').length;
    //item_images_attributes_${id}_image から${id}に入った数字のみを抽出
    var id = $(this).attr('id').replace(/[^0-9]/g, '');
    //取得したidに該当するプレビューを削除
    $(`#preview-box__${id}`).remove();
    
    if (count == 1) { 
      $('.label-content').css('width', '491px');
    } else if (count == 2) {
      $('.label-content').css('width', '363px');
    } else if (count == 3) {
      $('.label-content').css('width', '234px');
    } else if (count == 4) {
      $('.label-content').css('width', '106px');
    } else if (count == 5) {
      $('.label-content').css('width', '620px');
    } else if (count == 6) {
      $('.label-content').css('width', '491px');
    } else if (count == 7) {
      $('.label-content').css('width', '363px');
    } else if (count == 8) {
      $('.label-content').css('width', '234px');
    } else if (count == 9) {
      $('.label-content').css('width', '106px');
    } else if (count == 10) { 
      $('.label-content').hide();
    }

    //新規登録時と編集時の場合分け
    //新規投稿時
    //削除用チェックボックスの有無で判定
    if ($(`#item_images_attributes_${id}__destroy`).length == 0) {
      //フォームの中身を削除 
      $(`#item_images_attributes_${id}_image`).val("");
      var count = $('.preview-box').length;
      //9個めが消されたらラベルを表示
      if (count == 9) {
        $('.label-content').show();
      }
      if (count == 1) { 
        $('.label-content').css('width', '491px');
      } else if (count == 2) {
        $('.label-content').css('width', '363px');
      } else if (count == 3) {
        $('.label-content').css('width', '234px');
      } else if (count == 4) {
        $('.label-content').css('width', '106px');
      } else if (count == 5) {
        $('.label-content').css('width', '620px');
      } else if (count == 6) {
        $('.label-content').css('width', '491px');
      } else if (count == 7) {
        $('.label-content').css('width', '363px');
      } else if (count == 8) {
        $('.label-content').css('width', '234px');
      } else if (count == 9) {
        $('.label-content').css('width', '106px');
      } else if (count == 10) { 
        $('.label-content').hide();
      }
      if(id < 10){
        $('.label-box').attr({id: `label-box--${id}`,for: `item_images_attributes_${id}_image`});

      }
    } else {

      //投稿編集時
      $(`#item_images_attributes_${id}__destroy`).prop('checked',true);
      if (count == 9) {
        $('.label-content').show();
      }

      //ラベルのwidth操作
      if (count == 1) { 
        $('.label-content').css('width', '491px');
      } else if (count == 2) {
        $('.label-content').css('width', '363px');
      } else if (count == 3) {
        $('.label-content').css('width', '234px');
      } else if (count == 4) {
        $('.label-content').css('width', '106px');
      } else if (count == 5) {
        $('.label-content').css('width', '620px');
      } else if (count == 6) {
        $('.label-content').css('width', '491px');
      } else if (count == 7) {
        $('.label-content').css('width', '363px');
      } else if (count == 8) {
        $('.label-content').css('width', '234px');
      } else if (count == 9) {
        $('.label-content').css('width', '106px');
      } else if (count == 10) { 
        $('.label-content').hide();
      }
      //ラベルのidとforの値を変更
      //削除したプレビューのidによって、ラベルのidを変更する
      if(id < 10){
        $('.label-box').attr({id: `label-box--${id}`,for: `item_images_attributes_${id}_image`});
      }
    }
  });
});



    // //フォームの中身を削除 
    // $(`#item_images_attributes_${id}_image`).val("");

    // //削除時のラベル操作
    // var count = $('.preview-box').length;
    // //5個めが消されたらラベルを表示
    // if (count == 10) {
    //   $('.label-content').show();
    // }
    // // setLabel(count);

    // if(id < 5){
    //   //削除された際に、空っぽになったfile_fieldをもう一度入力可能にする
    //   $('.label-box').attr({id: `label-box--${id}`,for: `item_images_attributes_${id}_image`});
    // }




// $(function () {
//   var dataBox = new DataTransfer();
//   var file_field = document.querySelector('input[type=file]')

//   $('#upload-image').change(function(){
//     var files = $('input[type="file"]').prop('files')[0];
//     $.each(this.files, function(i, file){
//       var fileReader = new FileReader();
//       dataBox.items.add(file)
//       file_field.files = dataBox.files

//       var num = $('.item-image').length + 1 + i
//       fileReader.readAsDataURL(file);
//       //画像が10枚になったら超えたらドロップボックスを削除する
//       if (num == 10){
//         $('#image-box__container').css('display', 'none')   
//       }
//       fileReader.onloadend = function() {
//         var src = fileReader.result
//         var html= `<div class='item-image' data-image="${file.name}">
//         <div class='item-image__content--icon'>
//           <img src=${src} height="118" >
//           <hr class='item-image__content--icon--hr'>
//           <div class='item-image__operetion--edit'>編集</>
//         </div>
//     </div>`
//         $('#image-box__container').before(html);
//       };
//       $('#image-box__container').attr('class', `item-num-${num}`)
//     });
//   });
//   //編集ボタンをクリックすると発火するイベント
//   $(document).on("click", '.item-image__operetion--edit', function(){
//     var target_image = $(this).parent().parent()
//     var target_name = $(target_image).data('image')
//     //プレビューがひとつだけの場合、file_fieldをクリア
//     if(file_field.files.length==1){
//       //inputタグに入ったファイルを削除
//       $('input[type=file]').val(null)
//       dataBox.clearData();
//       console.log(dataBox)
//     }else{
//       //プレビューが複数の場合
//       $.each(file_field.files, function(i,input){
//         if(input.name==target_name){
//           dataBox.items.remove(i) 
//         }
//       })
//       file_field.files = dataBox.files
//     }
//     //プレビューを削除
//     target_image.remove()
//     var num = $('.item-image').length
//     $('#image-box__container').show()
//     $('#image-box__container').attr('class', `item-num-${num}`)
//   })

  
//   var dropArea = document.getElementById("image-box-1");

//   //loadイベント発生時に発火するイベント
//   window.onload = function(e){
//     //ドラッグした要素がドロップターゲットの上にある時にイベントが発火
//     dropArea.addEventListener("dragover", function(e){
//       e.preventDefault();
//       $('#border-line').css({'border': '1px solid rgb(204, 204, 204)','box-shadow': '0px 0px 4px'})
//     },false);
//     dropArea.addEventListener("dragleave", function(e){
//       e.preventDefault();
//       $('#border-line').css({'border': '1px dashed rgb(204, 204, 204)','box-shadow': '0px 0px 0px'})      
//     },false);
//     dropArea.addEventListener("drop", function(e) {
//       e.preventDefault();
//       $('#border-line').css({'border': '1px dashed rgb(204, 204, 204)','box-shadow': '0px 0px 0px'});
//       var files = e.dataTransfer.files;
//       $.each(files, function(i,file){

//         var fileReader = new FileReader();

//         dataBox.items.add(file)
//         file_field.files = dataBox.files
//         var num = $('.item-image').length + i + 1
//         fileReader.readAsDataURL(file);
        
//         if (num==10){
//           $('#image-box__container').css('display', 'none')   
//         }
        
//         fileReader.onload = function() {
//           var src = fileReader.result
//           var html =`<div class='item-image' data-image="${file.name}">
//           <div class='item-image__content--icon'>
//             <img src=${src} height="118" >
//             <hr class='item-image__content--icon--hr'>
//             <div class='item-image__operetion--edit'>編集</>
//           </div>
//       </div>`
//         $('#image-box__container').before(html);
//         };
//         $('#image-box__container').attr('class', `item-num-${num}`)
//       })
//     })
//   }
//   //価格表示
//   $('#sell-price').on('input', function(){
//     var data = $('#sell-price').val();
//     var profit = Math.round(data * 0.9)
//     var fee = (data - profit)
//     $('#furima_fee').html(fee)
//     $('#furima_fee').prepend('¥')
//     $('#revenue').html(profit)
//     $('#revenue').prepend('¥')
//     if(profit == '') {
//     $('#revenue').html('');
//     $('#furima_fee').html('');
//     }
//   })
// });