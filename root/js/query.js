$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
    // document.getElementById("test").classList.toggle("noscroll");
    document.body.classList.toggle("noscroll");

}
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            document.getElementById("myDropdown").classList.toggle("show");
            // determines whether to reset scroll position between menu clicks
            document.getElementById("myDropdown").scrollTop = 0;
        }
        if (document.body.classList.contains('noscroll')) {
          document.body.classList.toggle("noscroll");
      }
      }
    }
  }
