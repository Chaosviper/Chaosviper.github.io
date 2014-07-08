var openDivIndex = -1;

function ShowBox(x){
	if(openDivIndex != -1){
		$('#gamebox'+openDivIndex).slideUp( 700, function() { 
			$('#gameTitle'+openDivIndex).removeClass("selectedGameTitle");
			
			if(openDivIndex != x)
				OpenBox(x);
			else
				openDivIndex = -1;
		} );
	}
	else{
		OpenBox(x);
	}
}

function OpenBox(x){
	$('#gamebox'+x).slideDown(700);
	openDivIndex=x;

	$('#gameTitle'+x).addClass("selectedGameTitle");
}