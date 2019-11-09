class Player
{

	constructor()
	{
		this.r=75;
		this.x= this.r;
		this.y= height-this.r;
		this.vy=0;
		this.gravity=1;
		this.score=0;
		this.notPaused=true;
		this.BAC= 0.00;
		this.time= second();
		this.gender= prompt("What is your gender? (M/F)");
		this.isMale = this.gender=='M';

	}
	jump()
	{
		if(this.y==height-this.r)
		{
			this.vy=-20;
		}
		

	}
	move()
	{
		this.y+=this.vy;
		this.vy+=this.gravity;
		this.y= constrain(this.y, 0, height-this.r);
		this.BAC=constrain(this.BAC, 0, 0.5);
	}
	show()
	{
		fill(0);
		image(playerImg, this.x, this.y);

		if(this.notPaused)
		{
			this.score++;
		}
		else
		{
			this.vy=0;
		}
	}
	showScore()
	{

		var BAC= this.BAC; 
		var BACtext= BAC.toFixed(3);
		text("Score: "+this.score,50,50);
		text("BAC: "+ BACtext, width-100, 50);
	}
	pause()
	{
		this.notPaused=!this.notPaused;
	}
	collidesWith(obstacle)
	{
		return collideRectRect(this.x, this.y, this.r,this.r,obstacle.x,obstacle.y,obstacle.r,obstacle.r);
	}
	restart()
	{
		this.score=0;
	}
	setBAC(val)
	{
		this.BAC=val;
	}
	getBAC()
	{
		return this.BAC;
	}


}