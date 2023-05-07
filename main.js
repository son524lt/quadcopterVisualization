function getData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data.ax);
        console.log(data.ay);
        console.log(data.az);
        console.log(data.roll);
        console.log(data.pitch);
        console.log(data.yaw);
      }
    };
    xhttp.open("GET", "/getData", true);
    xhttp.send();
  }

var url = new URL(window.location.href);
var hostname = url.searchParams.get("ip");
if (hostname != null) {
    var a = setInterval(() => {
        getData();     
    }, 50);
}