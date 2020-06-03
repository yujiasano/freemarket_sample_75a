$(function() {
	$(".header__contents__nav-list__left__category").hover(function() {
		$("ol.level1").toggle();
	});
	$(".header__contents__nav-list__left__category__li li ol").hide();
	$("ol.level1 li").hover(function() {
		$(">ol:not(:animated)", this).stop(true, true).slideDown("fast");
		$(">a", this).addClass("active");
	}, function() {
		$(">ol:not(:animated)", this).stop(true, true).slideUp("fast");
		$(">a", this).removeClass("active");
	});
	$(".abc .level2 .list--name").hover(function() {
		$(">ol:not(:animated)", this).stop(true, true).slideDown("fast");
		$(">a", this).addClass("active");
	}, function() {
		$(">ol:not(:animated)", this).stop(true, true).slideUp("fast");
		$(">a", this).removeClass("active");
	});
});
