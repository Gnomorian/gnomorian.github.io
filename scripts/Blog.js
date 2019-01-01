/* 
	Made by William Cameron January 2018
	looks through the ./blog directory for all the blog entry files and adds them to the blog-root div
	//TODO: add filtering so only the latest are shown, perhaps add tags, so you can sort by only those tags.
*/

var count = 0;
var request = new XMLHttpRequest();

function getBlogEntries() {
	request.open('GET', 'blog/'+count, true);
	request.send(null);
	request.onreadystatechange = function () {
		var blog = document.getElementById("blog-root");
		if(request.readyState === 4) {
			switch(request.status)
			{
				case 304:
				case 200:
					blog.innerHTML = "<div class=\"project\">" + request.responseText + "</div>" + blog.innerHTML;
					count++;
					getBlogEntries();
					break;
				case 404:
				{
					blog.innerHTML += "<a href=\"#\"><img id=\"backtotop\" src=\"images/backtotop.png\"></img></a>";
				}
					break;
				default:
					alert("status code is: " + request.status);
				
			}
		}
	}
}