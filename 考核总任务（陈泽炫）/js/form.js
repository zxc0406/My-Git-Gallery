/*function ajax_method(url, data, method, success) {
    // 异步对象
    var ajax = new XMLHttpRequest(); // get 跟post 需要分别写不同的代码
    if (method == 'get') { // get请求
        if (data) { // 如果有值
            url += '?';
            url += data;
        } else {} // 设置 方法 以及 url
        ajax.open(method, url); // send即可
        ajax.send();
    } else { // post请求// post请求 url 是不需要改变
        ajax.open(method, url); // 需要设置请求报文
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // 判断data send发送数据
        if (data) { // 如果有值 从send发送
            ajax.send(data);
        } else { // 木有值 直接发送即可
            ajax.send();
        }
    } // 注册事件
    ajax.onreadystatechange = function () { // 在事件中 获取数据 并修改界面显示
        if (ajax.readyState == 4 && ajax.status == 200) { //
            console.log(ajax.responseText); // 将 数据 让 外面可以使用//
            return ajax.responseText; // 当 onreadystatechange 调用时 说明 数据回来了//
            ajax.responseText; // 如果说 外面可以传入一个 function 作为参数 success
            success(ajax.responseText);
        }
    }
}*/
var idInput=document.getElementsByClassName("idInput")[0];
var pswInput=document.getElementsByClassName("pswInput")[0];
var idRegister=document.getElementsByClassName("idRegister")[0];
var pswRegister=document.getElementsByClassName("pswRegister")[0];
var pswAgain=document.getElementsByClassName("pswAgain")[0];
var errorText=document.getElementsByClassName("errorText")[0];
var errorText2=document.getElementsByClassName("errorText2")[0];
//输入验证
function input(){
    idInput.onfocus=function(){
        if(idInput.value=='用户名'){
            idInput.value='';
        }
    }
    idInput.onblur=function(){
        if(idInput.value==''){
            idInput.value+='用户名';
        }
    }
    pswInput.onfocus=function(){
        pswInput.type='password';
        if(pswInput.value=='密码'){
            pswInput.value='';
        }
    }
    pswInput.onblur=function(){
        if(pswInput.value==''){
            pswInput.value+='密码';
            pswInput.type='text';
        }
        if(pswInput.value.length>=5){
            errorText.innerHTML='';
        }
        else if(pswInput.value.length<5){
            errorText.innerHTML='密码不得少于5个字符';
        }
    }
    idRegister.onfocus=function(){
        if(idRegister.value=='用户名'){
            idRegister.value='';
        }
    }
    idRegister.onblur=function(){
        if(idRegister.value==''){
            idRegister.value+='用户名';
        }
    }
    pswRegister.onfocus=function(){
        pswRegister.type='password';
        if(pswRegister.value=='密码'){
            pswRegister.value='';
        }
    }
    pswRegister.onblur=function(){
        if(pswRegister.value==''){
            pswRegister.value+='密码';
            pswRegister.type='text';
        }
        if(pswRegister.value.length>=5){
            errorText2.innerHTML='';
        }
        else if(pswRegister.value.length<5){
            errorText2.innerHTML='密码不得少于5个字符';
        }
    }
    pswAgain.onfocus=function(){
        pswAgain.type='password';
        if(pswAgain.value=='确认密码'){
            pswAgain.value='';
        }
    }
    pswAgain.onblur=function(){
        if(pswAgain.value==''){
            pswAgain.value+='确认密码';
            pswAgain.type='text';
        }
        else if(pswAgain.value!=pswRegister.value);
        errorText2.innerHTML='两次输入密码不同';
    }
}
//数据传输
function loginSend(){
    /*if(errorText.value!=''){
        alert("信息填写有误");
        return;
    }
    else{*/
    var xml;
    if(window.XMLHttpRequest){
        xml=new XMLHttpRequest(); 
    }
    else{
        xml=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xml.onreadystatechange=function(){
        if (xml.readyState==4 && xml.status==200){
            alert("登陆成功");
        }
    }
    xml.open("POST","http://127.0.0.1:2344?name&psw",true);
    xml.send();
    
    
    /*
    $ajax({
        type:"POST",//方法类型
        dataType:"json",//服务器返回数据的类型
        url:"http://127.0.0.1:2234/login",//url
        data:$('#loginForm').serialize(),
        success:function(result){
            console.log(result);//打印服务器返回数据（调试）
            if(result.code==200){
                alert("登陆成功");
                window.location.href="#Home";
            };
            if(result.code==400){
                alert("密码错误")
            }
        },
        error: function(){
            alert("请求未发出");
        }
    });*/

    var Ajax={
        /*get: function(url, fn) {
            var xhr = new XMLHttpRequest();  // XMLHttpRequest对象用于在后台与服务器交换数据          
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { // readyState == 4说明请求已完成
                    fn.call(this, xhr.responseText);  //从服务器获得数据
                }
            };
            xhr.send();
        },*/
        post: function (url, data, fn) {         // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  // 添加http头，发送信息至服务器时内容编码类型
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {  // 304未修改
                    fn.call(this, xhr.responseText);
                }
            };
            xhr.send(data);
        }
    }
















}
function registerSend(){
    if(errorText2.value!=''){
        alert("信息填写有误");
        return;
    }
    else{
        function register(){
            $ajax({
                type:"POST",
                dataType:"json",
                url:"http://127.0.0.1:2234/register",
                data: $('#registerForm').serialize(),
                success: function(result){
                    console.log(result);
                    if(result.code==200){
                        alert("注册成功，请登陆");
                        window.location.href="#login";
                    };
                    if(result.code==400){
                        alert("此账户已存在");
                    }
                },
                error:function(){
                    alert("请求未发出");
                }
            });
        }
    }
}
addLoadEvent(input);