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

 window.onload = function() {
      var xhttp = new XMLHttpRequest();

      xhttp.open('GET', 'text.php', false);
      xhttp.send();
      var textNode = document.createTextNode(xhttp.responseText);
      var cont = document.getElementById('content');

      if (xhttp.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xhttp.status + ': ' + xhttp.statusText);
      } else {
        // вывести результат
        cont.appendChild(textNode);
      }
    };