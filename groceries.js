/*
Cory Hamelehle
110
Final Project
*/
var myArray=[];


function displayDate(){
  var lcook=getCookie("last");
  document.getElementById('lval').value = lcook;
  var fcook=getCookie("first");
  document.getElementById('fval').value = fcook;
  //var acook=getCookie("address");
  //document.getElementById('aval').value = acook;
  var dcook = Date();
  window.alert("Your name is " + fcook + " " + lcook + ". The date today is "
  + dcook);

}
function index()
{
  var fccook=getCookie("color");
  document.body.style.backgroundColor = fccook;
  document.getElementById("myBtn").addEventListener("click", displayDate);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function search()
{
  setCookie("contact", "",1);

}
function delt()
{
  setCookie("bio1", "",1);
}
function bio()
{
  var bio3 = document.getElementById("bio").value;
  setCookie("bio1", bio3, 20*365);
  var bcook=getCookie("bio1");
  document.getElementById('bval').value = bcook;

}
function bioon()
{
  var bcook=getCookie("bio1");
  document.getElementById('bval').value = bcook;
  var fccook=getCookie("color");
  document.body.style.backgroundColor = fccook;
}
function contact()
{

  var contact = document.getElementById("cn").value;
  myArray.push(contact);
  setCookie("contact", myArray , 20*365);
  var cncook=getCookie("contact");
  document.getElementById('cnval').value = cncook;

}
function contacton()
{
  var cncook=getCookie("contact");
  document.getElementById('cnval').value = cncook;
  var fccook=getCookie("color");
  document.body.style.backgroundColor = fccook;
}

function firstname()
{
  var first = document.getElementById("fn").value;
  setCookie("first", first, 20*365);
  var fcook=getCookie("first");
  document.getElementById('fval').value = fcook;
}
function firston()
{
  var fcook=getCookie("first");
  document.getElementById('fval').value = fcook;
}
function lastname()
{
  var last = document.getElementById("ln").value;
  setCookie("last", last, 20*365);
  var lcook=getCookie("last");
  document.getElementById('lval').value = lcook;

}
function laston()
{
  var lcook=getCookie("last");
  document.getElementById('lval').value = lcook;

}
function address()
{
  var ad = document.getElementById("ad").value;
  setCookie("address", ad, 20*365);
  var acook=getCookie("address");
  document.getElementById('aval').value = acook;

}
function addon()
{
  var acook=getCookie("address");
  document.getElementById('aval').value = acook;

}
function color()
{
  var fc = document.getElementById("fc").value;
  setCookie("color", fc, 20*365);
  var fcook=getCookie("color");
  document.getElementById('fcval').value = fcook;

  document.body.style.backgroundColor = fc;


}
function favon()
{
  var fccook=getCookie("color");
  document.getElementById('fcval').value = fccook;
var fccook=getCookie("color");
  document.body.style.backgroundColor = fccook;
}
function TextColor()
{
  var tc = document.getElementById("tc").value;
  setCookie("textcolor", tc, 20*365);
  var tcook=getCookie("textcolor");
  document.getElementById("tcv").value = tcook;
  document.getElementById("tcval").style.color = tcook;


}
function texton()
{
  var tccook=getCookie("textcolor");
  //document.getElementById("tcv").value = tccook;
  document.getElementById("tcval").style.color = tccook;

}
function tcc()
{
    var tccook=getCookie("textcolor");
    document.getElementById("tcv").value = tccook;
}

//courtesy of stackoverflow, from: http://stackoverflow.com/questions/5802580/html-input-type-file-get-the-image-before-submitting-the-form
function previewFile() {
  var forsworn;
  var elephant = document.getElementById('img');
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);

  }
  else {
    preview.src = "";
  }
}

function User()
{
  window.open("User.html",'_self');
}
function Contacts()
{
  window.open("Contacts.html",'_self');
}
function Bio22()
{
  window.open("Bio.html",'_self');
}
function home()
{
  window.open("index.html",'_self');
}
