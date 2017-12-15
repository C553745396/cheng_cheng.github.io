
//var roleStr = localStorage.getItem(userId+"roleArr")
//var roleVal = JSON.parse(roleStr)
var qikoo = window.qikoo || {};
qikoo.dialog = function() {
    var e, t, n = {}, r = function() {
            var n = ['<div class="mod-dialog-bg"></div>', '<div class="mod-dialog">', '<div class="dialog-nav">', '<span class="dialog-title"></span>', '<a href="#" onclick="return false" class="dialog-close"></a>', "</div>", '<div class="dialog-main"></div>', "</div>"].join(""),
                r = $(n).hide().appendTo("body");
            e = r.filter(".mod-dialog-bg"), t = r.filter(".mod-dialog"), t.find(".dialog-close").click(function() {
                u()
            })
        }, i = function() {
            t.css("width", n.width || ""), t.find(".dialog-title").html(n.title), t.find(".dialog-main").html(n.html), t.show(), e.show(), s()
        }, s = function() {
            var e = ($(window).width() - t.width()) / 2,
                n = ($(window).height() - t.height()) / 2;
            n = n > 0 ? n + $(window).scrollTop() : 0, t.css({
                left: e,
                top: n-60
            })
        }, o = function(e) {
            return typeof e != "object" && (e = {
                html: e || ""
            }), n = $.extend({
                title: "提示",
                html: "",
                closeFn: null
            }, e), t || r(), i(), t
        }, u = function() {
            e && e.hide(), t && t.hide(), n.closeFn && n.closeFn.call(this)
        };
    return {
        show: o,
        hide: u
    }
}(), qikoo.dialog.confirm = function(e, t, n) {
    var r = ['<div class="dialog-content">', "<p>" + e + "</p>", "</div>", '<div class="dialog-console clearfix_new">', '<a class="console-btn-confirm" href="#" onclick="return false;" style="text-decoration: none;">确定</a>', '<a class="console-btn-cancel" href="#" onclick="return false;" style="text-decoration: none;">取消</a>', "</div>"].join(""),
        i = qikoo.dialog.show({
            html: r
        });
    return i.find(".console-btn-confirm").click(function() {
        var e = t && t.call(i);
        e !== !1 && qikoo.dialog.hide()
    }), i.find(".console-btn-cancel").click(function() {
        n && n.call(i), qikoo.dialog.hide()
    }), i
}, qikoo.dialog.alert = function(e, t) {
    var n = ['<div class="dialog-content">', "<p>" + e + "</p>", "</div>", '<div class="dialog-console clearfix_new">', '<a class="console-btn-confirm" href="#" onclick="return false;" style="text-decoration: none;">确定</a>', "</div>"].join(""),
        r = qikoo.dialog.show({
            html: n
        });
    return r.find(".console-btn-confirm").click(function() {
        var e = t && t.call(r);
        e !== !1 && qikoo.dialog.hide()
    }), r
}, qikoo.dialog.payNotice = function(e, t, n) {
    e = e || function() {
        window.location.reload()
    }, t = t || function() {
        window.location.reload()
    };
    var r = qikoo.dialog.show({
        html: ['<div class="dialog-content" style="padding: 0 80px; text-align:left">', '<div class="content-title">请您在新打开的页面<br>上完成付款。</div>', '<p style="padding-left: 50px">付款完成前请不要关闭此窗口。<br>完成付款后请根据您的情况点击下面的按钮：</p>', "</div>", '<div class="dialog-console clearfix_new" style="margin:25px auto;width:252px;">', '<a class="console-btn-confirm" href="#" onclick="return false;">已完成付款</a>', '<a class="console-btn-cancel" href="#" onclick="return false;">付款遇到问题</a>', "</div>"].join(""),
        width: 530,
        closeFn: n
    });
    r.find(".console-btn-confirm").click(function() {
        e(), qikoo.dialog.hide()
    }), r.find(".console-btn-cancel").click(function() {
        t(), qikoo.dialog.hide()
    })
}, qikoo.pop = function(e) {
    var t, n = ['<div class="mod-pop">', '<div class="pop-nav">', '<span class="pop-title"></span>', '<a class="pop-close" href="#" onclick="return false"></a>', "</div>", '<div class="pop-main"></div>', "</div>"].join("");
    return t = $(n).hide().appendTo("body"), t.find(".pop-close").click(function() {
        t.remove()
    }), e = $.extend({
        title: "温馨提示：",
        html: ""
    }, e), t.find(".pop-title").html(e.title), t.find(".pop-main").html(e.html), t
}, qikoo.dialog.confirm2 = function(e, t, n) {
	if(e == '1'){
		var r = ['<div class="dialog-content">', "<p><input id='confirmDate' value='"+getNowTime().substr(0,10)+"' type='date' style='border: 1px solid #CDCFD3;'/></p>", "</div>", '<div class="dialog-console clearfix_new">', '<a class="console-btn-confirm" href="#" onclick="return false;" style="text-decoration: none;">确定</a>','<a class="console-btn-cancel" href="#" onclick="return false;" style="text-decoration: none;">取消</a>',  "</div>"].join(""),
        i = qikoo.dialog.show({
        	title:"请选择时间",
            html: r
        });
	}else if(e == '2'){
		var r = ['<div class="dialog-content">',"<p style='text-align:left'></p>" ,"<p><textarea id='confirmText' style='width:90%;height:80px;resize: none;' placeholder='限20字以内' maxlength='20'/></p>", "</div>", '<div class="dialog-console clearfix_new">', '<a class="console-btn-confirm" href="#" style="text-decoration: none;" onclick="return false;">确定</a>',  "</div>"].join(""),
        i = qikoo.dialog.show({
        	title:"时间异常，请输入原因",
            html: r
        });
	}else if(e == '4'){
		var r = ['<div class="dialog-content">',"<p style='text-align:left'></p>" ,"<p><textarea id='confirmText' style='width:90%;height:80px;resize: none;' placeholder='限20字以内' maxlength='20'/></p>", "</div>", '<div class="dialog-console clearfix_new">', '<a class="console-btn-confirm" href="#" style="text-decoration: none;" onclick="return false;">确定</a>',  "</div>"].join(""),
        i = qikoo.dialog.show({
        	title:"跨界异常，请输入原因",
            html: r
        });
	}else if(e == '6'){
		var r = ['<div class="dialog-content">',"<p style='text-align:left'></p>" ,"<p><textarea id='confirmText' style='width:90%;height:80px;resize: none;' placeholder='限20字以内' maxlength='20'/></p>", "</div>", '<div class="dialog-console clearfix_new">', '<a class="console-btn-confirm" href="#" style="text-decoration: none;" onclick="return false;">确定</a>',  "</div>"].join(""),
        i = qikoo.dialog.show({
        	title:"时间、跨界异常，请输入原因",
            html: r
        });
	}else if(e == '3'){
		var userId = localStorage.getItem("userId")
		var deptStr = localStorage.getItem(userId+"deptArr")
		var deptVal = JSON.parse(deptStr)
		var dept = localStorage.getItem(userId+"roleCode")
		var showStr = ""
		if(deptVal.data.cont){
			var dataObj = deptVal.data.cont
			showStr += "<div class='pmName'>";
			for(var i in dataObj){
				var thisVal = dataObj[i].ORG_CODE+"&"+dataObj[i].SPROLE_CODE
				if(dept==thisVal){
					showStr += "<label for='dept'><input checked='checked' data-roleName='"+dataObj[i].ORG_NAME+"&"+dataObj[i].ROLE_NAME+"' name='deptName' id='dept' value='"+dataObj[i].ORG_CODE+"&"+dataObj[i].SPROLE_CODE+"' type='radio'/><span>部门："+dataObj[i].ORG_NAME+"</span><span>角色："+dataObj[i].ROLE_NAME+"</span></label>";
				}else{
					showStr += "<label for='dept"+i+"'><input data-roleName='"+dataObj[i].ORG_NAME+"&"+dataObj[i].ROLE_NAME+"'  name='deptName' id='dept"+i+"' value='"+dataObj[i].ORG_CODE+"&"+dataObj[i].SPROLE_CODE+"' type='radio'><span>部门："+dataObj[i].ORG_NAME+"</span><span>角色："+dataObj[i].ROLE_NAME+"</span></label>";
				}
				//showStr = showStr + "<input name='orgName' type='radio'>"+dataObj[i].ORG_NAME+"<br/>"
			}
			showStr += "</div>"
		}
		//return
		var r = ['<div class="dialog-content" >', "<p>"+showStr+"</p>", "</div>", '<div class="dialog-console clearfix_new">',  '<a class="console-btn-confirm" href="#" onclick="return false;" style="text-decoration: none;">确定</a>',  '<a class="console-btn-cancel" href="#" onclick="return false;" style="text-decoration: none;">取消</a>' ,"</div>"].join(""),
        i = qikoo.dialog.show({
        	title:"请选择部门及角色",
            html: r
        });
		
	}
//	else if(e == '4'){
//		var showStr = ""
//		if(roleVal.data.cont){
//			var dataObj = roleVal.data.cont
//			showStr += "<div style='width:100%;height:100px;overflow:auto;text-align:left;'>";
//			for(var i in dataObj){
//				showStr += "<label for='dd"+i+"' style='width:100%;height:25px;display:inline-block;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;'><input name='orgName' id='dd"+i+"' type='radio' value='"+dataObj[i].SPROLE_CODE+"'>&nbsp;&nbsp;"+dataObj[i].ROLE_NAME+"</label>";
//			}
//			showStr += "</div>"
//		}
//		//return
//		var r = ['<div class="dialog-content">', showStr, "</div>", '<div class="dialog-console clearfix_new">', '<a class="console-btn-confirm" href="#" style="text-decoration: none;" onclick="return false;">确定</a>', '<a class="console-btn-cancel" href="#" style="text-decoration: none;" onclick="return false;">取消</a>', "</div>"].join(""),
//      i = qikoo.dialog.show({
//      	title:"请选择角色",
//          html: r
//      });
//		
//	}
    
    return i.find(".console-btn-confirm").click(function() {
        var e = t && t.call(i);
       // e !== !1 && qikoo.dialog.hide()
    }), i.find(".console-btn-cancel").click(function() {
    	if(e!='2')
        	n && n.call(i), qikoo.dialog.hide()
    }), i 

}, qikoo.popConfirm = function() {
    var e, t = function(e) {
            var t = ["<p>" + e + "</p>", '<div class="pop-console">', '<a class="pop-btn-green" href="#" onclick="return false">确定</a>', '<a class="pop-btn-gray" href="#" onclick="return false">取消</a>', "</div>"].join("");
            return qikoo.pop({
                title: "温馨提示：",
                html: t
            })
        }, n = function(t) {
            var n = $(t).offset();
            n.left = n.left + $(t).width() - e.width(), n.top = n.top + $(t).height(), n.left < 0 && (n.left = 0), n.top < 0 && (n.top = 0), e.css(n)
        }, r = function(t) {
            e.find(".pop-btn-gray").click(function() {
                i()
            }), e.find(".pop-btn-green").click(function() {
                t && t.call(this), i()
            })
        }, i = function() {
            e && e.remove(), e = null
        };
    return function(s, o, u) {
        i(), e = t(o), n(s), r(u), e.show()
    }
}();
function getNowTime() {
    var dateTime = new Date();
    year = dateTime.getFullYear();
        month = dateTime.getMonth() + 1;
        day = dateTime.getDate();
        hours = dateTime.getHours();
        minutes = dateTime.getMinutes();
        seconds = dateTime.getSeconds();
    return year+"-"+fnW(month) + "-" + fnW(day) + " " + fnW(hours) + ":" + fnW(minutes) + ":" + fnW(seconds);
}

function fnW(str) {
    var num;
    str > 9 ? num = str : num = "0" + str;
    return num;
}