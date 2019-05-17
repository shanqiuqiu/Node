var inputTitle = inputAuthor = inputcon = inputBrowse = false;
function check(){
	if(inputTitle && inputAuthor && inputcon && inputBrowse){
		return true;
	}else{
		return false;
	}
}
window.onload = function(){
	var input = document.getElementsByTagName('input');
	var textarea = document.getElementsByName('con')[0];
	for(var i = 0;i < input.length;i++){
		inputCheck(input[i]);
		inputCheck(textarea);
	}
	
}
function inputCheck(obj){
	var inputName = obj.name;
	var val = obj.value;
	next(obj).style.display = 'inline-block';
	switch(inputName){
		case 'title' :
			if(val.length==0){
				inputTitle = false;
				next(obj).innerHTML = '内容不能为空';
				next(obj).style.color = '#f00';
			}else{
				inputTitle = true;
				next(obj).innerHTML = '输入正确';
				next(obj).style.color = 'green';
			}
		break;
		case 'user' :
			if(val.length==0){
				inputAuthor = false;
				next(obj).innerHTML = '内容不能为空';
				next(obj).style.color = '#f00';
			}else{
				inputAuthor = true;
				next(obj).innerHTML = '输入正确';
				next(obj).style.color = 'green';
			}
		break;
		case 'con' :
			if(val.length==0){
				inputcon = false;
				next(obj).innerHTML = '内容不能为空';
				next(obj).style.color = '#f00';
			}else{
				inputcon = true;
				next(obj).innerHTML = '输入正确';
				next(obj).style.color = 'green';
			}
		break;
		case 'browse' :
			if(val.length==0){
				inputBrowse = false;
				next(obj).innerHTML = '内容不能为空';
				next(obj).style.color = '#f00';
			}else{
				inputBrowse = true;
				next(obj).innerHTML = '输入正确';
				next(obj).style.color = 'green';
			}
		break;
	}
}
//处理兼容问题
function next(obj){
	while(true){
		if(obj.nextSibling.className == 'message'){
			return obj.nextSibling;
		}else{
			obj = obj.nextSibling;
		}
	}	
}