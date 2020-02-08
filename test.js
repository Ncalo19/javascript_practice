var content = document.getElementById("content"); //grabs content
var button = document.getElementById("show-more"); //grabs show more button

button.onclick = function(){ //when the button is clicked
    if(content.className == "open"){  //if the content's class name is open (in css):
        content.className = ""; //set the class name to "" (shrink the box)
        button.innerHTML = "Show More"; //change the button's text to show less
    } else{ //if the content's class name is not open (it is blank) (in css):
        content.className = "open" //set the class name to open (enlarge the box)
        button.innerHTML = "Show Less"; //change the button's text to show less
    }
}
