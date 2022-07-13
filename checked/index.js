document.getElementById("myButton").onclick = function() {
    const myCheckBox = document.getElementById("myCheckBox").checked;
    if(myCheckBox) {
        console.log("You are subscribed");
    }
    else{
        console.log("You are not subscribed");
    }
}