class Ball {
    constructor(x,y,width,height){
        var options = {
            density:0.1,
            frictionAir:0.5
        }
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(x,y,width,height)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        fill("#00FFFF")
        ellipseMode(CENTER)
        ellipse(0,0,this.width,this.height)
        pop()
    }
}