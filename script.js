// HTTP GET request function
function httpGetAsync(targetURL, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
    }
  }
  xmlHttp.open("GET", targetURL, true);
  xmlHttp.send(null);
}

// Update name on page randomly
function newName() {
  httpGetAsync("names.txt", function(text) {
    var lines = text.split('\n');
    var num = Math.floor(Math.random() * (lines.length - 1));
    console.log(lines[num]);
    document.getElementById("name").innerHTML = lines[num]
  });
}

// Generate name on page load
window.onload = newName;

// Try and force landscape
screen.orientation.lock("landscape");
