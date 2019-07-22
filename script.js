var month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];
var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
var month_name = ["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"];

var holder = document.getElementById("days");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var ctitle = document.getElementById("calendar-title");
var cyear = document.getElementById("calendar-year");

var my_date = new Date();
var my_year = my_date.getFullYear();
var my_month = my_date.getMonth();
var my_day = my_date.getDate();

//計算某年某月第一天是星期幾
function dayStart(month,year) {
	var tmpDate = new Date(year, month, 1);
	return (tmpDate.getDay());
}

//計算某年是不是閏年
function dayMonth(month,year) {
	var tmp = year % 4;
	if (tmp==0){
		return (month_olympic[month]);
	} else {
		return (month_normal[month]);
	}
}

function refreshDate() {
	var str = "";
	var totalDay = dayMonth(my_month,my_year);//計算該月總天數
	var firstDay = dayStart(my_month,my_year);//計算該月第一天是星期幾
	var myclass;
	for(var i=1;i<firstDay;i++){
		str += "<li></li>";//為起始日之前的日期創建空白
	}
	for(var i=1;i<=totalDay;i++){
		if((i<my_day && my_year==my_date.getFullYear() && my_month==my_date.getMonth()) || my_year<my_date.getFullYear() || ( my_year==my_date.getFullYear() && my_month<my_date.getMonth())){ 
			myclass = " class='lightgrey'"; //在今天之前的日期，以浅灰色字顯示
		}else if (i==my_day && my_year==my_date.getFullYear() && my_month==my_date.getMonth()){
			myclass = " class='green greenbox'"; //在今天的日期，以綠色字顯示
		}else{
			myclass = " class='darkgrey'"; //在今天之後的日期，以深灰色字顯示
		}
		str += "<li"+myclass+">"+i+"</li>"; //創建日期
	}
	holder.innerHTML = str;//設置日期顯示
	ctitle.innerHTML = month_name[my_month];//設置月份顯示
	cyear.innerHTML= my_year;//設定年份顯示
}
refreshDate();

prev.onclick = function(e){
	e.preventDefault();
	my_month--;
	if(my_month<0){
		my_year--;
		my_month = 11;
	}
	refreshDate();
}
next.onclick = function(e){
	e.preventDefault();
	my_month++;
	if(my_month>11){
		my_year++;
		my_month = 0;
	}
	refreshDate();
}