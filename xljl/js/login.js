function updateAverCode(){
	var rand = Math.random();
	var averPath = getAjaxURL("/servlet/validateCodeServlet");
	averPath += '?'+rand;
	$("#verification_img").attr("src",averPath);
	return false;
}

site_config.showBottomMenu=false;
site_config.checkLogin = false;

mui.init();
	
$(function(){
	   
	   if(getLocalData(SESSION_KEY.USER_NAME)){
	   	document.getElementById("name").value=getLocalData(SESSION_KEY.USER_NAME);
	   }
	   if(getLocalData(SESSION_KEY.PASS_WORD)){
	   	document.getElementById('passwd').value=getLocalData(SESSION_KEY.PASS_WORD);
	   }
	   
	ajaxGetData("/mobile/mobile/initLogin", null, function(data){
		console.log(data);
		
		if(data.id != undefined && data.loginName != undefined){
			loginSuccess(data);
		}
	});
	
	$('.bt').on('tap',submitLogin);
	
});

function submitLogin(){
	var Aname=document.getElementById('name').value.trim(); 					
	var	Apasswd=document.getElementById('passwd').value.trim();
	var AverInput = document.getElementById('verification_input');
	var Averification= AverInput != null ? AverInput.value.trim() : '';
		
	if(!checkVarilate(Aname,Apasswd,Averification)) return;
	
	// console.log(getAjaxURL("/index/login"));
	
	$.ajax({
		url:getAjaxURL("/index/login"),
		data:{username:Aname,password:Apasswd,mobileLogin:true,validateCode:Averification},
		type:"post",
		dataType:"json",
		success:function(data){
			 //console.log(data);
			if(data.sessionid != undefined && data.id != undefined && data.loginName != undefined){
				
				data.passwd=Apasswd;
				loginSuccess(data);
			 }else{
			 	mui.alert(data.message);
			 	
			 	if(data.isValidateCodeLogin){
			 		var Averification=document.getElementById('verification');
			 		Averification.style.display="block";
			 		updateAverCode();
			 	}
			 }
		}
	});
}

function loginSuccess(data){
	
	login(data.id,data.loginName,data.passwd);
	window.location.href="home.html";
//	mui.alert("登录成功");
}
	
//验证表单
function checkVarilate(Aname,Apasswd,averification){
	if(Aname==''){
		mui.alert("对不起，帐号不能为空!");
		return false;
	}else if(Apasswd==""){
		mui.alert("对不起，密码不能为空!");
		return false;
	};
	
//		if(Aname.length!=0){ 
//			reg=/^[a-zA-Z]+$/; 
//			if(!reg.test(Aname)){ 
//				mui.alert("对不起，您输入的英文字母类型格式不正确!");//请将“英文字母类型”改成你需要验证的属性名称! 
//				return;
//			} ;
//		} ;
			
//		if(Apasswd.length!=0||Apasswd==''){ 
//			reg=/^(\w){3,20}$/; 
//			if(!reg.test(Apasswd)){ 
//				mui.alert("对不起，您输入的格式不正确!!");//校验密码：只能输入6-20个字母、数字、下划线   
//			};
//		};
	return true;
}