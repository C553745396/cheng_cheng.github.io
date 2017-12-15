	$(function () {
		$('#search').bind("input propertychange", function () {
		//$('#search').keyup(function(){
		var serdata=$('#search').val();	
		var localData = localStorage.getItem('datastr');
		var localdata1 = eval('('+localData+')')
		var data1 = [];
		if(serdata==""){
			data1=localdata1;
		}else{
			for (i=0;i<localdata1.length;i++){
				var tmpdata=localdata1[i].WLMS;
				if(tmpdata.indexOf(serdata)>=0){
					data1.push(localdata1[i]);
				}
			}
		}
		$('.content').remove();
		for(var i=0;i<data1.length;i++){
			intt(data1[i]);
		
		}
	});
 	});
	function onDeviceReady(){
		//alert(2323);
		var jsonObj = eval('(' + data.data801.request + ')');
            //jsonObj.head.roleName=roleName
            var jsonStr = JSON.stringify(jsonObj);
            data.data801.request = jsonStr;
            getJSON(url, data.data801, data801);	    		    	
	    	
	}
	function data801(v){		
		var data=v.data.cont;
		//setLocalData("data",data);
		var datastr=JSON.stringify(data);
		localStorage.setItem('datastr', datastr);
			
		$('.content').remove();
		
		//显示五条数据
		/*if(data.length>=6){
			var len=5;
		}else{
			var len=data.length;
		}*/	
		for(var i=0;i<data.length;i++){
			intt(data[i]);
		
		}	
	}
	//var data=data801();
	function intt(data){
		
		var s =  '<li class="content mui-table-view-cell" onclick="gettask('+data.ID+","+data.SPLIT_TASK_FLAG+')"><div>'+data.WLMS+'<span>'+data.USER_NAME+'</span></div>'+
										'<div>'+data.AREA+'<span></span></div>'+
										'</li>';					
			$('#conten_ct').append(s);
	};
	
//	$('#search').keyup(function(){
//		var serdata=$('#search').text();
//		//alert(2323);
//		
//		var localData = localStorage.getItem('data');
//		mui.each(localData, function(index, item){
//			if(item.WLMS==serdata){
//				data1.push(item);
//			}
//		})
//				
//		//alert(data1);
//		intt(data1)
//	});	
	
	
	
	
	function gettask(data,type){
		if(type=="1"){
			window.location.href="task1.html?data=" + data;
		}else{
			window.location.href="task.html?data=" + data;
		}
	};
	
