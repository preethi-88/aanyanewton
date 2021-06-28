class Rope{
	constructor(body1,point1)
	{
		
		var options={
			bodyA:body1,
			//bodyB:body2,
			pointB:point1
		}
		//console.log(options);
		this.rope = Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.pointB

		stroke("white");
		strokeWeight(3);

		line(pointA.x,pointA.y,pointB.x,pointB.y);
	}

}