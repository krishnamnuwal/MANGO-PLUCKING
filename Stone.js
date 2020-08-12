class Stone{
	constructor(x,y){
		var option={
			isStatic:true,
			
		
			
			
		}
		this.body=Bodies.rectangle(x,y,50,50,option);
		this.width=50;
		
		this.height=50;
		this.image=loadImage("stone.png");
		World.add(world,this.body)

	}
	display(){
		var pos=this.body.position;
		//var angle=this.body.angle;
		push();
		translate(pos.x,pos.y);
		imageMode(CENTER)
		image(this.image,0,0,50,50)
		pop();
	}
}


