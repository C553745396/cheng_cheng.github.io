var userId = localStorage.getItem("userId");
var userName = localStorage.getItem("userName");
var loginName = localStorage.getItem("loginName");
var system = "JLXT";
var ajaxData = {
	//登录
	data100: {
		'request': '{"loginName":"","password":"","bic":"100","system":"' + system + '","code":"","type":"","imei":""}',
		'method': 'entry'
	},
	//验证码
	data101: {
		'request': '{"bic":"101"}',
		'method': 'entry'
	},
	//查询当天天气预报
	data102: {
		'request': '{"bic":"102"}',
		'method': 'entry'
	},
	//查询最近天气预报
	data103: {
		'request': '{"bic":"103"}',
		'method': 'entry'
	},
	//知识库
	data200: {
		'request': '{"fileName":"","nodeId":"-1","rootId":"-1","pic":"no","userId":"' + userId + '","bic":"200"}',
		'method': 'entry'
	},
	//考勤签到
	data300: {
		'request': '{"travelflag":"0","duty_time":"","posx":"","posy":"","imei":"","flag":"0","locationStr":"","userId":"' + userId + '","bic":"300"}',
		'method': 'entry'
	},
	//考勤签退
	data301: {
		'request': '{"travelflag":"0","dutykey":"","duty_time":"","posx":"","posy":"","imei":"","flag":"","locationStr":"","userId":"' + userId + '","bic":"301"}',
		'method': 'entry'
	},
	//考勤异常
	data302: {
		'request': '{"dutykey":"","dutytype":"","exception":"","imei":"","userId":"' + userId + '","bic":"302"}',
		'method': 'entry'
	}, //休假
	data303:{
		'request': '{"startdate":"","enddate":"","reason":"","imei":"","system":"'+system+'","userId":"'+userId+'","bic":"303"}',
		'method': 'entry'
	},
	//考勤记录
	data304: {
		'request': '{"year":"2016","month":"04","userId":"' + userId + '","bic":"304"}',
		'method': 'entry'
	},
	//休假类别
	data305: {
		'request': '{"userId":"' + userId + '","bic":"305"}',
		'method': 'entry'
	},
	//出差申请
	data306: {
		'request': '{"startdate":"","enddate":"","reason":"","imei":"","userId":"' + userId + '","bic":"306"}',
		'method': 'entry'
	},
	//获取当前所处考勤状态
	data307: {
		'request': '{"startdate":"","enddate":"","type":"","imei":"","userId":"' + userId + '","bic":"307"}',
		'method': 'entry'
	},

	//gis首页
	data800: {
		'request': '{"planId":"","bic":"800","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data801: {
		'request': '{"userName":"","bic":"801","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data802: {
		'request': '{"userId":"","userLevel":"0","planId":"","bic":"802","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data803: {
		'request': '{"userId":"","planId":"","bic":"803","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data804: {
		'request': '{"planId":"","serviceType":"","serviceTypeId":"","bic":"804","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data805: {
		'request': '{"planId":"","serviceType":"","serviceTypeId":"","bic":"805","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data806: {
		'request': '{"userId":"","bic":"806","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data808: {
		'request': '{"planId":"","sceneId":"","taskName":"","bic":"808","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data809: {
		'request': '{"taskId":"","type":"","bic":"809","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data811: {
		'request': '{"storageId":"","type":"1","bic":"811","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data812: {
		'request': '{"storageId":"","type":"","bic":"812","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data813: {
		'request': '{"carId":"","type":"","bic":"813","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data814: {
		'request': '{"planId":"","serviceType":"3","serviceTypeId":"","bic":"814","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data815: {
		'request': '{"planId":"","serviceType":"3","serviceTypeId":"","bic":"815","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data816: {
		'request': '{"sceneId":"","bic":"816","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data817: {
		'request': '{"planId":"","bic":"817","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data836: {
		'request': '{"planId":"","status":"","userId":"","userLevel":"","bic":"836","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data833: {
		'request': '{"planId":"","bic":"833","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data820: {
		'request': '{"iconType":"3","userLevel":"","serviceTypeId":"12","bic":"820","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data821: {
		'request': '{"iconType":"3","serviceTypeId":"12","bic":"821","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data822: {
		'request': '{"bic":"822","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data834: {
		'request': '{"planId":"","groupId":"","onOffStatus":"","bic":"834","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data824: {
		'request': '{"planId":"","bic":"824","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data835: {
		'request': '{"planId":"","bic":"835","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	//上传文件(视频，图片)
	data826: {
		'request': '{"uuid":"","posx":"","posy":"","fileName":"","uploadUserId":"","mediaType":"","serviceId":"","serviceType":"","fileExt":"","storageName":"","storagePath":"","fileUrl":"","PIC_SIZE":"","HEIGHT":"","WIDTH":"","STANDARD1_UUID":"","STANDARD1_WIDTH":"","STANDARD1_HEIGHT":"","STANDARD1_SIZE":"","STANDARD2_UUID":"","STANDARD2_WIDTH":"","STANDARD2_HEIGHT":"","STANDARD2_SIZE":"","STANDARD3_UUID":"","STANDARD3_WIDTH":"","STANDARD3_HEIGHT":"","STANDARD3_SIZE":"","bic":"826","system":"' + system + '"}',
		'method': 'entry'
	},
	//获取文件(视频，图片)
	data828: {
		'request': '{"serviceId":"","serviceType":"","bic":"828","mediaType":""}',
		'method': 'entry'
	},
	//获取公共代码
	data829: {
		'request': '{"bic":"829","code":"TJQX_TASK_ZY","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data830: {
		'request': '{"bic":"830","planId":"","status":"","groupType":"","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	data832: {
		'request': '{"bic":"832","userIds":"","groupId":"","loginName":"' + loginName + '","system":"TJQX"}',
		'method': 'entry'
	},
	//获取消息列表信息
	data400: {
		'request': '{"retIds":"","system":"' + system + '","imei":"","userId":"' + userId + '","bic":"400","delMesIds":""}',
		'method': 'entry'
	},
	//获取消息列表信息(详情)
	data401: {
		'request': '{"id":"20","system":"' + system + '","imei":"","userId":"' + userId + '","bic":"401","type":""}',
		'method': 'entry'
	},
	//消息回复
	data402: {
		'request': '{"senderId":"","id":"","RESPONSER_ID":"' + userId + '","RESPONSER":"Admin","MESSAGE_ID":"20","RESPONSE_LATITUDE":"","RESPONSE_LONGITUDE":"","RESPONSE_ADDR":"","RESPONSE_MSG": "","picture":"1","images": "","userId":"' + userId + '","bic":"402","system":"' + system + '"}',
		'method': 'entry'
	},
	//消息回复列表
	data403: {
		'request': '{"id":"20","userId":"' + userId + '","bic":"403","system":"' + system + '"}',
		'method': 'entry'
	},
	//已发消息列表
	data404: {
		'request': '{"retIds":"","userId":"' + userId + '","bic":"404","system":"' + system + '"}',
		'method': 'entry'
	},
	//查询群组
	data405: {
		'request': '{"userId":"' + userId + '","bic":"405","system":"' + system + '"}',
		'method': 'entry'
	},
	//保存群组
	data406: {
		'request': '{"oprType":"add","bic":"406","system":"' + system + '","qzId":"","groupName":"","remark":"","userId":"' + userId + '","userName":"' + userName + '","collectId":""}',
		'method': 'entry'
	},
	//根据群组id查询群组详细信息
	data407: {
		'request': '{"bic":"407","system":"' + system + '","qzId":""}',
		'method': 'entry'
	},
	//根据群组ID，查询群组成员 
	data408: {
		'request': '{"bic":"408","system":"' + system + '","qzId":""}',
		'method': 'entry'
	},
	//保存群组人员
	data409: {
		'request': '{"bic":"409","system":"' + system + '","userIds":"","userNames":"","qzId":""}',
		'method': 'entry'
	},
	//删除群组人员
	data410: {
		'request': '{"bic":"410","system":"' + system + '","ids":""}',
		'method': 'entry'
	},
	//删除群组
	data411: {
		'request': '{"bic":"411","system":"' + system + '","ids":""}',
		'method': 'entry'
	},
	//发送消息
	data412: {
		'request': '{"bic":"412","system":"' + system + '","userId":"' + userId + '","userName":"' + userName + '","receiverIds":"","receiverNames":""}',
		'method': 'entry'
	},
	//通讯录单位下拉数据
	data413: {
		'request': '{"bic":"413","system":"' + system + '"}',
		'method': 'entry'
	},
	//通讯录
	data414: {
		'request': '{"bic":"414","system":"' + system + '","orgCode":"","userName":""}',
		'method': 'entry'
	},
	//回复消息列表
	data415: {
		'request': '{"bic":"415","system":"' + system + '","msgId":""}',
		'method': 'entry'
	},

	//获取所有管理专职人员
	data416: {
		'request': '{"bic":"416","system":"' + system + '"}',
		'method': 'entry'
	},
	//组件策划——获得详细会办信息
	data420: {
		'request': '{"bic":"420","planId":"","orgCode":"","system":"' + system + '"}',
		'method': 'entry'
	},
	//组件策划——获得组件策划流程详细信息
	data421: {
		'request': '{"bic":"421","planId":"","system":"' + system + '"}',
		'method': 'entry'
	},
	//组件策划——会办消息处理
	data422: {
		'request': '{"bic":"422","planId":"","code":"","date":"","remark":"","system":"' + system + '"}',
		'method': 'entry'
	},
	//组件策划——获取分管领导
	data423: {
		'request': '{"bic":"423","system":"' + system + '"}',
		'method': 'entry'
	},
	//组件策划——组件策划工作流消息接受处理
	data424: {
		'request': '{"bic":"424","userId":"","userName":"","planflowid":"","estimate":"","option":"","leaderid":"","system":"' + system + '"}',
		'method': 'entry'
	},

	//坐标采集任务列表(模糊查询)
	data700: {
		'request': '{"userId":"' + userId + '","serviceName":"","bic":"700","system":"' + system + '"}',
		'method': 'entry'
	},

	//保存坐标采集
	data701: {
		'request': '{"serviceType":"","serviceTypeId":"","longitude":"","latitude":"","bic":"701"}',
		'method': 'entry'
	},
	//关于
	data904: {
		'request': '{"bic":"904","versionType":""}',
		'method': 'entry'
	},
	data902: {
		'request': '{"bic":"902"}',
		'method': 'entry'
	},
	//问题一览-begin
	data501: {
        'request': '{"start":"15","datetype":"2","status":"0","district_id":"0","projectid":"0","userId":"'+userId+'","bic":"501","roleCode":"orgCode&roleCode"}',
        'method': 'entry'
   },
   data504: {
        'request': '{"prob_id":"10389","pro_id":"10409","prob_type":"2","found_date":"2015-11-27","prob_name":"问题一","prob_desc":"sdfds","is_report":"1","status":"0","userId":"'+userId+'","bic":"504","roleCode":"orgCode&roleCode"}',
        'method': 'entry'
    },
    data506: {
        'request': '{"prob_id":"10389","status":"2","end_date":"2015-11-28","is_report":"1","prob_name":"问题一","pro_name":"","pro_id":"10409","userId":"'+userId+'","bic":"506","roleCode":"orgCode&roleCode"}',
        'method': 'entry'
    },
    data505: {
        'request': '{"prob_id":"10202","userId":"'+userId+'","bic":"505"}',
        'method': 'entry'
    },
    data502: {
        'request': '{"id":"347433","userId":"'+userId+'","bic":"502"}',
        'method': 'entry'
    },
   data503: {
        'request': '{"userId":"'+userId+'","bic":"503","roleCode":"orgCode&roleCode","proCategory":"1"}',
        'method': 'entry'
    },
    data509: {
        'request': '{"uuid":"","posx":"","posy":"","fileName":"","uploadUserId":"","address":"南京","mediaType":"","probId":"","is_edit":"","fileExt":"","storageName":"","storagePath":"","fileUrl":"","PIC_SIZE":"","HEIGHT":"","WIDTH":"","STANDARD1_UUID":"","STANDARD1_WIDTH":"","STANDARD1_HEIGHT":"","STANDARD1_SIZE":"","STANDARD2_UUID":"","STANDARD2_WIDTH":"","STANDARD2_HEIGHT":"","STANDARD2_SIZE":"","STANDARD3_UUID":"","STANDARD3_WIDTH":"","STANDARD3_HEIGHT":"","STANDARD3_SIZE":"","bic":"509","system":"'+system+'"}',
        'method': 'entry'
   },
   data511: {
        'request': '{"probId":"","bic":"511","mediaType":""}',
        'method': 'entry'
   },
   //问题一览-end
   
   //电网风险一览列表
	data607: {
		'request': '{"start":"15","datetype":"0","status":"0","district_id":"0","projectid":"0","risk_level":"","userId":"'+userId+'","bic":"607","roleName":""}',
        'method': 'entry'
	},
	
	//电网风险详情
	data608: {
        'request': '{"id":"10110","userId":"'+userId+'","bic":"608"}',
        'method': 'entry'
   },
   data609: {
        'request': '{"riskid":"10110","userId":"'+userId+'","bic":"609"}',
        'method': 'entry'
    },
    data610: {
        'request': '{"riskid":"","operation":"","userId":"","userId":"'+userId+'","bic":"610"}',
        'method': 'entry'
    },
    data611: {
        'request': '{"id":"10147","real_start_date":"2015-11-25","userId":"","userId":"'+userId+'","bic":"611"}',
        'method': 'entry'
    },
    data612: {
        'request': '{"id":"10153","real_end_date":"2015-11-25","userId":"'+userId+'","bic":"612"}',
        'method': 'entry'
    },
    data613: {
        'request': '{"id":"10153","userId":"'+userId+'","bic":"613"}',
        'method': 'entry'
    },
    data614: {
        'request': '{"riskid":"10110","risk_level":"3","userId":"'+userId+'","bic":"614","roleName":""}',
        'method': 'entry'
    },
    //电源风险一览列表
	data615: {
		'request': '{"start":"15","datetype":"0","status":"0","district_id":"0","projectid":"0","risk_level":"","userId":"'+userId+'","bic":"615","roleName":""}',
        'method': 'entry'
	},
	//电源风险详情
	data616: {
		'request': '{"id":"10110","userId":"'+userId+'","bic":"616"}',
        'method': 'entry'
	},
	data617: {
        'request': '{"riskid":"10110","type":"","userId":"'+userId+'","bic":"617"}',
        'method': 'entry'
   },
   data618: {
        'request': '{"riskid":"","operation":"","userId":"","userId":"'+userId+'","bic":"618"}',
        'method': 'entry'
   },
   data619: {
        'request': '{"riskid":"",riskControlStatus : "","userId":"","userId":"'+userId+'","bic":"619"}',
        'method': 'entry'
   },
   data620: {
        'request': '{"uuid":"","posx":"","posy":"","fileName":"","uploadUserId":"","address":"南京","mediaType":"","riskId":"","is_edit":"","fileExt":"","storageName":"","storagePath":"","fileUrl":"","PIC_SIZE":"","HEIGHT":"","WIDTH":"","STANDARD1_UUID":"","STANDARD1_WIDTH":"","STANDARD1_HEIGHT":"","STANDARD1_SIZE":"","STANDARD2_UUID":"","STANDARD2_WIDTH":"","STANDARD2_HEIGHT":"","STANDARD2_SIZE":"","STANDARD3_UUID":"","STANDARD3_WIDTH":"","STANDARD3_HEIGHT":"","STANDARD3_SIZE":"","bic":"620","system":"'+system+'"}',
        'method': 'entry'
   },
   //设备信息-begin
   data701: {
       'request': '{"start":"15","areaName":"杭州","cjmc":"1","wzmc":"1","roleCode":"orgCode&roleCode","userId":"'+userId+'","bic":"701"}',
       'method': 'entry'
  },
  data702: {
        'request': '{"id":"347433","userId":"'+userId+'","bic":"702"}',
        'method': 'entry'
    },
    data703: {
       'request': '{"start":"15","id":"","cjmc":"","address":"","roleCode":"orgCode&roleCode","userId":"'+userId+'","bic":"703"}',
       'method': 'entry'
  },
   data704: {
        'request': '{"id":"347433","userId":"'+userId+'","bic":"704"}',
        'method': 'entry'
    },
    data705: {
        'request': '{"id":"347433","userId":"'+userId+'","bic":"705"}',
        'method': 'entry'
    },
    data707: {
        'request': '{"id":"347433","lat":"","lon":"","userId":"'+userId+'","bic":"707"}',
        'method': 'entry'
    },
  data708: {
       'request': '{"bic":"708"}',
       'method': 'entry'
  },
    data710: {
       'request': '{"start":"15","id":"","bic":"710"}',
       'method': 'entry'
  }
   //设备信息-end

   //工程一览开始
   ,data002: {
		'request': '{"userId":"","bic":"002","system":"JLXT","roleCode":"","type":""}',
		'method': 'entry'
	},
	data003: {
		'request': '{"userId":"","bic":"003","system":"JLXT","roleCode":"o-r","type":"","districtId":"","start":0}',
		'method': 'entry'
	},
	data015: {
		'request': '{"userId":"","bic":"015","system":"JLXT","id":""}',
		'method': 'entry'
	},
	data025: {
		'request': '{"userId":"","bic":"025","system":"JLXT","id":"","type":""}',
		'method': 'entry'
	},
	data026: {
		'request': '{"userId":"","bic":"026","system":"JLXT","id":"","areaid":""}',
		'method': 'entry'
	},
	data027: {
		'request': '{"userId":"","bic":"027","system":"JLXT","ID":"","LATITUDE":"","LONGITUDE":""}',
		'method': 'entry'
	},

	//工程一览结束
//	监造日志
	data1001: {
		'request': '{"userName":"","bic":"1001","loginName":"' + loginName + '","userName":"'+userName+'","userId":"'+userId+'","type":""}',
		'method': 'entry'
	},
	 
	//招标代理 问题处置
	data1101: {
		'request': '{"userName":"","bic":"1101","loginName":"' + loginName + '","userName":"'+userName+'","userId":"'+userId+'","type":""}',
		'method': 'entry'
	},
	
	//招标代理  当日工作填报
	data1102: {
		'request': '{"userName":"","bic":"1102","loginName":"' + loginName + '","userName":"'+userName+'","userId":"'+userId+'"}',
		'method': 'entry'
	},
	
	//招标代理  保存工作填报
	data1103: {
		'request': '{"userName":"","bic":"1103","loginName":"' + loginName + '","userName":"'+userName+'","userId":"'+userId+'"}',
		'method': 'entry'
	},
	
	//招标代理  重置工作填报
	data1104: {
		'request': '{"userName":"","bic":"1104","loginName":"' + loginName + '","userName":"'+userName+'","userId":"'+userId+'"}',
		'method': 'entry'
	},
	//招标代理  历史工作填报
	data1105: {
		'request': '{"userName":"","bic":"1105","loginName":"' + loginName + '","userName":"'+userName+'","userId":"'+userId+'"}',
		'method': 'entry'
	},
	//招标代理-工作内容
	data1106: {
		'request': '{"userName":"","bic":"1106","userId":"'+userId+'","type":""}',
		'method': 'entry'
	},
	//招标代理  统计分析 团队信息
	data1107: {
		'request': '{"userName":"","bic":"1107","loginName":"' + loginName + '","userName":"'+userName+'","userId":"'+userId+'"}',
		'method': 'entry'
	},
	//招标代理  统计分析
	data1108: {
		'request': '{"bic":"1108","loginName":"' + loginName + '","userName":"'+userName+'","userId":"'+userId+'","nodeId":"","pNodeId":"","treeType":"","teamId":"","beginDate":"","endDate":"","spRoleCode":""}',
		'method': 'entry'
	}
};

function getJSON(data, callback, type) {
	var neWeakSetData = getJMParam(data);
	var imgSrc = "";
	var setTime;
	if (type == "1") {
		imgSrc = 'img/loading.gif'
	}  else if(type == "3"){
		imgSrc = '../../img/loading.gif'
	} else {
		imgSrc = '../img/loading.gif'
	}
	$("body").append('<div class="loading" id="loadingGif" style="display:block"><img src="' + imgSrc + '"></div>');
	$("body").append('<div class="loadingMoveDiv" id="loadingGifDiv" style="top: 0;"></div>');
	setTime = setTimeout(function() {
		$("#loadingGif").css("display", "none");
		$("#loadingGif").remove();

		$("#loadingGifDiv").css("display", "none");
		$("#loadingGifDiv").remove();
	}, 30000);
	
	
	//http://business.tp-ecp.com:7020
	//http://www.tp-ecp.com:7016
  var connUrl = "https://business.tp-ecp.com:7020/jlxt-web/mobileAction.do?method=entry";
 if (type == "6") {
		window.parent.parent.navigator.NetWorkRequest.post(httpsuccessCallback, httperrorCallback, {
			url: connUrl,
			P: neWeakSetData
		});
	} else if (type == "8") {
		window.parent.parent.parent.navigator.NetWorkRequest.post(httpsuccessCallback, httperrorCallback, {
			url: connUrl,
			P: neWeakSetData
		});
	} else {
		//alert(1111);
		window.parent.navigator.NetWorkRequest.post(httpsuccessCallback, httperrorCallback, {
			url: connUrl,
			P: neWeakSetData
		});
	}
    //成功回调函数
	function httpsuccessCallback(object) {
		//alert(object);
		$("#loadingGif").remove();
		$("#loadingGifDiv").remove();
		var mobileType = localStorage.getItem("mobileType");
		if (mobileType == "0") {
			object = JSON.parse(object);
		}
		var succIs = object.state;

		if (succIs == "success") {
			setTimeout(function() {
				//alert(222);
				if (mobileType == "0") {
					var messageObj = object.RESPONSE_MESSAGE;
					//alert(messageObj);
					callback(JSON.stringify(messageObj))

				} else {
					//alert(object.RESPONSE_MESSAGE);
					callback(object.RESPONSE_MESSAGE)
				}
			}, 5);

		} else {
			qikoo.dialog.alert('用户名和密码错误！');
		}
	}

    //失败回调函数
	function httperrorCallback(error) {
		//alert(3333);
		$("#loadingGif").remove();
		$("#loadingGifDiv").remove();
		qikoo.dialog.alert('请求服务失败！');
	}
	//192.168.1.125:7020
	//business.tp-ecp.com:7020
    //本地测试使用
//    $.ajax(connUrl,{
//			method:"post",
//			dataType:"json",
//			data:{P:neWeakSetData},
//			traditional:true,
//			async : false,
//			success : function(msg) {
//				var json = {};
//				json.state = "success";
//				json.RESPONSE_MESSAGE = JSON.stringify(msg);
//				httpsuccessCallback(json);
//			},
//			error:function(esg){
//				httperrorCallback(esg) ;
//			}
//		})
	function callFun(v) {
		$("#loadingGif").css("display", "none");
		$("#loadingGif").remove();
		$("#loadingGifDiv").css("display", "none");
		$("#loadingGifDiv").remove();
		callback(v)
	}
}
/**获取时间 08-16**/
function nowDate() {
	var dates = new Date();
	month = dates.getMonth() + 1;
	day = dates.getDate();
	return fnW(month) + "/" + fnW(day);
}

/**获取时间 2016-08-16**/
function nowTime() {
	var dateTime = new Date();
	year = dateTime.getFullYear();
	month = dateTime.getMonth() + 1;
	day = dateTime.getDate();
	return year + "-" + fnW(month) + "-" + fnW(day);
}
/**获取小时**/
function getHour() {
	var hdate = new Date();
	return hdate.getHours();
}
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
/**判空**/
function isNotEmpty(str){
	if(str==null||str==""||str==undefined){
		return false;
	}
	return true;
	
}
/**
 * 包含
 * @param obj
 * @returns {Boolean}
 */
function fnArrayContains(array, obj) {
	var i = array.length;
	while (i--) {
		if (array[i] === obj) {
			return true;
		}
	}
	return false;
};
/**
 * lm 提示 自动消失
 * @param {type}  {title:"",content:"",time:2}
 */
var msgToast = (function() {
    return function(data) {
       var title = data["title"]?data["title"]:'提示';
       var content = data["content"]?data["content"]:"";
       var time = data["time"]?data["time"]:2;
       layer.open({
		title: [title, 'background-color: #2198F2;color:#FFFFFF;text-align:left;'],
		content: content,
		style: 'msg',
		time: time
	  });
    }
})();
/**
 * lm 提示框
 * @param {type}  {title:"",content:"",btn:""}
 */
var msgAlert = (function() {
	return function(data) {
		var title = data["title"]?data["title"]:'提示';
		var content = data["content"]?data["content"]:"";
		var btnName = data["btn"]?data["btn"]:'确定';
		layer.open({
			title: [title, 'background-color: #2198F2;color:#FFFFFF;text-align:left;'],
			content: content,
			btn: btnName
		});
	}
})();
/**
 * lm
 * 自定义toast，js实现android中toast效果
 * @param msg 显示文字
 * @param duration 显示的时间长度
 */
var showNativeTost = (function(){
	return function(msg, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText = "width:60%; min-width:150px; background:#000; opacity:0.5; height:40px; color:#fff; line-height:40px; text-align:center; border-radius:5px; position:fixed; top:80%; left:20%; z-index:999999; font-weight:bold;";
    document.body.appendChild(m);
    setTimeout(function() {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d
                + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function() {
            document.body.removeChild(m)
        }, d * 1000);
    }, duration);
}
})();
