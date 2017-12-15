// add:Archermind 16:40 2014/4/15
// author:zhouxuesong
//定义插件操作相关的错误码
// file: lib/common/plugin/PhoneError.js
cordova.define("org.apache.cordova.phone.PhoneError", function(require, exports, module) {
/**
 *  PhoneError
 *  An error code assigned by an implementation when an error has occurred
 * @constructor
 */
var PhoneError = function(err) {
    this.code = (typeof err != 'undefined' ? err : null);
};

/**
 * 定义Phone类错误码Error codes
 */
PhoneError.ARGS_IS_NULL = 1;
PhoneError.PHONE_NUMBER_IS_EMPTY = 2;
PhoneError.INNER_ERROR = 3;
PhoneError.JSON_EXCEPTION = 4;

module.exports = PhoneError;

});
