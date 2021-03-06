
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

	var height_perc= parseInt($("#ImagesContainer").css("height"));
	var width= parseInt($("#ImagesContainer").css("width"));

	var height_calc= width*7/16;

	if(window.innerWidth / window.innerHeight < 2)
		$('#ImageZone').css("height", height_calc); // Set the max height to the image in the popup
	else
		$('#ImageZone').css("height", height_perc); // Set the max height to the image in the popup

	// Header e Footer
	$('#ImagesContainerFooter').text( (imgIndex+1) + '/' + variable.length);
	$('#ImagesContainerHeader').text( getGameImageHeaders(openDivIndex)[imgIndex] );
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

function redirectToGameURL(x){
	window.location = getGameURLVariable(x);  
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

	// Header e Footer
	$('#ImagesContainerFooter').text( (imgIndex+1) + '/' + variable.length);
	$('#ImagesContainerHeader').text( getGameImageHeaders(openDivIndex)[imgIndex] );
}

function prevImg(){

	resetImageZone();

	var variable= getGameImageVariable(openDivIndex);

	imgIndex--;
	if(imgIndex < 0)
		imgIndex= variable.length -1;

	$('#ImageZone').attr('src', variable[imgIndex]);

	// Header e Footer
	$('#ImagesContainerFooter').text( (imgIndex+1) + '/' + variable.length);
	$('#ImagesContainerHeader').text( getGameImageHeaders(openDivIndex)[imgIndex] );
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
			return IMAGES_SRC_OGS;
			break;
		case 6:
			return IMAGES_SRC_THS;
			break;
	}
}

function getGameImageHeaders(gameIndex){
	switch(gameIndex){
		case 0:
			return HEADERS_REV;
			break;
		case 1:
			return HEADERS_SMLP;
			break;
		case 2:
			return HEADERS_NLW;
			break;
		case 3:
			return HEADERS_ECP;
			break;
		case 4:
			return HEADERS_SMB;
			break;
		case 5:
			return HEADERS_OGS;
			break;
		case 6:
			return HEADERS_THS;
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
			return TRAILER_YOTUBE_SRC_OGS;
			break;
		case 6:
			return "";
			break;
	}
}


function getGameURLVariable(gameIndex){
	switch(gameIndex){
		case -1:
			return GAME_SRC_REV_WIN;
			break;
		case 0:
			return GAME_SRC_REV_MAC;
			break;
		case 1:
			return GAME_SRC_SMLP;
			break;
		case 2:
			return GAMEDESIGNDOCUMENT_SRC_NLW;
			break;
		case 3:
			return GAME_SRC_ESC;
			break;
		case 4:
			return GAME_SRC_SMB;
			break;
		case 5:
			return GAME_SRC_ESC_MAP;
			break;
		case 6:
			return THESIS_SRC;
			break; 
		case 7:
			return PAPER_SRC;
			break; 
		case 8:
			return GAME_SRC_OGS;
			break;	
	}
}



