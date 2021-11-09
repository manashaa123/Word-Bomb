var database;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2, Bomb, Letters;
var players;



function preload(){
  player_img = loadImage("Girl.png");
  player_img2 = loadImage("Boy.png");
  Bomb_img = loadImage("Bomb.png");
  Letters_img = loadImage("set1.png");
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database(); 
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background("white");
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}