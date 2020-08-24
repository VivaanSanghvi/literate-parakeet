class Division {
    constructor(x,y,width,height)
{
    var options = {
        isStatic: true
    }
    this.body= Bodies.rectangle(x, y, w ,h,options)
    this.w= w;
    this.h= h;
    World . add(world, this.body);
}
 display() {
     var pos=this.world.position
     rectMode(CENTRE);
     fill ("white")
    rect(pos.x, pos.y, this.w, this.h)
    this.body.circle(x,y,this.r,options)
    this.colour=(random(0,255),random(0,255), random(0,255));
    World.add(world,this.body);
    for(var k=0;k<=width;k=k+80){
        divisions.push(new Division(k,height-dividionHeight/2,10,divisionHeight));
      }
      for(var j =40; j <=width; j=j+50)
      {
        pinkos.push(new Plinko(j,75))
      }
      for(var j = 15; j<=width-10; j=j+50)
      {
        plinkos.push(new Plinko(j,175));
      }
      for(var j = 0; j<=width-20; j=j+50)
      {
        plinkos.push(new Plinko(j,275));
      }
      for( var j= 15; j<=width-30; j=j+50)
      {
        plinkos.push(new Plinko(j,375));
      }
    


 }

 
};