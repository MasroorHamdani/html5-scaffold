$(document).ready(function () {
	$("#inputName").blur(function(){
		validateName();
	});
	$("#inputEmail").blur(function(){
		validateEmail();
	});
	$("#inputContactNo").blur(function(){
		validateContact();
	});
	$("#inputAddress").blur(function(){
		validateAddress();
	});
	$("#inputFromDate").blur(function(){
		validateFromDate();
	});
	$("#btnSent").click(function(){
		validateName();
		validateEmail();
		validateContact();
	});
});

function validateFromDate(){
	var currVal=$("#inputFromDate").val();//alert(currVal);
	var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
	var dtArray = currVal.match(rxDatePattern); // is format OK?
	//alert("pattern "+currVal.match(rxDatePattern));
	if(!currVal){
		$("#spanFromDate").show().html("Please Enter From Date");
		$("#inputFromDate").focus();
	}
	else if (dtArray == null){
		$("#spanFromDate").show().html("Please Enter Valid Date");
		$("#inputFromDate").focus();
	}else {
			dtDay = dtArray[1];
		  dtMonth= dtArray[3];
		  dtYear = dtArray[5];
		  //alert(dtDay+" "+dtMonth+" "+dtYear );
		  var result=true;
		  if (dtMonth < 1 || dtMonth > 12){
			  result=false; //alert("month"+result);
		  } else if (dtDay < 1 || dtDay> 31){
			  result=false;//alert("day"+result);
		  } else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31){
			  result=false;
		  } else if (dtMonth == 2)
		  {
			     var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));//alert(isleap);
			     if (dtDay> 29 || (dtDay ==29 && !isleap)){
					  result=false;
				  }
		  }
		  
		  if(result==false){
			  $("#spanFromDate").show().html("Please Enter Valid Date");
			  $("#inputFromDate").focus();
		  } else {
			  $("#spanFromDate").hide();
		  }
		  
		  var fullDate = new Date();alert(fullDate);
		  var twoDigitMonth = fullDate.getMonth()+"";
		  if(twoDigitMonth.length==1){
			  twoDigitMonth="0" +twoDigitMonth;
		  }
		  var twoDigitDate = fullDate.getDate()+"";
		  if(twoDigitDate.length==1){
			  twoDigitDate="0" +twoDigitDate;
		  }
		  var currentDate = twoDigitDate + "-" + twoDigitMonth + "-" + fullDate.getFullYear();
		  var diff = currentDate-currVal;
		    var date_reaming = diff.getDate();
		   alert(date_reaming + 'days to go');
	}
	
}
function contactValidation(contact){
	var filter = /^[0-9-+]+$/;
	if(filter.test(contact)){
		return true;
	} else{
		return false;
	}
}

function validateContact(){
	var contact=$("#inputContactNo").val(); //alert(contact.length);
	if(!contact){
		$("#spanContact").show().html("Please Enter Your Contact No");
		$("#inputContactNo").focus();
	}
	else if(!contactValidation(contact)){
		$("#spanContact").show().html("Please Enter Valid Contact No");
		$("#inputContactNo").focus();
	} else if(contact.length<0 || contact.length>14){
		$("#spanContact").show().html("Contact No should be +91-1000000000 format");
		$("#inputContactNo").focus();
	}
	else {
		$("#spanContact").hide();
	}
}
function emailValidation(email){
	
	var filter= /^([a-zA-Z0-9_\-\.]+)*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/ ;
    if(filter.test(email)){
    	return true;
    } else {
    	return false;
    }
}

function validateEmail(){
	var email=$("#inputEmail").val();
	if (!email) {
		$("#spanEmail").show().html("Please Enter Your Email");
		$("#inputEmail").focus();
    } else if (!emailValidation(email)) {
        $("#spanEmail").show().html("Please Enter Vaid Email");
        $("#inputEmail").focus();
    }else {
		$("#spanEmail").hide();
	}
	
	
	
}

function validateAddress(){
	
		var address=$("textarea#inputAddress").val();
		if (!address) {//alert($('textarea#nputAddress').val());
			$("#spanAddress").show().html("Please Enter your Address");
			$("#inputAddress").focus();
		}else {
			$("#spanAddress").hide();
		}
}

function validateName(){
	var name=$("#inputName").val();
	var nameRegex = /^[A-Za-z]+$/;
	if (!name) {
		$("#spanName").show().html("Please Enter your name");
		$("#inputName").focus();
	}else if(!nameRegex.test(name)){
		$("#spanName").show().html("Please Enter valid name");
		$("#inputName").focus();
	}else if(name.length > 10) {
		$("#spanName").show().html("Valid name is 30 Characters only");
		$("#inputName").focus();
	}else {
		//alert(name);
		$("#spanName").hide();
	}
}
