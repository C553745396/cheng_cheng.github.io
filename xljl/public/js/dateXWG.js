/**
 * Created by uedxwg on 15/6/19.
 */
var date;
var num = 0;
date = {
    init: function () {
        //console.log('年份：' + this.Year());
        //console.log('月份：' + this.Month());
        //console.log('日期：' + this.Day());
        //console.log('月份日期：' + this.MonthDay());
        //console.log('月份首日：' + this.FirstDay());
        $('.signInDate').html('');
        for (var i = 0; i < this.FirstDay(); i++) {
            $('<p></p>').appendTo('.signInDate');
        }
        for (var i = 1; i < this.MonthDay() + 1; i++) {
            $('<span><b>' + i + '</b></span>').appendTo('.signInDate');
        }
        var remaining = 7 - ((this.FirstDay() + date.MonthDay()) % 7);
        if (remaining == 7) {
            remaining = 0;
        }
        for (var i = 0; i < remaining; i++) {
            $('<p></p>').appendTo('.signInDate');
        }
    },
    Year: function () {
    	if (this.Month()-num == 0) {
	        var year = new Date().getFullYear()-1;
    	}else{
    		var year = new Date().getFullYear();
    	}
        return year;
    },
    Month: function () {
        var month = new Date().getMonth();
        return month + 1;
    },
    Day: function () {
        var day = new Date().getDate();
        return day;
    },
    MonthDay: function () {
        var month = this.Month()-num,
            result = (this.Year() % 4 == 0 && this.Year() % 100 != 0) || (this.Year() % 400 == 0) ? true : false,
            monthDay = null;
        switch (month) {
        	case 0:
                monthDay = 31;
                break;
            case 1:
                monthDay = 31;
                break;
            case 2:
                if (result) {
                    monthDay = 29;
                }
                else {
                    monthDay = 28;
                }
                break;
            case 3:
                monthDay = 31;
                break;
            case 4:
                monthDay = 30;
                break;
            case 5:
                monthDay = 31;
                break;
            case 6:
                monthDay = 30;
                break;
            case 7:
                monthDay = 31;
                break;
            case 8:
                monthDay = 31;
                break;
            case 9:
                monthDay = 30;
                break;
            case 10:
                monthDay = 31;
                break;
            case 11:
                monthDay = 30;
                break;
            case 12:
                monthDay = 31;
                break;
        }
        return monthDay;
    },
    FirstDay: function () {
    	if (this.Month()-num==0) {
    		 var firstDay = new Date(this.Year() + '/12/' + 1).getDay();
    	}else{
	        var firstDay = new Date(this.Year() + '/' + (this.Month()-num )+ '/' + 1).getDay();
    	}
        return firstDay;
    }
};
$(function () {
//  date.init();
//  $('.signInHeader p').html(date.Year() + '-' + date.Month() + '-' + date.Day());
	showDate();
	
	
})

function showDate(){
	date.init();
	if (date.Month()-num==0) {
		$('.signInHeader p').html(date.Year() + '-12');
	}else{
		$('.signInHeader p').html(date.Year() + '-' + (date.Month()-num));
	}
}

