var canvas1 = document.getElementById('canvas1')
var canvas2 = document.getElementById('canvas2')
var canvas3 = document.getElementById('canvas3')
var ctx1 = canvas1.getContext('2d')
var ctx2 = canvas2.getContext('2d')
var ctx3 = canvas3.getContext('2d')
canvas1.width = innerWidth
canvas2.width = innerWidth
canvas3.width = innerWidth
canvas1.height = innerHeight
canvas2.height = innerHeight
canvas3.height = innerHeight

// const orange = [255, 153, 51]
// const white = [255, 255, 255]
// const green = [19, 136, 8]

const orange = [211, 84, 0]
const white = [189, 195, 199]
const green = [39, 174, 96]


var party1 = smokemachine(ctx1, orange)
party1.start() // start animating
party1.setPreDrawCallback(function(dt){
    party1.addSmoke(innerWidth*1.7/6, innerHeight-10, 1)
})

var party2 = smokemachine(ctx2, white)
party2.start() // start animating
party2.setPreDrawCallback(function(dt){
    party2.addSmoke(innerWidth/2, innerHeight-10, 1)
})

var party3 = smokemachine(ctx3, green)
party3.start() // start animating
party3.setPreDrawCallback(function(dt){
    party3.addSmoke(innerWidth*4.3/6, innerHeight-10, 1)
})

// party.addsmoke(innerWidth/2, innerHeight, 100)
// onclick=e => {
// 	console.log(e)
// 	party.step()
// }

/*onmousemove = function (e) {
    var x = e.clientX
    var y = e.clientY
    var n = .5
    var t = Math.floor(Math.random() * 200) + 3800
    party.addsmoke(x, y, n, t)
}*/