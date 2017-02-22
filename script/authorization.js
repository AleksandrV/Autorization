$(document).ready(function(){
	$('#phone').inputmask({
		"mask": "+380(99)999-99-99",
		"oncomplete": function(){ console.log("ввод по маске успешен"); }
	});

	$('#smscode').inputmask({

		"mask": "999-999", 
		"oncomplete": function(){ off(); }, 
		"clearIncomplete": true
	});

	$("#sendbutton").click(
		function(){
			$("#phone").attr('readonly','readonly');
			$("#sendbutton").fadeOut();
			$(".error").fadeOut();
			$("#smscode").fadeIn();
			$("#signinbutton").fadeIn();
			$(".descrcode").fadeIn();
			on();

		});

	$("#signinbutton").click(
		function(){

			accreditation();

		});

	function go() { $(".nosms").fadeIn() };

	function on() { timeoutId = setTimeout(go, 15000) };

	function off() { clearTimeout(timeoutId) };

	function accreditation() {
		if ( $('#smscode').inputmask().val() == "999-999") {
			off();
			console.log (alert ("yes"));
		} else {
			off();
			$("#smscode").fadeOut();
			$("#signinbutton").fadeOut();
			$(".descrcode").fadeOut();
			$(".nosms").fadeOut();
			$("#phone").removeAttr('readonly');
			$("#sendbutton").fadeIn();
			$(".error").fadeIn();
			console.log ("no");
		}
	}

});