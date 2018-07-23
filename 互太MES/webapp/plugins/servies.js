	var site_config={
		debug_model:false,//是否启用debug_url;
//		product_url:"/MES",//发布服务器地址
		product_url:"",//发布服务器地址
		debug_url:'http://172.30.20.136:8083/MES',//调试服务地址
	}

    //Ajax请求地址
	function getAjaxURL(action){
		var headUrl=site_config.debug_model?site_config.product_url:site_config.debug_url;
		return headUrl + action
	}


//	  //Ajax请求地址
//	function getAjaxURL(action){
//		var headUrl=site_config.debug_model?site_config.product_url:site_config.debug_url;
//		return headUrl + action
//	}
//	
