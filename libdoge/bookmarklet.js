if (typeof(doge) === 'undefined') {
  var libdoge = document.createElement("script");
  libdoge.setAttribute("src",
    "https://raw.githubusercontent.com/ShenggKai/libdoge/master/libdoge/libdoge-min.js");
  libdoge.onload = function() {
    controller.buyDoge();
  }

  document.body.appendChild(libdoge);
}
else {
  controller.buyDoge();
}
