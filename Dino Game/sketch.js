let obstacles = [];
let player;
let notPaused=true;
let background;
let playerImg;
let images= [];
let globalSpeed;
function setup() 
{
  // put setup code here
  createCanvas(1000,450);
  player= new Player();
  globalSpeed=10;
}
function preload()
{
	bImg = loadImage('https://i.ibb.co/dpCTMTy/background.png');
	playerImg= loadImage('https://i.ibb.co/ZJ6kQKt/manspriterun.png');
	
	images.push(loadImage('https://i.ibb.co/QDCjtJq/beer.png'));
	images.push(loadImage('https://i.ibb.co/Gc14WjV/shot.png'));
	images.push(loadImage('https://i.ibb.co/2NsmNRH/wine.png'));
	images.push(loadImage('https://i.ibb.co/ZBTNh36/Jungle-Juice.png'));
	images.push(loadImage('https://i.ibb.co/xjYjfgs/beerPong.png'));
	images.push(loadImage('https://i.ibb.co/pd33sbv/water.png'));
	images.push(loadImage('https://i.ibb.co/BGzvfsn/pizza.png'));
	/*
		0= beer
		1=shot
		2=wine
		3=jungle-juice
		4=beerpong
		5=water
		6=pizza
	*/

}
function keyPressed()
{
	if(key== ' ')
	{
		player.jump();
	}
	else if(key=='p')
	{
		for(let o of obstacles)
		{
			o.pause();
		}
		player.pause();		
		notPaused=!notPaused;
	}
	else if(key=='r')
	{
		restart();
	}

}
function draw() 
{
  // put drawing code here
  if(notPaused)
  {
  	//noFill();
	  if(random(1)<0.01)
	  {
	  	obstacles.push(new Obstacle());
	  }
  }
  else
  {
  	fill(255,255,255,100);
  	rect(0,0,width,height);
  }

  image(bImg,0,0);
  player.show();
  player.move();
  player.showScore();
  for(var i=0; i<obstacles.length; i++)
  {
  	obstacles[i].move();
  	obstacles[i].show();
  	if(player.collidesWith(obstacles[i]))
  	{
  		
  		if(!obstacles[i].hasNoEffect)
  		{
	  		if(player.isMale)
	  			player.setBAC(player.getBAC()+0.025);
	  		else
	  			player.setBAC(player.getBAC()+0.038);
  		}
  		obstacles.splice(i,1);
  		i++;
  	}
  	else
  	{
  		obstacles[i].incrementSpeed(player.score/100000);

  	}
  	if(player.BAC>0 && notPaused)
  	{
  		player.setBAC(player.getBAC()-0.000005);
  	}

  }

  
}
function restart()
  {
  	player.restart();
  	obstacles= [];

  }		