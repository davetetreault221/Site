$( function() {

    //Setting up all the progress bars
    //*******************************************************************************
    $( "#progressbar" ).progressbar({
        value: false
    });

    $( "#progressbar2" ).progressbar({
        value: false
    });

    $( "#progressbar3" ).progressbar({
        value: false
    });

    $( "#progressbar4" ).progressbar({
        value: false
    });

    $( "#progressbar5" ).progressbar({
        value: false
    });
    //*******************************************************************************


    // Setting the proper amount of blocks at the bottom of the screen
    //*******************************************************************************

    //Getting window width in pixels
    const windowWidth = window.innerWidth;

    //Grabbing the parent element for the blocks
    const blockElement = $( "#block-footer" );

    let numBlocksNeeded = windowWidth/60;
    numBlocksNeeded = Math.round(numBlocksNeeded) - 1;

    for (let i = 0; i < numBlocksNeeded; i++) {
        blockElement.append("<img src=\"/img/block.png\" style=\"width: 60px;\">")
    }

    blockElement.append("<img src=\"/img/block.png\" style=\"width: 30px; height: 60px\">")



    //*******************************************************************************


    var $navbar = $("#mNavbar");

    AdjustHeader(); // Incase the user loads the page from halfway down (or something);
    $(window).scroll(function() {
        AdjustHeader();
    });

    function AdjustHeader(){
        if ($(window).scrollTop() > 40) {
            if (!$navbar.hasClass("navbar-fixed-top")) {
                $navbar.addClass("navbar-fixed-top");
                $navbar.css("top", "0px");


            }
        } else {
            // $navbar.removeClass("navbar-fixed-top");
            // $navbar.css("top", "10px");

            $navbar.addClass("navbar-fixed-top");
            $navbar.css("top", "0px");
        }
    }

//Closing Tag for "Document is Ready Function"
// ***********************************************
});
