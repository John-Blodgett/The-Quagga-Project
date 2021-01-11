function ColorChanger(document){
    if (document.body.style.background == "black"){
        document.body.style.background = "white";
        document.body.style.color = "black";
        return("Light Mode");
    }
    else{
        document.body.style.background = " rgb(53, 53, 53)";
        document.body.style.color = "white";
        return("Dark mode");
    }
}
module.exports = ColorChanger;