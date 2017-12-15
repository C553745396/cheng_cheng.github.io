// add:Archermind 16:40 2014/4/15
// author:zhouxuesong
// 说明:通过此类，可以通过Cordova提供的"cn.dl.cordova.demos.plugins.DLPhoneCordovaPlugin"类型插件启动调用电话应用相关的功能
cordova.define("org.apache.cordova.phone.phone", function(require,exports,module){
    var exec = require('cordova/exec');
    //引入后面定义的PhoneError类
	var PhoneError = require('org.apache.cordova.phone.PhoneError');
	
    module.exports = {
        goToDial:function(successCallback,errorCallback,phoneNumber) {
        	//定义执行错误时回调的方法
        	var fail = function(code){
    			errorCallback(new PhoneError(code));
    		}
            exec(successCallback,fail, "Phone", "action_go_to_dial",[phoneNumber]);
        }, 
        calling:function(successCallback,errorCallback,phoneNumber) {
        	//定义执行错误时的回调方法
        	var fail = function(code){
    			errorCallback(new PhoneError(code));
    		}
            exec(successCallback,fail, "Phone", "action_calling",[phoneNumber]);
        }
    };
});

