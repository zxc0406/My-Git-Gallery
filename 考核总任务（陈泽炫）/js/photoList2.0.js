function photoList(){
    var pics = document.getElementsByClassName('pic'); 
        
      //为每个pic元素设置z-index的值 
      for(let i=0;i<pics.length;i++){ 
        pics[i].style.zIndex = pics.length-i; 
      } 
        
      //循环播放图片的函数 
      var loopPics = (function(){ 
        var index=0; 
        return function(pics,delay){ 
          var recall = function(pic){ 
            //给图片增加move类，调用css的transition属性播放移动动画 
            pic.className += ' move'; 
            setTimeout(function(){ 
              //取消图片的move类，图片返回原位 
              pic.className=pic.className.replace(' move',''); 
              //改变图片组的堆叠顺序。最外的图片放到最下面，其他图片依次向外移动 
              for(let i=0;i<pics.length;i++){ 
                if(pics[i].style.zIndex==pics.length){ 
                  pics[i].style.zIndex=1; 
                } else { 
                  pics[i].style.zIndex=pics[i].style.zIndex*1+1; 
                } 
              } 
              index++; 
              if(index==pics.length) index=0; 
              recall(pics[index]); 
            },delay); 
          }; 
          recall(pics[index]); 
        }; 
      })(); 
      //调用函数，循环播放。delay的时间需要大于等于css动画里设置的图片移动时间 
      loopPics(pics,2500);
}
addLoadEvent(photoList);