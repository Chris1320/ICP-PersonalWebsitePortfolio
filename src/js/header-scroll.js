window.onscroll = function() {scrollFunction();};

/*
 * This function applies the `hidden` class to `header-title` ID
 * when the user scrolls 80 pixels down.
 */
function scrollFunction()
{
    var header_title = document.getElementById("header-title");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    {header_title.classList.add("hidden");}
    else {header_title.classList.remove("hidden");}
}
