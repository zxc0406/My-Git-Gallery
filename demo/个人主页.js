window.onload=prepareGallery;
//预备函数
function prepareGallery(){
    var support=document.getElementsByTagName&&document.getElementsByClassName;
    if(!support) return false
    var gallery=document.getElementsByClassName("imagegallery");
    var links=gallery[0].getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        links[i].onclick=function(){
            showPic(this);
            return !showPic(this);
        }
    }
}
function showPic(whichpic){
    if(!document.getElementsByClassName("holder")) return false;
    var source=whichpic.getAttribute("href");
    var holder=document.getElementsByClassName("holder");
    holder[0].setAttribute("src",source);
    if(document.getElementsByClassName("description"))
    {
        var text=whichpic.getAttribute("title");
        var description=document.getElementsByClassName("description");
        description[0].firstChild.nodeValue=text;
    }
    return true;
}

var input=document.getElementsByTagName("textarea");
var orign=input[0].firstChild.nodeValue;
input[0].onclick=function(){
    input[0].firstChild.nodeValue="";
}
input[0].onmouseout=function(){
    input[0].firstChild.nodeValue=orign;
}
