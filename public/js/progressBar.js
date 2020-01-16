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

    //Setting the best fit block
    let totalWidthOfBlocks = numBlocksNeeded * 60;
    let widthToAdd = 0;

    if(totalWidthOfBlocks > windowWidth)
    {
        let difference = totalWidthOfBlocks - windowWidth;

        widthToAdd = difference - 30;

        Math.abs(widthToAdd);
    }
    else
    {
        let difference =  windowWidth - totalWidthOfBlocks;
        widthToAdd = difference - 40;

    }

    console.log(widthToAdd);

    blockElement.append("<img src=\"/img/block.png\" style=\"width: "+widthToAdd+"px; height: 60px\">")

    //*******************************************************************************

    //Making Mario Move Across the Screen
    //*******************************************************************************

    //Setting to the width of the screen and adding the size of Mario
    let width =  $(document).width();
    width += 80;
    //movingMario();

    function movingMario()
    {
        $( "#mario" ).animate({ "left": "+="+width+"px" }, 5000,

            //After Animation is Complete
           function() {
            $("#mario").css("left","-80px");
                movingMario()
             }
        );

    };
    //*******************************************************************************


    //Scrolling
    //*******************************************************************************
    $("#contact").click( function() {

            var isMobile = false; //initiate as false
            // device detection
            if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
                || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
                isMobile = true;
            }

            if(isMobile == true)
            {
                $("html, body").animate({ scrollTop: $(document).height() - 800}, 2000);
            }
            else
            {
                $("html, body").animate({ scrollTop: $(document).height()}, 2000);
            }

    });

    $("#home").click( function() {

        $('html, body').animate({scrollTop:0}, 3000);
        }
    );

    //*******************************************************************************


    //Navigation Bar
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
    //*******************************************************************************


//Closing Tag for "Document is Ready Function"
// ***********************************************
});
