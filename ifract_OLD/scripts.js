(function($) {
    "use strict"; 
    
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
        if ($(".navbar").offset().top > 60) {
            $(".fixed-top").addClass("top-nav-collapse");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
    });


    function printDocument(elemid) {

            //Check if element is empty
            if (elemid == "") {
                window.print();
            }
            else {
                //array to store ids separated with comma if available
                var arrelemid = elemid.split(',');
                var htmlContent = "";
                for (var i = 0; i < arrelemid.length; i++) {
                    htmlContent += document.getElementById(arrelemid[i]).innerHTML;
                }

                //Window Width (ww) and Window Height (wh) of the user's screen, in pixels
                var ww = screen.availWidth;
                var wh = screen.availHeight - 90;

                //Print Window (pw)
                var pw = window.open("", "newWin", "width=" + ww + ",height=" + wh);
                pw.document.write('<html><title>Printed Page</title><body>');
                pw.document.write('</head><body>');
                pw.document.write(htmlContent);
                pw.document.write('</body></html>');
                pw.document.close();
                pw.print();
                pw.close();

                // Created by Sartaj Husain for www.codebrary.com
            }
        };

})(jQuery);
