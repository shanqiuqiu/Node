$(function(){
	$('#clear').click(function(){
		$('.style').val('');
		$('.message').hide();
		var inputTitle = inputAuthor = inputcon = inputBrowse = false;
	});
	$('.menu li a').click(function(){
		var index = $(this).parent().index();
		$(this).parent().addClass('border').siblings().removeClass('border');
		$('.tablebox li').eq(index).addClass('show').siblings().removeClass('show');
	});
	//审核状态
	$('.status').click(function(){
		var status = $(this).attr('sid');
		var id = $(this).attr('id');
		var obj = $(this);
		status == 0 ? status = 1 : status = 0;
		$.ajax({
			url : '/admin/status',
			type : 'post',
			data : {
				id : id,
				status : status
			},
			success : function(data,status){
				if(data==1){
					obj.css('color','#f00');
					obj.attr('sid','1');
					obj.html('未审核')
				}else{
					obj.css('color','#28df56');
					obj.attr('sid','0');
					obj.html('已审核')
				}	
			}
		});	
	});
});