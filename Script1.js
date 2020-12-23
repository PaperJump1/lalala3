// JavaScript source code
var problemHRE = new Array();
problemHRE[0] = "index_uva10050.html";
problemHRE[1] = "index_uva540.html";
problemHRE[2] = "index_uva457.html";
problemHRE[3] = "index_uva11389.html";
problemHRE[4] = "index_uva729.html";
problemHRE[5] = "index_uva1225.html";
problemHRE[6] = "index_uva10276.html";
problemHRE[7] = "index_uva10815.html";
problemHRE[8] = "index_uva10954.html";
var problemSN = new Array();
problemSN[0] = "uva10050";
problemSN[1] = "uva540";
problemSN[2] = "uva457";
problemSN[3] = "uva11389";
problemSN[4] = "uva729";
problemSN[5] = "uva1225";
problemSN[6] = "uva10276";
problemSN[7] = "uva10815";
problemSN[8] = "uva10954";
var problemDF = new Array();
problemDF[0] = "Easy";
problemDF[1] = "Difficult";
problemDF[2] = "Medium";
problemDF[3] = "Difficult";
problemDF[4] = "Medium";
problemDF[5] = "Easy";
problemDF[6] = "Difficult";
problemDF[7] = "Difficult";
problemDF[8] = "Medium";
var problemNA = new Array();
problemNA[0] = "Hertals";
problemNA[1] = "Team Queue";
problemNA[2] = "Linear Cellular Automata";
problemNA[3] = "The bus Drive Problem";
problemNA[4] = "The Hamming Distance";
problemNA[5] = "Digit Counting";
problemNA[6] = "Hanoi Tower Troubles Again!";
problemNA[7] = "Andy's First Dictionary";
problemNA[8] = "Add All";

$(document).ready(function () {
	$(".div1").hide();
	$(".button1").click(function () {
		$(".div1").toggle(1000);

	});
});
$(document).ready(function () {
	$(".div2").hide();
	$(".button2").click(function () {
		$(".div2").toggle(1000);

	});
});
$(document).ready(function () {
	$(".div3").hide();
	$(".button3").click(function () {
		$(".div3").toggle(1000);

	});
});


$(document).ready(function () {
	$("#div1").hide();
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/=/g, "<span style='color:  #99FF99;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/#include/ig, "<span style='color: #339900;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/int/ig, "<span style='color: #33CCFF;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/string/ig, "<span style='color: #33CCFF;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/queue/g, "<span style='color: #33CCFF;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/vector/ig, "<span style='color: #33CCFF;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/main/ig, "<span style='color: #33CCFF;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/bool/ig, "<span style='color: #33CCFF;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/set/ig, "<span style='color: #33CCFF;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/char/ig, "<span style='color: #33CCFF;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/cstdio/ig, "<span style='color: #33CCFF;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/cctype/ig, "<span style='color: #33CCFF;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/iostream/ig, "<span style='color: #33CCFF;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/algorithm/g, "<span style='color: #33CCFF;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/using namespace std;/ig, "<span style='color: red;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/cin/ig, "<span style='color: green;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/while/ig, "<span style='color: green;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/do/ig, "<span style='color: green;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/else if/ig, "<span style='color: green;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/else/ig, "<span style='color: green;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/return/ig, "<span style='color: green;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/cout/ig, "<span style='color: green;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/for/ig, "<span style='color: green;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/break/ig, "<span style='color: green;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/if/ig, "<span style='color: green;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/&lt;/ig, "<span style='color: #99FF99;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/&gt;/ig, "<span style='color:  #99FF99;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/!/ig, "<span style='color:  #99FF99;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/&amp;/ig, "<span style='color:  #99FF99;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/&minus;/ig, "<span style='color:  #99FF99;'>$&</span>");
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML.replace(/deque/g, "<span style='color: #33CCFF;'>$&</span>");
	

	$("#button1").click(function () {
		$("#div1").toggle(1000);

		$("#button1").hide();
		return false;
	});
});


