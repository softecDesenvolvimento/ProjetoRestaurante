function divHidden(){		
	enableIdent.style.visibility = "hidden";	
	enableIngred.style.visibility = "hidden";
	enablePreparo.style.visibility = "hidden";
	enableFim.style.visibility = "hidden";
}

function divVisible(codDiv){
	if(codDiv==0){
		divHidden();
		enableIdent.style.visibility = "visible";
		step1.style.background = "orange";
		step1b.style.background = "gray";
		step2.style.background = "gray";

	}
	if(codDiv==1){
		divHidden();
		enableIngred.style.visibility = "visible";
		step1.style.background = "green";
		step1b.style.background = "green";
		step2.style.background = "orange";
		step2b.style.background = "gray";
		step3.style.background = "gray";
	}
	if(codDiv==2){
		divHidden();
		enablePreparo.style.visibility = "visible";
		step2.style.background = "green";
		step2b.style.background = "green";
		step3.style.background = "orange";
		step3b.style.background = "gray";
	}
	if(codDiv==3){
		divHidden();
		enableFim.style.visibility = "visible";
		step3.style.background = "green";
		step3b.style.background = "green";
		step4.style.background = "green";
	}
}