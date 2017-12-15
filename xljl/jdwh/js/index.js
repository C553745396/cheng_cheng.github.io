	function getData(){
		var data=[{"id":"32438825","name":"2222",'id1':'江苏变压器有限公司','name1':'变压器'},
		{"id":"132438825","name":"州220KV压器",'id1':'江苏变压器有限公司','name1':'变压器'},

		{"id":"132438825","name":"徐州220KV变压器",'id1':'江苏变压器有限公司','name1':'变压器'},

		{"id":"132438825","name":"徐州220KV变压器",'id1':'江苏变压器有限公司','name1':'变压器'},

		{"id":"132438825","name":"徐州220KV变压器",'id1':'江苏变压器有限公司','name1':'变压器'},

		{"id":"132438825","name":"徐州220KV变压器",'id1':'江苏变压器有限公司','name1':'变压器'},

		{"id":"132438825","name":"徐州220KV变压器",'id1':'江苏变压器有限公司','name1':'变压器'},
		{"id":"132438825","name":"徐州220KV变压器",'id1':'江苏变压器有限公司','name1':'变压器'},
		{"id":"132438825","name":"徐州220KV变压器",'id1':'江苏变压器有限公司','name1':'变压器'}]
		return data;
	}
	


	
	function intt(data){
		
		var s = '<div  class="content" onclick=gettask('+data.id+','+data.name+')>'+
					'<div>'+data.name+'<span>'+data.id+'</span></div>'+
					'<div>'+data.name+'<span>'+data.id+'</span></div>'+
					'<a>></a>'+
				'</div>';
		$('body').append(s)
	
	
	};
	function adddiv(){
		var data=getData();
		
		for(var i=0;i<data.length;i++){
			intt(data[i]);
		}
			

	};
	
	

function gettask(data,sa){
	
	
		window.location.href="task.html?data=" + data+"&sid="+sa;
	};
	

