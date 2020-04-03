    function remLayout() {
            var w = document.documentElement.clientWidth;
            w = w > 768 ? 768 : w;
            w = w <= 320 ? 320 : w;
            document.documentElement.style.fontSize = w / 7.5 + 'px';
        } 
  var loader = new window.PxLoader();
  var fileList  = [
    'css/images/p1-1.png'
  ];
  //加载图片
  for (var i = 0; i < fileList.length; i++) {
        var pxImage = new PxLoaderImage(fileList[i]);
        pxImage.imageNumber = i + 1;
        // console.log(pxImage)
        loader.add(pxImage);
    }
   
loader.addProgressListener(function(e) {
        var percent = Math.floor(e.completedCount / e.totalCount * 100);
        $(".loadtext").html(percent + " %");

    });
 loader.addCompletionListener(function() {
       $("#loadpage").css({ display: 'none' });
       //程序开始
       swipergo();
       
})
loader.start(); 
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  var myVideos = document.getElementsByTagName('video');
  if(winWidth > 750){
  	var wx;
            	 wx=parseInt(winHeight*750/1206);
					      $('html,body').css({
					        'width':wx+'px',
					        'margin':'0 auto',
					        'height':winHeight+'px'
					      })
            }         
function swipergo(){
	   //设置高度尺寸
     remLayout();
      if(winWidth<750){
            	  $('html,body,.swiper-container,.swiper-slide').css({
      			 	       width:winWidth,
      			 	       height:winHeight
			           })
            }
		$('.swiper-container').css('display','block')
        var p62 = $('.p6-2').hasClass('scalebig');
        var mySwiper = new Swiper ('.swiper-container', {
	           direction: 'vertical',
	            loop: false,
	            freeMode : false,
	           mousewheelControl : true,
             touchRatio:0.8,
              spaceBetween: 0,
	           onInit: function(swiper){
	                 swiperAnimateCache(swiper);
	                 swiperAnimate(swiper);
	              },
	          onSlideChangeStart: function(swiper){
	                swiperAnimate(swiper);
                    var index = mySwiper.activeIndex;
                            for(i=0;i<myVideos.length;i++){
                              myVideos[i].pause();
                            }        

                    if(index==7){
                         $('.p6-2').removeClass('scalebig').hide();
                    }
                    else if(index==12){
                         $('#mask,#fxts').hide();
                    }
                    else{}
	            },
	           onSlideChangeEnd: function(swiper){ 
	                  // swiperAnimate(swiper);    
                    var index = mySwiper.activeIndex;
                    console.log(index)
                    if(winHeight < 620 ){
                          if(index==11 || index ==12) {
                                //设备适配
                                 console.log('short phone')
                                  $('.p8-0').css('top','-0.2rem')
                                  $('.p8-1').css('height','8.7rem')
                                  $('.jiyan').css({
                                    'top':'1.7rem',
                                    'height':  '6.8rem'
                                  }) 
                          }

                       }    
	            },
	            onTransitionEnd: function(swiper){	                 
	            },
	            watchSlidesProgress: true,	            
	            onSetTransition: function(swiper, speed) {
	                for (var i = 0; i < swiper.slides.length; i++){
	                  es = swiper.slides[i].style;
	                  es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
	                }
	              }
	        })
      }
 //音乐播放按钮
document.addEventListener('DOMContentLoaded', function () {
          function audioAutoPlay() {
              var audio = document.getElementById('audio');
                  audio.play();
              document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.invoke('getNetworkType',{}, function(e){document.getElementById('audio').play()})},false);
          }
          audioAutoPlay();
      });
        $('html,body').one('touchstart',function(){
          audio.play();
        });
        $("#audioPlay").on('click',function(){
        if(audio.paused){
            audio.play();
            $("#audioPlay").addClass('rotate');
        }else{
            audio.pause();
            $("#audioPlay").removeClass('rotate');
        }
    }); 


