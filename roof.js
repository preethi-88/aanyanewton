class roof
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		
		this.w = 300;
		this.h = 10;
		this.body=Bodies.rectangle(400 ,100 ,300 ,10 , options);
 		World.add(world, this.body);

	}
	display(){
	  fill(128,128,128)
	  rect(this.body.position.x ,this.body.position.y ,this.w , this.h);
		}

}