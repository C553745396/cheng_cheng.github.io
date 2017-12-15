 //更新内容
	var joint_updateContent = "";
	//版本号
	var joint_versionName = "";
	// zip版本号
	var joint_zipVersion = "";
   
 	
    
$(function(){
	function onDeviceReady() {
        mam.navigator.appmenu.addMenu(function () {
        }, null, "1", "首页", "backIndex()");
        //取得版本号，更新内容
        mam.navigator.settings.getAppInfo(getInfoCallBack);
    }
 	//取关于的回调函数
 	function getInfoCallBack(date) {
	
	    var json = JSON.stringify(date);
	    // alert("getJson插件调用成功: "+json);
	    joint_updateContent = date.updateContent;
	    joint_versionName = date.versionName;
	    joint_zipVersion = date.zipVersion;
	    $('.xljl_siderBar_img1').html('版本号：'+joint_zipVersion);
	
	    //alert("当前版本号为：" + date.updateContent);
	};
    //点击关于的事件
		function showVersion(){
		    // alert(111);
		    mui.alert('版本号：'+joint_zipVersion+'<br>更新内容：'+joint_updateContent, '关于', function() {
		        // info.innerText = '你刚关闭了警告框';
		    });
		};
	var pathName = window.document.location.pathname;
   
    if ((pathName.indexOf('index1') > 0)) {

        pathName = './'
    } else  {

        pathName = '../'
    }
   	$('.xljl_siderBar ul li:nth-of-type(1)').click(function (e) {
        window.location.href = pathName + 'index1.html';

    });
    //知识库
    $('.xljl_siderBar ul li:nth-of-type(2)').click(function (e) {
        window.location.href = pathName + 'knowledge/901knowledge.html'
    });
    //我的消息
    $('.xljl_siderBar ul li:nth-of-type(3)').click(function (e) {
        window.location.href = pathName + 'myMessage/201myMessage.html';
    });
   //分享
    $('.xljl_siderBar ul li:nth-of-type(4)').click(function (e) {

        console.log("3");
        mam.navigator.settings.share();
    });
    //关于
    $('.xljl_siderBar ul li:nth-of-type(5)').click(function (e) {
//         console.log("2");
//        
//         mam.navigator.settings.getAppInfo(getInfoCallBack);
        	showVersion();

    });



    //退出登录
    $('.xljl_siderBar ul li:nth-of-type(6)').click(function (e) {

        mam.navigator.userlogin.exitAccount();
      //  window.location.href = pathName+'index.html';
    });
});