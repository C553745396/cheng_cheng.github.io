//更新内容
var joint_updateContent = "";
//版本号
var joint_versionName = "";
// zip版本号
var joint_zipVersion = "";
function getNowTime() {
    var dateTime = new Date();
    year = dateTime.getFullYear();
    month = dateTime.getMonth() + 1;
    day = dateTime.getDate();
    hours = dateTime.getHours();
    minutes = dateTime.getMinutes();
    seconds = dateTime.getSeconds();
    return year + "-" + fnW(month) + "-" + fnW(day) + " " + fnW(hours) + ":" + fnW(minutes) + ":" + fnW(seconds);
}

function fnW(str) {
    var num;
    str > 9 ? num = str : num = "0" + str;
    return num;
}
$(function () {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        mam.navigator.appmenu.addMenu(function () {
        }, null, "1", "首页", "backIndex()");
        //取得版本号，更新内容
        mam.navigator.settings.getAppInfo(getInfoCallBack);
    }


    var indexFlag = true;
    var pageFirst = null;//是否是首页
    //首页链接
    $('.message').on('click', function () {
        window.location.href = 'myMessage/201myMessage.html';
    });
    $('.tongxulu').on('click', function () {
        window.location.href = 'knowledge/tongxunlu.html';
    });
    $('.attendance').on('click', function () {
        window.location.href = 'attendanceManagement/attendanceManage.html';
    });
    $('.indexList2 li:eq(0)').on('click', function () {
        window.location.href = 'projectShow/projectShow.html'
    });
    $('.indexList2 li:eq(1)').on('click', function () {

        window.location.href = 'securityRisk/riskShow.html?projectId=0&xiangmuId=0&proEnter=0'
    });
    $('.indexList2 li:eq(2)').on('click', function () {
        window.location.href = 'problem/problemShow.html?projectId=0&xiangmuId=0&proEnter=0'
    });
    $('.indexList2 li:eq(3)').on('click', function () {
        window.location.href = 'knowledge/901knowledge.html'
    });
    $('#indexList1 li:eq(0)').on('click', function () {

        window.location.href = 'sbxx/sbxxShow.html'
    });
    $('#indexList1 li:eq(1)').on('click', function () {
        window.location.href = 'cjxx/cjxxShow.html'
    });
    $('#indexList1 li:eq(2)').on('click', function () {
        window.location.href = 'jdwh/index.html'
    });
    $('#indexList1 li:eq(3)').on('click', function () {
        window.location.href = 'jzrz/index.html'
    });


    $('#indexList2 li:eq(0)').on('click', function () {

        window.location.href = 'sbxx/sbxxShow.html'
    });
    $('#indexList2 li:eq(1)').on('click', function () {
        window.location.href = 'cjxx/cjxxShow.html'
    });
    $('#indexList2 li:eq(2)').on('click', function () {
        window.location.href = 'jdwh/index.html'
    });
    $('#indexList2 li:eq(3)').on('click', function () {
        window.location.href = 'jzrz/index.html'
    });

    //工程一览
    $('.projectShow_section').delegate('.ps_1 li', 'click', function (e) {
        var projectId = e.target.id;
        if (!projectId) {
            projectId = e.target.parentNode.id
        }
        if (!projectId) {
            projectId = e.target.parentNode.parentNode.id
        }
        if (projectId) {
            var first = $(this).parents(".sect").prevAll().length;
            var second = $(this).parents(".location").prevAll(".location").length;
            var proMemory = first + ',' + second;
            window.sessionStorage.setItem("proMemory", proMemory)
            window.location.href = 'projectList.html?projectId=' + projectId;
        }
    });

    $('.fengxianchakan').on('click', function () {
        window.location.href = '../securityRisk/riskShow.html?projectId=' + projectId + '&xiangmuId=0&proEnter=1'
    });
    $('.wentichakan').on('click', function () {
        window.location.href = '../problem/problemShow.html?projectId=' + projectId + '&xiangmuId=0&proEnter=1'
    });
    $('.riskCheck_risk_item div:eq(0)').on('click', function () {
        window.location.href = '../securityRisk/riskDetail.html';
    });
    $('.riskCheck_risk_item div:eq(1)').on('click', function () {
        window.location.href = '../securityRisk/riskImplementation.html';
    });


    $('.problemCheck_problem_add span').on('click', function () {
        window.location.href = '../problem/questionIncrease.html';
    });

    $('.problemCheck_problem_items div').on('click', function () {
        window.location.href = '../problem/questionEditor.html';
    });
    //问题一览
    $('.projectChoice').on('click', function () {
        window.location.href = '../securityRisk/projectShow_2.html?showType=0';
    });

    $('.problem_add>span').on('click', function () {
        window.sessionStorage.removeItem("addProb_Id")
        if (proId != 0) {
            window.sessionStorage.setItem("addProb_Id", proId)
        }
        window.location.href = 'questionIncrease.html?roleName=' + roleName1;
    });
    $('.questionIncrease header span:eq(1)').on('click', function () {
        history.back();
    });
    $('.questionEditor .picture').on('click', function () {
        window.location.href = '511picture.html';
    });

    //风险一览

    $('.projectScreening').on('click', function () {
        window.location.href = 'projectShow_2.html?showType=1';
    });


    //考勤管理
    $('.attendanceFooter p:eq(0)').on('click', function () {
        window.location.href = 'vacation.html'
    });
    $('.attendanceFooter p:eq(1)').on('click', function () {
        window.location.href = 'attendanceRecord.html'
    });


    $(".ARdate").html(getNowTime().substr(0, 10));

    //添加导航栏函数
    sliderbarFucntion();

})

//有三种图标:"1"默认国网 "2"：删除  3:设置备注
function backIndex() {
    window.location.href = "../index.html";
}

//点击关于的事件
function showVersion(){
    // alert(111);
    mui.alert('版本号：'+joint_zipVersion+'<br>更新内容：'+joint_updateContent, '关于', function() {
        // info.innerText = '你刚关闭了警告框';
    });
}
//添加导航栏节点全部函数
function sliderbarFucntion() {

    //添加头部函数
    hearderDomLi();
    //添加侧滑栏函数
    slideDomLi();
    //添加遮层函数
    cengDomLi();

    //标题
    $('.xljl_header span:nth-of-type(2)').text($('title').html());

    //菜单点击事件
    $('.xljl_menus').click(function () {

        xljl_silderBar();


    });

    //遮层添加点击事件
    $('.zheceng').click(function () {

        xljl_silderBar();


    });

    pageFirst = $('.xljl_header span:nth-of-type(2)').text();
    //去掉首页返回图标
    if (pageFirst == '兴力监理') {//

        $('.xljl_header span:nth-of-type(1)').removeClass('xljl_back');
    }

    //返回按钮添加点击事件
    $('.xljl_back').click(function () {
        var pathName = window.document.location.pathname;
        // alert(pathName);
        //alert(pathName.indexOf('index1'))
        if ((pathName.indexOf('201myMessage') > 0)) {

            window.location.href ='../index1.html'
        } else  {

            if (history.length > 1) {//表示存在上一页

                history.go(-1);
            }
        }


    });
	$('.cj_items').delegate('.cj','click',function(e){
	    	
	    	//alert(11);
	    	var tID = e.target.id;
	    	var lat = $(e).attr("lat");
	    	var lon = $(e).attr("lon");
	        if(tID==""){
	        	tID = e.target.parentNode.id;
	        	lat = $(e.target.parentNode).attr("lat");
	        	lon = $(e.target.parentNode).attr("lon");
	        	if(tID==""){
	        		tID = e.target.parentNode.parentNode.id;
	        		lat = $(e.target.parentNode.parentNode).attr("lat");
	        		lon = $(e.target.parentNode.parentNode).attr("lon");
	        		if(tID==""){
		        		tID = e.target.parentNode.parentNode.parentNode.id;
		        		lat = $(e.target.parentNode.parentNode.parentNode).attr("lat");
	        			lon = $(e.target.parentNode.parentNode.parentNode).attr("lon");
		        	}
	        	}
	        }
			window.location.href = 'cjxxEdit.html?tID='+tID+'&lat='+lat+'&lon='+lon;
		});
	    
        var lat = window.location.search;
        if( lat!=''&& lat!=null && lat.indexOf("?")<0){
        	var tID = window.location.search.split('&')[0].split('=')[1];
        	var lat1 = window.location.search.split('&')[1].split('=')[1];
		    var lon1 = window.location.search.split('&')[2].split('=')[1];
        	
        }
		
		 $('#jzryBtn').on('click', function() {
			window.location.href = 'jzryShow.html?tID='+tID;
		});
		
		 //厂家位置
	    $('#cjwzBtn').on('click', function() {
			if(lat1 == 0 || lon1 ==0){
				qikoo.dialog.alert("无坐标");
			}else{
				window.location.href = '../gis/locgis.html?lng='+lon1+'&lat='+lat1+'&type=3';
			}
		});
    var pathName = window.document.location.pathname;
    // alert(pathName);
    //alert(pathName.indexOf('index1'))
    if ((pathName.indexOf('index1') > 0)) {

        pathName = './'
    } else  {

        pathName = '../'
    }
    //alert(pathName);
    console.log(pathName);

    //返回首页
    $('.xljl_siderBar ul li:nth-of-type(1) span').click(function (e) {
        window.location.href = pathName + 'index1.html';

    });
    //知识库
    $('.xljl_siderBar ul li:nth-of-type(2) span').click(function (e) {
        window.location.href = pathName + 'knowledge/901knowledge.html'
    });
    //我的消息
    $('.xljl_siderBar ul li:nth-of-type(3) span').click(function (e) {
        window.location.href = pathName + 'myMessage/201myMessage.html';
    });
    //分享
    $('.xljl_siderBar ul li:nth-of-type(4) span').click(function (e) {

        console.log("3");
        mam.navigator.settings.share();
    });
    //关于
    $('.xljl_siderBar ul li:nth-of-type(5) span').click(function (e) {
        // console.log("2");
        //
        // mam.navigator.settings.getAppInfo(getInfoCallBack);
        showVersion();

    });



    //退出登录
    $('.xljl_siderBar ul li:nth-of-type(6) span').click(function (e) {

        mam.navigator.userlogin.exitAccount();
        //window.location.href = pathName+'index.html';
    });


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
}


//头部
function hearderDomLi() {
    var s = '<header class="xljl_header">'
        + '<span class="xljl_back"></span>'
        + '<span>title</span>'
        + '<span class="xljl_menus">'
        + '</span>'
        + '</header>';

    $(s).prependTo($('body'));
}
//侧滑栏内容
function slideDomLi() {
    var s = '<div class="xljl_siderBar" style="z-index: 999">'
        + '<div class="xljl_siderBar_top">'
        + '<span class="xljl_siderBar_img">兴力监理</span>'
        + '<span class="xljl_siderBar_img1">版本号:'+joint_versionName+'</span>'
        // + '<p>测试</p>'
        + '</div>'
        + '<ul>'
        + '	<li><span>返回首页</span> <i></i></li>'
        + '	<li><span>知识库</span><i></i></li>'
        + '	<li><span>我的消息</span><i></i></li>'
        + '	<li><span>分享</span><i></i></li>'
        + '	<li><span>关于</span> <i></i></li>'
        + '	<li><span>退出登录</span> <i></i></li>'
        + '</ul>'
        + '</div>';
    $('body').append(s);

}
//滑动后的遮层
function cengDomLi() {
    var s = '<div class="zheceng">'
        + '<span></span>'
        + '</div>';
    $('body').append(s);
}
//菜单点击图标点击事件共通
function xljl_silderBar() {
//	var temp=$('#pullrefresh');
    if ($('.indexPage').hasClass('indexpadding')) {

        $('.indexPage').removeClass('indexpadding');
        $('.xljl_header').removeClass('indexpadding');
        $('.zheceng').removeClass('indexpadding');

        $('.xljl_siderBar').removeClass('navzs');
        $('.xljl_siderBar').css('display', 'none');
        $('.zheceng').css('display', 'none');

        if (pageFirst == '兴力监理') {//对首页头像作处理

            $('.touxiang').removeClass('xljl_img1');
            $('.touxiang_bg').removeClass('xljl_img2');
            $('.touxiang_quan').removeClass('xljl_img3');

            $(".touxiang").css("left", "40.5%");
            $(".touxiang_bg").css("left", "40%");
            $(".touxiang_quan").css("left", "39%");
        }

    } else if ($('.zheceng').hasClass('indexpadding')) {
             $('.indexPage').removeClass('indexpadding');
            $('.xljl_header').removeClass('indexpadding');
            $('.zheceng').removeClass('indexpadding');

            $('.xljl_siderBar').removeClass('navzs');
            $('.xljl_siderBar').css('display', 'none');
            $('.zheceng').css('display', 'none');
        } else { 
        	
//      	$('.content').remove();
        $('.indexPage').addClass('indexpadding');
        $('.xljl_header').addClass('indexpadding');
        $('.zheceng').addClass('indexpadding');

        $('.xljl_siderBar').css('display', 'block');
        $('.xljl_siderBar').addClass('navzs');


        if (pageFirst == '兴力监理') {//对首页头像作处理

            $(".touxiang").css("left", "-19.5%");
            $(".touxiang_bg").css("left", "-20%");
            $(".touxiang_quan").css("left", "-21%");

            $('.touxiang').addClass('xljl_img1');
            $('.touxiang_bg').addClass('xljl_img2');
            $('.touxiang_quan').addClass('xljl_img3');
        }


        $('.zheceng').css('display', 'block');
        //$('.xljl_siderBar').css('display','block');
    }

}
