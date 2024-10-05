document.addEventListener("DOMContentLoaded", function(){


setTimeout(()=>window.scrollTo({top: 0,behavior: "instant"}),10)

const fpsCounter = new FPSCounter(), cvs = new Canvas(document.getElementById("accueil_canvas"), ()=>{
    fpsDisplay.textContent = fpsCounter.getFps()
})

// CANVAS EFFECT
cvs.add(accueil_getCutting(cvs))

setTimeout(()=>{
    cvs.refs[0].dots.forEach(x=>x.addForce(cvs.height, -90, 3000))
},1000)

    // USER ACTIONS
function mousemovements(m) {
    cvs.refs.forEach(el=>el.ratioPos=[m.x,m.y])
}
cvs.setmousemove(m=>{
    mousemovements(m)

})
cvs.setmouseleave(m=>{
    mousemovements(m)
})
cvs.setmousedown()
cvs.setmouseup()

cvs.startLoop()






});