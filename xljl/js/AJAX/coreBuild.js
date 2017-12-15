var url = "http://192.168.10.1:7011/gcgk-core-web/mobileAction.do";
var userId = localStorage.getItem("userId")
var userName = localStorage.getItem("userName")
//生产：XLJL
//测试：GCGKJL
var system = "GCGKJL";
var coreData = {
    data001: {
        'request': '{"head":{"system":"' + system + '","imei":"","userId":"' + userId + '","bic":"001"}}',
        'method': 'entry'
    },
    data002: {
        'request': '{"data":{"id":"1","picture":"1","posy":"","posx":"","cont":"哇卡卡卡"},"head":{"system":"' + system + '","imei":"","userId":"' + userId + '","bic":"002"}}',
        'method': 'entry'
    },
    data003: {
        'request': '{"data":{"duty_time":"1440995541000","posx":"32.321","posy":"119","flag":"0","locationStr":"南京"},"head":{"system":"' + system + '","imei":"","userId":"' + userId + '","bic":"003"}}',
        'method': 'entry'
    },
    data004: {
        'request': '{"data":{"dutykey":"10177","duty_time":"1440995541000","posx":"32.321","posy":"119","flag":"0","locationStr":"南京"},"head":{"system":"' + system + '","imei":"","userId":"' + userId + '","bic":"004"}}',
        'method': 'entry'
    },
    data006: {
        'request': '{"data":{"dutykey":"7982","dutytype":"0","exception":"我考勤一场了"},"head":{"system":"' + system + '","imei":"","userId":"' + userId + '","bic":"006"}}',
        'method': 'entry'
    },
    data007: {
        'request': '{"data":{"startdate":"1440995541000","enddate":"1441276281000","reason":"我饿了，你呢"},"head":{"system":"' + system + '","imei":"","userId":"' + userId + '","bic":"007"}}',
        'method': 'entry'
    },
    data008: {
        'request': '{"data":{"year":"2015","month":"10"},"head":{"system":"' + system + '","imei":"","userId":"' + userId + '","bic":"008"}}',
        'method': 'entry'
    },
    data009: {
        'request': '{"data":{"posy":"100","posx":"32"},"head":{"system":"' + system + '","imei":"","userId":"' + userId + '","bic":"009"}}',
        'method': 'entry'
    },
    data010: {
        'request': '{"data":{"cont":[{"phonetime":"2015-07-01 12:30:01","type":"1","info":"开机"},{"phonetime":"2015-07-01 12:30:01","type":"1","info":"开机"},{"phonetime":"2015-08-01 12:30:01","type":"2","info":"关机"}]},"head":{"system":"' + system + '","imei":"","bic":"010"}}',
        'method': 'entry'
    },
    data011: {
        'request': '{"data":{"no":""},"head":{"system":"' + system + '","imei":"","userId":"' + userId + '","bic":"011"}}',
        'method': 'entry'
    },
    data012: {
        'request': '{"data":{"id":"10139"},"head":{"imei":"","userId":"' + userId + '","bic":"012"}}',
        'method': 'entry'
    },
    data013: {
        'request': '{"data":{"retIds":""},"head":{"system":"' + system + '","imei":"","userId":"' + userId + '","bic":"013"}}',
        'method': 'entry'
    },
    data014: {
        'request': '{"data":{"id":"64"},"head":{"system":"' + system + '","imei":"","userId":"' + userId + '","bic":"014"}}',
        'method': 'entry'
    },
    data015: {
        'request': '{"data":{"userId":""},"head":{"system":"' + system + '","imei":"","userId":"","bic":"015"}}',
        'method': 'entry'
    }
    ,
    data016: {
        'request': '{"head":{"system":"' + system + '","imei":"","userId":"","bic":"016"}}',
        'method': 'entry'
    }
    ,
    data017: {
        'request': '{"head":{"system":"' + system + '","imei":"","userId":"' + userId + '","bic":"017"}}',
        'method': 'entry'
    }
    ,
    data018: {
        'request': '{"data":{},"head":{"userId":"","bic":"018","sysCode":"' + system + '"}}',
        'method': 'entry'
    }
    ,
    data019: {
        'request': '{"data":{"orgCode":"JLB1"},"head":{"userId":"","bic":"019","sysCode":"' + system + '"}}',
        'method': 'entry'
    },
    data020: {
        'request': '{"data":{"id":"0","RESPONSER_ID":"' + userId + '","RESPONSER":"' + userName + '","MESSAGE_ID":"","RESPONSE_LATITUDE":"","RESPONSE_LONGITUDE":"","RESPONSE_ADDR":"","RESPONSE_MSG": "","picture":"1","images": ""},"head":{"userId":"' + userId + '","bic":"020","system":"' + system + '"}}',
        'method': 'entry'
    },
    data021: {
        'request': '{"data":{"id":""},"head":{"userId":"' + userId + '","bic":"021","system":"' + system + '"}}',
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
        var jsonObj = eval('(' + data.request + ')');
        var bic = jsonObj.head.bic;
        var imgSrc = "";
        if (bic == '003' || bic == '004' || bic == '006') {
            imgSrc = './img/loading.gif';
            $("body").append('<div class="loading" id="loadingGif" style="display:block"><img src="' + imgSrc + '"></div>');
            $("body").append('<div class="loadingMoveDiv" id="loadingGifDiv" style="top: 0;"></div>');

        } else if (bic == '014' ||  bic == '021') {
            imgSrc = '../img/loading.gif';
            $("body").append('<div class="loading" id="loadingGif" style="display:block"><img src="' + imgSrc + '"></div>');
            $("body").append('<div class="loadingMoveDiv" id="loadingGifDiv" style="top: 0;"></div>');

        }else {

            imgSrc = './img/loading.gif';
            // alert("imgSrc"+imgSrc);
            $("body").append('<div class="loading" id="loadingGif" style="display:block"><img src="' + imgSrc + '"></div>');
            $("body").append('<div class="loadingMoveDiv" id="loadingGifDiv" style="top: 0;"></div>');
        }
        var setTime = setTimeout(function () {
            $("#loadingGif").css("display", "none");
            $("#loadingGif").remove();

            $("#loadingGifDiv").css("display", "none");
            $("#loadingGifDiv").remove();
        }, 30000);
        //生产：GCGK_CORE
        //测试：SBD_CORE
        mam.navigator.ajax.post('XLJL_CORE', {
            "method": "entry",
            "request": encodeURIComponent(data.request)
        }, "CORE_SERVER", function (v) {
        // mam.navigator.ajax.post('GCGKJL', {
        //     "method": "entry",
        //     "request": encodeURIComponent(data.request)
        // }, "GCGK_JL", function (v) {
            $("#loadingGif").css("display", "none");
            $("#loadingGif").remove();
            $("#loadingGifDiv").css("display", "none");
            $("#loadingGifDiv").remove();
            clearTimeout(setTime);
            var jsonObj;
             //alert("core:"+v);

            if (typeof v === 'string') {
                jsonObj = eval('(' + v + ')');
            } else {
                jsonObj = eval(v);
            }
            callback(jsonObj);
        });
    }
}