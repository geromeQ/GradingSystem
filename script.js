function comp(){
	var gra1 = +document.getElementById('gra1').value
	var gra2 = +document.getElementById('gra2').value
	var gra3 = +document.getElementById('gra3').value
	var gra4 = +document.getElementById('gra4').value
	var gra5 = +document.getElementById('gra5').value
	var gra6 = +document.getElementById('gra6').value
	var gra7 = +document.getElementById('gra7').value
	
	var num = (gra1 + gra2 + gra3 + gra4 + gra5 + gra6 + gra7) / 7
	
	if(num > 100){
		window.alert("Error Occured: Value is not an acceptable grade. " + num.tofixed(0));
	}
	else if(num <= 100 && num >=90){
		window.alert("OUTSTANDING! " + num.tofixed(0));
	}
	else if(num <= 89 && num >= 85){
		window.alert("Very Satisfactory " + num.tofixed(0));
	}
	else if(num <= 84 && num >= 80){
		window.alert("Satisfactory " + num.tofixed(0));
	}
	else if(num <= 79 && num >= 75){
		window.alert("Fairly Satisfactory " + num.tofixed(0));
	}
	else{
		window.alert("THAT SUCKS BRUV. DID NOT MEET EXPECTATIONS BETTER LUCK NEXT TIME " + num.tofixed(0));
	}

}
