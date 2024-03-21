function preload(){

}

function setup(){
    canvas = createCanvas(500 , 400)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    color=""
}
function filter_tint(){
    color=document.getElementById("colorName").value
}

function draw(){
    image(video, 0 , 0 , 500, 400)
    tint(color)
}


function take_snapshot(){
    save("filtro.png")
}