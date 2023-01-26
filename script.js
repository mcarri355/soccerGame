field.onclick = function(event){
    // window-relative field coords 
    let fieldCoords = this.getBoundingClientRect()

    // the ball has absolute position: absolute, the field position: relative
    // So ball coordinates are relative to the field inner left-upper corner

    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 - 10,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2 - 7,
    }

    // prevent crossing the top field boundary
    if(ballCoords.top < 0){ballCoords.top=0};
    // prevent crossing the left field boundary
    if(ballCoords.left < 0){ballCoords.top=0};
    // prevent crossing the bottom field boundary
    if(ballCoords.top + ball.clientHeight > field.clientHeight){
        ballCoords.top = field.clientHeight-ball.clientHeight;
    }
    // prevent crossing the right field boundary
    if(ballCoords.left + ball.clientWidth > field.clientWidth){
        ballCoords.left = field.clientWidth-ball.clientWidth;
    }

    ball.style.left = ballCoords.left + 'px'
    ball.style.top = ballCoords.top + 'px'
}

        