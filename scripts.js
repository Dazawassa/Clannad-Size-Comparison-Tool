//Could create a Javascript table instead but I hate Javascript so we are just cheating and doing the HTML.
//Javascript for the first character.
function changeImageLeft() {
    //Loads the table of characters.
    var character1 = document.getElementById("character1");
    //Gets the selected option.
    var dropdown1 = document.getElementById("dropdown1");
    //Sets the image as the selection.
    character1.src = dropdown1.value;
}

//Javascript for the second character. Comments above apply.
function changeImageRight() {
    var character2 = document.getElementById("character2");
    var dropdown2 = document.getElementById("dropdown2");
    character2.src = dropdown2.value;
}