var hiddenlist = document.getElementsByTagName("li");
var i;
for (i = 0; i < hiddenlist.length; ++i) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  hiddenlist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; ++i) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function myfun() {
  var li = document.createElement("li");
  var inputval = document.getElementById("myinput").value;
  var tt = document.createTextNode(inputval);
  li.appendChild(tt);
  if (inputval === "") {
    alert("type something!");
  } else {
    document.getElementById("mylist").appendChild(li);
  }
  console.log(document.getElementById("myinput").value);
  document.getElementById("myinput").value = "";
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
