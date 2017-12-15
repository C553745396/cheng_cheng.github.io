// fengxf added begin: 20140317
cordova.define("org.apache.cordova.sql", function(require,exports,module){

    var exec = require('cordova/exec');

    module.exports = {
       
        open: function(successCallback,errorCallback, p1) {
            exec(successCallback, errorCallback, "SQLiteCordovaPlugin", "open", p1);
        },
        insert: function(successCallback,errorCallback,p1) {
            exec(successCallback, errorCallback, "SQLiteCordovaPlugin", "insert", p1);
        },
        executeSql: function(successCallback,errorCallback,p1) {
            exec(successCallback, errorCallback, "SQLiteCordovaPlugin", "executeSql", p1);
        },
        delete: function(successCallback,errorCallback,p1) {
            exec(successCallback, errorCallback, "SQLiteCordovaPlugin", "delete", p1);
        },
        update: function(successCallback,errorCallback,p1) {
            exec(successCallback, errorCallback, "SQLiteCordovaPlugin", "update", p1);
        },
        query: function(successCallback,errorCallback,p1) {
            exec(successCallback, errorCallback, "SQLiteCordovaPlugin", "query", p1);
        },
        transactionExecuteSqlBatch: function(successCallback,errorCallback,p1) {
            exec(successCallback, errorCallback, "SQLiteCordovaPlugin", "transactionExecuteSqlBatch", p1);
        },
        backgroundExecuteSqlBatch: function(successCallback,errorCallback,p1) {
            exec(successCallback, errorCallback, "SQLiteCordovaPlugin", "backgroundExecuteSqlBatch", p1);
        },
        rawQuery: function(successCallback,errorCallback,p1) {
            exec(successCallback, errorCallback, "SQLiteCordovaPlugin", "backgroundExecuteSql", p1);
        }
        
    };

});
// fengxf added end: 20140317


