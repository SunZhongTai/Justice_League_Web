"use strict";
window.onload = function displayDate() {
	var now = new Date();

	var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

	var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

	var date = ((now.getDate() < 10) ? "0" : "") + now.getDate();

	function fourDigitYear(number) {

		return (number < 1000) ? number + 1900 : number;

	}

	var today = (fourDigitYear(now.getYear())) + " " +

		months[now.getMonth()] + " " +

		date + " " +

		days[now.getDay()];

	document.getElementById("currentDate").innerHTML = today;



//表格排序
var gbCol=1;  //列号全局变量
var gbAscending=true; //true表示升序
function sortMethod(a,b) {
	var aNode=a.getElementsByTagName("td")[gbCol];
	var bNode=b.getElementsByTagName("td")[gbCol];
	var aText=aNode.firstChild.data;
	var bText=bNode.firstChild.data;
	
	if (Number(aText)<Number(bText)) {
		return gbAscending?-1:1;
	} else if (Number(aText)>Number(bText)) {
		return gbAscending?1:-1;
	} else{
		return 0;	
	}
}
function sortTable(tableName,col,direction) {
	//获取表格数据行
	var currentTable=document.getElementById(tableName);
	var currentTBody=currentTable.getElementsByTagName("tbody")[0];
	var allRows=currentTBody.getElementsByTagName("tr");
	var numLines=allRows.length;
	//排序
	var sortedRows=new Array(numLines);
	var i=0;
	for (i=0;i<numLines;i++) {
		sortedRows[i]=allRows[i].cloneNode(true);
	}
	gbCol=col;
	gbAscending=direction;
	sortedRows.sort(sortMethod);
	//重构表格
	currentTable.removeChild(currentTBody);
	currentTBody=document.createElement("tbody");
	currentTable.appendChild(currentTBody);
	for (i=0;i<numLines;i++) {
		currentTBody.appendChild(sortedRows[i]);
	}
}
var qUp=document.getElementById("quantityUp");
var qDown=document.getElementById("quantityDown");
var priceUp=document.getElementById("priceUp");
var priceDown=document.getElementById("priceDown");
var hUp=document.getElementById("hUp");
var hDown=document.getElementById("hDown");
	
qUp.onclick=function() {
	sortTable("theList",1,true);
};
qDown.onclick=function() {
	sortTable("theList",1,false);
};
priceUp.onclick=function() {
	sortTable("theList",2,true);
};
priceDown.onclick=function() {
	sortTable("theList",2,false);
};
hUp.onclick=function() {
	sortTable("theList",3,true);
};
hDown.onclick=function() {
	sortTable("theList",3,false);
};
	
};


//js隐藏与显示
$(document).ready(function(){
	$("#cy").mousemove(function(){
		$("#dropdown").slideDown(500);
	});
//下拉菜单	
	$(".dropdown").mouseleave(function(){	
		 $(this).children("div").slideUp(500);
	});
//图片显示	
	$("#wonderwoman,#batman").mouseover(function(){
		$(this).children("img").show();
	});
//手风琴
	$("#accordion").accordion({heightStyle:"content",collapsible:true});
//选项卡	
	$("#tabs").tabs();
		
});


//注册按钮显示技术
var yesno=document.getElementById("yesno");
var sb=document.getElementById("submitBtn");
yesno.onclick=function() {
	if(yesno.checked) {
		sb.style.display="block";
	}
	else {
		sb.style.display="none";
	}
};


	// 判断两次输入的密码是否一致
$(document).ready(function(){
$("#newpass").keyup(checkPasswords);
		
		function checkPasswords() {
	        var pass = $("#pass").val();
	        var newpass = $("#newpass").val();
	        
			if(!newpass || newpass.length < pass.length){
				return;
			}
	 
	        if (pass !==newpass){
	            alert("两次输入的密码不匹配");
	            document.getElementById("newpass").focus();
	            return;
	        }
	    }
});


