window.onload=prepareGallery;
return false;
function prepareGallery(){
    var find=document.getElementById("choose");
    var links=find.getElementsByTagName("a");
    var finddiv=document.getElementById("screenall");
    var change=finddiv.getElementsByTagName("div")
    for(var i=0;i<links.length;i++)
        {
            links[i].onclick=function(){            
                function changeScreen(this);
                return !changeScreen(this);
            }
        }
    }
function changeScreen(whichscreen){
            var b=change[i].getAttribute("id");
            var screen=document.getElementById("screen");
            screen.setAttribute("id",b);
            change[i].style.opacity=1.0;
            return true;
}