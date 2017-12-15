//fengxf added begin:
cordova.define("org.apache.cordova.datetimepicker", function(require,exports,module){

    var exec = require('cordova/exec');

    module.exports = {	
		/** 
		 * 一共5个参数 
		   第一个 :成功回调 
		   第二个 :失败回调 
		   第三个 :将要调用的类的配置名字
		   第四个 :调用的方法名(一个类里可能有多个方法 靠这个参数区分) 
		   第五个 :传递的参数  以json的格式 
		   */  
		 
		 // initDate:初始化开始时间;setBefore:是否可以设置之前的时间
        setDate: function(successCallback,errorCallback,action,initDate,setBefore) {
            exec(successCallback, errorCallback, "DateTimePicker", "setDate", [action,initDate,setBefore]);
        },	
		
		
		setTime: function(successCallback,errorCallback,action,initTime,setBefore) {
            exec(successCallback, errorCallback, "DateTimePicker", "setTime", [action,initTime,setBefore]);
        },
		
		setDateTime: function(successCallback,errorCallback,action,initDateTime,setBefore) {
            exec(successCallback, errorCallback, "DateTimePicker", "setDateTime", [action,initDateTime,setBefore]);
        }

    };

});
//fengxf added end


