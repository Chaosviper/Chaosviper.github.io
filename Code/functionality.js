
// ******************************************************************************************************************
// ***************************************** FUNCTIONS FOR BOX OPENING **********************************************
// ******************************************************************************************************************

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

// ******************************************************************************************************************
// ************************************************** END ***********************************************************
// ******************************************************************************************************************



// ******************************************************************************************************************
// *************************************** FUNCTIONS FOR POPUP SHOWING **********************************************
// ******************************************************************************************************************

// Event for remove the image when load is complete -->
function endLoadImage(){
	changeDisplayStatus( $('#ImageLoadZone'), $('#ImageZone') );
}
// <-- End


function openImagePopup(x){
	// Popup showing
	$("#modalContainer").removeClass("modalNotVisible");
	// Image loading
	$('#ImageZone').attr('src',"http://photojournal.jpl.nasa.gov/jpeg/PIA13932.jpg");
}

function removeImagePopup(){
	// Popup hiding
	$("#modalContainer").addClass("modalNotVisible");
	// Loading image showing
	var toHide = $('#ImageZone');
	var toShow = $('#ImageLoadZone');
	changeDisplayStatus(toHide, toShow);
	toHide.removeAttr("src");
}

function changeDisplayStatus(toHide, toShow){
	toShow.css("display","");
	toHide.css("display",'none');
}

// ******************************************************************************************************************
// ************************************************** END ***********************************************************
// ******************************************************************************************************************

