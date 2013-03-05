var xhr = new XMLHttpRequest();
var url = 'http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=034fe3f2dd3b01bb7eea0a4ccf9fa27c&photoset_id=72157627697709381&extras=url_s&format=rest';
xhr.open('GET', url, true);
xhr.send(null);
var photo;

xhr.onreadystatechange = function() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		var rsp = xhr.responseXML;
		photo = rsp.getElementsByTagName('photo');
		var src = photo[photo.length - 1].attributes[6].value;
		document.getElementById('l_img').src = src;
	}
}