var captionEl = $('#caption');
var captionArray = ['Hi, I\'m Xavi.', 'I love coding.', 'Welcome to my Portfolio.', 'Enjoy...'];
var captionLength = 0;
var i = 0;
var mustBlink = true;

$(document).ready(function() {

    setInterval ('cursorBlink()', 800);

    setTimeout(function () {
        captionEl = $('#caption');
        i = 0;
        captionLength = 0;
        TypingEffect(captionArray[i]);
    }, 1300)
});

function TypingEffect(caption) {
            type(caption);
}

function type(caption) {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        mustBlink = false;
        setTimeout(function () {
            type(caption);
        }, 90 );
    }
    if(captionLength == caption.length) {
        mustBlink = true;
        setTimeout(function() {
            erasingEffect(caption);
        }, 2800);
    }
}

function erasingEffect(caption) {
    captionLength = caption.length;
    if (captionLength>0) {
        erase(caption);
    }
}

function erase(caption) {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        mustBlink = false;
        setTimeout(function () {
            erase(caption);
        }, 50);
    } else {
        if (i == captionArray.length -1){
            i = 0;
        }
        else {
            i++;
        }
        mustblink = true;
        setTimeout(function () {
            TypingEffect(captionArray[i]);
        }, 200);
    }
}

function cursorBlink () {
    //if (captionLength == captionEl.text().length  + 1|| captionLength == -1){
        if (mustBlink) {
        $('#cursor').animate({
            opacity: 0
        }, 'fast', 'swing').animate({
            opacity: 1
        }, 'fast', 'swing');
    }
}
