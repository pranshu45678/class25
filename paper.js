class Paper{
constructor(x,y,r){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.1,
    density:1.2
}

this.x=x
this.y=y
this.r=r
this.body=Matter.Bodies.circle(x,y,r,options)
this.image=loadImage("paper.png")
World.add(world,this.body)
}

display(){
push()
translate (this.body.position.x,this.body.position.y)
fill('yellow')
rotate(this.body.angle)
image (this.image,0,0,this.r,this.r)






pop()


}

}