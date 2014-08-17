
// ******************************************************************************************************************
// ********************************************* INITIAL SETTINGS ***************************************************
// ******************************************************************************************************************


/*$(document).ready(function(){
	$('#ImageZone').css("height", $("#ImagesContainer").css("height")); // Set the max height to the image in the popup
})*/

// ******************************************************************************************************************
// ************************************************** END ***********************************************************
// ******************************************************************************************************************


// ******************************************************************************************************************
// **************************************** KEYBORD INPUT EVENT ATTACH **********************************************
// ******************************************************************************************************************

if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
    document.attachEvent('onkeydown', function(event){
	    onArrowPressed(event.keyCode);
    });   
}
else{
	document.addEventListener('keydown', function(event) {
	    onArrowPressed(event.keyCode);
	});
}

function onArrowPressed(actualArrowKey){
	// if the popup is visible
	if( !($("#modalContainer").hasClass("modalNotVisible")) ){
		// LEFT
		if(actualArrowKey==37){
			prevImg();
		}
		// RIGHT
		else if(actualArrowKey==39){
			nextImg();
		}
	}
}

// ******************************************************************************************************************
// ************************************************** END ***********************************************************
// ******************************************************************************************************************




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
	imgIndex=0; // Reset image index
	var variable = getGameImageVariable(x);
	$('#ImageZone').attr('src', variable[imgIndex]);
	
	$('#ImageZone').css("height", $("#ImagesContainer").css("height")); // Set the max height to the image in the popup
}

function removeImagePopup(){
	// Popup hiding
	$("#modalContainer").addClass("modalNotVisible");
	// Loading image showing
	resetImageZone();
}

function changeDisplayStatus(toHide, toShow){
	toShow.css("display","");
	toHide.css("display",'none');
}


function resetImageZone(){
	var toHide = $('#ImageZone');
	var toShow = $('#ImageLoadZone');
	changeDisplayStatus(toHide, toShow);
	toHide.removeAttr("src");
}


function openVideoPopup(x){
	// Popup showing
	$("#modalContainerVideo").removeClass("modalNotVisible");
	// Video src
	$('#VideoZone').attr('src', getGameVideoURLVariable(x));
}

function removeVideoPopup(){
	// Popup hiding
	$("#modalContainerVideo").addClass("modalNotVisible");
	// Remove video src
	$('#VideoZone').removeAttr("src");
}

// ******************************************************************************************************************
// ************************************************** END ***********************************************************
// ******************************************************************************************************************


var imgIndex=0;

function nextImg(){

	resetImageZone();

	var variable= getGameImageVariable(openDivIndex);

	imgIndex++;
	if(imgIndex >= variable.length)
		imgIndex=0;

	$('#ImageZone').attr('src', variable[imgIndex]);
}

function prevImg(){

	resetImageZone();

	var variable= getGameImageVariable(openDivIndex);

	imgIndex--;
	if(imgIndex < 0)
		imgIndex= variable.length -1;

	$('#ImageZone').attr('src', variable[imgIndex]);
}

function getGameImageVariable(gameIndex){
	switch(gameIndex){
		case 0:
			return IMAGES_SRC_REV;
			break;
		case 1:
			return IMAGES_SRC_SMLP;
			break;
		case 2:
			return IMAGES_SRC_NLW;
			break;
		case 3:
			return IMAGES_SRC_ECP;
			break;
		case 4:
			return IMAGES_SRC_SMB;
			break;
		case 5:
			return IMAGES_SRC_QTM;
			break;
		case 5:
			return IMAGES_SRC_THS;
			break;
	}
}

function getGameVideoURLVariable(gameIndex){
	switch(gameIndex){
		case 0:
			return TRAILER_YOTUBE_SRC_REV;
			break;
		case 1:
			return TRAILER_YOTUBE_SRC_SMLP;
			break;
		case 2:
			return TRAILER_YOTUBE_SRC_NLW;
			break;
		case 3:
			return TRAILER_YOTUBE_SRC_ESC;
			break;
		case 4:
			return TRAILER_YOTUBE_SRC_SMB;
			break;
		case 5:
			return "";
			break;
		case 5:
			return "";
			break;
	}
}





