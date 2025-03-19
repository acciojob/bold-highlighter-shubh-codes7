

function highlight() {
    //Write your code here
	document.querySelectorAll("strong").forEach(elm => {
		elm.style.color = "rgb(0, 128, 0)"
	})

}


function return_normal() {
    //Write your code here
	document.querySelectorAll("strong").forEach(elm => {
		elm.style.color = "rgb(0, 0, 0)"
	})
    
}
