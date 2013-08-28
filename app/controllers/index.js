function OpenView() {
	$.belowView.visible = true;
	$.belowView.animate(createAnimationWithEvent("open", 150));
}

function ViewClick() {
	$.belowView.animate(createAnimationWithEvent("close", 390));
}

function createAnimationWithEvent(animationEvent, _top) {
	var animation = Ti.UI.createAnimation({
		top : _top,
		duration : 500,
	});
	animation.addEventListener('complete', function(event) {
		if (animationEvent == 'close') {
			$.belowView.visible = false;
		}
	});
	return animation;
}

$.index.open();
