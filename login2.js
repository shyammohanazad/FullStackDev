var rootprop=document.documentElement.style;
var mode=true;

function changeMode(){
    if (mode){
        darkMode();
    } else {
        lightMode();
    }
    mode=!mode
}

function lightMode(){
    rootprop.setProperty("--background","rgba(230,230,230)");
    rootprop.setProperty("--shadow1","rgba(184, 91, 20,0.5)");
    rootprop.setProperty("--shadow2","rgba(191, 165, 145,0.85)");
    rootprop.setProperty("--labelColor","black");
}

function darkMode(){
    rootprop.setProperty("--background","rgba(9 25 33)");
    rootprop.setProperty("--shadow1","rgba(0 0 0 / 45%)");
    rootprop.setProperty("--shadow2","rgba(255 255 255 / 12%)");
    rootprop.setProperty("--labelColor","rgba(255 255 255 / 59%)");

}