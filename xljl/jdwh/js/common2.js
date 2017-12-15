


	
	
	/*获取参数值*/
	
      
//				var id = GetQueryString("data");    
//				
//				var id1 = GetQueryString("data");   
//				
//				var id2 = GetQueryString("data");   
//				
//				var id3 = GetQueryString("data");   
	          
	            function GetQueryString(name) {
	                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	                var r = window.location.search.substr(1).match(reg);
	                if(r!=null)return  unescape(r[2]); return null;
	            }
