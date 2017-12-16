$(window).load(function () {

var size = 1;
var button = 1;
var button_class = "gallery-header-center-right-links-current";
//var normal_size_class = "gallery-content-center-normal";
//var full_size_class = "gallery-content-center-full";
var $container = $('#gallery-content-center');
    
//$container.isotope({itemSelector : 'a'});											//核心isotope。动态排列所有a标签的元素
$container.isotope({ filter: '.all' });												//页面刷新后，只排列".all（没有".all"类名则不显示）"

function check_button(){
	$('.gallery-header-center-right-links').removeClass(button_class);
	if(button==1){
		$("#filter-all").addClass(button_class);											//添加过滤按钮的选中状态
//		$("#gallery-header-center-left-title").html('All Galleries');						//给左边某个元素加上个与分类名相同的名字，html中已去掉（需重新添加HTML）
		}
	if(button==2){
		$("#filter-studio").addClass(button_class);
//		$("#gallery-header-center-left-title").html('Studio Gallery');
		}
	if(button==3){
		$("#filter-landscape").addClass(button_class);
//		$("#gallery-header-center-left-title").html('Landscape Gallery');
		}	
}
	
//function check_size(){
//	$("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
//	if(size==0){
//		$("#gallery-content-center").addClass(normal_size_class); 													//添加normal尺寸模式类
//		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');				//换图标
//		}
//	if(size==1){																									//size默认为1
//		$("#gallery-content-center").addClass(full_size_class); 													//添加full尺寸模式类
//		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');				//换图标
//		}
//	$container.isotope({itemSelector : 'img'});
//}


	
$("#filter-all").click(function() { $container.isotope({ filter: '.all' }); button = 1; check_button(); });					
//核心isotope。对<div id="gallery-content-center">操作，使其下按类筛选的图片动态加载
$("#filter-studio").click(function() { $container.isotope({ filter: '.studio' }); button = 2; check_button();  });
$("#filter-landscape").click(function() { $container.isotope({ filter: '.landscape' }); button = 3; check_button();  });
//$("#gallery-header-center-left-icon").click(function() { if(size==0){size=1;}else if(size==1){size=0;} check_size(); });	
//size值的0/1转换，并重新check_size（换模式、换图标）

check_button();
//check_size();
});


//配合tiltfx（倾斜插件需要img父元有固定高），给img的父元素，即<a>，一个width和height，等于img的高和宽。
$(window).load(function () {
	$("#gallery-content-center img").each(function(){
		var aTest = $(this).height();
		$(this).parent().height(aTest);
	    
//	    var aTest2 = $(this).parent().height();
//	    console.log(aTest2+"px");
	});
});

//触发点击事件
$(function(){
	setTimeout(function () { $("#filter-all").click(); }, 1400);  
});
