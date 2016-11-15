(function () {
function greeter(person) {
    this.resp =  $.getJSON("http://api.openweathermap.org/data/2.5/forecast/city?id=524903&APPID=db218ed7a6de86ead8134ad5718bcc00",
          function (custs) 
 		{document.body.innerHTML = custs;});
    //return "Hello, " + person;
}

var user = "Jane User";
greeter(user);
document.body.innerHTML = this.resp;  


})();