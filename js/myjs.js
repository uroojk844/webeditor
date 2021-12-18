function html_code() {
    document.querySelector('textarea').innerHTML = '<!DOCTYPE html>\n'+
    '<html lang="en">\n'+
    '<head>\n'+
        '<meta charset="UTF-8">\n'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n'+
        '<meta http-equiv="X-UA-Compatible" content="ie=edge">\n'+
        '<title>Document</title>\n'+
    '</head>\n'+
    '<style>\n'+
    'body{\n'+
    '}\n'+
    '</style>\n'+
    '<body>\n\n'+
        
    '</body>\n'+
    '</html>'
}

function open_pre(event){
    event.preventDefault();
    document.getElementById('pre_container').style.display="block";
}

function close_pre(){
    document.getElementById('pre_container').style.display="none";
}

function pc(){
  document.querySelector('.row').classList.toggle('pc');
  document.querySelector("#input").classList.toggle("w3-hide")
}

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  
