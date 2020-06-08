$(document).ready(function(){
$(function(){
  function appendOption(category){
    var html = `<option value="${category.id}" data-category="${category.id}">${category.name}</option>`;
    return html;
  }

  function appendChild(insertHTML) {
    var childSelectHTML = '';
    childSelectHTML = ` <div class='exhibitionPage__main__contents__detail__category__choose__added' id= 'children_wrapper'>
    <div class='exhibitionPage__main__contents__detail__category__choose1'>
      <select class="exhibitionPage__main__contents__detail__category__choose--select" id="child_category" name="item[category_id]">
        <option value="---" data-category="---">---</option>
        ${insertHTML}
      <select>
    </div>
  </div>`;
    $('.exhibitionPage__main__contents__detail__category__choose9').append(childSelectHTML);
  }

  function appendGrandChild(insertHTML) {
    var grandChildSelect = '';
    grandChildSelect = `<div class='exhibitionPage__main__contents__detail__category__choose__added' id= 'grandchildren_wrapper'>
    <div class='exhibitionPage__main__contents__detail__category__choose2'>
      <select class="exhibitionPage__main__contents__detail__category__choose__box--select" id="grandchild_category" name="item[category_id]">
        <option value="---" data-category="---">---</option>
        ${insertHTML}
      </select>
    </div>
  </div>`;
    $('.exhibitionPage__main__contents__detail__category__choose2').append(grandChildSelect);
  }

  $('#parent_category_edit').on('change', function() {
    var parentCategoryEdit = document.getElementById('parent_category_edit').value;
    if (parentCategoryEdit != '選択してください'){
      $.ajax({
        url: '/items/category/get_category_children',
        type: 'GET',
        data: { parent_id: parentCategoryEdit },
        dataType: 'json'
      })
      .done(function(children){
        $('#child_category_edit').remove();
        $('#grandchild_category_edit').remove();
        $('.item-detail__inner__edit').remove();
        $('.exhibitionPage__main__contents__detail__category__choose__added').remove();

        var insertHTML = '';
        children.forEach(function(child){
          insertHTML += appendOption(child);
        })
        appendChild(insertHTML);
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
    }else {
      $('#child_category_edit').remove();
      $('#grandchild_category_edit').remove();
    }
  });

  $('.item-detail__inner__edit__select').on('change', '#child_category_edit', function(){
    
    var childIdEdit = document.getElementById
    ('child_category_edit').value;
    if (childIdEdit !== "---") {
      $.ajax({
        url: '/items/category/get_category_grandchildren',
        type: 'GET',
        data: { child_id: childIdEdit },
        dataType: 'json'
      })
      .done(function(grandchildren) {
        if (grandchildren.length != 0) {
          $('#grandchild_category_edit').remove();
          $('#grandchildren_wrapper').remove();

          var insertHTML = '';
          grandchildren.forEach(function(grandchild){
            insertHTML += appendOption(grandchild);
          });
          appendGrandChild(insertHTML);
        }
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
    }else {
      $('#grandchild_category_edit').remove();
    }
  })
})
});