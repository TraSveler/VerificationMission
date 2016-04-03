var form = document.getElementById('screen');

document.onclick = function(ev) {
  if (ev.target.id != form.id && form.style.display == 'block')  {
  	form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
};

function PopUpShow(){
    if(form.style.display == 'block'){
    	form.style.display = 'none';
    } else {
    	form.style.display = 'block';
    }
}

// ajax
 window.onload = function() {

      var xhttp = new XMLHttpRequest();

      xhttp.open('GET', /*'text.php'*/'js/phones.json', false);
      xhttp.send();
      var textNode = document.createTextNode(xhttp.responseText);
      var content = document.getElementById('text');

      if (xhttp.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xhttp.status + ': ' + xhttp.statusText);
      } else {
        // вывести результат
        content.appendChild(textNode);
      }
      //---------
    };


var sliderElem = document.getElementById('slider');
var travelElem = sliderElem.children[0];
var cont = document.getElementById('text');

var isMousePress = false;

travelElem.onmousedown = function(e){
    var travelCoords = getCoords(travelElem);
    var shiftY = e.pageY - travelCoords.top;
    var sliderCoords = getCoords(sliderElem);
    isMousePress = true;

    document.onmousemove = function(e){
      if(!isMousePress){
        return;
      }

        var newTop = e.pageY - shiftY - sliderCoords.top;

        if(newTop < 0){
            newTop = 0;
        }
        var bottomEdge = sliderElem.offsetHeight - travelElem.offsetHeight;
        if(newTop > bottomEdge){
            newTop = bottomEdge;
        }

        travelElem.style.top = newTop + 'px';

        var delta = -15;
        function moveBlock(delta){
          var current = parseInt(cont.style.top);
          newTop = current - delta;

          cont.style.top = newTop + 'px';
        }
    }

    document.onmouseup = function(){
        // document.onmousemove = document.onmouseup = null;
        isMousePress = false;
    };

    return false;
};

function getCoords(elem){
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset
    };
}

/*
var upBut = document.getElementById('up');

upBut.onmousedown = function(){

  upBut.onmouseup = cont.style.top = cont.style.top - 20+'px';
  upBut.onmouseup = upBut.onmousedown = null;
}*/