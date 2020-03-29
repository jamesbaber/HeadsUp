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
    console.log(text);
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
