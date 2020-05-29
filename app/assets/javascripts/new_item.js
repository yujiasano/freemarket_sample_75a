$(document).on('turbolinks:load', function(){
  var dropzone = $('.dropzone-area');
  var dropzone2 = $('.dropzone-area2');
  var dropzone_box = $('.dropzone-box');
  var images = [];
  var inputs  =[];
  var input_area = $('.input_area');
  var preview = $('#preview');
  var preview2 = $('#preview2');

  $(document).on('change', 'input[type= "file"].upload-image',function(event) {
    var file = $(this).prop('files')[0];
    var reader = new FileReader();
    inputs.push($(this));
    var img = $(`<div class= "img_view"><img></div>`);
    reader.onload = function(e) {
      var btn_wrapper = $('<div class="btn_wrapper"><div class="btn edit">編集</div><div class="btn delete">削除</div></div>');
      img.append(btn_wrapper);
      img.find('img').attr({
        src: e.target.result
      })
    }
    reader.readAsDataURL(file);
    images.push(img);

    if (images.length <= 4) {
      $('#preview').empty();
      $.each(images, function(index, image) {
        image.data('image', index);
        preview.append(image);
      })
      dropzone.css({
        'width': `calc(100% - (20% * ${images.length}))`
      })

      // 画像が５枚のとき１段目の枠を消し、２段目の枠を出す
    } else if (images.length == 5) {
      $("#preview").empty();
      $.each(images, function(index, image) {
        image.data("image", index);
        preview.append(image);
      });
      dropzone2.css({
        display: "block"
      });
      dropzone.css({
        display: "none"
      });
      preview2.empty();

      // 画像が６枚以上のとき
    } else if (images.length >= 6) {
      // １〜５枚目の画像を抽出
      var pickup_images1 = images.slice(0, 5);

      // １〜５枚目を１段目に表示
      $('#preview').empty();
      $.each(pickup_images1, function(index, image) {
        image.data('image', index);
        preview.append(image);
      })

      // ６枚目以降の画像を抽出
      var pickup_images2 = images.slice(5);

      // ６枚目以降を２段目に表示
      $.each(pickup_images2, function(index, image) {
        image.data('image', index + 5);
        preview2.append(image);
      })

      dropzone.css({
        'display': 'none'
      })
      dropzone2.css({
        'display': 'block',
        'width': `calc(100% - (20% * ${images.length - 5}))`
      })

      // 画像が１０枚になったら枠を消す
      if (images.length == 10) {
        dropzone2.css({
          display: "none"
        });
      }
    }
    var new_image = $(`<input multiple= "multiple" name="item_images[image][]" class="upload-image" data-image= ${images.length} type="file" id="upload-image">`);
    input_area.prepend(new_image);
  });
  $(document).on('click', '.delete', function() {
    var target_image = $(this).parent().parent();
    $.each(inputs, function(index, input){
      if ($(this).data('image') == target_image.data('image')){
        $(this).remove();
        target_image.remove();
        var num = $(this).data('image');
        images.splice(num, 1);
        inputs.splice(num, 1);
        if(inputs.length == 0) {
          $('input[type= "file"].upload-image').attr({
            'data-image': 0
          })
        }
      }
    })
    $('input[type= "file"].upload-image:first').attr({
      'data-image': inputs.length
    })
    $.each(inputs, function(index, input) {
      var input = $(this)
      input.attr({
        'data-image': index
      })
      $('input[type= "file"].upload-image:first').after(input)
    })
    if (images.length >= 5) {
      dropzone2.css({
        'display': 'block'
      })
      $.each(images, function(index, image) {
        image.attr('data-image', index);
        preview2.append(image);
      })
      dropzone2.css({
        'width': `calc(100% - (135px * ${images.length - 5}))`
      })
      if(images.length == 9) {
        dropzone2.find('p').replaceWith('<i class="fa fa-camera"></i>')
      }
      if(images.length == 8) {
        dropzone2.find('i').replaceWith('<p>ココをクリックしてください</p>')
      }
    } else {
      dropzone.css({
        'display': 'block'
      })
      $.each(images, function(index, image) {
        image.attr('data-image', index);
        preview.append(image);
      })
      dropzone.css({
        'width': `calc(100% - (135px * ${images.length}))`
      })
    }
    if(images.length == 4) {
      dropzone2.css({
        'display': 'none'
      })
    }
    if(images.length == 3) {
      dropzone.find('i').replaceWith('<p>ココをクリックしてください</p>')
    }
  })
});
// $(document).on('turbolinks:load', function(){
//   var dropzone = $('.dropzone-area');
//   var dropzone2 = $('.dropzone-area2');
//   var dropzone_box = $('.dropzone-box');
//   var images = [];
//   var inputs  =[];
//   var input_area = $('.input_area');
//   var preview = $('#preview');
//   var preview2 = $('#preview2');

//   $(document).on('change', 'input[type= "file"].upload-image',function(event) {
//     var file = $(this).prop('files')[0];
//     var reader = new FileReader();
//     inputs.push($(this));
//     var img = $(`<div class= "img_view"><img></div>`);
//     reader.onload = function(e) {
//       var btn_wrapper = $('<div class="btn_wrapper"><div class="btn edit">編集</div><div class="btn delete">削除</div></div>');
//       img.append(btn_wrapper);
//       img.find('img').attr({
//         src: e.target.result
//       })
//     }
//     reader.readAsDataURL(file);
//     images.push(img);

//     if(images.length >= 5) {
//       dropzone2.css({
//         'display': 'block'
//       })
//       dropzone.css({
//         'display': 'none'
//       })
//       $.each(images, function(index, image) {
//         image.attr('data-image', index);
//         preview2.append(image);
//         dropzone2.css({
//           'width': `calc(100% - (135px * ${images.length - 5}))`
//         })
//       })
//       if(images.length == 9) {
//         dropzone2.find('p').replaceWith('<i class="fa fa-camera"></i>')
//       }
//     } else {
//         $('#preview').empty();
//         $.each(images, function(index, image) {
//           image.attr('data-image', index);
//           preview.append(image);
//         })
//         dropzone.css({
//           'width': `calc(100% - (135px * ${images.length}))`
//         })
//       }
//       if(images.length == 4) {
//         dropzone.find('p').replaceWith('<i class="fa fa-camera"></i>')
//       }
//     if(images.length == 10) {
//       dropzone2.css({
//         'display': 'none'
//       })
//       return;
//     }
//     var new_image = $(`<input multiple= "multiple" name="images[image][]" class="upload-image" data-image= ${images.length} type="file" id="upload-image">`);
//     input_area.prepend(new_image);
//   });
//   $(document).on('click', '.delete', function() {
//     var target_image = $(this).parent().parent();
//     $.each(inputs, function(index, input){
//       if ($(this).data('image') == target_image.data('image')){
//         $(this).remove();
//         target_image.remove();
//         var num = $(this).data('image');
//         images.splice(num, 1);
//         inputs.splice(num, 1);
//         if(inputs.length == 0) {
//           $('input[type= "file"].upload-image').attr({
//             'data-image': 0
//           })
//         }
//       }
//     })
//     $('input[type= "file"].upload-image:first').attr({
//       'data-image': inputs.length
//     })
//     $.each(inputs, function(index, input) {
//       var input = $(this)
//       input.attr({
//         'data-image': index
//       })
//       $('input[type= "file"].upload-image:first').after(input)
//     })
//     if (images.length >= 5) {
//       dropzone2.css({
//         'display': 'block'
//       })
//       $.each(images, function(index, image) {
//         image.attr('data-image', index);
//         preview2.append(image);
//       })
//       dropzone2.css({
//         'width': `calc(100% - (135px * ${images.length - 5}))`
//       })
//       if(images.length == 9) {
//         dropzone2.find('p').replaceWith('<i class="fa fa-camera"></i>')
//       }
//       if(images.length == 8) {
//         dropzone2.find('i').replaceWith('<p>ココをクリックしてください</p>')
//       }
//     } else {
//       dropzone.css({
//         'display': 'block'
//       })
//       $.each(images, function(index, image) {
//         image.attr('data-image', index);
//         preview.append(image);
//       })
//       dropzone.css({
//         'width': `calc(100% - (135px * ${images.length}))`
//       })
//     }
//     if(images.length == 4) {
//       dropzone2.css({
//         'display': 'none'
//       })
//     }
//     if(images.length == 3) {
//       dropzone.find('i').replaceWith('<p>ココをクリックしてください</p>')
//     }
//   })
// });
// $(function () {
//   $(document).on('turbolinks:load', () => {
//     // 画像用のinputを生成する関数
//     const buildFileField = (index)=> {
//       const html = `<div data-index="${index}" class="js-file_group">
//                       <input class="js-file" type="file"
//                       name="item[images_attributes][${index}][src]"
//                       id="item_images_attributes_${index}_src"><br>
//                       <div class="js-remove">削除</div>
//                     </div>`;
//       return html;
//     }
//     // プレビュー用のimgタグを生成する関数
//     const buildImg = (index, url)=> {
//       const html = `<img data-index="${index}" src="${url}" width="100px" height="100px">`;
//       return html;
//     }


//     // file_fieldのnameに動的なindexをつける為の配列
//     let fileIndex = [1,2,3,4,5,6,7,8,9,10];
//     // 既に使われているindexを除外
//     lastIndex = $('.js-file_group:last').data('index');
//     fileIndex.splice(0, lastIndex);


//     $('#image-box').on('change', '.js-file', function(e) {
//       const targetIndex = $(this).parent().data('index');
//       // ファイルのブラウザ上でのURLを取得する
//       const file = e.target.files[0];
//       const blobUrl = window.URL.createObjectURL(file);
//       // 該当indexを持つimgタグがあれば取得して変数imgに入れる(画像変更の処理)
//       if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
//         img.setAttribute('src', blobUrl);
//       } else {  // 新規画像追加の処理
//         $('#previews').append(buildImg(targetIndex, blobUrl));
//         // fileIndexの先頭の数字を使ってinputを作る
//         $('#image-box').append(buildFileField(fileIndex[0]));
//         fileIndex.shift();
//         // 末尾の数に1足した数を追加する
//         fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
//       }
//     });

//     $('#image-box').on('click', '.js-remove', function() {
//       const targetIndex = $(this).parent().data('index');
//       // 該当indexを振られているチェックボックスを取得する
//       const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
//       // もしチェックボックスが存在すればチェックを入れる
//       if (hiddenCheck) hiddenCheck.prop('checked', true);

//       $(this).parent().remove();
//       $(`img[data-index="${targetIndex}"]`).remove();

//       // 画像入力欄が0個にならないようにしておく
//       if ($('.js-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
//     });
//   });
// });


// $(function () {
//   var dataBox = new DataTransfer();
//   var file_field = document.querySelector('input[type=file]')

//   $('#img-file').change(function(){
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

  
