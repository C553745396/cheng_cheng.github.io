

//全局参数
var globalParam = {
	backURL:null,  //返回的页面，如果为NULL，返回到首页,如果为-1，返回上一页,如果为0,退出程序
	exiting:false  //正在退出程序
};

var SESSION_KEY = {
	USER_ID:"USER_ID",
	USER_NAME:"USER_NAME",
	PASS_WORD:"PASS_WORD"
};

//全局共同变量
var globalVar = {
	header_height:46,
	netWorkFailed:false,
	pageHeight:0, //页面高度
	
	appPaused:false, //程序正在暂停
	appPausedInt:0 //setTimeout用
};

//全局变量
var moreMenuDiv;
var moreMenuDivHideInt;





//返回当前用户ID，并检测登录状态
function getUserId(){
	var userId = getSession(SESSION_KEY.USER_ID);
	return userId;
}

//退回到上一页
//function goBack(){
//	window.top.history.go(-1); 
//}

//取SESSION值
function getSession(key){
	return sessionStorage.getItem(key);
}
//设置SESSION值
function setSession(key,value){
	sessionStorage.setItem(key,value);
}
//判断登录状态
function checkLogin(){
	var userid = getUserId();
	
	if(userid == undefined || userid == null || userid == ""){
		mui.alert("请重新登录",null,function(){
			goURL("login.html");
		});
	}
	
}

//跳转目录
function goURL(href){
	var fullHref = site_config.path_before+href;
//	alert("goURL::"+fullHref);
	window.top.location.href = fullHref;
}

//登录
function login(userid,username,password){
	
	setSession(SESSION_KEY.USER_ID , userid);
	setLocalData(SESSION_KEY.USER_ID , userid);
	
	if(username != undefined){
		setSession(SESSION_KEY.USER_NAME , username);
		setLocalData(SESSION_KEY.USER_NAME , username);
	}
	
	if(password != undefined){
		setSession(SESSION_KEY.PASS_WORD , password);
		setLocalData(SESSION_KEY.PASS_WORD , password);
	}
	
}






//AJAX请求地址
function getAjaxURL(action){
	//根据site_config.debug_mode取URL
	var headUrl = site_config.debug_mode ? site_config.debug_url : site_config.product_url;
	return headUrl + action;
}

//数据请求
function ajaxGetData(action,params,succCallBack,errorBack){	
	if(site_config.debug_level >= 3) return;
	
	var date = new Date();
	date.getHours()
	date.getMinutes();
	date.getSeconds()
	
	var ajaxUrl = getAjaxURL(action);
	
	if(params != null){
		params['rand'] = Math.random();
		var n = 0;
		for(var i in params){
			ajaxUrl += n == 0 ? '?' : '&';
			ajaxUrl += i+'='+params[i];
			n++;
		}
	}
	
	mui.ajax({
        type: "post",
        url: ajaxUrl,
        async: true,
//        contentType:"application/x-www-form-urlencoded; charset=utf-8",
//        data: {"PARAM":paramJson},
        dataType:'json',
//        headers:{'Content-Type':'application/json'},
        timeout: 10000,//超时时间(毫秒)
        success: succ,
        error: error
    });
	
	function succ(data){
		//对data进行数据转换和判断
//		alert(typeof(data));
		//回调方法
		if(succCallBack != undefined) succCallBack(data);
	}
	
	function error(xhr, type, errorThrown){
		//对data进行数据转换和判断
		
		var errorStr = 'ajax请求失败：'+action+"("+errorThrown+")";
		console.log(type,xhr,errorThrown);
		
		//回调方法
		if(errorBack != undefined){
			errorBack(data);
		}else{
			if(site_config.debug_level >= 2) return;
			if(site_config.showNetWorkErrorDetail){
				mui.alert(errorStr,'错误');
			}else{
				
				if(errorThrown == "Internal Server Error"){
					mui.alert("网络连接失败，服务器错误");
					return;
				}
				
				if(globalVar.netWorkFailed) return;
				mui.alert("网络连接失败，请检查网络");
				globalVar.netWorkFailed = true;
			}
			
		}
	}
	
}

//数据请求JSON
function ajaxGetDataJSON(action,params,succCallBack,errorBack){	
	if(site_config.debug_level >= 3) return;
	var ajaxUrl = getAjaxURL(action);
	
	console.log(params);
	
	var paramJson = JSON.stringify(params);
//	paramJson = encodeURI(encodeURI(paramJson));
	
//	paramJson = '"{\"TYPE\": \"1\",\"USERID\": \"1\",\"DDID\": \"1\",\"PXBID\": \"1\",\"PRODUCT\": [{\"BOOKID\": \"1\",\"NUM\": \"2\",\"DJ\": \"29.00\"},{\"BOOKID\": \"2\",\"NUM\": \"1\",\"DJ\": \"76.50\"}]}";';
	
	console.log("ajaxGetDataJSON PARAM",paramJson);
	
	ajaxUrl += '?rand='+Math.random();
	
	mui.ajax({
          type: "post",
          url: ajaxUrl,
          async: true,
          data: {"PARAM":paramJson},
          contentType:"application/x-www-form-urlencoded; charset=utf-8",
          dataType:'json',
//        headers:{'Content-Type':'application/json'},
          timeout: 10000,//超时时间(毫秒)
          success: succ,
          error: error
      });
	
	function succ(data){
		//对data进行数据转换和判断
//		alert(typeof(data));
		//回调方法
		if(succCallBack != undefined) succCallBack(data);
	}
	
	function error(xhr, type, errorThrown){
		//对data进行数据转换和判断
		
		var errorStr = 'ajax请求失败：'+action+"("+errorThrown+")";
		console.log(type,xhr,errorThrown);
		
		//回调方法
		if(errorBack != undefined){
			errorBack(data);
		}else{
			if(site_config.debug_level >= 2) return;
			if(site_config.showNetWorkErrorDetail){
				mui.alert(errorStr,'错误');
			}else{
				
				if(errorThrown == "Internal Server Error"){
					mui.alert("网络连接失败，服务器错误");
					return;
				}
				
				if(globalVar.netWorkFailed) return;
				mui.alert("网络连接失败，请检查网络");
				globalVar.netWorkFailed = true;
			}
			
		}
	}
	
}

//取URL参数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function formatDateTime(year,month,date){
	
	var myDate = new Date();
	myDate.setFullYear(Number(year));
	myDate.setDate(Number(date));
	myDate.setMonth(Number(month-1));
	
	var y = myDate.getFullYear();  
    var m = myDate.getMonth() + 1;  
    m = m < 10 ? '0' + m : m; 
    var d = myDate.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;  
}


