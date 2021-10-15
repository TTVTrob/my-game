var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var garage, c1, c2, c3, c4;
var Macqueen, Macqueen1;
var rank;
var Fplayer,Mplayer;
var form, player, game;

function preload(){
  intro = loadImage("Images/intro.jpg");
  outro = loadImage("Images/outro.jpg");
  midway = loadImage("Images/TRECK.jpg");
  FplayerP = loadImage("Images/unnamed.png");
  MplayerP = loadImage("Images/student.png");
  zombsP = loadImage("Images/grandmaAunty.gif");
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
}


function draw(){
  background("white");
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  //if(gameState === 2){
    //clear();
    //game.end();
    
  
  
 }