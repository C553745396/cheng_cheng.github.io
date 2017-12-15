//fengxf added begin:
cordova.define("org.apache.cordova.des", function(require,exports,module){

    var exec = require('cordova/exec');

    module.exports = {	
		/** 
		 * 离线上传(有网络立即上传，无网络存储等待，有网络立即再上传)
		 * 一共5个参数 
		   第一个 :成功回调 
		   第二个 :失败回调 
		   第三个 :将要调用的类的配置名字(在config.xml中配置 稍后在下面会讲解) 
		   第四个 :调用的方法名(一个类里可能有多个方法 靠这个参数区分) 
		   第五个 :传递的参数  以json的格式 
		 */  
        encrypt: function(successCallback,errorCallback,requestUrl) {
            exec(successCallback, errorCallback, "Des", "encrypt",[requestUrl]);
        }
    };

});
//fengxf added end


