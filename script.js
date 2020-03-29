function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}

function newName() {
  httpGetAsync("names.txt", function(text) {
    var lines = text.split('\n');
    var num = Math.floor(Math.random() * (lines.length - 1));
    console.log(lines[num]);
    document.getElementById("name").innerHTML = lines[num]
  });
}

window.onload = newName;

var pressTimer;
$("a").mouseup(function(){
  clearTimeout(pressTimer);
  // Clear timeout
  return false;
}).mousedown(function(){
  // Set timeout
  pressTimer = window.setTimeout(function() {
    newName();
  },1000);
  return false;
});
