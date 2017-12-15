var url = "http://192.168.10.1:7013/gcgk-web/mobileAction.do";
var userId = localStorage.getItem("userId")
var userName = localStorage.getItem("userName")
var loginName = localStorage.getItem("loginName");
var data = {
    data001: {
        "request": '{"data":{"id":"345446","local_updatetime":"2015-11-23"},"head":{"userId":"' + userId + '","bic":"001"}}',
        "method": "entry"
    },
    data002: {
        'request': '{"data":{},"head":{"userId":"' + userId + '","bic":"002","roleName":""}}',
        'method': 'entry'
    },
    data003: {
        'request': '{"data":{"start":"15","id":"10001"},"head":{"userId":"' + userId + '","bic":"003","roleName":""}}',
        'method': 'entry'
    },
    data004: {
        'request': '{"data":{"risk_level":"3","start":"15","datetype":"2","status":"0","district_id":"0","projectid":"0"},"head":{"userId":"' + userId + '","bic":"004","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
    data005: {
        'request': '{"data":{"riskId":"13444","time":"2015-11-28","desc":"这是一张图片！","address":"南京","posy":"15","posx":"31","fileName":"完.jpg"},"head":{"userId":"' + userId + '","bic":"005"},"bytes":{}}',
        'method': 'entry'
    },
    data006: {
        'request': '{"data":{"id":"10147","real_start_date":"2015-11-25"},"head":{"userId":"' + userId + '","bic":"006"}}',
        'method': 'entry'
    },
    data007: {
        'request': '{"data":{"id":"10153","real_end_date":"2015-11-25"},"head":{"userId":"' + userId + '","bic":"007"}}',
        'method': 'entry'
    },
    data008: {
        'request': '{"data":{"start":"15","datetype":"2","status":"0","district_id":"0","projectid":"0"},"head":{"userId":"' + userId + '","bic":"008","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
    data009: {
        'request': '{"data":{"prob_id":"10389","pro_id":"10409","prob_type":"2","found_date":"2015-11-27","prob_name":"问题一","prob_desc":"sdfds","is_report":"1","status":"0"},"head":{"userId":"' + userId + '","bic":"009","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
    data010: {
        'request': '{"data":{"prob_id":"10389","status":"2","end_date":"2015-11-28","is_report":"1","prob_name":"问题一","pro_name":"","pro_id":"10409"},"head":{"userId":"' + userId + '","bic":"010","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
    data011: {
        'request': '{"data":{"prob_id":"10202"},"head":{"userId":"' + userId + '","bic":"011"}}',
        'method': 'entry'
    },
    data012: {
        'request': '{"data":{"probId":"13444","time":"2015-11-28","desc":"这是一张图片！","address":"南京","posy":"15","posx":"31","fileName":"完.jpg","is_edit":""},"head":{"userId":"' + userId + '","bic":"012"}}',
        'method': 'entry'
    },

    data015: {
        'request': '{"data":{"id":"10148"},"head":{"userId":"' + userId + '","bic":"015"}}',
        'method': 'entry'
    },
    data016: {
        'request': '{"data":{"id":"10110"},"head":{"userId":"' + userId + '","bic":"016"}}',
        'method': 'entry'
    },
    data017: {
        'request': '{"data":{"id":"347433"},"head":{"userId":"' + userId + '","bic":"017"}}',
        'method': 'entry'
    },

    data022: {
        'request': '{"data":{"riskid":"10110","type":""},"head":{"userId":"' + userId + '","bic":"022"}}',
        'method': 'entry'
    },
    data023: {
        'request': '{"data":{"riskid":"","operation":"","userid":""},"head":{"userId":"' + userId + '","bic":"023"}}',
        'method': 'entry'
    },
    data024: {
        'request': '{"data":{"riskid":"10110","risk_level":"3"},"head":{"userId":"' + userId + '","bic":"024","roleName":""}}',
        'method': 'entry'
    },
    data025: {
        'request': '{"data":{"id":"23465"},"head":{"userId":"' + userId + '","bic":"025"}}',
        'method': 'entry'
    },
    data026: {
        'request': '{"data":{"id":"3456","areaid":"2346"},"head":{"userId":"' + userId + '","bic":"026"}}',
        'method': 'entry'
    },
    data027: {
        'request': '{"data":{"ID":"2344","LONGITUDE":"经度","LATITUDE":"纬度"},"head":{"userId":"' + userId + '","bic":"027"}}',
        'method': 'entry'
    },
    data028: {
        'request': '{"data":{"version":"3"},"head":{"userId":"' + userId + '","bic":"028"}}',
        'method': 'entry'
    },
    data029: {
        'request': '{"data":{},"head":{"userId":"' + userId + '","bic":"029","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
    data030: {
        'request': '{"data":{},"head":{"userId":"' + userId + '","bic":"030","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
    data031: {
        'request': '{"data":{},"head":{"userId":"' + userId + '","bic":"031"}}',
        'method': 'entry'
    },
    data032: {
        'request': '{"data":{},"head":{"userId":"' + userId + '","bic":"032","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
    data265: {
        "request": '{"data":{"nodeId":"-1","rootId":"-1"},"head":{"pic":"no","userId":"' + userId + '","bic":"265"}}',
        "method": "entry"
    },
    //设备信息-begin
   data701: {
       'request': '{"data":{"start":"0","areaName":"杭州","cjmc":"1","wzmc":"1","roleCode":"orgCode&roleCode","userId":"'+userId+'"},"head":{"userId":"' + userId + '","bic":"701","roleName":"ORGCODE/ROLECODE"}}',
       'method': 'entry'
  },
  data702: {
        'request': '{"data":{},"head":{"userId":"' + userId + '","bic":"702","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
    data703: {
       'request': '{"data":{"start":"0","id":"","cjmc":"","address":"","roleCode":"orgCode&roleCode","userId":"'+userId+'","bic":"703"},"head":{"userId":"' + userId + '","bic":"703","roleName":"ORGCODE/ROLECODE"}}',
       'method': 'entry'
  },
   data704: {
        'request': '{"data":{"id":"347433","userId":"'+userId+'"},"head":{"userId":"' + userId + '","bic":"704","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
    data705: {
        'request': '{"data":{"id":"347433","userId":"'+userId+'"},"head":{"userId":"' + userId + '","bic":"705","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
    data707: {
        'request': '{"data":{"id":"347433","lat":"","lon":"","userId":"'+userId+'"},"head":{"userId":"' + userId + '","bic":"707","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
  data708: {
        'request': '{"data":{"id":"347433"},"head":{"userId":"' + userId + '","bic":"708","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'      
  },
    data710: {
       'request': '{"data":{"start":"15","id":"","bic":"710"},"head":{"userId":"' + userId + '","bic":"710","roleName":"ORGCODE/ROLECODE"}}',
       'method': 'entry'
  },
    //	监造日志
	data1001: {
		'request': '{"data":{"bic":"1001","loginName":"' + loginName + '","userName":"'+userName+'","userId":"'+userId+'","type":""},"head":{"userId":"' + userId + '","bic":"1001","roleName":"ORGCODE/ROLECODE"}}',
		'method': 'entry'
	},
	data801: {
        'request': '{"data":{"wzmc":""},"head":{"userId":"' + userId + '","bic":"801","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
	data802: {
        'request': '{"data":{"wzmc":""},"head":{"userId":"' + userId + '","bic":"802","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
	data803: {
        'request': '{"data":{"wzmc":""},"head":{"userId":"' + userId + '","bic":"803","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
	data804: {
        'request': '{"data":{"wzmc":""},"head":{"userId":"' + userId + '","bic":"804","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
	data805: {
        'request': '{"data":{"wzmc":""},"head":{"userId":"' + userId + '","bic":"805","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    },
	data806: {
        'request': '{"data":{"wzmc":""},"head":{"userId":"' + userId + '","bic":"806","roleName":"ORGCODE/ROLECODE"}}',
        'method': 'entry'
    }
};

function getJSON(url, data, callback) {
    if (url == "") {
        $.ajax({
            url: url,
            data: data,
            type: 'get',
            dataType: 'jsonp',
            timeout: 30000,
            success: callback,
            error: function (e) {
                qikoo.dialog.alert('连接超时');
            }
        });
    } else {
        var imgSrc = '../img/loading.gif';
        // alert("imgSrc"+imgSrc);
        $("body").append('<div class="loading" id="loadingGif" style="display:block"><img src="' + imgSrc + '"></div>');
        $("body").append('<div class="loadingMoveDiv" id="loadingGifDiv" style="top: 0;"></div>');

        var setTime = setTimeout(function () {
            $("#loadingGif").css("display", "none");
            $("#loadingGif").remove();

            $("#loadingGifDiv").css("display", "none");
            $("#loadingGifDiv").remove();
        }, 30000);
        // alert(data.request);
         //alert( mam.navigator.ajax.post);
        mam.navigator.ajax.post('GCGKJL', {
            "method": "entry",
            "request": encodeURIComponent(data.request)
        }, "JL", function (v) {
            $("#loadingGif").css("display", "none");
            $("#loadingGif").remove();
            $("#loadingGifDiv").css("display", "none");
            $("#loadingGifDiv").remove();
            clearTimeout(setTime);
            var jsonObj;
            //alert("bsisss:"+v);

            if (typeof v === 'string') {
                jsonObj = eval('(' + v + ')');
            } else {
                jsonObj = eval(v);
            }         
            callback(jsonObj);

        });
    }
}