$(function(){
	$('#btn').click(function(){
		$.ajax({
			url : '/login',
			type : 'post',
			data : {
				user : $('#user').val(),
				password : $('#password').val()
			},
			success : function(data,status){
				if(status == 'success'){
					location.href = 'admin';
				}
			},
			error : function(data,status){
				if(status == 'error'){
					location.href = 'login';
				}
			}
		})
	});
	$('#btn2').click(function(){
		$.ajax({
			url : '/login/register',
			type : 'post',
			data : {
				author : $('#author').val(),
				password : $('#pwd').val()
			},
			success : function(data,status){
				console.log(status)
				if(status == 'success'){
					alert('注册成功，您可以去登录啦');
					location.href = 'login';
				}
			},
			error : function(data,status){
				if(status == 'error'){
					alert('用于已存在，请重新注册');
					location.href = 'register';
					
				}
			}
		})
	});
});