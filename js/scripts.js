
//READY FUNCTION
$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    sectionsColor: ['#aad69c', '#aad69c', '#aad69c', '#aad69c', '#aad69c', '#aad69c', '#aad69c', '#aad69c', '#aad69c', '#aad69c'],
			loopBottom: true
	});
	$('.title-tipso').tipso({
		speed       : 400,
    background  : '#55b555',
    color       : '#ffffff',
    position    : 'top',
    width       : 200,
    delay       : 200,
    offsetX     : 0,
    offsetY     : 0,
    content     : null,
    useTitle    : true,
    onShow      : null,
    onHide      : null
	});
});




$(function () {
    $('#slickQuiz').slickQuiz({
        // options
    });
});
