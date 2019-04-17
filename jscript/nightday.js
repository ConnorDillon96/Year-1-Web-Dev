loaddarkness();

function default1(){
    body.className='default';
}

function day(){
        var elementArray = document.getElementsByClassName("contentboxdark");

        for(var i = (elementArray.length - 1); i >= 0; i--) {
            elementArray[i].className = "contentbox";
        }
sessionStorage.setItem('darkness','False');
}

function night() {
    var elementArray = document.getElementsByClassName("contentbox");

    for(var i = (elementArray.length - 1); i >= 0; i--) {
        elementArray[i].className = "contentboxdark";
    }
    sessionStorage.setItem('darkness','True');

}

function loaddarkness() {
    if(sessionStorage.getItem('darkness') == 'True'){
        night();
    }else{
        day();
    }
}