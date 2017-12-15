
function onDeviceReady(){
		var id = GetQueryString("data");
		//alert(id);
		var jsonObj = eval('(' + data.data802.request + ')');
            //jsonObj.head.roleName=roleName
            jsonObj.data.ID=id;
            var jsonStr = JSON.stringify(jsonObj);
            
            data.data802.request = jsonStr;
            getJSON(url, data.data802, data802);	    		    	
	    	
	}
	function data802(v){
		
		//alert(v);
		
		var data=v.data.cont;
		$('.content_right').remove();		
		for(var i=0;i<data.length;i++){
			intt(data[i]);
		
		}	
	}


//var data=getData();	
	function intt(data){
		
		var s = '<li class="content_right mui-table-view-cell"  onclick="gettask1('+data.ID+","+data.EQU_ID+')">'+
					'<div style="margin-bottom: 0px;">'+data.CPSCGH+'</div>'+
					'</li>';					
			$('#conten_ct1').append(s);
	
	
	};
	



/*页面跳转*/
function gettask1(dataid,equid){
		var data=dataid+":"+equid;
		//alert("sss"+data);
		window.location.href="task1.html?data=" + data;
	};
	




