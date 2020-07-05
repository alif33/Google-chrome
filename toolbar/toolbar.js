var url = chrome.extension.getURL('toolbar.html');
var iframe = '<iframe src="'+url+'" id="myOwnCustomToolbar56778" height="35px" width=""></iframe>';
$('body').append(iframe);