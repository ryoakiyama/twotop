// @author Tanigawa

$(function() {
	var $subNav = $('#local-navi-1');
	$('#global-navi-1').hover(function() {
		$subNav.stop().slideDown();
	}, function() {
		$subNav.stop().slideUp();
	});
});

$(function() {
	var $subNav = $('#local-navi-2');
	$('#global-navi-2').hover(function() {
		$subNav.stop().slideDown();
	}, function() {
		$subNav.stop().slideUp();
	});
});

$(function() {
	var $subNav = $('#local-navi-3');
	$('#global-navi-3').hover(function() {
		$subNav.stop().slideDown();
	}, function() {
		$subNav.stop().slideUp();
	});
});

$(function() {
	var $subNav = $('#local-navi-4');
	$('#global-navi-4').hover(function() {
		$subNav.stop().slideDown();
	}, function() {
		$subNav.stop().slideUp();
	});
});

$(function() {
	var $subNav = $('#local-navi-4');
	$('#local-navi-4').hover(function() {
		$subNav.stop().slideDown();
	}, function() {
		$subNav.stop().slideUp();
	});
});
