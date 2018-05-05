function photoList(){
    var photoContain=document.getElementsByClassName("photolistContain")[0];
    var imgs=photoContain.getElementsByTagName("img");
    var spans=photoContain.getElementsByTagName("span");
    var btnLeft=document.getElementById("prev");
    var btnRight=document.getElementById("next");
    var pics=document.getElementsByClassName('pic');
    var scrollMove;
    var count;
    
    function InitMove(index){
            for(var i=0;i<imgs.length;i++){
                imgs[i].style.opacity='0';
                //imgs[i].style.left='-100%';
                spans[i].style.background='white';
                //初始化，隐藏图片
            }
            imgs[index].style.opacity='1';
            //imgs[index].style.left='0';
            spans[index].style.background='grey';
            //显示当前图片，和对应圆点
    }
    count=1;
    //播放下一张图片
    function fMove(){
        if(count==imgs.length){
            count=0;
        }
        InitMove(count);
        count++;
    }
    scrollMove=setInterval(fMove,4000);
    //定时器。每2.5秒执行一次函数
    //播放上一张图片
    //点击播放上，下一张图
    function prev(){
        clearInterval(scrollMove);//清除计时器
        if(count==0){
            count=imgs.length;
        }
        count--;
        InitMove(count);
        scrollMove=setInterval(fMove,2500);//重置计时器
    }
    //播放下一张图片
    function next(){
        clearInterval(scrollMove);
        fMove();
        scrollMove=setInterval(fMove,2500);
    }
    btnLeft.onclick=prev;
    btnRight.onclick=next;
    //点击相应按钮显示相应图片
    for(var i=0;i<spans.length;i++){
        (function(i){
            spans[i].onclick=function(){
                var clickIndex=parseInt(this.getAttribute('index'));
                count=clickIndex-1;
                InitMove(count);
            }
        })(i)
    }
}
addLoadEvent(photoList);