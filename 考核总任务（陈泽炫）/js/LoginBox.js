//点击登陆，生成登陆框
        /*var sinIn=document.getElementsByClassName("topRight")[0].getElementsByTagName("a")[0];
        sinIn.onclick=function(){
            var sinInBox=document.createElement("div");
            body.appendChild("sinInBox");
            var sinInForm=document.createElement("form");
            sinInBox.appendChild("sinInForm");
            var sinInName=document.createElement("input");
            var sinInPsw=document.createElement("input");
            sinInBox.appendChild("sinInName");
            sinInBox.appendChild("sinInPsw");
        }*/
        function loginBox(){
            document.getElementsByClassName("showLogin")[0].onclick=showLoginBox;
            document.getElementsByClassName("ToRegister")[0].onclick=gotoRegister;
            document.getElementsByClassName("ToLogin")[0].onclick=gotoLogin;
            document.getElementsByClassName("loginClose")[0].onclick=closeLogin;
            document.getElementsByClassName("registerClose")[0].onclick=closeRegister;
            // document.getElementsByClassName("firstLine")[0].onmousedown=moveLogin;
        }
        /*显示登陆窗口*/
        function showLoginBox(){
            loginBox=document.getElementsByClassName("loginBox")[0];
            loginCover=document.getElementsByClassName("loginCover")[0];
            loginBox.style.display="block";
            loginBox.style.opacity='1';
            loginCover.style.display="block";
            document.body.parentNode.style.overflow = "hidden"
        }
        /*关闭登陆窗口*/
        function closeLogin(){
            // var loginBox=document.getElementsByClassName("loginBox")[0];
            // var loginCover=document.getElementsByClassName("loginCover")[0];
            loginBox.style.display="none";
            loginCover.style.display="none";
            document.body.parentNode.style.overflow = "auto";
        }
        function closeRegister(){
            registerBox=document.getElementsByClassName("registerBox")[0];
            registerBox.style.display='none';
            loginCover.style.display="none";
            document.body.parentNode.style.overflow = "auto";
        }
        /*显示注册框*/
        function gotoRegister(){
            var registerBox=document.getElementsByClassName("registerBox")[0];
            var loginBox=document.getElementsByClassName("loginBox")[0];
            loginBox.style.opacity='0';
            setTimeout(() => {
                loginBox.style.display='none';
                registerBox.style.display='block';
                registerBox.style.opacity='1';
            }, 1000);
        }
        function gotoLogin(){
            var registerBox=document.getElementsByClassName("registerBox")[0];
            var loginBox=document.getElementsByClassName("loginBox")[0];    
            registerBox.style.opacity='0';
            setTimeout(() => {
                registerBox.style.display='none';
                loginBox.style.display='block';
                loginBox.style.opacity='1';
            }, 1000);
        }
        
        /*移动窗口
        function moveLogin(){
            var moveable=true;
            //获取事件源
            event=event?event:window.event;
            var clientX=event.clientX;
            var clientY=event.clientY;
            var loginBox=document.getElementsByClassName("loginBox")[0];
            console.log(loginBox);
            var top=parseInt(loginBox.style.top);
            var left=parseInt(loginBox.style.left);
            //鼠标拖动
            document.onmousemove=function(event){
                if(moveable){
                    event=event?event:window.event;
                    var y=top+event.clientY-clientY;
                    var x=left+event.clientX-clientX;
                    if(x>0 && y>0){
                        loginBox.style.top=y+"px";
                        loginBox.style.left=x+"px";
                    }
                }
            }
            document.onmouseup=function(){
                moveable=false;
            }
        }*/
        addLoadEvent(loginBox);