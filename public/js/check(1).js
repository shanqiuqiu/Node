	var userFlag = pwdFlag = false;
	function check(){
		if(userFlag && pwdFlag){
			return true;
		}else{
			return false;
		}
	}
	function blurCheck(obj){
		var inputName = obj.name;
		var val = obj.value;
		switch(inputName){
			case 'user':
				var reg = /^[a-z,A-Z,0-9]{2,8}$/;
				if(!reg.test(val)){
					userFlag = false;
					next(obj).innerHTML = '用户格式：2~8数字，字母、不能包含特殊符号';
					next(obj).style.color = '#f00';
				}else{
					userFlag = true;
					next(obj).innerHTML = '输入正确';
					next(obj).style.color = 'green';
				} 
				
			break;
			case 'password':
				var reg = /^[a-z,A-Z,0-9]{6,16}$/;
				if(!reg.test(val)){
					pwdFlag = false;
					next(obj).innerHTML = '密码格式错误';
					next(obj).style.color = '#f00';
				}else{
					pwdFlag = true;
					next(obj).innerHTML = '输入正确';
					next(obj).style.color = 'green';
				} 
			break;
			case 'author':
				var reg = /^[a-z,A-Z,0-9]{2,8}$/;
				if(!reg.test(val)){
					pwdFlag = false;
					next(obj).innerHTML = '用户格式：2-8字符、数字、不能包含特殊符号';
					next(obj).style.color = '#f00';
				}else{
					pwdFlag = true;
					next(obj).innerHTML = '输入正确';
					next(obj).style.color = 'green';
				} 
			break;	
			case 'pwd':
				var reg = /^[a-z,A-Z,0-9]{6,20}$/;
				if(!reg.test(val)){
					pwdFlag = false;
					next(obj).innerHTML = '密码格式:6-16字母、数字';
					next(obj).style.color = '#f00';
				}else{
					pwdFlag = true;
					next(obj).innerHTML = '输入正确';
					next(obj).style.color = 'green';
				} 
			break;	
		}
	}
	
	//处理兼容问题
	function next(obj){
		while(true){
			if(obj.parentNode.nextSibling.className == 'message'){
				return obj.parentNode.nextSibling;
			}else{
				obj = obj.parentNode.nextSibling;
			}
		}	
	}