
function sendEmail(){
	var neve = document.getElementById("ki").value;
	var nap = new Date();
	if (document.getElementById("jel").value == "4283"){
		Email.send({
			Host : "smtp.elasticemail.com",
			Username : "jakusmate01@gmail.com",
			Password : "E5C5117354C609AACBE528A119C6C54F2A66",
			To : 'lilla.pont.noreply@gmail.com',
			From : "jakusmate01@gmail.com",
			Subject : ""+neve+" kapott +1 pontot",
			Body : ""+neve+" kapott +1 pontot."
		}).then(
		message => alert(message)
		);
		document.getElementById("jel").value = "";
	}else{
		alert("Nem jo!");
		document.getElementById("jel").value = "";
	}
	}
