/*企业案例弹出*/
function showCase(){
    var case1=document.getElementsByClassName("caseLogo1")[0];
    var case2=document.getElementsByClassName("caseLogo2")[0];
    var caseFrame=document.getElementsByClassName("caseFrame")[0];
    var caseCover=document.getElementsByClassName("caseFrameShadow")[0];
    var photo=caseFrame.getElementsByClassName("casePhoto")[0];
    var close=document.getElementsByClassName("closeCase")[0];
    case1.onclick=function(){
        // caseFrame.style.display='block';
        // caseCover.style.display='block';
        caseCover.style.left='50%';
        caseFrame.style.left='50%';        
        photo.src=this.src;
        document.body.parentNode.style.overflow = "hidden";
    }
    case2.onclick=function(){
        caseCover.style.left='50%';
        caseFrame.style.left='50%';
        photo.src=this.src;
        document.body.parentNode.style.overflow = "hidden";
    }
    close.onclick=function(){
        caseCover.style.left='-100%';
        caseFrame.style.left='-100%';
        document.body.parentNode.style.overflow = "auto";
        
    }
    
}
addLoadEvent(showCase);