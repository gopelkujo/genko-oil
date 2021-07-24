document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navigation').style.background = "rgb(44, 30, 30)";
        // add padding top to show content behind navbar
        } else {
            document.getElementById('navigation').style.background = "transparent";
        } 
    });
}); 
// DOMContentLoaded  end