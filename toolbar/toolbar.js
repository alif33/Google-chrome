var url = chrome.extension.getURL('toolbar.html');
var height = '35px';
var iframe = '<iframe src="'+url+'" id="myOwnCustomToolbar56778" height="35px" width=""></iframe>';
$('html').append(iframe);
$('body').css({
    '-webkit-transform' : 'translateY('+height+')'
});