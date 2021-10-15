class Game {
  constructor(){
    
  }
  // start(){
  //   form = new Form();
  //   form.display();
  // }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
    Fplayer = createSprite(300,displayHeight/2,50,50);
    Fplayer.addImage("woman",FplayerP);
    Fplayer.scale = 0.5
    Mplayer = createSprite(550,displayHeight/2,50,50);
    Mplayer.addImage("man",MplayerP);
    Mplayer.scale = 0.175;
    // c1 = createSprite(300,displayHeight-50,50,50);
    // c1.addImage("cars_movie",car);
    // c2 = createSprite(1000,displayHeight-50,50,50);
    // c2.addImage("cars_movie_1",car1);
    // c3 = createSprite(550,displayHeight-100,50,50);
    // c3.addImage("cars_movie",car);
    garage = [Fplayer,Mplayer];
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    //player.rankingSystem();
    //Player.Rupdate();
    if(allPlayers !== undefined){
      background("white");
      if(gameState == 1){
        background("white");
        var zombs = createSprite(200,0,50,50);
        zombs.addImage("zombi",zombsP);
        zombs.scale = 0.5;
        zombs.velocityY = 2;
      }
      //image(midway,0,-displayHeight/2+225,width,displayHeight+200);
      var index = 0;
      var x = 175;
      //var y ;
        for(var plr in allPlayers){
          index += 1;
          x +=200;
          var y;
          y = displayHeight-allPlayers[plr].distance-55;
          garage[index-1].x = x;
          garage[index-1].y = y;
          if(plr === player.index){
            garage[index-1].shapeColor("yellow");
            camera.position.x = displayWidth/2;
            camera.position.y = garage[index-1].y;
          }  
      }
    }
    
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    // if(player.distance > 6100){
    //   gameState = 2;
    //   player.rank += 1;
    //   Player.Rupdate(player.rank);
    // }
    drawSprites();
  }
//   end(){
//     var beuh = createSprite(300,300,100000,100000);
//     beuh.addImage("win",winner);
//     // image(winner,displayWidth/2,displayHeight/2);
//     console.log("bruh");
//     console.log(player.rank);
//     var bruh = createElement('h2',player.rank);
//     bruh.position(1000,15);

//   }
 }
