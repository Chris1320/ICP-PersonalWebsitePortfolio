var zoomed_in = false;

/*
* This function will zoom the image when it is clicked.
*/
function zoomImage()
{
    const target_image = document.querySelector(".gallery-viewer img");
    const hint = document.querySelector(".hint");
    if (hint) hint.remove();  // Remove if hint exists.
    if (zoomed_in) {target_image.classList.remove("zoomed-in");}
    else {target_image.classList.add("zoomed-in");}
    zoomed_in = !zoomed_in;
}
