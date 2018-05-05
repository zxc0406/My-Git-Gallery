//hover对应颜色变化
function changeColor(){
    var planPics=document.getElementsByClassName("planBox")[0].getElementsByTagName("div");
    var planWords=document.getElementsByClassName("planBoxWord")[0].getElementsByTagName("span");
    planPics[0].onmouseover=function(){
        planWords[0].style.color='aqua';
    }
    planPics[0].onmouseleave=function(){
        planWords[0].style.color='white';
    }
    planPics[1].onmouseover=function(){
        planWords[2].style.color='aqua';
    }
    planPics[1].onmouseleave=function(){
        planWords[2].style.color='white';
    }
    planPics[2].onmouseover=function(){
        planWords[4].style.color='aqua';
    }
    planPics[2].onmouseleave=function(){
        planWords[4].style.color='white';
    }
}


//hover时向上滑入
function slide(){
    var WO1=document.getElementsByClassName("WO1")[0];
    var WO2=document.getElementsByClassName("WO2")[0];
    var WOdown=document.getElementsByClassName("WOdown");
    WO1.onmouseover=function(){
        WOdown[0].style.bottom='0px';
    }
    WO1.onmouseleave=function(){
        WOdown[0].style.bottom='-35px';
    }
    WO2.onmouseover=function(){
        WOdown[1].style.bottom='0px';
    }
    WO2.onmouseleave=function(){
        WOdown[1].style.bottom='-35px';
    }
    
    /*function slideup(ele){
            ele.style.bottom='0px';
        }
        function slidedown(ele){
            ele.style.bottom='-35px';
    }*/
}
function changePiccolor(){
    var FSFlexBox=document.getElementsByClassName("FSFlex")[0].getElementsByTagName("div");
    var FSTrainBtn=document.getElementsByClassName("FSTrainBtn")[0];
    FSFlexBox[0].onmouseover=function(){
        this.getElementsByTagName("img")[0].src="photo/特色服务1.1.png";
        this.style.color="black";
        this.style.cursor="pointer";
    }
    FSFlexBox[0].onmouseleave=function(){
        this.getElementsByTagName("img")[0].src="photo/特色服务1.png";
        this.style.color="white";
    }
    FSFlexBox[1].onmouseover=function(){
        this.getElementsByTagName("img")[0].src="photo/特色服务2.1.png";
        this.style.color="black";
        this.style.cursor="pointer";
    }
    FSFlexBox[1].onmouseleave=function(){
        this.getElementsByTagName("img")[0].src="photo/特色服务2.png";
        this.style.color="white";
    }
    FSFlexBox[2].onmouseover=function(){
        this.getElementsByTagName("img")[0].src="photo/特色服务3.1.png";
        this.style.color="black";
        this.style.cursor="pointer";
    }
    FSFlexBox[2].onmouseleave=function(){
        this.getElementsByTagName("img")[0].src="photo/特色服务3.png";
        this.style.color="white";
    }
    
    FSTrainBtn.onmouseover=function(){
        this.style.backgroundColor="rgb(46,182,106)";
    }
    FSTrainBtn.onmouseleave=function(){
        this.style.backgroundColor="rgb(244,152,0)";
    }
}
function showCheck(){
    var optionList=document.getElementsByClassName("optionList")[0];
    var frame=optionList.getElementsByTagName("label");
    var SUForm=document.getElementsByClassName("SUForm")[0];
    var frame2=SUForm.getElementsByTagName("label");
    for(var i=0;i<frame.length;i++){
        frame[i].onclick=function(){
            if(this.getElementsByTagName("img")[0].style.display=="inline"){
                this.getElementsByTagName("img")[0].style.display="none";
            }
            else{
                this.getElementsByTagName("img")[0].style.display="inline";
            }
        }
    }
    for(var i=0;i<frame2.length;i++){
        frame2[i].onclick=function(){
            if(this.getElementsByTagName("img")[0].style.display=="inline"){
                this.getElementsByTagName("img")[0].style.display="none";
            }
            else{
                this.getElementsByTagName("img")[0].style.display="inline";
            }
        }
    }
}
function showMenu(){
    var sidebar=document.getElementsByClassName("sidebar")[0];
    var sidebar1=sidebar.getElementsByTagName("li")[0];
    sidebar1.onclick=function(){
        
        if(sidebar.style.height=='60px'){
            sidebar.style.height='300px';
            this.getElementsByTagName("img")[0].style.transform='rotateY(0deg)';
        }
        else if(sidebar.style.height!='60px'){
            sidebar.style.height='60px';
            this.getElementsByTagName("img")[0].style.transform='rotateY(360deg)';
        }
    }
}
function rotate(){
    var BPFlex=document.getElementsByClassName("BPFlex")[0];
    var BPFlexDiv=BPFlex.getElementsByTagName("div");
    for(var i=0;i<BPFlexDiv.length;i++){
        BPFlexDiv[i].onmouseover=function(){
            this.style.transform='rotateY(-360deg)';
        }
    }
}
addLoadEvent(changePiccolor)
addLoadEvent(changeColor);
addLoadEvent(slide);
addLoadEvent(showCheck);
addLoadEvent(showMenu);
addLoadEvent(rotate);