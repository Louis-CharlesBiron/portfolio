let nd = dot.parent.dots.find(x=>x.id==dot.id+1) ?? {x:cvs.width, y:dot.y-10}
ctx.beginPath()
ctx.moveTo(dot.x, dot.y)
ctx.bezierCurveTo(dot.x+dot.radius**2, dot.y, nd.x-nd.radius**2, nd.y, nd.x, nd.y)

const gradient = ctx.createLinearGradient(dot.x,dot.y, nd.x,nd.y)
gradient.addColorStop(mod(0.5, ratio), 'aliceblue')
gradient.addColorStop(mod(1, ratio), '#9cd1ff')
ctx.strokeStyle = gradient
ctx.stroke()