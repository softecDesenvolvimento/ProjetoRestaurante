function divHidden(){		
	frmCadPrato.style.visibility = "hidden";
	frmCadPrato2.style.visibility = "hidden";
	frmCadPrato3.style.visibility = "hidden";
	regSucess.style.visibility = "hidden";
}

function divVisible(codDiv){
	if (codDiv==0) {
		frmCadPrato2.style.height = "300px";
		central.style.height = "100%";
		divHidden();
		frmCadPrato.style.height = "500px";
		frmCadPrato.style.visibility = "visible";
		step1.style.background = "orange";
		step1b.style.background = "orange";
		step2.style.background = "black";
		step2b.style.background = "black";
	};

	if (codDiv==1) {
		divHidden();
		central.style.height = "150%";
		frmCadPrato2.style.visibility = "visible";
		frmCadPrato2.style.height = "800px";
		step1.style.background = "gray";
		step1b.style.background = "gray";
		step2.style.background = "orange";
		step2b.style.background = "orange";
		step3.style.background = "black";
		step3b.style.background = "black";
	};

	if (codDiv==2) {
		divHidden();
		frmCadPrato2.style.height = "500px";
		central.style.height = "100%";
		frmCadPrato3.style.visibility = "visible";
		step2.style.background = "gray";
		step2b.style.background = "gray";
		step3.style.background = "orange";
		step3b.style.background = "orange";
	};

	if (codDiv==3) {
		divHidden();
		central.style.height = "86%";
		frmCadPrato.style.height = "300px";
		frmCadPrato2.style.height = "300px";
		frmCadPrato3.style.height = "300px";
		regSucess.style.visibility = "visible";
		step3.style.background = "gray";
		step3b.style.background = "gray";
		step4.style.background = "green";

	};
}