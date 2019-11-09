class Obstacle
{
		constructor()
		{
			this.r=50;
			this.x=width;
			this.y=(height-this.r*random(3));
			this.y= constrain(this.y, 0, height-this.r);
			this.notPaused= true;
			this.item=parseInt(random(images.length));
			this.sprite=images[this.item];
			this.speed=globalSpeed;
			this.hasNoEffect= this.item>=5;

		}
		move()
		{
			if(this.notPaused)
				this.x-=this.speed;
		}
		show()
		{
			fill(255,204,0);
			image(this.sprite, this.x, this.y);
		}
		pause()
		{
			this.notPaused=!this.notPaused;
		}
		incrementSpeed(num)
		{
			this.speed=globalSpeed+num;
		}


}