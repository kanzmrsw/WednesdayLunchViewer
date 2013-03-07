var xhr = new XMLHttpRequest();
var url = 'http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=034fe3f2dd3b01bb7eea0a4ccf9fa27c&photoset_id=72157627697709381&&extras=date_taken%2Curl_s&format=rest';
xhr.open('GET', url, true);
xhr.send(null);
var photo;
var i;
var src;
var date;

xhr.onreadystatechange = function() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		var rsp = xhr.responseXML;
		photo = rsp.getElementsByTagName('photo');
		i = photo.length - 1;
		setPhoto(i);
	}
}

function setPhoto(i) {
	src = photo[i].attributes[8].value;
	date = photo[i].attributes[6].value.split(' ')[0];
	document.getElementById('l_img').src = src;
	document.getElementById('d_str').textContent = date;
	document.getElementById('d_area').style.visibility = "visible";

	if (i == 0) {
		document.getElementById('l_lt').style.visibility = "hidden";
	} else {
		document.getElementById('l_lt').style.visibility = "visible";
	}
	
	if (i == photo.length - 1) {
		document.getElementById('l_gt').style.visibility = "hidden";
	} else {
		document.getElementById('l_gt').style.visibility = "visible";
	}
}

document.addEventListener('DOMContentLoaded', function() {
	var lt = document.getElementById('l_lt');
	lt.addEventListener('click', function() {
		setPhoto(i - 1);
		i = i - 1;
	});
});

document.addEventListener('DOMContentLoaded', function() {
	var gt = document.getElementById('l_gt');
	gt.addEventListener('click', function() {
		setPhoto(i + 1);
		i = i + 1;
	});
});