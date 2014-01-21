function divVisible (codDiv) {
	if (codDiv==0) {
		Days.style.visibility = "visible";
		Dishes.style.visibility = "hidden";
	};

	if (codDiv==1) {
		Days.style.visibility = "hidden";
		Dishes.style.visibility = "visible";
	};
}