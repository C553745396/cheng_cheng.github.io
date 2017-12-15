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
		var id = GetQueryString("data");
		//alert(id);
		var jsonObj = eval('(' + data.data804.request + ')');
            //jsonObj.head.roleName=roleName
            jsonObj.data.ID=id;
            var jsonStr = JSON.stringify(jsonObj);
            
            data.data804.request = jsonStr;
            getJSON(url, data.data804, data804);	    		    	
	    	
	}
	function data804(v){
		
		//alert(v);
		
		var data=v.data.cont;
		var datastr=JSON.stringify(data);
		localStorage.setItem('datastr', datastr);
		$('.content_left').remove();		
		for(var i=0;i<data.length;i++){
			intt(data[i]);
		
		}	
	}

//var data=getData();	
	function intt(data){
		if(data.CREATE_DATE!=""&&data.PERCENT_INFO!=""){
			var s = '<div class="content_left" onclick=gettask1('+data.ID+')>'+
					'<div>'+data.CREATE_DATE+'</div>'+
					'<div>'+data.PERCENT_INFO+'</div>'+
					
				'</div>';
			$('body').append(s)
		}
		
	
	
	};
			
$('#search').keyup(function(){
		var serdata=$('#search').text();
		//alert(2323);
		var jsonObj = eval('(' + data.data804.request + ')');
		jsonObj.data.wzmc=serdata;
            //jsonObj.head.roleName=roleName
            var jsonStr = JSON.stringify(jsonObj);
            data.data804.request = jsonStr;
            getJSON(url, data.data804, data804);
	
	})
function gettask1(data){
		window.location.href="detail.html?data=" + data;
	};