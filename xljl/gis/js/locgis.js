/**
 * 百度GIS位置显示
 * @author lm
 * @date 2016-09-07
 * 
 */

window.parent.document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		geoLocation();
	}
var baiduGis;
(function() {
	baiduGis = function(mapId, options) {
		map = new BMap.Map(mapId, {
				enableMapClick: false,
				enableHighResolution: true //是否开启高清
			}),
			markers = [],
			overlays = [];
		try {
			myDis = new BMapLib.DistanceTool(map); //测距工具
		} catch(e) {}

		var operateDiv = "<div class='BMapLib_Drawing_panel' id='panel'>" +
			"<a class='BMapLib_box BMapLib_rangLine' drawingtype='rangLine' href='javascript:void(0)' title='测距' onfocus='this.blur()' onclick='myDis.open()'></a>" +
			"</div>";

		var defaults = { //默认值
			currentCity: "南京", //中心城市
			pointLng: 118.77781, //中心点经度
			pointLat: 32.057161, //中心点纬度
			zoomLevel: 15, //缩放控件级别
			minZoom: 11, //最大缩放比例，为市级
			isShowMarker: true, //是否显示点的信息
			showMarkerUrl: "", //默认显示点的url
			isOpenDraw: true, //是否开启画图工具栏
			operateDiv: operateDiv //画图工具栏div
		};
		this.opt = $.extend(defaults, options); //合并参数
		this.map = map;
		this.baseInit(); //加载baiduGis的基本框架
	};

	/***
	 *基本中心点，缩放比例，平移缩放控件，比例尺控件，缩略图控件，滚轮缩放，地图类型控件,地点为南京
	 */
	baiduGis.prototype.baseInit = function() {
		// 初始化地图,设置中心点坐标和地图级别
		var map = this.map;
		map.setMinZoom(this.opt.minZoom);
		map.centerAndZoom(new BMap.Point(this.opt.pointLng, this.opt.pointLat), this.opt.zoomLevel);
		map.enableDragging(); //开启关系拖拽
		map.enablePinchToZoom(); //双手指操作
		map.enableScrollWheelZoom(); //启用滚轮放大缩小
		var myCopyright = new BMap.CopyrightControl({
			anchor: BMAP_ANCHOR_BOTTOM_LEFT,
			offset: new BMap.Size(365, 2)
		});
		//添加地图类型控件
		map.addControl(new BMap.MapTypeControl({
			mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
		}));
		//设置版权信息偏移量
		myCopyright.addCopyright({
			id: 1,
			content: '&<a href="javascript:void(0)">ce</a>'
		});
		map.addControl(myCopyright);
		// 添加平移缩放控件
		map.addControl(new BMap.NavigationControl({
			type: BMAP_NAVIGATION_CONTROL_SMALL,
			anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
			offset: new BMap.Size(10, 10)
		}));
		// 添加比例尺控件
		map.addControl(new BMap.ScaleControl({
			anchor: BMAP_ANCHOR_BOTTOM_LEFT,
			offset: new BMap.Size(10, 10)
		}));
		map.setCurrentCity(this.opt.currentCity); // 设置地图显示的城市 此项是必须设置的

	};

})();
/***
 * 根据markerId找到对应的marker
 * @param {Object} id
 */
function findMarkerById(id) {
	for(var i = 0; i < markers.length; i++) {
		if(markers[i].markerId == id) {
			return markers[i];
		}
	};
	return null;
}
/***
 * 创建点
 * @param {Object} lng
 * @param {Object} lat
 * @param {Object} name
 * @param {Object} positionImg
 * @param {Object} markerId
 */
function createMarker(lng, lat, lngGd, latGd, name, positionImg, markerId, index) {
	var point = new BMap.Point(lng, lat);
	var myIcon = new BMap.Icon(positionImg.toString(), new BMap.Size(25, 25), {
		offset: new BMap.Size(10, 25),
		imageOffset: new BMap.Size(0, 0 - index * 25) // 设置图片偏移
	});
	var marker = new BMap.Marker(point, {
		icon: myIcon
	});
	marker.setTitle(name);
	marker.markerId = markerId;
	marker.addEventListener("click", function() {
		var startLng = window.parent.localStorage.getItem("startLon");
		var startLat = window.parent.localStorage.getItem("startLat");
		qikoo.dialog.confirm("是否跳转到导航界面？", function() {
			if((startLng == null || startLng == "") || startLat == null || startLat == "") {
				qikoo.dialog.alert("起点不存在无法导航！请稍后再用！");
				return false;
			}
			if((lngGd == null || lngGd == "") || startLat == null || startLat == "") {
				qikoo.dialog.alert("终点不存在无法导航！");
				return false;
			}
			window.parent.parent.navigator.Navi.navi(onSuccess, onFail, {
				startLat: startLat,
				startLon: startLng,
				endLat: latGd,
				endLon: lngGd,
				mode: 'driving',
				type: 'amap'
			});

			function onSuccess(imageURI) {}

			function onFail(message) {
				qikoo.dialog.alert("请下载高德地图！");
			}
		}, function() {

		});
	});
	markers.push(marker);
	if(name != "") {
		var label = new BMap.Label(name, {
			offset: new BMap.Size(0, -18)
		});
		label.setStyle({
			"color": "#3399ff",
			"border": "1px solid #3399ff"
		});
		marker.setLabel(label);
	}
	map.addOverlay(marker);
}
/**
 * 获取参数
 */
function getQueryParams() {
	var qs = window.location.search.length > 0 ? window.location.search.substr(1) : "";
	var args = {}; //存放参数
	if(qs != null && qs != "") {
		var params = qs.split("&");
		for(i in params) {
			var item = params[i].split("=");
			args[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
		}
	}
	return args;
}
var params = getQueryParams(); //获取参数
var lng = (params["lng"] != null) ? params["lng"] : ""; //经度
var lat = (params["lat"] != null) ? params["lat"] : ""; //纬度
var type = (params["type"] != null) ? params["type"] : ""; //类型 1工程 2人员
$(function() {
	var height = window.document.height || document.documentElement.clientHeight;
	$("#allmap").height(height); //调节div层
	$(window).resize(function() {
		var height = window.document.height || document.documentElement.clientHeight;
		$("#allmap").height(height);
	});


});

function initMap(){
if(lng != "" && lat != "" && type != "") {
		var icon = "../images/marker_blue_sprite.png"; //默认 1 工程
		if(type == "2") { //人员
			icon = "../images/man.png";
		} else if(type == "3") { //厂家
			icon = "../images/proGreenMark.png";
		}
		var points = $.gis.gcj02ToBd(parseFloat(lng), parseFloat(lat));
		var opt = {
			operateDiv: "<div></div>",
			isShowMarker: false,
			pointLng: points[0],
			pointLat: points[1]
		};
		new baiduGis("allmap", opt); //执行baiduGis框架
		createMarker(points[0], points[1], parseFloat(lng), parseFloat(lat), "", icon, "1", 0);
	}else{
		qikoo.dialog.alert("没有坐标！");
	}
}
/**
 * 获取当前位置
 */
function geoLocation() {
	window.parent.navigator.geolocation.getCurrentPosition(onSuccess, onError);

	function onSuccess(position) {

		localStorage.setItem("startLat", position.coords.latitude+"");
		localStorage.setItem("startLon", position.coords.longitude+"");
		initMap();
	}

	function onError(error) {
		qikoo.dialog.alert("定位失败，请重新定位！");
	}
}