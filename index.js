// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var span1 = document.createElement("SPAN");
  var txt1 = document.createTextNode("DONE");
  var txt = document.createTextNode("CLOSE");
  span1.className = "done";
  span.className = "close";
  span1.appendChild(txt1);
  span.appendChild(txt);
  myNodelist[i].appendChild(span1);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var li = this.parentElement;
    var ul = li.parentElement;  
    ul.removeChild(li);
  }
}

// Click on a done button to put line through the current list item
var done = document.getElementsByClassName("done");
var i;
for (i = 0; i < done.length; i++) {
    done[i].onclick = function() {
    var li = this.parentElement;
    li.style.textDecoration = "line-through";
  }
}



// Add a "checked" symbol when clicking on a list item
/*var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);*/

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var span1 = document.createElement("SPAN");
  var txt1 = document.createTextNode("DONE");
  var txt = document.createTextNode("CLOSE");
  span1.className = "done";
  span.className = "close";
  span1.appendChild(txt1);
  span.appendChild(txt);
  myNodelist[i].appendChild(span1);
  myNodelist[i].appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var li = this.parentElement;
      var ul = li.parentElement;
      ul.removeChild(li);
    }
  }

  for (i = 0; i < done.length; i++) {
    done[i].onclick = function() {
    var li = this.parentElement;
    li.style.textDecoration = "line-through";
  }
  
}

  
}