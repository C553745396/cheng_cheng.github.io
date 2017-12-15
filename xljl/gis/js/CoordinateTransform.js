/***
 * 地球坐标系WGS-84、火星坐标系GCJ-02、百度坐标系BD-09
 */
var x_pi = 3.14159265358979324 * 3000.0 / 180.0;//用于百度坐标系 BD-09 和 火星坐标系GCJ-02的装换
var pi = 3.14159265358979324,a = 6378245.0,ee = 0.00669342162296594323;//圆周率  /WGS 长轴半径 /WGS 偏心率的平方
jQuery.gis = {
	/**
	 * 百度坐标系 BD-09 转换为 火星坐标系GCJ-02
	 * @param {Object} lng
	 * @param {Object} lat
	 */
	bdToGcj02 :function(lng,lat){
		 var data=[];
		 var x = lng - 0.0065, y = lat - 0.006;
		 var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
		 var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
		 var lngNew = z * Math.cos(theta),latNew = z * Math.sin(theta);
		 data.push(lngNew);
		 data.push(latNew);
		 return data;
	},
	/**
	 * 火星坐标系GCJ-02  转换为 百度坐标系
	 * @param {Object} lng
	 * @param {Object} lat
	 */
	gcj02ToBd :function(lng,lat){
		 var data=[];
		 var x = lng, y = lat;
	     var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
	     var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
		 var lngNew = z * Math.cos(theta) + 0.0065,latNew = z * Math.sin(theta) + 0.006;
		 data.push(lngNew);
		 data.push(latNew);
		 return data;
	},
	/**
	 * 将谷歌地球坐标系WGS84转化为 火星坐标系 GCJ-02
	 * @param {Object} lng
	 * @param {Object} lat
	 */
	wgsToGcj02 :function(wgLon,wgLat){
		var data=[];
		var latNew,lngNew;
		if ($.gis.outOfChina(wgLat, wgLon))
        {
            latNew = wgLat;
            lngNew = wgLon;
		    data.push(lngNew);
		    data.push(latNew);
            return data;
        }
        var dLat = $.gis.transformLat(wgLon - 105.0, wgLat - 35.0,pi);
        var dLon = $.gis.transformLng(wgLon - 105.0, wgLat - 35.0,pi);
        var radLat = wgLat / 180.0 * pi;
        var magic = Math.sin(radLat);
        magic = 1 - ee * magic * magic;
        var sqrtMagic = Math.sqrt(magic);
        dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
        dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
        latNew = wgLat + dLat;
        lngNew = wgLon + dLon;
		data.push(lngNew);
		data.push(latNew);
		return data;
	},
	/**
	 * 将火星坐标系 GCJ-02转化为 谷歌地球坐标系WGS84 
	 * @param {Object} lng
	 * @param {Object} lat
	 */
	gcj02Towgs:function(lng,lat){
		 var mapData =[];
		 var data = $.gis.wgsToGcj02(lng,lat);
		 var latNew = (lat - (data[1] - lat));
		 var lngNew = (lng - (data[0] - lng));
		 mapData.push(lngNew);
		 mapData.push(latNew);
		 return mapData;
	},
	/**
	 * 
	 * @param {Object} lat
	 * @param {Object} lng
	 */
	outOfChina:function(lat,lng){
		 if (lng < 72.004 || lng > 137.8347)
              return true;
         if (lat < 0.8293 || lat > 55.8271)
              return true;
         return false;
	},
	/**
	 * 
	 * @param {Object} x
	 * @param {Object} y
	 */
	transformLat:function(x,y){
		 var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
         ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
         ret += (20.0 * Math.sin(y * pi) + 40.0 * Math.sin(y / 3.0 * pi)) * 2.0 / 3.0;
         ret += (160.0 * Math.sin(y / 12.0 * pi) + 320 * Math.sin(y * pi / 30.0)) * 2.0 / 3.0;
         return ret;
	},
	/**
	 * 
	 * @param {Object} x
	 * @param {Object} y
	 */
	transformLng:function(x,y){
		 var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
         ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
         ret += (20.0 * Math.sin(x * pi) + 40.0 * Math.sin(x / 3.0 * pi)) * 2.0 / 3.0;
         ret += (150.0 * Math.sin(x / 12.0 * pi) + 300.0 * Math.sin(x / 30.0 * pi)) * 2.0 / 3.0;
         return ret;
	},
	/**
	 * 将谷歌地球坐标系WGS84转化为 百度坐标系 BD-09
	 * @param {Object} lng
	 * @param {Object} lat
	 */
	wgsToBd:function(lng,lat){
		var gcjData = $.gis.wgsToGcj02(lng,lat);//WGS-84 to GCJ-02
		var gcjLng = gcjData[0],gcjLat = gcjData[1];
		return $.gis.gcj02ToBd(gcjLng,gcjLat);//GCJ-02 to BD-09
	},
	/**
	 * 将百度坐标系 BD-09转化为 谷歌地球坐标系WGS84
	 * @param {Object} lng
	 * @param {Object} lat
	 */
	bDToWgs:function(lng,lat){
		var gcjData = $.gis.bdToGcj02(lng,lat);//BD-09 to GCJ-02
		var gcjLng = gcjData[0],gcjLat = gcjData[1];
		return $.gis.gcj02Towgs(gcjLng,gcjLat);//GCJ-02 to WGS-84
	}
	
}
