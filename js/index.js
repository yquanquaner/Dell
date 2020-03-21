+function (){
	function loading(params) {

			var preload = new createjs.LoadQueue(false);
			preload.on("progress", handleProgress);
			preload.on("complete", handleComplete);
			preload.loadManifest(params);

			function handleProgress(event) {
				//监听加载进度
				var i = Math.round(event.loaded * 100);
				console.log(i * 3.11)
				$(".jdt").width(i * 3.11);
				$(".sl").width(i * 3.11);
			};

			function handleComplete(params) {
				//监听完成回调
				console.log("已加载完成");
				upqh();
				setTimeout(() => {
					$('.loadingf').hide();
					$(".swiper-container").css({opacity:1});
					play1();
					playup();
				}, 500)
			}
		}


		var imgarr = [
			"images/end/end_bj.jpg",
			"images/end/end_s1.png",
			"images/end/end_s2.png",
			"images/end/end_s3.png",
			"images/end/end_s4.png",
			"images/end/end_s5.png",
			"images/end/end_s6.png",
			"images/end/end_s7.png",
			"images/loading/loadingbg.jpg",
			"images/loading/loadingdn.png",
			"images/loading/loadingjz.png",
			"images/loading/loadingjzt.png",
			"images/loading/loadingsl.png",
			"images/to1/mc.png",
			"images/to1/to1_bj.jpg",
			"images/to1/to1_dl.png",
			"images/to1/to1_hld.png",
			"images/to1/to1_rw.png",
			"images/to1/to1_text.png",
			"images/to1/up.png",
			"images/to1/up2.png",
			"images/to2/to2_bj.jpg",
			"images/to2/to2_djg.jpg",
			"images/to2/to2_dtext.jpg",
			"images/to2/to2_gb.png",
			"images/to2/to2_rw.png",
			"images/to2/to2_text.png",
			"images/to2/to2_xjg.png",
			"images/to2/to2_xtext.png",
			"images/to2/to2_yz.png",
			"images/to2x/to2x_bj.jpg",
			"images/to2x/to2x_ck.jpg",
			"images/to2x/to2x_cp.png",
			"images/to2x/to2x_ftitle.png",
			"images/to2x/to2x_g1.png",
			"images/to2x/to2x_g2.png",
			"images/to2x/to2x_title.png",
			"images/to3/to3_bj.jpg",
			"images/to3/to3_hm.jpg",
			"images/to3/to3_pm.png",
			"images/to3/to3_rw.png",
			"images/to3/to3_text.png",
			"images/to3/to3_xw1.png",
			"images/to3/to3_xw2.png",
			"images/to3x/to3x_bj.jpg",
			"images/to3x/to3x_ck.png",
			"images/to3x/to3x_cp.png",
			"images/to3x/to3x_f1.png",
			"images/to3x/to3x_f2.png",
			"images/to3x/to3x_ftitle.png",
			"images/to3x/to3x_g1.png",
			"images/to3x/to3x_g2.png",
			"images/to3x/to3x_title.png",
			"images/to4/to4_bj.jpg",
			"images/to4/to4_fw1.png",
			"images/to4/to4_fw2.png",
			"images/to4/to4_fw3.png",
			"images/to4/to4_fw4.png",
			"images/to4/to4_fw5.png",
			"images/to4/to4_text.png",
			"images/to4x/to4x_bj.jpg",
			"images/to4x/to4x_ck.png",
			"images/to4x/to4x_cp.png",
			"images/to4x/to4x_f1.png",
			"images/to4x/to4x_f2.png",
			"images/to4x/to4x_ftitle.png",
			"images/to4x/to4x_g1.png",
			"images/to4x/to4x_g2.png",
			"images/to4x/to4x_g3.png",
			"images/to4x/to4x_title.png",
			"images/to5/to5_bj.jpg",
			"images/to5/to5_left1.png",
			"images/to5/to5_left2.png",
			"images/to5/to5_left3.png",
			"images/to5/to5_right1.png",
			"images/to5/to5_right2.png",
			"images/to5/to5_right3.png",
			"images/to5/to5_rw.png",
			"images/to5/to5_text.png",
			"images/to5x/to5x_bj.jpg",
			"images/to5x/to5x_ck.png",
			"images/to5x/to5x_cp.png",
			"images/to5x/to5x_f1.png",
			"images/to5x/to5x_f2.png",
			"images/to5x/to5x_ftitle.png",
			"images/to5x/to5x_g1.png",
			"images/to5x/to5x_g2.png",
			"images/to5x/to5x_title.png",
			"images/to6/to6_bj.jpg",
			"images/to6/to6_dl.png",
			"images/to6/to6_gb.png",
			"images/to6/to6_st.png",
			"images/to6/to6_t.png",
			"images/to6/to6_text.png",
			"images/to6/to6_xlx.png",
			"images/to6x/to6x_bj.jpg",
			"images/to6x/to6x_ck.png",
			"images/to6x/to6x_cp.png",
			"images/to6x/to6x_f1.png",
			"images/to6x/to6x_f2.png",
			"images/to6x/to6x_ftitle.png",
			"images/to6x/to6x_g1.png",
			"images/to6x/to6x_g2.png",
			"images/to6x/to6x_title.png",
			"images/to7/to7_bj.jpg",
			"images/to7/to7_r1.png",
			"images/to7/to7_r2.png",
			"images/to7/to7_r3.png",
			"images/to7/to7_r4.png",
			"images/to7/to7_r4z.png",
			"images/to7/to7_r5.png",
			"images/to7/to7_r5y.png",
			"images/to7/to7_text.png",
			"images/to7/to7_z1.png",
			"images/to7x/to7x_bj.jpg",
			"images/to7x/to7x_ck.png",
			"images/to7x/to7x_cp.png",
			"images/to7x/to7x_f1.png",
			"images/to7x/to7x_f2.png",
			"images/to7x/to7x_ftitle.png",
			"images/to7x/to7x_g1.png",
			"images/to7x/to7x_g2.png",
			"images/to7x/to7x_title.png",
			"images/to8/to8_bj.jpg",
			"images/to8/to8_p1.png",
			"images/to8/to8_p2.png",
			"images/to8/to8_tc.png",
			"images/to8/to8_text.png",
			"images/to8/to8_ty1.png",
			"images/to8/to8_ty2.png",
			"images/to8x/to8x_bj.jpg",
			"images/to8x/to8x_ck.png",
			"images/to8x/to8x_cp.png",
			"images/to8x/to8x_f1.png",
			"images/to8x/to8x_f2.png",
			"images/to8x/to8x_ftitle.png",
			"images/to8x/to8x_g1.png",
			"images/to8x/to8x_g2.png",
			"images/to8x/to8x_title.png",
		]
		loading(imgarr)

		var up = new TimelineMax();
		//进入江湖动画页时间轴动画
		function playup() {
			up.play(0)
			up.to(".to1_up", 1, {bottom: 25})
			up.repeat(-1);
		}
		
		var t1 = new TimelineMax();
		//进入江湖动画页时间轴动画
		function play1() {
			t1.play(0)
			t1.to(".to1_rw", 1, {left: 48})
			t1.to(".to1_rw", 1, {left: +1500,top: -700,opacity: 0})
			t1.to(".to1_dl", .7, {bottom: -200}, "-=1")
			t1.to(".to1_text", 1, {opacity: 1});
		}

		//霸道总裁动画页时间轴动画
		var t2 = new TimelineMax({paused:true});
		function play2(){
			t2.play(0);
			t2.to(".to2_dtext", 2, {height: 249,ease:SteppedEase.config(12)})
			t2.to(".to2_xdn", 2, {height: 81,ease:SteppedEase.config(10)}, "-=2")
			t2.to(".to2_xjg", .8, {opacity: 1,repeat: -1}, "-=2")
			t2.to(".to2_djg", .8, {opacity: 1,repeat: -1}, "-=0.8")
			t2.to(".to2_gb", 1, {css:{transform:'matrix3d(0.99185,0.127443,0,0,-0.127443,0.99185,0,0,0,4,2.27906,0,0,0,4,1)'},repeat: -1,yoyo:true}, "-=0.8")
			t2.to(".to2_text", 1, {opacity: 1},"+=1")
		}
		//霸道总裁详情页时间轴动画
		var t3 = new TimelineMax();
		function play3(){
			t3.play(0);
			t3.to(".to2x_title",2, {width: 526,ease:SteppedEase.config(10)})
			t3.to(".to2x_ftitle", 2, {top: -457,opacity: 1},"-=1")
			t3.to(".to2x_g1", .7, {left: -222}, "-=1")
			t3.to(".to2x_g2", .7, {left: -94}, "-=0.7")
			t3.to(".to2x_cp", 1, {opacity: 1}, "-=0.4")
		}
		
		//设计师动画页时间轴动画
		var t4 = new TimelineMax();
		var t4text = new TimelineMax();
		function play4(){
			t4.play(0);
			t4.to(".to3_hm",1,{scale:1.5})
			t4.to(".to3_hm",1,{scale:1})
			t4.to(".to3_xw2",1,{left:127},"-=2") 
			t4.to(".to3_xw2",1,{left:166},"-=1") 
			t4.to(".to3_xw1",1,{left:127},"-=2")
			t4.to(".to3_xw1",1,{left:193},"-=1") 
			t4.repeat(-1);
		}
		function play4text(){
			t4text.play(0);
			t4text.to(".to3_text", 1, {opacity: 1},"+=1")
		}
		
		//设计师详情页时间轴动画
		var t5 = new TimelineMax();
		function play5(){
			t5.play(0);
			t5.to(".to3x_title",2,{width:339,ease:SteppedEase.config(10)})
			t5.to(".to3x_ftitle",2,{top:-691,opacity:1},"-=1")
			t5.to(".to3x_g1",.7,{left:-243},"-=1") 
			t5.to(".to3x_g2",.7,{left:180},"-=.7") 
			t5.to(".to3x_cp",1,{opacity: 1},"-=.3")
			t5.to(".to3x_f1",1,{left:-378,opacity: 1},"-=.5") 
			t5.to(".to3x_f2",1,{left:354,opacity: 1},"-=.5") 
		}
		
		//码神动画页时间轴动画
		var t6 = new TimelineMax();
		var t6text = new TimelineMax();
		function play6(){
			t6.play(0);
			t6.to(".to4_fw1",.7,{opacity:1})
			t6.to(".to4_fw2",.7,{opacity:1})
			t6.to(".to4_fw3",.7,{opacity:1})
			t6.to(".to4_fw4",.7,{opacity:1})
			t6.to(".to4_fw5",.7,{opacity:1})
			t6.repeat(-1);
		}
		function play6text(){
			t6text.play(0);
			t6text.to(".to4_text",1,{opacity:1},"+=2")
		}
		
		//码神详情页时间轴动画
		var t7 = new TimelineMax();
		function play7(){
			t7.play(0);
			t7.to(".to4x_title",2,{width:526,ease:SteppedEase.config(10)})
			t7.to(".to4x_ftitle",2,{top:-692,opacity:1},"-=1")
			t7.to(".to4x_g1",.7,{left:-111},"-=1") 
			t7.to(".to4x_g2",.7,{left:204},"-=.7") 
			t7.to(".to4x_g3",.7,{left:153},"-=.5") 
			t7.to(".to4x_cp",1,{opacity: 1},"-=.3")
			t7.to(".to4x_f1",1,{left:-359,opacity: 1},"-=.5") 
			t7.to(".to4x_f2",1,{left:361,opacity: 1},"-=.5") 
		}
		
		//运营天团动画页时间轴动画
		var t8 = new TimelineMax();
		var t8text = new TimelineMax();
		function play8(){
			t8.play(0);
			t8.to(".to5_left1",.3,{opacity: 1})
			t8.to(".to5_right1",.3,{opacity: 1},"-=.3")
			t8.to(".to5_left1",.3,{opacity: 0})
			t8.to(".to5_right1",.3,{opacity: 0},"-=.3")
			t8.to(".to5_left2",.3,{opacity: 1}) 
			t8.to(".to5_right2",.3,{opacity: 1},"-=.3") 
			t8.to(".to5_left2",.3,{opacity: 0})
			t8.to(".to5_right2",.3,{opacity: 0},"-=.3") 
			t8.to(".to5_left3",.3,{opacity: 1}) 
			t8.to(".to5_right3",.3,{opacity: 1},"-=.3")
			t8.to(".to5_left3",.3,{opacity: 0})
			t8.to(".to5_right3",.3,{opacity: 0},"-=.3")
			t8.repeat(-1);
		}
		function play8text(){
			t8text.play(0);
			t8text.to(".to5_text",1,{opacity: 1},"+=1") 
		}
		
		
		//运营天团详情页时间轴动画
		var t9 = new TimelineMax();
		function play9(){
			t9.play(0);
			t9.to(".to5x_title",2,{width:526,ease:SteppedEase.config(10)})
			t9.to(".to5x_ftitle",2,{top:-692,opacity:1},"-=1")
			t9.to(".to5x_g1",.7,{left:-81},"-=1") 
			t9.to(".to5x_g2",.7,{left:49},"-=.7")  
			t9.to(".to5x_cp",1,{opacity: 1},"-=.3")
			t9.to(".to5x_f1",1,{left:-326,opacity: 1},"-=.5") 
			t9.to(".to5x_f2",1,{left:325,opacity: 1},"-=.5") 
		}
		
		//金刚腿动画页时间轴动画
		var t10 = new TimelineMax();
		function play10(){
			t10.play(0);
			t10.to(".to6_t",.3,{rotation:0},"+=.2")
			 t10.to(".to6_dl",.3,{opacity:1})
			 t10.to(".to6_text",1,{opacity:1})
		};
		
		//金刚腿详情页时间轴动画
		var t11 = new TimelineMax();
		function play11(){
			t11.play(0);
			t11.to(".to6x_title",2,{width:483,ease:SteppedEase.config(10)})
			t11.to(".to6x_ftitle",2,{top:-674,opacity:1},"-=1")
			t11.to(".to6x_g1",.7,{left:-19},"-=1") 
			t11.to(".to6x_g2",.7,{left:139},"-=.7")  
			t11.to(".to6x_cp",1,{opacity: 1},"-=.3")
			t11.to(".to6x_f1",1,{left:-326,opacity: 1},"-=.5") 
			t11.to(".to6x_f2",1,{left:325,opacity: 1},"-=.5") 
		}
		
		//IT掌门动画页时间轴动画
		var t12 = new TimelineMax();
		var t12text = new TimelineMax();
		function play12(){
			t12.play(0);
			t12.to(".to7_r1",.7,{opacity:1})
			t12.to(".to7_r3",.7,{opacity:1})
			t12.to(".to7_r4",.7,{opacity:1})
			t12.to(".to7_r5",.7,{opacity:1})
			t12.repeat(-1);
		};
		function play12text(){
			t12text.play(0);
			t12text.to(".to7_text",1,{opacity:1},"+=1.2")
		}
		
		//IT掌门详情页时间轴动画
		var t13 = new TimelineMax();
		function play13(){
			t13.play(0);
			t13.to(".to7x_title",2,{width:483,ease:SteppedEase.config(10)})
			t13.to(".to7x_ftitle",2,{top:-674,opacity:1},"-=1")
			t13.to(".to7x_g1",.7,{left:-68},"-=1") 
			t13.to(".to7x_g2",.7,{left:152},"-=.7")  
			t13.to(".to7x_cp",1,{opacity: 1},"-=.3")
			t13.to(".to7x_f1",1,{left:-326,opacity: 1},"-=.5") 
			t13.to(".to7x_f2",1,{left:325,opacity: 1},"-=.5") 
		}
		
		//空想动画页时间轴动画
		var t14 = new TimelineMax();
		var t14text = new TimelineMax();
		var t14ty = new TimelineMax();
		function play14(){
			t14.play(0);
			t14.to(".to8_tc",.7,{opacity:1,repeat:-1})
			t14.to(".to8_tc",.7,{opacity:0,repeat:-1})
			t14.to(".to8_p1",.7,{opacity:1})
			t14.to(".to8_p2",.7,{opacity:1})
			t14.to(".to8_ty1",.7,{opacity:1})
			t14.to(".to8_ty2",1.2,{width:750})
		};
		function play14text(){
			t14text.play(0);
			t14text.to(".to8_text",1,{opacity:1},"+=5")
		}
		function play14ty(){
			t14ty.play(0);
			t14ty.to(".to8_ty1",.7,{top:-25})
			t14ty.to(".to8_ty2",.7,{top:-25},"-=.7")
			t14ty.to(".to8_ty1",.7,{top:0})
			t14ty.to(".to8_ty2",.7,{top:0},"-=.7")
			t14ty.repeat(-1)
		}
		
		//空想详情页时间轴动画
		var t15 = new TimelineMax();
		function play15(){
			t15.play(0);
			t15.to(".to8x_title",2,{width:526,ease:SteppedEase.config(10)})
			t15.to(".to8x_ftitle",2,{top:-690,opacity:1},"-=1")
			t15.to(".to8x_g1",.7,{left:-76},"-=1") 
			t15.to(".to8x_g2",.7,{left:83},"-=.7")  
			t15.to(".to8x_cp",1,{opacity: 1},"-=.3")
			t15.to(".to8x_f1",1,{left:-326,opacity: 1},"-=.5") 
			t15.to(".to8x_f2",1,{left:325,opacity: 1},"-=.5") 
		}
		
		//end动画页时间轴动画
		var t16 = new TimelineMax();
		function play16(){
			t16.play(0);
			t16.to(".end_s1",.7,{scale:1.1})
			t16.to(".end_s1",.7,{scale:1})
			t16.to(".end_s2",.7,{scale:1.1},"-=.7")
			t16.to(".end_s2",.7,{scale:1})
			t16.to(".end_s3",.7,{scale:1.1},"-=.7")
			t16.to(".end_s3",.7,{scale:1})
			t16.to(".end_s4",.7,{scale:1.1},"-=.7")
			t16.to(".end_s4",.7,{scale:1})
			t16.to(".end_s5",.7,{scale:1.1},"-=.7")
			t16.to(".end_s5",.7,{scale:1})
			t16.to(".end_s6",.7,{scale:1.1},"-=.7")
			t16.to(".end_s6",.7,{scale:1})
			t16.to(".end_s7",.7,{scale:1.1},"-=.7")
			t16.to(".end_s7",.7,{scale:1})
			t16.repeat(-1)
		};
		
		var myswiper = new Swiper('.swiper-container', {
			resistanceRatio : 0, //swiper边缘抵抗力为0
			direction: 'vertical', //垂直切换选项
			loop: false, //循环模式选项
			on: {
				init: function() {
					play1();
				},
				slideChange: function() {
					if (this.activeIndex == 0) {
						play1();
						t2.pause(0);
						t2.clear();
					} else if (this.activeIndex == 1) {
						t1.pause(0);
						t1.clear();
						play2();
						t3.pause(0);
						t3.clear();
					} else if (this.activeIndex == 2){
						t2.pause(0);
						t2.clear();
						play3();
						t4.pause(0);
						t4.clear();
						t4text.pause(0);
					} else if(this.activeIndex == 3){
						t3.pause(0);
						t3.clear();
						play4();
						play4text();
						t5.pause(0);
						t5.clear();
					} else if(this.activeIndex == 4){
						t4.pause(0);
						t4.clear();
						t4text.pause(0);
						t4text.clear();
						play5()
						t6.pause(0);
						t6.clear();
						t6text.pause(0);
						t6text.clear();
					} else if(this.activeIndex == 5){
						t5.pause(0);
						t5.clear();
						play6()
						play6text()
						t7.pause(0);
						t7.clear();
					} else if(this.activeIndex == 6){
						t6.pause(0);
						t6.clear();
						t6text.pause(0);
						t6text.clear();
						play7()
						t8.pause(0);
						t8.clear();
						t8text.pause(0);
						t8text.clear();
					} else if(this.activeIndex == 7){
						t7.pause(0);
						t7.clear();
						play8();
						play8text();
						t9.pause(0);
						t9.clear();
					} else if(this.activeIndex == 8){
						t8.pause(0);
						t8.clear();
						t8text.pause(0);
						t8text.clear();
						play9()
						t10.pause(0);
						t10.clear();
					} else if(this.activeIndex == 9){
						t9.pause(0);
						t9.clear();
						play10();
						t11.pause(0);
						t11.clear();
					} else if(this.activeIndex == 10){
						t10.pause(0);
						t10.clear();
						play11()
						t12.pause(0);
						t12.clear();
						t12text.pause(0);
						t12text.clear();
					} else if(this.activeIndex == 11){
						t11.pause(0);
						t11.clear();
						play12();
						play12text();
						t13.pause(0);
						t13.clear();
					} else if(this.activeIndex == 12){
						t12.pause(0);
						t12.clear();
						t12text.pause(0);
						t12text.clear();
						play13();
						t14.pause(0);
						t14.clear();
						t14text.pause(0);
						t14text.clear();
						t14ty.pause(0);
						t14ty.clear();
					} else if(this.activeIndex == 13){
						t13.pause(0);
						t13.clear();
						play14();
						play14text();
						play14ty();
						t15.pause(0);
						t15.clear();
					} else if(this.activeIndex == 14){
						t14.pause(0);
						t14.clear();
						t14text.pause(0);
						t14text.clear();
						play15();
						t16.pause(0);
						t16.clear();
						$(".to1_up").show();
					} else if(this.activeIndex == 15){
						t15.pause(0);
						t15.clear();
						play16()
						$(".to1_up").hide();
					}
					upqh();
				}
			},
		});
		
		function upqh(){
				if(myswiper.activeIndex != 0){
					$(".to1_up").css("background","url(images/to1/up2.png)center center no-repeat");
				}else {
					$(".to1_up").css("background","url(images/to1/up.png)center center no-repeat");
				}
		};
		
		var music = document.getElementById("mp3");
		document.addEventListener("WeixinJSBridgeReady", function () {
					 music.play();
				 }, false);
		function mcqh(e){
			if(e.target.className == "to1_mc"){
				$(".to1_mc").attr("class","to1_mc2");
				music.pause();
			}else {
				$(".to1_mc2").attr("class","to1_mc");
				music.play();
			}
		}
		$(".to1_mc").click((e)=>{mcqh(e)});
		$(".to1_mc2").click((e)=>{mcqh(e)});
		
		
}()