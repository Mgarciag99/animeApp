function view_panel(){
	container = document.getElementById("panel");
	const elementdiv = document.querySelector('#panel')
    const style = getComputedStyle(elementdiv)
   // console.log(style.display);

 		if (style.display === 'none') {
            document.getElementById('panel').style.display = "block";             
            document.getElementById('panel').style.animation= "view-rigth ease 1s backwards";
        
        } else if (style.display === 'block') {             
            document.getElementById('panel').style.display = "none";
        }
}



function closePanel(){
    document.getElementById('panel').style.display = "none";
    let body = document.querySelector("body");
    body.style.overflow = 'auto';
}
