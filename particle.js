class particle{
constructor(x,y,r)
{
var hat={
restitution:0.4
}
this.r=r
this.body=Bodies.circle(x,y,this.r,hat)
World.add(world,this.body)
}
display()
{
var position=this.body.position 
var angle=this.body.angle
push()
translate(position.x,position.y)
rotate(angle)
ellipseMode(CENTER)
ellipse(0,0,this.r,this.r)
pop()
}
}