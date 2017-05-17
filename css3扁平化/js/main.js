;$(function() {
	var sidebar = $('#sidebar'),//选择侧栏
		mask = $('.mask'),//选择mask
		backButton = $('.back-top'),//选择返回菜单
		sidebar_trigger = $('#sidebar_trigger');//选择侧栏触发器

		function showSideBar(){//显示侧栏
			mask.fadeIn();//显示mask
			sidebar.css('right',0);//调整侧栏相关的css
			//sidebar.css('transform','translate(0,0)');//另一种方法
		}
		function hideSideBar(){//影藏侧栏
			mask.fadeOut();//影藏mask
			sidebar.css('right',-sidebar.width());//调整侧栏相关的css
			//sidebar.css('transform','translate('+ sidebar.width() + 'px' + ', 0)');/另一种方法
		}

		sidebar_trigger.on('click',showSideBar)//监听侧栏触发器点击事件
		mask.on('click',hideSideBar)//监听mask点击事件
		backButton.on('click',function(){//监听返回按钮点击事件
			$('html,body').animate({
				scrollTop:0
			},800)
		})

		$(window).on('scroll',function(){//监听window的scroll事件
			//如果已滚动的部分高于窗口的高度；
			if($(window).scrollTop() > $(window).height()-500)
				//显示返回按钮
				backButton.fadeIn();
				//否则影藏返回按钮
			else
				backButton.fadeOut();			
				
			})

		//触发scroll事件
		$(window).trigger('scroll');
})