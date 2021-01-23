var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)

	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 3, isStatic: true });
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);


	Engine.run(engine);



		boxPosition = width / 2 - 100
		boxY = 610;

		boxLeftBody = Bodies.rectangle(boxPosition , boxY, 20,100, {isStatic: true});
		boxBottomBody = Bodies.rectangle(boxPosition + 100,boxY + 45 -20,200,20, { isStatic: true});
		boxRightBody = Bodies.rectangle(boxPosition + 200 , boxY,20,100, { isStatic:true });

		World.add(world,boxLeftBody);
		World.add(world,boxRightBody);
		World.add(world,boxBottomBody);
	}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y

	boxLeftSprite = createSprite(boxLeftBody.position.x, boxLeftBody.position.y,20,100);
	boxLeftSprite.shapeColor = color(255, 0 ,0);

	boxRightSprite = createSprite(boxRightBody.position.x, boxRightBody.position.y,20,100);
	boxRightSprite.shapeColor = color(255, 0 ,0);

	boxBottomSprite = createSprite(boxBottomBody.position.x, boxBottomBody.position.y,200,20);
	boxBottomSprite.shapeColor = color(255, 0 ,0);
	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.setStatic(packageBody, false);

	}
}



