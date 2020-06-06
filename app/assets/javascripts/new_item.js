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
    } else if (count == 0) {
      $('.label-content').css('width', '620px');
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
      } else if (count == 0) {
        $('.label-content').css('width', '620pxpx');
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
        $('.label-content').css('width', '620px');
      } else if (count == 2) {
        $('.label-content').css('width', '491px');
      } else if (count == 3) {
        $('.label-content').css('width', '363px');
      } else if (count == 4) {
        $('.label-content').css('width', '234px');
      } else if (count == 5) {
        $('.label-content').css('width', '106px');
      } else if (count == 6) {
        $('.label-content').css('width', '620px');
      } else if (count == 7) {
        $('.label-content').css('width', '491px');
      } else if (count == 8) {
        $('.label-content').css('width', '363px');
      } else if (count == 9) {
        $('.label-content').css('width', '234px');
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

  // 商品説明の文字カウント
  $("#input-text").on("keyup", function() {
    let countNum = String($(this).val().length);
    $("#counter").text(countNum + "/1000");
  });
});