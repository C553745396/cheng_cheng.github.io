cordova.define("org.apache.cordova.ForwardConstants", function(require, exports, module) {
module.exports = {
  //到文件浏览器解码传递的参数
   FileExplorer:{
     ACTION_COMMON_FILE_UPLOAD: "action_common_file_upload",// 标识为文件上传[文件上传需要限制文件大小]
     ACTION_BREAK_POINT_FILE_UPLOAD: "action_break_point_file_upload",// 标识为文件上传[文件上传需要限制文件大小]
     ACTION_APP_LOCAL_INSTALL: "action_app_local_install" // 标识为安装软件
   }
  };
});
