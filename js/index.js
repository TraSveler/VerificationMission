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

      xhttp.open('GET', /*'text.php'*/'text.php', false);
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
    };

//       Слайдер
var sliderElem = document.getElementById('slider'),
 travelElem = sliderElem.children[0],
 cont = document.getElementById('text'),
 pos = null,
 isMousePress = false;

travelElem.onmousedown = function(e){
    var travelCoords = getCoords(travelElem);
    var shiftY = e.pageY - travelCoords.top;
    var sliderCoords = getCoords(sliderElem);
    isMousePress = true;

    document.onmousemove = function(e){
      if(!isMousePress){
        return;
      }
  /*    
  if (pos === null) {
    pos = e.pageY;
  } else if (pos !== e.pageY) {
      move(e.pageY - pos);
      moveContent(e.pageY - pos);
      pos = e.pageY;
    }
  */  

        var newTop = e.pageY - shiftY - sliderCoords.top;

        if(newTop < 0){
            newTop = 0;
        }
        var bottomEdge = sliderElem.offsetHeight - travelElem.offsetHeight;
        if(newTop > bottomEdge){
            newTop = bottomEdge;
        }
        travelElem.style.top = newTop + 'px';
    }

    document.onmouseup = function(){
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

/* Не рабочий функционал
function move(delta) {
      var old = parseInt(travelElem.style.top) || 0;
          newS = old + delta;

      travelElem.style.top = newS + 'px';
   }

function moveContent(delta) {
      var old = parseInt(cont.style.marginTop) || 0,
      newS = old - (delta * i);

      cont.style.marginTop = newS + 'px';
}
*/
