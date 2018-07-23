
//全局变量

//var WeftKnitPageStatus;
//var OperatorPageStatus;
var matGrp;
var v_orderNo;
//var F9Status;
var ApprovalFlag,MachineLockedFlag,F9Status,OperatorPageStatus,WeftKnitPageStatus,AuthPageStatus,altStatus;
//html页面加载结束执行

	$("#txtGreigeCheckPerson").focus();
	$("#UserAuthorization").hide()
	$("#WeftInspectionConf").hide()
	$("#OperatorLogin").show();
	var LoginUser=$("#hdnUser").val();

	OperatorPageStatus=1;

	$("#txtOperator").focus()

	$("#txtGreigeClass").keyup(function() {
		$(this).val($(this).val().toUpperCase());
	});
		// alert(2222222)
	$.ajax({
		type:"POST",
		url:getAjaxURL('/weftGreigeInspectionConf/qualityReasons'),
		async:true,
		// dataType: json,
		success:function(data){
			console.log(data)
			if(data.status != 200) {
				layer.alert(data.message);
			}else{
				var option="<option value=''></option>";
				// $(data).find('data').each(function(){
				// 	var RCODE = $(this).find("rcode").text();
				// 	var RMARK= $(this).find("rmark").text();
				// 	option = option+"<option value="+RCODE+":"+RMARK+">"+RCODE+":"+RMARK+"</option>";
				// });
				for(var i in data.data){
					option+="<option>"+data.data[i].rcode+":"+data.data[i].rmark+"</option>";
				}
				$("#txtQualityReason").html(option);
			}
		},
		error:function(xhr){
			layer.alert( strchangeL("连接出错"));
		}
	});


	

//質量原因(T)下拉数据
//function 
$(document).keydown(function(e) {
	e = e || window.event;
	console.log(e.keyCode)
	//	if(window.event && (window.event.keyCode == 116 || window.event.keyCode == 119 || window.event.keyCode == 120 || window.event.keyCode == 123) && (OperatorPageStatus=="1")){window.event.keyCode = 2001;}
	//
	//		if(window.event && (window.event.keyCode == 115 || window.event.keyCode == 119) && (WeftKnitPageStatus=="1")){window.event.keyCode = 2001;}
	//
	//		if(window.event && (window.event.keyCode == 115 || window.event.keyCode == 116 || window.event.keyCode == 120 || window.event.keyCode == 123) && (AuthPageStatus=="1")){window.event.keyCode = 2001;}
	//F4执行
	//if(window.event && (window.event.keyCode == 115 || window.event.keyCode == 118 )){window.event.keyCode = 1002;}
	if(e.keyCode ==115){
		OperatorPageStatus=0;
		$("#txtGreigeCheckPerson").val(($("#txtOperator").val()).toUpperCase());
		$("#txtGreigeCheckMachine").val(($("#txtMachineID").val()).toUpperCase());
		// layer.load(2);
		$.ajax({
			type:"POST",//请求方式
			url:getAjaxURL('/weftGreigeInspectionConf/chkOperatorAndMachine'),//发送请求的地址
			// url:getAjaxURL('/weftGreigeInspectionConf/alidateWeftInspConf'),//发送请求的地址
			async:true,
			dataType:"",//服务器返回的数据类型
			data:{
				operator:($("#txtOperator").val()).toUpperCase(),
				machineId:($("#txtMachineID").val()).toUpperCase()
				
				// operator:$("#txtOperator").val(),
				// machineId:$("#txtMachineID").val()
			},
			 //请求成功函数内容
			success:function(data){
				// layer.closeAll('loading');
				console.log(data);
				console.log(data.status);
				if(data.status==200){
					$("#WeftInspectionConf").show();
					WeftKnitPageStatus=1;
					$("#txtRollBatchNo").focus();
					$("#UserAuthorization").hide();
					$("#OperatorLogin").hide();
				}else{
					layer.alert(data.message,{title: strchangeL("提示")});
				}
			},
			
		});
		return false;
	};
	
	
//F5鎖匹號接口未完成
	// if(e.keyCode == 116){window.event.keyCode = 1001;}
	if(e.keyCode ==116){
		if(e && e.preventDefault){ 
			e.preventDefault(); 
		} 
		//IE中组织浏览器行为 
		else{ 
			window.event.returnValue=false;
			// return false;
		}
		console.log(123)
			if($("#hdnConfirmStatus").val()=="1"){layer.alert(strchangeL("該匹號已經完成驗布"));return false}
			if($("#hdnRollLockStatus").val()=='1'){layer.alert(strchangeL("匹號被用戶鎖定")+" : "+$("#hdnLockedBy").val());return false}
			if($("#hdnCuttingGreigeStatus").val()=='0'){layer.alert(strchangeL("胚布开边值与验布機臺機上開幅不相同"));return false}
			var Machine_No=$("#txtMachineNo").val();
			if(Machine_No==""){
				layer.alert(strchangeL("生產機號不存在"))
			}else{
				// Confirm("是否確定要保存 ?",'', function(r) {
				// 	if(r){ 
				// 		saveDataLock() 
				// 	}
				// })

				layer.alert(strchangeL("是否確定要保存 ?"), function(r) {
					if(r){ 
						saveDataLock();
					}
				})

				function saveDataLock(){
					$.ajax({
						type:"POST",
						url:getAjaxURL('/weftGreigeInspectionConf/machineLockOnOrOff'),
						async:false,
						data:{
							machineNo:Machine_No,
							operation:'INSERT',
							rollBatchNo:$("#txtRollBatchNo").val(),
							operator:$("#txtOperator").val()
						},
						// data:{"QueryTemplate": "PacificTextile/Confirmation/WeftKnit/Queries/UpdateMachineStatus_XQT", "Content-Type": "text/xml","Param.1":Machine_No,"Param.2":"INSERT","Param.3":$("#txtRollBatchNo").val()} ,
						success: function(data){
							if(data.status != 200) {
								layer.alert(data.message);
							}else if(data.message!="SUCCESS"){
								var chkErr=data.message;
								layer.alert(chkErr)
							}else if (data.message=="SUCCESS"){
								layer.alert(Machine_No +" : "+ strchangeL("機號鎖定成功"));
							}
						},//----END OF SUCCESS FUNCTION
						error:function(xhr,a,b){
							layer.alert( strchangeL("连接出错"));
						}
					});
				}
			}
			return false
		
	}

//F9審批簽名
	if(e.keyCode ==120){
		
		$("#txtUsername").val("");
		$("#txtPassword").val("");
		$("#txtUsername").focus();
		if($("#hdnConfirmStatus").val()=="1"){layer.alert(strchangeL("該匹號已經完成驗布"));return;}
		
			if($("#hdnRollLockStatus").val()=='1'){layer.alert(strchangeL("匹號被用戶鎖定"));return;}
			
			if($("#hdnCuttingGreigeStatus").val()=='0'){layer.alert(strchangeL("胚布开边值与验布機臺機上開幅不相同"));return;}
			
			F9Status="1";
			WeftKnitPageStatus=0;
			$("#UserAuthorization").show();
			AuthPageStatus=1;
			$("#WeftInspectionConf").hide();
			$("#OperatorLogin").hide();
			$("#txtUsername").focus();
			
	}
	
//F12完成驗布	
//if(e.keyCode == 123 ){window.event.keyCode = 1000;}
	if(e.keyCode ==123){
		// console.log(window.event.keyCode)
		
			$("#txtGreigeWeight").focus();
			setTimeout(function(){saveData()},1000)

			//$(document).ajaxStart(function() {$.blockUI({message: null});}).ajaxStop(function() {$.unblockUI();});
			///////// CHECK CUTTING GREIGE
			/////////////// CHECK TUBE WEIGHT RANGE
			//////////////   GET MATERIAL GRP
			//////////////   GET TOLERENCES FOR CPI WPI WIDTH
			///////////////////   CHECK MAT GRP AND TOLERENCES FOR CPI WPI WIDTH
			///////////////////////// CHECK LOCKED MACHINE
			///////////////////////UNLOCK MACHINE
			////////////////////Save Button action
			//	var d = new Date();
			//	alert(d.toUTCString())

		        function saveData(){
			        var achar=$("#txtFabric").val();
			        var ApprovalFlag = $("#ApprovalFlag").val();
				 	//WPI值检查
			        var WPI_L5 = $("#txtWPIL5").val();
			        var WPI_R5 = $("#txtWPIR5").val();
			        var WPI_L10 = $("#txtWPIL10").val();
			        var WPI_R10 = $("#txtWPIR10").val();
			        var txtWPIMiddle = $("#txtWPIMiddle").val();
			        if(ApprovalFlag != "1"){
                        if($("#status2").val() == "1"){
			         		if( Math.abs(WPI_L5 - $("#txtWPIStandardL5").val()) >  $("#wpiL5Tol").val()*0.01*$("#txtWPIStandardL5").val() && WPI_L5 > 0){
				 		 		layer.alert("WPIstrchangeL('左5超出容差值')");return false;
			         		}
			      			if( Math.abs(WPI_L10 - $("#txtWPIStandardR10").val()) >  $("#wpiL10Tol").val()*0.01*$("#txtWPIStandardR10").val() && WPI_L10 > 0){
				  				layer.alert("WPIstrchangeL('左10超出容差值')");return false;
			         		}
			        		if( Math.abs(WPI_R5 - $("#txtWPIStandardL5").val()) >  $("#wpiL5Tol").val()*0.01*$("#txtWPIStandardL5").val() &&  WPI_R5 > 0 ){
				  				layer.alert("WPIstrchangeL('右5超出容差值')");return false;
			         		}
			        		if( Math.abs(WPI_R10 - $("#txtWPIStandardR10").val()) >  $("#wpiL10Tol").val()*0.01*$("#txtWPIStandardR10").val() && WPI_R10 > 0){
				  				layer.alert("WPIstrchangeL('右10超出容差值')");return false;
			         		}
				  		}
						// console.log('容差值验证------------')
						// console.log(txtWPIMiddle);
						// console.log( $("#txtWPIStandard").val());
						// console.log($("#wpiTol").val());
						// console.log(Math.abs(txtWPIMiddle - $("#txtWPIStandard").val()));
						// console.log($("#wpiTol").val()*0.01*$("#txtWPIStandard").val());
				 	 	if( Math.abs(txtWPIMiddle - $("#txtWPIStandard").val()) >  $("#wpiTol").val()*0.01*$("#txtWPIStandard").val() && txtWPIMiddle > 0){
				  			layer.alert(strchangeL("WPI中超出容差值"));return false;
			         	}
			        }

					if(achar!=""){ achar=achar.substr(7,1); }
					if(achar.toLowerCase()=="e" || achar.toLowerCase()=="m"){
						if($("#txtDistance").val()==""){layer.alert(strchangeL("當胚布布號為色織布時必須輸入間距。"));return false;}
					}

					if($("#hdnConfirmStatus").val()=="1"){layer.alert(strchangeL("該匹號已經完成驗布"));return false}
					if($("#hdnRollLockStatus").val()=='1'){layer.alert(strchangeL("匹號被用戶鎖定")+" : "+$("#hdnLockedBy").val());return false}
					if($("#hdnCuttingGreigeStatus").val()=='0'){layer.alert(strchangeL("胚布开边值与验布機臺機上開幅不相同"));return false}
					if($("#hdnMchnLockStatus").val()=='1'){layer.alert( strchangeL("已限制檢驗,需要审批"));return false}
					if (((parseFloat($("#txtGreigeWeight").val())) - (parseFloat($("#txtTubeWeight").val())))<0){layer.alert(strchangeL("淨重不能小於0"));return false}
					if($("#txtGreigeClass").val()=="A" || $("#txtGreigeClass").val()=="B"){if(((parseFloat($("#txtGreigeWeight").val())) -	(parseFloat($("#txtTubeWeight").val())))<=0){layer.alert(strchangeL("淨重必須大於0"));return false}}
					if($("#txtGreigeClass").val()=="C"){if(((parseFloat($("#txtGreigeWeight").val())) -	(parseFloat($("#txtTubeWeight").val())))<0){layer.alert(strchangeL("淨重不能小於0"));return false}}
					if($("#txtQualityReason").val()=="" && $("#txtGreigeClass").val()=="C"){layer.alert(strchangeL("胚布级别为C")+"."+strchangeL("请输入质量原因"));return false}
					if($("#txtGreigeClass").val()==""){layer.alert(strchangeL("請輸入胚布級別"));return false}
					if($("#txtCuttingGreige").val().toLowerCase()=="y"){if($("#txtTubeWeight").val()=="" || $("#txtTubeWeight").val()=="0"){layer.alert(strchangeL("當胚布為開邊時必須輸入膠管重量。"));return false}}

				    var matGrp = $("#hdnMatGrp").val();
					//胚布長度转换  1码(yd)=0.9144米(m)
					var tempGreigeLength = $("#txtGreigeLength").val();
					if(tempGreigeLength!="")tempGreigeLength=getFormatNumber(0.9144*tempGreigeLength);
					//剪布長度 转换
					var tempCuttedGreigeLength = $("#txtCuttedGreigeLength").val();
					var tempcodevalue="B00010,B00020,B00030,B00061,B00062,B00063,B10010";
					if(tempcodevalue.indexOf(matGrp)!="-1"){if(tempCuttedGreigeLength!="")tempCuttedGreigeLength=getFormatNumber(0.9144*tempCuttedGreigeLength);}

					if($("#txtNetWeight").val()!=""){
						if(parseFloat($("#txtNetWeight").val())<=0){
							layer.alert(strchangeL("胚布淨重必須大于0。"));
							return false;
						}
					}
					if($("#txtNetWeight").val()!=""){
						if(parseFloat($("#txtNetWeight").val())>250){
							layer.alert(strchangeL("胚布淨重不能大于250kg。"));
							return false;
						}
					}

					// var successFlag;
					var HuaqianFlag=$("#status2").val();
					//alert(d.toUTCString())
					$.ajax({
						type:"POST",
						url:getAjaxURL('/weftGreigeInspectionConf/validateWeftInspConf'),
						// async:false,
						data:{
							rollBatchNo:$("#txtRollBatchNo").val(),
							orderNo:$("#txtorderNo").val(),
							color:$("#txtColor").val(),
							machineNo:$("#txtMachineNo").val(),
							tubeWeight:$("#txtTubeWeight").val(),
							fabric:$('#txtFabric').val(),
							size:$("#txtSize").val(),
							cuttingGreige:$("#txtCuttingGreige").val(),
							greigeCheckMachine:$("#txtGreigeCheckMachine").val(),
							greigeCheckPerson:$("#txtGreigeCheckPerson").val(),
							cpiStandard:$("#txtCPIStandard").val(),
							cpiLeft:$("#txtCPILeft").val(),
							cpiMiddle:$("#txtCPIMiddle").val(),
							cpiRight:$("#txtCPIRight").val(),
							wpiStandard:$("#txtWPIStandard").val(),
							wpiStandardL5:$("#txtWPIStandardL5").val(),
							wpiStandardR10:$("#txtWPIStandardR10").val(),
							wpiL5:$("#txtWPIL5").val(),
							wpiL10:$("#txtWPIL10").val(),
							wpiMiddle:$("#txtWPIMiddle").val(),
							wpiLeft:"",
							wpiRight:"",
							wpiR5:$("#txtWPIR5").val(),
							wpiR10:$("#txtWPIR10").val(),
							standardWidth:$("#txtStandardWidth").val(),
							width:$("#txtWidth").val(),
							distance:$("#txtDistance").val(),
							defectNo:$("#txtDefectNo").val(),
							cuttedGreigeLength:$("#txtCuttedGreigeLength").val(),
							cuttedGreigeWeight:$("#txtCuttedGreigeWeight").val(),
							greigeClass:$("#txtGreigeClass").val(),
							qualityReason:$("#txtQualityReason").val(),
							greigeLength:$("#txtGreigeLength").val(),
							greigeSize:$("#txtGreigeSize").val(),
							flatMachineNo:$("#txtFlatMachineNo").val(),
							greigeWeight:$("#txtGreigeWeight").val(),
							netWeight:$("#txtNetWeight").val(),
							plant:$("#hdnPlant").val(),
							approver:$("#hdnApprover").val(),
							hdnDateTime:$("#hdnDateTime").val(),
							greigeRemark:$("#txtGreigeRemark").val(),
							approvalFlag:$("#ApprovalFlag").val(),
							huaqianFlag:$("#status2").val(),
							username:$("#txtUsername").val()
						} ,
						success:function(data){
							//alert(data.xml)
							if(data.status != 200) {
								layer.alert(data.message);
							// }else if(data.data.message !="SUCCESS"){
							// 	layer.alert(data.message)
							}else if (data.data.message =="SUCCESS"){
								$("#txtGreigeWeight").focus();
								save();
								// successFlag=1;
							}
						},//----END OF SUCCESS FUNCTION
						error:function(xhr,a,b){
							layer.alert(strchangeL('连接失败'));
						}
					});
					// console.log(successFlag);
					// console.log(successFlag=="1")

					// if (successFlag=="1"){
					function save(){	
						$.ajax({
							type:"POST",
							url:getAjaxURL('/weftGreigeInspectionConf/save'),
							async:false,
							data:{
								rollBatchNo:$("#txtRollBatchNo").val(),
								orderNo:$("#txtorderNo").val(),
								color:$("#txtColor").val(),
								machineNo:$("#txtMachineNo").val(),
								tubeWeight:$("#txtTubeWeight").val(),
								fabric:$('#txtFabric').val(),
								size:$("#txtSize").val(),
								cuttingGreige:$("#txtCuttingGreige").val(),
								greigeCheckMachine:$("#txtGreigeCheckMachine").val(),
								greigeCheckPerson:$("#txtGreigeCheckPerson").val(),
								cpiStandard:$("#txtCPIStandard").val(),
								cpiLeft:$("#txtCPILeft").val(),
								cpiMiddle:$("#txtCPIMiddle").val(),
								cpiRight:$("#txtCPIRight").val(),
								wpiStandard:$("#txtWPIStandard").val(),
								wpiStandardL5:$("#txtWPIStandardL5").val(),
								wpiStandardR10:$("#txtWPIStandardR10").val(),
								wpiL5:$("#txtWPIL5").val(),
								wpiL10:$("#txtWPIL10").val(),
								wpiMiddle:$("#txtWPIMiddle").val(),
								wpiLeft:"",
								wpiRight:"",
								wpiR5:$("#txtWPIR5").val(),
								wpiR10:$("#txtWPIR10").val(),
								standardWidth:$("#txtStandardWidth").val(),
								width:$("#txtWidth").val(),
								distance:$("#txtDistance").val(),
								defectNo:$("#txtDefectNo").val(),
								cuttedGreigeLength:$("#txtCuttedGreigeLength").val(),
								cuttedGreigeWeight:$("#txtCuttedGreigeWeight").val(),
								greigeClass:$("#txtGreigeClass").val(),
								qualityReason:$("#txtQualityReason").val(),
								greigeLength:$("#txtGreigeLength").val(),
								greigeSize:$("#txtGreigeSize").val(),
								flatMachineNo:$("#txtFlatMachineNo").val(),
								greigeWeight:$("#txtGreigeWeight").val(),
								netWeight:$("#txtNetWeight").val(),
								plant:$("#hdnPlant").val(),
								approver:$("#hdnApprover").val(),
								hdnDateTime:$("#hdnDateTime").val(),
								greigeRemark:$("#txtGreigeRemark").val(),
								approvalFlag:$("#ApprovalFlag").val(),
								huaqianFlag:$("#status2").val(),
								username:$("#txtUsername").val()
							},
							success:function(data){
								if(data.status!= 200) {
									layer.alert(data.message);
								}else{
									layer.alert(data.message);
								}
							},//----END OF SUCCESS FUNCTION
							error:function(xhr,a,b){alert("save failed");
								layer.alert(strchangeL('连接失败'));
							}
						});
						$.ajax({
							type:"POST",
							url:getAjaxURL('/weftGreigeInspectionConf/confStatus'),
							async:false,
							data:{
								rollBatchNo:$("#txtRollBatchNo").val()
							},
							success:function(data) {
								if(data.status!= 200) {
									layer.alert(data.message);
								// }else if(data.CONF_STATUS=="1"){
								}else if(data.data.confStatus=="1"){
									clearAll()
									$("#txtRollBatchNo").val("")
								}
							},
							error:function(xhr,a,b)
							{
								layer.alert(strchangeL("连接出错"));
							}
						});
					}
					// }
				}//end saveData
				return false;
		
		
		
		
	}//F12完成驗布	
	
//F2返回	

	if(e.keyCode ==113 && WeftKnitPageStatus==1){
		console.log(e.keyCode)
			WeftKnitPageStatus=0;
			$("#UserAuthorization").hide()
			$("#WeftInspectionConf").hide()
			$("#OperatorLogin").show()
			OperatorPageStatus=1;
	}	
	
	
	if(e.keyCode ==113 && AuthPageStatus==1){
		console.log(e.keyCode)
			AuthPageStatus=0;
			$("#UserAuthorization").hide()
			$("#WeftInspectionConf").show()
			WeftKnitPageStatus=1;
			$("#OperatorLogin").hide()
	}
	
//F8执行(f7)
	if(e.keyCode ==118 && F9Status=="1"){

		if(e && e.preventDefault){ 
       		 e.preventDefault(); 
	    }else{ //IE中组织浏览器行为
	        window.event.returnValue=false;
	    }

		console.log('F8')
		
			var Username=$("#txtUsername").val();
			var Password=$("#txtPassword").val();
			var RollBatchNo=$("#txtRollBatchNo").val()
			var Machine_No=$("#txtMachineNo").val();
			var Approval=$("#txtApproval").val()
			var Auth_Flag,AllowedRange;

			
			$.ajax({
				type:"POST",
				url:getAjaxURL('/weftGreigeInspectionConf/login'),
				async:false,
				data:{
					username:Username.toUpperCase(),
					password:Password,
					machineNo:Machine_No,
					rollBatchNo:RollBatchNo,
					approval:Approval
				},
				success:function(data) {
					console.log(data.message)
					 if (data.message=="SUCCESSMACHINE"){
						layer.alert(strchangeL("已批准"))
						ApprovalFlag=1;
						$("#ApprovalFlag").val(ApprovalFlag);
						$("#hdnApprover").val(Username)
						$("#UserAuthorization").hide()
						$("#WeftInspectionConf").show()
						WeftKnitPageStatus=1;
						$("#OperatorLogin").hide()
						AuthPageStatus=0;
						$("#txtUsername").val("");
						$("#txtPassword").val("")
						F9Status=0;
					}else if (data.message=="SUCCESSRANGES"){
						layer.alert(strchangeL("已批准"))
						ApprovalFlag=1;
						$("#ApprovalFlag").val(ApprovalFlag);
						$("#txtAuditStatus").attr("checked",true);
						$("#hdnApprover").val(Username)
						$("#UserAuthorization").hide()
						$("#WeftInspectionConf").show()
						WeftKnitPageStatus=1;
						$("#OperatorLogin").hide()
						AuthPageStatus=0;
						$("#txtUsername").val("");
						$("#txtPassword").val("")
						F9Status=0;
					}else if (data.message=="ERROR"){
			      		layer.alert(strchangeL("用戶名和密碼不匹配"));
					}	//AUTH_ERROR
					else if (data.message=="AUTH_ERROR"){
					layer.alert(strchangeL("沒有相應的權限"));
					}

				},
				// error:function(xhr,a,b)
				// {
				// 	layer.alert("连接出错");
				// }
			});
		
	}	//F8	
});



function getFormatNumber(s)
{
	s = s + "";
	var str = s.substring(0,s.indexOf(".") + 3);
	return str;
}
function getFormatNumber2(s)
{
	s = s + "";
	var str = s.substring(0,s.indexOf(".") + 2);
	return str;
}
function getFormatNumber3(s)
{
	s = s + "";
	var str = s.substring(0,s.indexOf(".") + 4);
	return str;
}
function getFormatNumber23(s)
{
	s = s + "";
	var str=s;
	if(s.indexOf(".")>0){
		//alert(s.substring(s.indexOf(".")));
		str = s.substring(0,s.indexOf(".") + 3);
	}
	return str;
}

//SURE点击事件调用函数（clickYes）

function clickYes(){
	
	OperatorPageStatus=0;
		//txtOperator赋值给txtGreigeCheckPerson
		$("#txtGreigeCheckPerson").val(($("#txtOperator").val()).toUpperCase());
		$("#txtGreigeCheckMachine").val(($("#txtMachineID").val()).toUpperCase());
		//胚布質檢報工Sure点击事件
		var btnSure=document.getElementById('searchYanzheng');
		btnSure.onclick=function(){
			$.ajax({
				type:"POST",//请求方式
				url:getAjaxURL('/weftGreigeInspectionConf/chkOperatorAndMachine'),//发送请求的地址
				async:true,
				dataType:"",//服务器返回的数据类型
				data:{
					operator:($("#txtOperator").val()).toUpperCase(),
					machineId:($("#txtMachineID").val()).toUpperCase()
					// operator:$("#txtOperator").val(),
					// machineId:$("#txtMachineID").val()
				},
				 //请求成功函数内容
				success:function(data){
					console.log(data);
					console.log(data.status);
					if(data.status==400){
						layer.alert(data.message,{title: strchangeL("提示")});
					}else{
						WeftKnitPageStatus=1;
						$('#OperatorLogin').hide();
						$('#WeftInspectionConf').show()
					}
				},
				
			});
		}
};

// //WIP检查2018-3-26
// function saveData(){
	
//     var achar=$("#txtFabric").val();
// 	var ApprovalFlag = $("#ApprovalFlag").val();
// 	//WPI值检查
//     var WPI_L5 = $("#txtWPIL5").val();
//     var WPI_R5 = $("#txtWPIR5").val();
//     var WPI_L10 = $("#txtWPIL10").val();
//     var WPI_R10 = $("#txtWPIR10").val();
    
//     var WPIS_L5=$("#txtWPIStandardL5").val();//
//     var WPIS_R10=$("#txtWPIStandardR10").val();//
//     var txtWPIStandard=$("#txtWPIStandard").val();//WPI中標準
    
//     var txtWPIMiddle = $("#txtWPIMiddle").val();//WPI中
//         if(ApprovalFlag != "1"){
//             if($("#status2").val() == "1"){
//          		if( Math.abs(WPI_L5 - WPIS_L5) >  $("#wpiL5Tol").val()*0.01*WPIS_L5 && WPI_L5 > 0){
// 	 		 		layer.alert(strchangeL("WPI左5超出容差值"));
// 	 		 		return false;
//          		}
//       			if( Math.abs(WPI_L10 - WPIS_R10) >  $("#wpiL10Tol").val()*0.01*WPIS_R10 && WPI_L10 > 0){
// 	  				layer.alert(strchangeL("WPI左10超出容差值"));
// 	  				return false;
//          		}
//         		if( Math.abs(WPI_R5 - WPIS_L5) >  $("#wpiL5Tol").val()*0.01*WPIS_L5 &&  WPI_R5 > 0 ){
// 	  				layer.alert(strchangeL('WPI右5超出容差值'));
// 	  				return false;
//          		}
//         		if( Math.abs(WPI_R10 - WPIS_R10) >  $("#wpiL10Tol").val()*0.01*WPIS_R10 && WPI_R10 > 0){
// 	  				layer.alert(strchangeL('WPI右10超出容差值'));
// 	  				return false;
//          		}
// 	  		}
	  		

// 		 	if( Math.abs(txtWPIMiddle - txtWPIStandard) >  $("#wpiTol").val()*0.01*txtWPIStandard && txtWPIMiddle > 0){
// 			  		layer.alert(strchangeL('WPI中超出容差值'));
// 			  		return false;
// 		    }
//        	}

// 		if(achar!=""){ achar=achar.substr(7,1);}
// 		if(achar.toLowerCase()=="e" || achar.toLowerCase()=="m"){
// 			if($("#txtDistance").val()==""){layer.alert(strchangeL("當胚布布號為色織布時必須輸入間距。"));return false;}
// 		}

// 		if($("#hdnConfirmStatus").val()=="1"){layer.alert(strchangeL("該匹號已經完成驗布"));return false}
// 		if($("#hdnRollLockStatus").val()=='1'){layer.alert(strchangeL("匹號被用戶鎖定")+" : "+$("#hdnLockedBy").val());return false}
// 		if($("#hdnCuttingGreigeStatus").val()=='0'){layer.alert(strchangeL("胚布开边值与验布機臺機上開幅不相同"));return false}
// 		if($("#hdnMchnLockStatus").val()=='1'){layer.alert(strchangeL("已限制檢驗,需要审批"));return false}
// 		if (((parseFloat($("#txtGreigeWeight").val())) - (parseFloat($("#txtTubeWeight").val())))<0){layer.alert(strchangeL("淨重不能小於0"));return false}
// 		if($("#txtGreigeClass").val()=="A" || $("#txtGreigeClass").val()=="B"){if(((parseFloat($("#txtGreigeWeight").val())) -	(parseFloat($("#txtTubeWeight").val())))<=0){layer.alert(strchangeL("淨重必須大於0"));return false}}
// 		if($("#txtGreigeClass").val()=="C"){if(((parseFloat($("#txtGreigeWeight").val())) -	(parseFloat($("#txtTubeWeight").val())))<0){layer.alert(strchangeL("淨重不能小於0"));return false}}
// 		if($("#txtQualityReason").val()=="" && $("#txtGreigeClass").val()=="C"){layer.alert(strchangeL("胚布级别为C")+"."+ strchangeL("请输入质量原因"));return false}
// 		if($("#txtGreigeClass").val()==""){layer.alert(strchangeL("請輸入胚布級別"));return false}
// 		if($("#txtCuttingGreige").val().toLowerCase()=="y"){if($("#txtTubeWeight").val()=="" || $("#txtTubeWeight").val()=="0"){layer.alert(strchangeL("當胚布為開邊時必須輸入膠管重量。"));return false}}

// 	    var matGrp = $("#hdnMatGrp").val();
// 		//胚布長度转换  1码(yd)=0.9144米(m)
// 		var tempGreigeLength = $("#txtGreigeLength").val();
// 		if(tempGreigeLength!="")tempGreigeLength=getFormatNumber(0.9144*tempGreigeLength);
// 		//剪布長度 转换
// 		var tempCuttedGreigeLength = $("#txtCuttedGreigeLength").val();
// 		var tempcodevalue="B00010,B00020,B00030,B00061,B00062,B00063,B10010";
// 		if(tempcodevalue.indexOf(matGrp)!="-1"){if(tempCuttedGreigeLength!="")tempCuttedGreigeLength=getFormatNumber(0.9144*tempCuttedGreigeLength);}

// 		if($("#txtNetWeight").val()!=""){
// 			if(parseFloat($("#txtNetWeight").val())<=0)
// 			{layer.alert(strchangeL("胚布淨重必須大于0。"));return false;}
// 		}
// 		if($("#txtNetWeight").val()!=""){
// 			if(parseFloat($("#txtNetWeight").val())>250)
// 			{layer.alert(strchangeL("胚布淨重不能大于250kg。"));return false;}
// 		}
// 		//alert(d.toUTCString())
// 		$.ajax({
// 			type:"POST",
// 			url:getAjaxURL('/weftGreigeInspectionConf/validateWeftInspConf'),
// 			async:false,
// 			data:{
// 				rollBatchNo:$("#txtRollBatchNo").val(),
// 				orderNo:$("#txtorderNo").val(),
// 				color:$("#txtColor").val(),
// 				machineNo:$("#txtMachineNo").val(),
// 				tubeWeight:$("#txtTubeWeight").val(),
// 				fabric:$('#txtFabric').val(),
// 				size:$("#txtSize").val(),
// 				cuttingGreige:$("#txtCuttingGreige").val(),
// 				greigeCheckMachine:$("#txtGreigeCheckMachine").val(),
// 				greigeCheckPerson:$("#txtGreigeCheckPerson").val(),
// 				cpiStandard:$("#txtCPIStandard").val(),
// 				cpiLeft:$("#txtCPILeft").val(),
// 				cpiMiddle:$("#txtCPIMiddle").val(),
// 				cpiRight:$("#txtCPIRight").val(),
// 				wpiStandard:$("#txtWPIStandard").val(),
// 				wpiStandardL5:$("#txtWPIStandardL5").val(),
// 				wpiStandardR10:$("#txtWPIStandardR10").val(),
// 				wpiL5:$("#txtWPIL5").val(),
// 				wpiL10:$("#txtWPIL10").val(),
// 				wpiMiddle:$("#txtWPIMiddle").val(),
// 				wpiLeft:"",
// 				wpiRight:"",
// 				wpiR5:$("#txtWPIR5").val(),
// 				wpiR10:$("#txtWPIR10").val(),
// 				standardWidth:$("#txtStandardWidth").val(),
// 				width:$("#txtWidth").val(),
// 				distance:$("#txtDistance").val(),
// 				defectNo:$("#txtDefectNo").val(),
// 				cuttedGreigeLength:$("#txtCuttedGreigeLength").val(),
// 				cuttedGreigeWeight:$("#txtCuttedGreigeWeight").val(),
// 				greigeClass:$("#txtGreigeClass").val(),
// 				qualityReason:$("#txtQualityReason").val(),
// 				greigeLength:$("#txtGreigeLength").val(),
// 				greigeSize:$("#txtGreigeSize").val(),
// 				flatMachineNo:$("#txtFlatMachineNo").val(),
// 				greigeWeight:$("#txtGreigeWeight").val(),
// 				netWeight:$("#txtNetWeight").val(),
// 				plant:$("#hdnPlant").val(),
// 				approver:$("#hdnApprover").val(),
// 				hdnDateTime:$("#hdnDateTime").val(),
// 				greigeRemark:$("#txtGreigeRemark").val(),
// 				approvalFlag:$("#ApprovalFlag").val(),
// 				huaqianFlag:$("#status2").val(),
// 				username:$("#txtUsername").val()
// 			} ,
// 			success:function(data){
// 				//alert(data.xml)
// 				if(data.status !=200) {
// 						layer.alert(data.message);
// 				}else if(data.message!="SUCCESS"){
// 					layer.alert(data.message)
// 				}else if (data.message =="SUCCESS"){
// 					$("#txtGreigeWeight").focus();
// 					successFlag=1;
// 				}
// 			},//----END OF SUCCESS FUNCTION
// 			error:function(xhr,a,b){
// 				layer.alert(strchangeL("连接出错"));
// 			}
// 		});

// 		if (successFlag=="1"){
// 			$.ajax({
// 				type:"POST",
// 				url:getAjaxURL('/weftGreigeInspectionConf/save'),
// 				async:false,
// 				data:{
// 					rollBatchNo:$("#txtRollBatchNo").val(),
// 					orderNo:$("#txtorderNo").val(),
// 					color:$("#txtColor").val(),
// 					machineNo:$("#txtMachineNo").val(),
// 					tubeWeight:$("#txtTubeWeight").val(),
// 					fabric:$('#txtFabric').val(),
// 					size:$("#txtSize").val(),
// 					cuttingGreige:$("#txtCuttingGreige").val(),
// 					greigeCheckMachine:$("#txtGreigeCheckMachine").val(),
// 					greigeCheckPerson:$("#txtGreigeCheckPerson").val(),
// 					cpiStandard:$("#txtCPIStandard").val(),
// 					cpiLeft:$("#txtCPILeft").val(),
// 					cpiMiddle:$("#txtCPIMiddle").val(),
// 					cpiRight:$("#txtCPIRight").val(),
// 					wpiStandard:$("#txtWPIStandard").val(),
// 					wpiStandardL5:$("#txtWPIStandardL5").val(),
// 					wpiStandardR10:$("#txtWPIStandardR10").val(),
// 					wpiL5:$("#txtWPIL5").val(),
// 					wpiL10:$("#txtWPIL10").val(),
// 					wpiMiddle:$("#txtWPIMiddle").val(),
// 					wpiLeft:"",
// 					wpiRight:"",
// 					wpiR5:$("#txtWPIR5").val(),
// 					wpiR10:$("#txtWPIR10").val(),
// 					standardWidth:$("#txtStandardWidth").val(),
// 					width:$("#txtWidth").val(),
// 					distance:$("#txtDistance").val(),
// 					defectNo:$("#txtDefectNo").val(),
// 					cuttedGreigeLength:$("#txtCuttedGreigeLength").val(),
// 					cuttedGreigeWeight:$("#txtCuttedGreigeWeight").val(),
// 					greigeClass:$("#txtGreigeClass").val(),
// 					qualityReason:$("#txtQualityReason").val(),
// 					greigeLength:$("#txtGreigeLength").val(),
// 					greigeSize:$("#txtGreigeSize").val(),
// 					flatMachineNo:$("#txtFlatMachineNo").val(),
// 					greigeWeight:$("#txtGreigeWeight").val(),
// 					netWeight:$("#txtNetWeight").val(),
// 					plant:$("#hdnPlant").val(),
// 					approver:$("#hdnApprover").val(),
// 					hdnDateTime:$("#hdnDateTime").val(),
// 					greigeRemark:$("#txtGreigeRemark").val(),
// 					approvalFlag:$("#ApprovalFlag").val(),
// 					huaqianFlag:$("#status2").val(),
// 					username:$("#txtUsername").val()
// 				} ,
// 				success:function(data){
// 					if(data.status!= 200) {
// 						layer.alert(data.message);
// 					}else{
// 						layer.alert(data.message);
// 					}
// 				}//----END OF SUCCESS FUNCTION
				
// 			});
// 			$.ajax({
// 				type:"POST",
// 				url:getAjaxURL('/weftGreigeInspectionConf/confStatus'),
// 				async:false,
// 				data:{
// 						rollBatchNo:$("#txtRollBatchNo").val()
// 					},
// 				success:function(data) {
// 					if(data.status!= 200) {
// 						layer.alert(data.message);
// 					}else if(data.CONF_STATUS=="1"){
// 						clearAll()
// 						$("#txtRollBatchNo").val("")
// 					}
// 				},
// 				error:function(xhr,a,b)
// 				{
// 					layer.alert(strchangeL("连接出错"));
// 				}
// 			});

// 		}

// };//WIP检查



//胚布質檢報工(胚布批次)接口
//txtRollBatchNo
function t_content(){
	
	//txtOperator赋值给txtGreigeCheckPerson
	$("#txtGreigeCheckPerson").val(($("#txtOperator").val()).toUpperCase());
	$("#txtGreigeCheckMachine").val(($("#txtMachineID").val()).toUpperCase());
	var txtRollBatchNo=document.getElementById('txtRollBatchNo');
	txtRollBatchNo.onkeydown =function(e){
		var event = e ? e:window.event;
		if(event.keyCode == 13){
			var successFlag;
			clearAll();
			$("#hdnRollLockStatus").val("");
			$("#hdnConfirmStatus").val("");
			ApprovalFlag=0;
			$("#txtAuditStatus").attr("checked",false);
			//alert(ApprovalFlag)
			$("#hdnApprover").val("");
			// $("#txtGreigeSize").removeClass("textbox");
			// $("#txtGreigeSize").removeClass("txtFieldDisable");
			// $("#txtGreigeSize").addClass("txtFieldDisable");
			// $('#txtGreigeSize').attr({readonly: true,tabIndex: -1})
			$("#txtGreigeSize").removeClass("textbox");
			$("#txtGreigeSize").removeClass("txtFieldDisable");
			$("#txtGreigeSize").addClass("txtFieldDisable");
			$('#txtGreigeSize').attr({readonly: true,tabIndex: -1});
			
			$("#txtDistance").removeClass("textbox");
			$("#txtDistance").removeClass("txtFieldDisable");
			$("#txtDistance").addClass("txtFieldDisable");
			$('#txtDistance').attr({readonly: true,tabIndex: -1});
			
			$("#txtTubeWeight").removeClass("txtFieldDisable");
			$("#txtTubeWeight").removeClass("textbox");
			$("#txtTubeWeight").addClass("txtFieldDisable");
			$("#txtTubeWeight").val("");
			$('#txtTubeWeight').attr({readonly: true,tabIndex: -1});
			$.ajax({
				type:"post",
				url:getAjaxURL('/weftGreigeInspectionConf/getDataWeftInspectionConf'),
				async:false,
				data:{
					rollBatchNo:$('#txtRollBatchNo').val(),
					greigeCheckMachine:$('#txtGreigeCheckMachine').val(),
					greigeCheckPerson:$('#txtGreigeCheckPerson').val(),
					username:$('#txtUsername').val()
				},
				success:function(data){
					console.log(data);
					// alert(data.status)
					// if(data.status==500){
					// 	layer.alert(strchangeL('檢驗匹號不存在'))
					// }else if(data.status==400){
					// 	layer.alert(data.message)
					// }else{
					if(data.status!=200){
						layer.alert(data.message)
					
					}else{
						successFlag=1;
						console.log(data.data.ORDER_NO);

						//工單號碼
						$('#txtorderNo').val(data.data.ORDER_NO);
						//顏色
						$('#txtColor').val(data.data.COLOR);
						//生產機號
						$('#txtMachineNo').val(data.data.MACHINE_NO);
						//筒管重量(N)
						$('#txtTubeWeight').val(data.data.TUBE_WEIGHT);
						//物料号
						$('#txtFabric').val(data.data.FABRIC_NO);
						//胚布開邊
						$('#txtCuttingGreige').val(data.data.CUTTING_GREIGE);
						//驗布機號
						//$('#txtGreigeCheckMachine').val(data.data.);
						//審批狀態
						//$('#txtAuditStatus').val(data.data.);
						//尺寸
						$('#txtSize').val(data.data.SIZE);
						//驗布員
						//$('#txtGreigeCheckPerson').val(data.data.);
						//CPI標準
						$('#txtCPIStandard').val(data.data.CPI_STD);
						//CPI左(1)
						$('#txtCPILeft').val(data.data.CPI_LEFT);
						//CPI中(2)
						$('#txtCPIMiddle').val(data.data.CPI_MIDDLE);
						//CPI右(3)
						$('#txtCPIRight').val(data.data.CPI_RIGHT);
						//WPI邊5標準
						$('#txtWPIStandardL5').val(data.data.WPI_STD_L5);
						//WPI左5;
						$('#txtWPIL5').val(data.data.WPI_L5);
						//WPI右5
						$('#txtWPIR5').val(data.data.WPI_R5);
						//WPI邊10標準
						$('#txtWPIStandardR10').val(data.data.WPI_STD_L10);
						//WPI左10
						$('#txtWPIL10').val(data.data.WPI_L10);
						//WPI右10
						$('#txtWPIR10').val(data.data.WPI_R10);
						//WPI中標準
						$('#txtWPIStandard').val(data.data.WPI_STD);
						//WPI中
						$('#txtWPIMiddle').val(data.data.WPI_MIDDLE);
					//WPI_Tol
						$('#wpiTol').val(data.data.WPI_TOL);
						// $('#wpiLeft').val(data.data.WPI_LEFT);
						// $('#wpiRight').val(data.data.WPI_RIGHT);

						//封度標準
						$('#txtStandardWidth').val(data.data.WIDTH_STD);
						//封度(F)
						$('#txtWidth').val(data.data.WIDTH);
						//間距(J)
						$('#txtDistance').val(data.data.DISTANCE);
						//駁口個數(A);
						$('#txtDefectNo').val(data.data.DEFECT_NO);
						//剪布長度(B);
						$('#txtCuttedGreigeLength').val(data.data.CUTTED_GREIGE_LENGTH==""?0:data.data.CUTTED_GREIGE_LENGTH);
						//剪布重量(C)
						$('#txtCuttedGreigeWeight').val(data.data.CUTTED_GREIGE_WEIGHT==""?0:data.data.CUTTED_GREIGE_WEIGHT);
						//下拉
						//胚布級別(E)
						$('#txtGreigeClass').val(data.data.GREIGE_CLASS);
						//下拉
						//質量原因(T)
						$("#txtQualityReason").val(data.data.QUALITY_REASON);
						//胚布長度(Y)
						$('#txtGreigeLength').val(data.data.GREIGE_LENGTH);
						//實測尺寸(M)
						$('#txtGreigeSize').val(data.data.GREIGE_SIZE);
						//落胚要求
						$('#txtFlatMachineNo').val(data.data.FLAT_MACHINE_NO);
						//胚布重量(P)
						$('#txtGreigeWeight').val(data.data.GREIGE_WEIGHT);
						//验胚备注(U)
						//$('#txtGreigeRemark').val(data.data.);
						//胚布淨重
						$('#txtNetWeight').val(data.data.NET_WEIGHT);
						//隐藏域
						$("#hdnRollLockStatus").val(data.data.ROLL_LOCK_STATUS);
						$("#hdnLockedBy").val(data.data.LOCKED_BY);
						$("#hdnGreigeChkMachine").val(data.data.GREIGE_CHECK_MCHN);
						$("#hdnGreigeChkPerson").val(data.data.GREIGE_CHECK_PERSON);
						$("#hdnPlant").val(data.data.PLANT);
						$("#hdnConfirmStatus").val(data.data.CONF_STATUS);
						$("#hdnMchnLockStatus").val(data.data.MACHINE_LOCK_STATUS);
						$("#hdnCuttingGreigeStatus").val(data.data.CUTTING_GREIGE_STATUS);

						matGrp=data.data.MAT_GRP;
						$("#hdnMatGrp").val(matGrp);
						v_orderNo=data.data.ORDER_NO;
						console.log(data.data.ORDER_NO);
						// alert(v_orderNo)
						
						//判断hdnConfirmStatus或者hdnRollLockStatus或者hdnMchnLockStatus返回的参数等于1，执行
						if(($("#hdnConfirmStatus").val()=='1')|| ($("#hdnRollLockStatus").val()=='1') || ($("#hdnCuttingGreigeStatus").val()=='0') || ($("#hdnMchnLockStatus").val()=='1')){
							// console.log('readtrue')
							$("#txtCPILeft").removeClass("textbox");
							$("#txtCPILeft").addClass("txtFieldDisable");
							$('#txtCPILeft').attr({readonly: true,tabIndex: -1})
							
							$("#txtCPIMiddle").removeClass("textbox");
							$("#txtCPIMiddle").addClass("txtFieldDisable");
							$('#txtCPIMiddle').attr({readonly: true,tabIndex: -1})
							
							$("#txtCPIRight").removeClass("textbox");
							$("#txtCPIRight").addClass("txtFieldDisable");
							$('#txtCPIRight').attr({readonly: true,tabIndex: -1})

							$("#txtWPIL5").removeClass("textbox");
							$("#txtWPIL5").addClass("txtFieldDisable");
							$('#txtWPIL5').attr({readonly: true,tabIndex: -1})
							
							$("#txtWPIL10").removeClass("textbox");
							$("#txtWPIL10").addClass("txtFieldDisable");
							$('#txtWPIL10').attr({readonly: true,tabIndex: -1})
							
							$("#txtWPIMiddle").removeClass("textbox");
							$("#txtWPIMiddle").addClass("txtFieldDisable");
							$('#txtWPIMiddle').attr({readonly: true,tabIndex:-1})
							$("#txtWPIR5").removeClass("textbox");
							$("#txtWPIR5").addClass("txtFieldDisable");
							$('#txtWPIR5').attr({readonly: true,tabIndex: -1})
							$("#txtWPIR10").removeClass("textbox");
							$("#txtWPIR10").addClass("txtFieldDisable");
							$('#txtWPIR10').attr({readonly: true,tabIndex: -1})

							$("#txtWidth").removeClass("textbox");
							$("#txtWidth").addClass("txtFieldDisable");
							$('#txtWidth').attr({readonly: true,tabIndex: -1})
							
							$("#txtDistance").removeClass("textbox");
							$("#txtDistance").addClass("txtFieldDisable");
							$('#txtDistance').attr({readonly: true,tabIndex: -1})
							
							$("#txtDefectNo").removeClass("textbox");
							$("#txtDefectNo").addClass("txtFieldDisable");
							$('#txtDefectNo').attr({readonly: true,tabIndex: -1})
							
							$("#txtCuttedGreigeLength").removeClass("textbox");
							$("#txtCuttedGreigeLength").addClass("txtFieldDisable");
							$('#txtCuttedGreigeLength').attr({readonly: true,tabIndex: -1})
							
							$("#txtCuttedGreigeWeight").removeClass("textbox");
							$("#txtCuttedGreigeWeight").addClass("txtFieldDisable");
							$('#txtCuttedGreigeWeight').attr({readonly: true,tabIndex: -1})
							
							$("#txtGreigeClass").removeClass("textbox");
							$("#txtGreigeClass").addClass("txtFieldDisable");
							$('#txtGreigeClass').attr({readonly: true,tabIndex: -1})
							
							$("#txtQualityReason").removeClass("textbox");
							$("#txtQualityReason").addClass("txtFieldDisable");
							$('#txtQualityReason').attr({readonly: true,tabIndex: -1})
							
							$("#txtGreigeLength").removeClass("textbox");
							$("#txtGreigeLength").addClass("txtFieldDisable");
							$('#txtGreigeLength').attr({readonly: true,tabIndex: -1})
							
							$("#txtGreigeSize").removeClass("textbox");
							$("#txtGreigeSize").addClass("txtFieldDisable");
							$('#txtGreigeSize').attr({readonly: true,tabIndex: -1})
							
							$("#txtFlatMachineNo").removeClass("textbox");
							$("#txtFlatMachineNo").addClass("txtFieldDisable");
							$('#txtFlatMachineNo').attr({readonly: true,tabIndex: -1})
							
							$("#txtGreigeWeight").removeClass("textbox");
							$("#txtGreigeWeight").addClass("txtFieldDisable");
							$('#txtGreigeWeight').attr({readonly: true,tabIndex: -1})
							
							$("#txtTubeWeight").removeClass("textbox");
							$("#txtTubeWeight").removeClass("txtFieldDisable");
							$("#txtTubeWeight").addClass("txtFieldDisable");
							$('#txtTubeWeight').attr({readonly: true,tabIndex: -1})
							
							$("#txtGreigeCheckMachine").val($("#hdnGreigeChkMachine").val());
							$("#txtGreigeCheckPerson").val($("#hdnGreigeChkPerson").val());
						}
						
						//判断hdnConfirmStatus返回的参数不等于1，执行
						if($("#hdnConfirmStatus").val()=="1"){layer.alert(strchangeL("該匹號已經完成驗布"));return;};

						if(($("#hdnConfirmStatus").val()!='1')){
								
							if($("#hdnRollLockStatus").val()=='1'){layer.alert( strchangeL("匹號被用戶鎖定")+" : "+$("#hdnLockedBy").val());return false;}
							if($("#hdnCuttingGreigeStatus").val()=='0'){layer.alert(strchangeL("胚布开边值与验布機臺機上開幅不相同"));return false}
							if($("#hdnMchnLockStatus").val()=='1'){layer.alert(strchangeL("已限制檢驗,需要审批"));return false}
							// console.log('readfalse')	
							$("#txtCPILeft").removeClass("txtFieldDisable");
							$("#txtCPILeft").addClass("textbox");
							$('#txtCPILeft').attr({readonly: false,tabIndex: 0})
							
							$("#txtCPIMiddle").removeClass("txtFieldDisable");
							$("#txtCPIMiddle").addClass("textbox");
							$('#txtCPIMiddle').attr({readonly: false,tabIndex: 0})
							
							$("#txtCPIRight").removeClass("txtFieldDisable");
							$("#txtCPIRight").addClass("textbox");
							$('#txtCPIRight').attr({readonly: false,tabIndex: 0})

							$("#txtWPIL5").removeClass("txtFieldDisable");
							$("#txtWPIL5").addClass("textbox");
							$('#txtWPIL5').attr({readonly: false,tabIndex: 0})
							
							$("#txtWPIL10").removeClass("txtFieldDisable");
							$("#txtWPIL10").addClass("textbox");
							$('#txtWPIL10').attr({readonly: false,tabIndex: 0})
							
							$("#txtWPIMiddle").removeClass("txtFieldDisable");
							$("#txtWPIMiddle").addClass("textbox");
							$('#txtWPIMiddle').attr({readonly: false,tabIndex: 0})
							
							$("#txtWPIR5").removeClass("txtFieldDisable");
							$("#txtWPIR5").addClass("textbox");
							$('#txtWPIR5').attr({readonly: false,tabIndex: 0})
							
							$("#txtWPIR10").removeClass("txtFieldDisable");
							$("#txtWPIR10").addClass("textbox");
							$('#txtWPIR10').attr({readonly: false,tabIndex: 0})
							

							$("#txtWidth").removeClass("txtFieldDisable");
							$("#txtWidth").addClass("textbox");
							$('#txtWidth').attr({readonly: false,tabIndex: 0})

							$("#txtDefectNo").removeClass("txtFieldDisable");
							$("#txtDefectNo").addClass("textbox");
							$('#txtDefectNo').attr({readonly: false,tabIndex: 0})
							
							$("#txtCuttedGreigeLength").removeClass("txtFieldDisable");
							$("#txtCuttedGreigeLength").addClass("textbox");
							$('#txtCuttedGreigeLength').attr({readonly: false,tabIndex: 0})
							
							$("#txtCuttedGreigeWeight").removeClass("txtFieldDisable");
							$("#txtCuttedGreigeWeight").addClass("textbox");
							$('#txtCuttedGreigeWeight').attr({readonly: false,tabIndex: 0})
							
							$("#txtGreigeClass").removeClass("txtFieldDisable");
							$("#txtGreigeClass").addClass("textbox");
							$('#txtGreigeClass').attr({readonly: false,tabIndex: 0})
							
							$("#txtQualityReason").removeClass("txtFieldDisable");
							$("#txtQualityReason").addClass("textbox");
							$('#txtQualityReason').attr({readonly: false,tabIndex: 0})
							
							$("#txtGreigeLength").removeClass("txtFieldDisable");
							$("#txtGreigeLength").addClass("textbox");
							$('#txtGreigeLength').attr({readonly: false,tabIndex: 0})
							
							$("#txtGreigeWeight").removeClass("txtFieldDisable");
							$("#txtGreigeWeight").addClass("textbox");
							$('#txtGreigeWeight').attr({readonly: false,tabIndex: 0})
							
							$("#txtGreigeClass").val("");
							$("#txtNetWeight").val("0");
						}	
					
						//根据后台返回的data参数STUS2来判断
						if(data.data.STUS2 == "0" || data.data.STUS2 == "") {
							$("#txtWPIL5").removeClass("textbox");
							$("#txtWPIL5").addClass("txtFieldDisable");
							$('#txtWPIL5').attr({readonly: true,tabIndex: -1})
							
							$("#txtWPIL10").removeClass("textbox");
							$("#txtWPIL10").addClass("txtFieldDisable");
							$('#txtWPIL10').attr({readonly: true,tabIndex: -1})
							
							$("#txtWPIR5").removeClass("textbox");
							$("#txtWPIR5").addClass("txtFieldDisable");
							$('#txtWPIR5').attr({readonly: true,tabIndex: -1})
							
							$("#txtWPIR10").removeClass("textbox");
							$("#txtWPIR10").addClass("txtFieldDisable");
							$('#txtWPIR10').attr({readonly: true,tabIndex: -1})
						}
						
						// matGrp=data.data.MAT_GRP;
						// $("#hdnMatGrp").val(matGrp);
						// v_orderNo=data.data.ORDER_NO;
						// console.log(data.data.ORDER_NO);
						// alert(v_orderNo)
						
					}
					
				} // success end
			});//getDataWeftInspectionConf接口结束
			
			//判断胚布開邊的值是否等"Y"
			if($("#txtCuttingGreige").val()=="Y"){
				if($("#hdnConfirmStatus").val()=='1'){$("#txtTubeWeight").removeClass("txtFieldDisable");$("#txtTubeWeight").removeClass("textbox");$("#txtTubeWeight").addClass("txtFieldDisable");$('#txtTubeWeight').attr({readonly: false,tabIndex:0})}
				else if($("#hdnRollLockStatus").val()=='1'){$("#txtTubeWeight").removeClass("txtFieldDisable");$("#txtTubeWeight").removeClass("textbox");$("#txtTubeWeight").addClass("txtFieldDisable");$("#txtTubeWeight").val("");$('#txtTubeWeight').attr({readonly: false,tabIndex:0})}
				else if (($("#hdnCuttingGreigeStatus").val()=='0')){$("#txtTubeWeight").removeClass("txtFieldDisable");$("#txtTubeWeight").removeClass("textbox");$("#txtTubeWeight").addClass("txtFieldDisable");$("#txtTubeWeight").val("");$('#txtTubeWeight').attr({readonly: false,tabIndex:0})}
				else if (($("#hdnMchnLockStatus").val()=='1')){$("#txtTubeWeight").removeClass("txtFieldDisable");$("#txtTubeWeight").removeClass("textbox");$("#txtTubeWeight").addClass("txtFieldDisable");$("#txtTubeWeight").val("");$('#txtTubeWeight').attr({readonly: false,tabIndex:0})}
				else {$("#txtTubeWeight").removeClass("txtFieldDisable");$("#txtTubeWeight").removeClass("textbox");$("#txtTubeWeight").addClass("textbox");$("#txtTubeWeight").val("");$('#txtTubeWeight').attr({readonly: false,tabIndex:0});}
			}
			
			var FirstCharFabric=($("#txtFabric").val()).charAt(0);
			//add by pan ,get softcode20140912
			var CODEVALUE1="";
			if (successFlag!="1"){
				return false
			}
			$.ajax({
				type:"POST",
				data:{
					code1:"MII",
					code2:"WeftGreigeInspectionConfirpt",
					code3:"matGrp",
					code4:"1"
				},
				url:getAjaxURL('/weftGreigeInspectionConf/softCode'),
				async:false,
				success:function(data){
					console.log(data)
					if(data.status != 200) {
						// console.log(data.status)
						layer.alert(data.message); 
					}else{
						CODEVALUE1 = data.data;
					}
					
				},

			});
				
			//04-OCT-2015 changed by Aaron Long for NEW CR: Material NO. starts with 'X'
			/* As per Li-rong
			在MII質檢報工程序中將X開頭的物料單作為單獨的一個分支加邏輯加以判斷。 

			在對這一類胚布進行質報工時需要將CPI左/CPI中/CPI右、WPI左/WPI中/WPI右、封度 7個字段放出來。 

			由于將物料號第二位由T改為X，區分不到是否含拉架。故當CPI左/CPI中/CPI右、WPI左/WPI中/WPI右有值時才和檢驗標準判斷，如果無值不判斷。 
			*/
			//04-OCT-2015 changed by Aaron Long for NEW CR: Material NO. starts with 'X'

			var achar=$("#txtFabric").val();
			if(achar!=""){
				achar=achar.substr(7,1);
			}
			if(achar.toLowerCase()=="e" || achar.toLowerCase()=="m"){
				$("#txtDistance").removeClass("txtFieldDisable");
				$('#txtDistance').attr({readonly:false,tabIndex:-1});
			}
			var PG0037Value="";
			
			$.ajax({
				type:"POST",
				
				url:getAjaxURL('/weftGreigeInspectionConf/charValue'),
				data:{
					charName:'PG0037',
					orderNo:v_orderNo
				},
				async:false,
				success:function(data){
					console.log(data)
					if(data.status !=200){
						layer.alert(data.message);
					}else{
						PG0037Value = data.data;
						// PG0037Value = data.data.CHARACTERISTIC_VALUE;
					}
				},
				
			});
				
			//FirstCharFabric值是否等于X
			console.log('FirstCharFabric:'+FirstCharFabric)
			if((FirstCharFabric!="X")){
				// console.log('CODEVALUE1:'+CODEVALUE1);
				// console.log('matGrp:'+matGrp);
				if(CODEVALUE1.indexOf(matGrp)!="-1"){
					// console.log('PG0037Value:'+PG0037Value)
					if(PG0037Value!="1"){
						// console.log('readtrue')	
						$('#txtCPILeft').attr({readonly: true,tabIndex:-1});
						$('#txtCPIMiddle').attr({readonly: true,tabIndex:-1})
						$('#txtCPIRight').attr({readonly: true,tabIndex:-1});
						$('#txtWPIL5').attr({readonly: true,tabIndex:-1});
						$('#txtWPIMiddle').attr({readonly: true,tabIndex:-1});
						$('#txtWPIR5').attr({readonly: true,tabIndex:-1});
						$('#txtWPIL10').attr({readonly: true,tabIndex:-1});
						$('#txtWPIR10').attr({readonly: true,tabIndex:-1});

						$("#txtCPILeft").removeClass("textbox");
						$("#txtCPILeft").removeClass("txtFieldDisable");
						$("#txtCPILeft").addClass("txtFieldDisable");
						$("#txtCPIMiddle").removeClass("textbox");
						$("#txtCPIMiddle").removeClass("txtFieldDisable");
						$("#txtCPIMiddle").addClass("txtFieldDisable");
						$("#txtCPIRight").removeClass("textbox");
						$("#txtCPIRight").removeClass("txtFieldDisable");
						$("#txtCPIRight").addClass("txtFieldDisable");
						$("#txtWPIL5").removeClass("textbox");
						$("#txtWPIL5").removeClass("txtFieldDisable");
						$("#txtWPIL5").addClass("txtFieldDisable");
						$("#txtWPIL10").removeClass("textbox");
						$("#txtWPIL10").removeClass("txtFieldDisable");
						$("#txtWPIL10").addClass("txtFieldDisable");
						$("#txtWPIMiddle").removeClass("textbox");
						$("#txtWPIMiddle").removeClass("txtFieldDisable");
						$("#txtWPIMiddle").addClass("txtFieldDisable");
						$("#txtWPIR5").removeClass("textbox");
						$("#txtWPIR5").removeClass("txtFieldDisable");
						$("#txtWPIR5").addClass("txtFieldDisable");
						$("#txtWPIR10").removeClass("textbox");
						$("#txtWPIR10").removeClass("txtFieldDisable");
						$("#txtWPIR10").addClass("txtFieldDisable");
					}
				}

				CODEVALUE1="";
				$.ajax({
					type:"POST",
					data:{
						code1:"MII",
						code2:"WeftGreigeInspectionConfirpt",
						code3:"matGrp",
						code4:"2"
					},
					url:getAjaxURL('/weftGreigeInspectionConf/softCode'),
					async: false,
					success:function(data){
						console.log(data)
						if(data.status != 200) {
							// console.log(data.status)
							layer.alert(data.message); 
						}else{
							CODEVALUE1 = data.data;
						}
						
					},
				});

				// console.log('--------------')
				// console.log('CODEVALUE1:'+CODEVALUE1);
				// console.log('matGrp:'+matGrp);
				if(CODEVALUE1.indexOf(matGrp)!="-1"){
					// console.log('readtrue')	
					$('#txtCPILeft').attr({readonly:true,tabIndex:-1});
					$('#txtCPIMiddle').attr({readonly:true,tabIndex:-1});
					$('#txtCPIRight').attr({readonly:true,tabIndex:-1});
					
					$('#txtWPIL5').attr({readonly:true,tabIndex:-1});
					$('#txtWPIMiddle').attr({readonly:true,tabIndex:-1});
					$('#txtWPIR5').attr({readonly:true,tabIndex:-1});
					
					$('#txtWPIL10').attr({readonly:true,tabIndex:-1});
					$('#txtWPIR10').attr({readonly:true,tabIndex:-1});
					
					$('#txtWidth').attr({readonly:true,tabIndex:-1});
					$('#txtGreigeLength').attr({readonly:true,tabIndex:-1});

					$("#txtCPILeft").removeClass("textbox");
					$("#txtCPILeft").removeClass("txtFieldDisable");
					$("#txtCPILeft").addClass("txtFieldDisable");
					
					$("#txtCPIMiddle").removeClass("textbox");
					$("#txtCPIMiddle").removeClass("txtFieldDisable");
					$("#txtCPIMiddle").addClass("txtFieldDisable");
					
					$("#txtCPIRight").removeClass("textbox");
					$("#txtCPIRight").removeClass("txtFieldDisable");
					$("#txtCPIRight").addClass("txtFieldDisable");
					
					$("#txtWPIL5").removeClass("textbox");
					$("#txtWPIL5").removeClass("txtFieldDisable");
					$("#txtWPIL5").addClass("txtFieldDisable");
					
					$("#txtWPIL10").removeClass("textbox");
					$("#txtWPIL10").removeClass("txtFieldDisable");
					$("#txtWPIL10").addClass("txtFieldDisable");
					
					$("#txtWPIMiddle").removeClass("textbox");
					$("#txtWPIMiddle").removeClass("txtFieldDisable");
					$("#txtWPIMiddle").addClass("txtFieldDisable");
					
					$("#txtWPIR5").removeClass("textbox");
					$("#txtWPIR5").removeClass("txtFieldDisable");
					$("#txtWPIR5").addClass("txtFieldDisable");
					
					$("#txtWPIR10").removeClass("textbox");
					$("#txtWPIR10").removeClass("txtFieldDisable");
					$("#txtWPIR10").addClass("txtFieldDisable");
					
					$("#txtWidth").removeClass("textbox");
					$("#txtWidth").removeClass("txtFieldDisable");
					$("#txtWidth").addClass("txtFieldDisable");
					
					$("#txtGreigeLength").removeClass("textbox");
					$("#txtGreigeLength").removeClass("txtFieldDisable");
					$("#txtGreigeLength").addClass("txtFieldDisable");
					
					if($("#hdnConfirmStatus").val()!='1'){
						$("#txtGreigeSize").removeClass("txtFieldDisable");
						$("#txtGreigeSize").removeClass("textbox");
						$("#txtGreigeSize").addClass("textbox");
						$('#txtGreigeSize').attr({readonly: false,tabIndex:0});
					}
				}
				
				CODEVALUE1="";
				$.ajax({
					type:"POST",
					data:{
						code1:"MII",
						code2:"WeftGreigeInspectionConfirpt",
						code3:"matGrp",
						code4:"3"
					},
					url:getAjaxURL('/weftGreigeInspectionConf/softCode'),
					async: false,
					success:function(data){
						console.log(data)
						if(data.status != 200) {
							// console.log(data.status)
							layer.alert(data.message); 
						}else{
							CODEVALUE1 = data.data;
						}
						
					},
				});
				if(CODEVALUE1.indexOf(matGrp)!="-1"){
					$("#txtDistance").removeClass("txtFieldDisable");
					$("#txtDistance").removeClass("textbox");
					$("#txtDistance").addClass("textbox");
					$('#txtDistance').attr({readonly:false,tabIndex:0})
				}
			} //END if(  (FirstCharFabric!="X"))
				
				
			
		}//event.keyCode == 13结束
	}//txtRollBatchNo.onkeydown结束
	
}//t_content()方法结束


//判断当输入框值达到一定数值时自动切换999.99
$("#txtTubeWeight").keyup(function(e) {
		NetWtCalculation()
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
			this.value = getFormatNumber(this.value);
		}
	});
	$("#txtGreigeWeight").keyup(function(e) {
		NetWtCalculation()
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
		this.value = getFormatNumber(this.value);
		}
	});
	$("#txtCuttedGreigeLength").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
			this.value=getFormatNumber(this.value);
		}  else if(this.value > 999.99){//add at 20160728
			this.value=999.99;
		}
	});
	$("#txtCuttedGreigeWeight").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
			this.value=getFormatNumber(this.value);
		}  else if(this.value > 999.99){//add at 20160728
			this.value=999.99;
		}
	});
	$("#txtGreigeLength").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
		this.value = getFormatNumber(this.value);
		}  else if(this.value > 999.99){//add at 20160728
			this.value=999.99;
		}
	});

	//Added by Aaron 2015/04/11. The standard SAP BAPI gives no error in case input is incorrect.
	$("#txtCPILeft").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
		this.value=getFormatNumber(this.value);
		}  else if(this.value > 999.99){//add at 20160728
			this.value=999.99;
		}
	});

	$("#txtCPIMiddle").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
		this.value = getFormatNumber(this.value);
		}  else if(this.value > 999.99){//add at 20160728
			this.value=999.99;
		}
	});

	$("#txtCPIRight").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
		this.value = getFormatNumber(this.value);
		}  else if(this.value > 999.99){//add at 20160728
			this.value=999.99;
		}
	});

	$("#txtWPIR10").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
		this.value = getFormatNumber(this.value);
		}  else if(this.value > 999.99){//add at 20160728
			this.value=999.99;
		}
	});

	$("#txtWPIL10").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
		this.value = getFormatNumber(this.value);
		}  else if(this.value > 999.99){//add at 20160728
			this.value=999.99;
		}
	});

	$("#txtWPIL5").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
		this.value = getFormatNumber(this.value);
		}  else if(this.value > 999.99){//add at 20160728
			this.value=999.99;
		}
	});

	$("#txtWPIMiddle").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
		this.value = getFormatNumber(this.value);
		}  else if(this.value > 999.99){//add at 20160728
			this.value=999.99;
		}
	});

	$("#txtWPIR5").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
			this.value = getFormatNumber(this.value);
		} else if(this.value > 999.99){//add at 20160728
			this.value=999.99;
		}
	});

	$("#txtWidth").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 1)) {
			//this.value = parseFloat(this.value).toFixed(1);
			this.value = getFormatNumber2(this.value);
		} else if(this.value > 999.9){//add at 20160728
			this.value=999.9;
		}
	});

	$("#txtDistance").keyup(function(e) {
		if (isNaN(this.value)) {
			this.value = "";
		} else if (isTriDecimal(this.value, 2)) {
			//this.value = parseFloat(this.value).toFixed(2);
		this.value = getFormatNumber(this.value);
		} else if(this.value > 999.99){//add at 20160728
			this.value=999.99;
		}
	});

function isTriDecimal(value, len) {
	if (value != null && value != '') {
		var decimalIndex = value.indexOf('.');
		if (decimalIndex == '-1') {
			return false;
		} else {
			var decimalPart = value.substring(decimalIndex + 1, value.length);
			if (decimalPart.length > len) {
				return true;
			} else {
				return false;
			}
		}
	}
	return false;
}



//筒管重量(N)事件
	$(function(){
		$("#txtTubeWeight").keyup(function(e){
			if (e.keyCode === 13) {
				chkTubeWeight()
			}
		})
	})
	$("#txtTubeWeight").blur(function(e){
		chkTubeWeight()
	})

//Function to check TUBE WEIGHT
	function chkTubeWeight(){
		if($("#txtTubeWeight").hasClass("txtFieldDisable")){return false;}
		$.ajax({
			type:"POST",
			url:getAjaxURL('/weftGreigeInspectionConf/tubeWeightAllowedRanges'),
			async:false,
			data:{
				greigeCheckPerson:$("#txtGreigeCheckPerson").val()
			},
			success:function(data) {
				console.log(data)
				if(data.status != 200) {
					layer.alert(data.message);
				}else  {
					var tubeWt;
					if($("#txtTubeWeight").val()=="")tubeWt=0
					else tubeWt=$("#txtTubeWeight").val()
						console.log('--------------')
						console.log(parseFloat(data.data.allowedRangeMin));
						console.log(tubeWt);
						console.log(parseFloat(data.data.allowedRangeMax));
					if((parseFloat(data.data.allowedRangeMin)>tubeWt) || (parseFloat(data.data.allowedRangeMax)<tubeWt)){layer.alert(strchangeL("胶管重量超过范围,无法保存"))}
				}
			},
			error:function(xhr,a,b)
			{
				layer.alert(strchangeL("连接出错"));
			}
		});
	}
	
	function orderNOClick(){//onblur
		var e = jQuery.Event("keyup");//模拟一个键盘事件
		e.keyCode = 13;//keyCode=13是回车
		$("#txtRollBatchNo").trigger(e);//模拟页码框按下回车 		    
	}
	
	$("#txtRollBatchNo").blur(function(){
		if($("#txtRollBatchNo").val()!=""){
			orderNOClick();
		}
	});
	
	

// Fucntion to calculate NET WEIGHT
function NetWtCalculation(){
	//checkReal("txtGreigeWeight","txtGreigeWeight")
	var TubeWt=parseFloat($("#txtTubeWeight").val())*1000000000000;
	var GreigeWt=parseFloat($("#txtGreigeWeight").val())*1000000000000;
	if($("#txtTubeWeight").val()==""){TubeWt=parseInt(0)}
	if($("#txtGreigeWeight").val()==""){GreigeWt=parseInt(0)}

	//$("#txtNetWeight").val( ((parseFloat(GreigeWt)) - (parseFloat(TubeWt))).toFixed(2))
	$("#txtNetWeight").val((GreigeWt - TubeWt)/1000000000000);
	$("#txtNetWeight").val(getFormatNumber23($("#txtNetWeight").val()));
	return 1;
}

//改变胚布批次值清空所有值

function clearAll(){
	$("#txtTubeWeight").val("");
	$("#txtorderNo").val("");
	$("#txtFabric").val("");
	$("#txtSize").val("");
	$("#txtColor").val("");	
	$("#txtCuttingGreige").val("");
	$("#txtMachineNo").val("");
	$("#txtGreigeCheckPerson").val(($("#txtOperator").val()).toUpperCase());
	$("#txtGreigeCheckMachine").val(($("#txtMachineID").val()).toUpperCase());
	$("#txtCPIStandard").val("");
	$("#txtCPILeft").val("");
	$("#txtCPIMiddle").val("");
	$("#txtCPIRight").val("");
	$("#txtWPIStandard").val("");
	$("#txtWPIStandardL5").val("");
	$("#txtWPIStandardR10").val("");
	$("#txtWPIL5").val("");
	$("#txtWPIL10").val("");
	$("#txtWPIMiddle").val("");
	$("#txtWPIR5").val("");
	$("#txtWPIR10").val("");
	$("#txtStandardWidth").val("");
	$("#txtWidth").val("");
	$("#txtDistance").val("");
	$("#txtDefectNo").val("");
	$("#txtCuttedGreigeLength").val("");
	$("#txtCuttedGreigeWeight").val("");
	$("#txtGreigeClass").val("A");
	$("#txtQualityReason").val("");
	$("#txtGreigeLength").val("");
	$("#txtGreigeSize").val("");
	$("#txtFlatMachineNo").val("");
	$("#txtGreigeWeight").val("");
	$("#txtNetWeight").val("0");
	$("#txtGreigeRemark").val("");
};
