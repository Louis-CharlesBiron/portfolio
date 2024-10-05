function typeWriter(txt, speed, el) {
    [...txt].reduce((s, b)=>{
        setTimeout(()=>{el.textContent += b},s)
        return s+speed
    }, speed)
}

function getWindowRects() {
    return {width:window.innerWidth, height:window.innerHeight}
}