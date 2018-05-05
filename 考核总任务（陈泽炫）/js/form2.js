function loginSend(){
    
    //创建Ajax请求  
    function createXMLhttp() {  
    
        var xmlhttp;  
        if (window.XMLHttpRequest){  
            xmlhttp=new XMLHttpRequest();  
        }  
        else{  
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");  
        }  
        return xmlhttp;  
    }  


    function ajax(user,password) {  
        var xmlhttp = createXMLhttp();  
        
        //当请求得到响应时，执行的逻辑  
        xmlhttp.onreadystatechange=function(){  
            if (xmlhttp.readyState==4 && xmlhttp.status==200)  
            {  
                var logindata = JSON.parse(xmlhttp.responseText);  
                if(logindata.checkResult == null){  
                    alert("该用户不存在");  
                }else if (logindata.checkResult == true) {  
                    alert("登陆成功，点击按钮跳转");  
                    window.location.href="#Home";  
                }else if (logindata.checkResult == false){  
                    alert("密码输入错误");  
                }  
                
            }  
        }  
        
        //发送向指定url发送Ajax请求  
        var sendData = "User="+name+"&Password="+psw+"&t="+Math.random();//添加Math.random（）后缀消除缓存  
        var url = "loginJson.jsp?"+sendData;  
        
        xmlhttp.open("GET",url,true);  
        xmlhttp.send();  
    }  


    /*function check(userid,passwordid) {  
        var userString = document.getElementById(userid).value;  
        var password = document.getElementById(passwordid).value;  
        if (userString.length == 0) {  
            document.getElementById("inform").innerHTML="用户名不能为空";  
        } else if (password.length == 0) {  
            document.getElementById("inform").innerHTML="密码不能为空";  
        }else if(userString.length != 0 && password.length != 0){  
            //ajax(user,password);  
            if(!(/(^[1-9]\d*$)/.test(userString))){  
                document.getElementById("inform").innerHTML="用户名含有非法字符";//有其他字母或者符号型字符的存在  
            }else if((/(^[1-9]\d*$)/.test(userString))){  
                user = parseInt(userString);//将文本框中的‘整型’字符串转化为int  
                //alert(user+password);  
                ajax(user,password);  
            }  
            
        }  
    } */ 


    //去掉form后，input中的type=reset标签失效，只能在onclick中重写reset函数  
    /*function reset(userid,passwordid) {  
        var userString = document.getElementById(userid);  
        var password = document.getElementById(passwordid);  
        userString.value="";  
        password.value="";  
    }*/
}  