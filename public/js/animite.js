$(function(){
	var $btn = $('.btnbox span');
	var $show = $('.showbox');
	var $li = $('.show li');
	var $tab = $('.tablist span');
	var index = -1;
	var time = null;
	$tab.click(function(){
		index = $(this).index();
		fn();
	});

	$btn.click(function(){
		autoplay();
	})
	$show.hover(function(){
		$btn.css('margin-left','0');
		$btn.css('margin-right','0');
		clearInterval(time);
	},function(){
		$btn.css('margin-left','-50px');
		$btn.css('margin-right','-50px');
		time = setInterval(autoplay,4000);
	})
	time = setInterval(autoplay,4000);
	function autoplay(){
		if(index){
			index++;
		}else{;
			index--;
		}
		fn();
	}
	function fn(){
		$tab.eq(index).addClass('on').siblings().removeClass('on');
		$li.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
	}
});