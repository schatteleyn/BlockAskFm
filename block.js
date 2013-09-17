var block = function() {
	var listLinks = document.getElementsByClassName('js-display-url');
	for (var i = listLinks.length - 1; i >= 0; i--) {
		if(listLinks[i].innerHTML.indexOf("ask.fm/a/") != -1) {
			listLinks[i].parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "none";
		}
	}
};

if (document.readyState == "complete") {
	block();

	var newTweet = document.getElementsByClassName('js-new-tweets-bar');

	newTweet.addEventListener("click", function() {
		block();	
	}, false);
}
