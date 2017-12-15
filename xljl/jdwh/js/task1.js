function onDeviceReady(){
		var id = GetQueryString("data");
		var taskid="";
		if(id.indexOf(":")>0){
			var ss=id.split(":")[1];
			var dd=id.split(":")[0];
			id=ss;
			taskid=dd;
		}
		//alert(id);
		var jsonObj = eval('(' + data.data803.request + ')');
            //jsonObj.head.roleName=roleName
            if(taskid!=""){
            	jsonObj.data.TASK_ID=taskid;
            }
            jsonObj.data.ID=id;
            jsonObj.data.TASK_ID=taskid;
            //alert(jsonObj.data);
            var jsonStr = JSON.stringify(jsonObj);
            
            data.data803.request = jsonStr;
            getJSON(url, data.data803, data803);	    		    	
	    	
	}
	function data803(v){
		
		//alert(v);
		
		var data=v.data.cont;
		$('.content_right').remove();		
		for(var i=0;i<data.length;i++){
			intt(data[i]);
		
		}	
	}

//var data=getData();	
	function intt(data){
		
	var s = '<li class="content_right mui-table-view-cell" >'+
				'<div class="content_right" onclick="gettask1('+data.ID+')">'+
				'<span>'+data.PROCEDURE_NAME+'</span></div>'+
			
			'</li>';
		$('#conten_ct2').append(s)
	
	
	};

	

			
function gettask1(data){
		window.location.href="work_proced.html?data=" + data;
	};
	




