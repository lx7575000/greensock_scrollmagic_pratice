function addScrollMagic () {
	var controller = new ScrollMagic.Controller();

	//SCENE 1

	var scene1 = new ScrollMagic.Scene({
		triggerElement: '#native',
		triggerHook: 'onEnter',
		duration: '70%'
	})
	.setTween("#background-opacity", {backgroundColor: "rgba(31, 30, 52, 1)"});
	scene1.addTo(controller);

	var scene2 = new ScrollMagic.Scene({
		triggerElement: "#native",
		triggerHook: "onEnter",
		duration: '100%'
	}).addTo(controller)
	  .setTween("#iphone-overlay", 1, {width: "50%", y: 0});

	  var scene3 = new ScrollMagic.Scene({
	  	triggerElement: '#touch',
	  	triggerHook: 'onEnter',
	  	duration: "100%"
	  }).addTo(controller)
	  	.addIndicators({name: "pin iphone"})
	  	.setPin("#iphone-overlay");
}


function animateLogo() {
    TweenMax.fromTo("#react-logo", 2, {
        // from
        css: {
        	transform: "translate(0, -20px)",
        }
    }, {
        // to
        css: {
        	transform: "translate(0, 20px)",
        },

        // 永久重复动画的选项
        repeat: -1,

        // 反转、重新运行动画的选项
        yoyo: true,

        // 改变 easing 类型
        ease: Power2.easeInOut,
    });
}


function animateRobot () {
	var robot = new TimelineMax({yoyo: true, repeat: -1});
	robot.fromTo('#android-robot', 1, {
		css: {
			rotation: "-30deg",
		}
	},{
		css: {
			rotation: "-60deg",
		}
	});
}

function updateSliderControl() {
  // 获得所有的 slider 链接
  var links = document.querySelectorAll("#slider-control a")

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    // 获取被链接指向的部分
    var name = link.getAttribute('href');
    // console.log('name ' + name );
    var section = document.querySelector(name);
    var sectionTop =  section.offsetTop;
	var sectionBottom =  section.offsetHeight + section.offsetTop;

    // 检查 window.scrollY 是否在这部分中
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}



function scrollToElement(element) {
  var topOfElement = element.offsetTop;

  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut,
  });
}

function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a");
  for(var i = 0; i < links.length; i++) {
        var link = links[i];

        link.addEventListener("click",function(event) {

            event.preventDefault();

            var href = document.querySelector(this.getAttribute('href'));

            scrollToElement(href);
        });  
  }
}






// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
  // ...
  updateSliderControl();
}

window.onload = function() {
    animateLogo();
    animateRobot();
    updateSliderControl();
    addSmoothScrolling();
    addScrollMagic ()
};
