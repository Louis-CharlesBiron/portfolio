function accueil_getCutting(cvs) {
    let sRadius = DEFAULT_RADIUS, sRGBA = DEFAULT_RGBA, sLimit = 100,
    padr = 20, 
    r=()=>random(-padr, padr),
    amp = 70+r(),
    w = 10,
    freq = 20,
    spawnH = -padr-amp-w-sRadius

    function generateDots(shape, cvs) {
        for (let x=0;x<cvs.width;x+=freq) shape.add(new Dot(x, Math.sin(x*w) * (amp+r()) + (spawnH+r())))
    }


    return new Shape(generateDots, sRadius, sRGBA, sLimit, (ctx, dot, ratio, m, dist)=>{
        
        dot.radius = mod(DEFAULT_RADIUS*1.4, ratio, DEFAULT_RADIUS*1)

        // dot links
        ctx.strokeStyle = formatColor(dot.rgba)
        let nd = dot.parent.dots.find(x=>x.id==dot.id+1) ?? {x:cvs.width, y:dot.y-10},
        cbp = -3, cbpm = mod(cbp, dot.y/Math.abs(spawnH))
        ctx.beginPath()
        ctx.moveTo(dot.x, dot.y)
        ctx.bezierCurveTo(dot.x+(cbpm*-Math.sign(cbp)), dot.y, nd.x+(cbpm*Math.sign(cbp)), nd.y, nd.x, nd.y)
        ctx.stroke()





        

        //if (dist < 200) {
        //    ctx.strokeStyle = formatColor([dot.r,dot.g,dot.b,mod(0.5, ratio, 0.5)])
        //    dot.parent.dots.toSorted((a,b)=>getDist(m.x, m.y, a.x, a.y)-getDist(m.x, m.y, b.x, b.y)).slice(0,random(1, 10)).forEach(x=>{
        //        ctx.beginPath()
        //        ctx.moveTo(m.x, m.y)
        //        ctx.lineTo(x.x, x.y)
        //        ctx.stroke()
        //    })
        //}

    }).asSource()
}