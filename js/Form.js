class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2');
    if(gameState == 0){
    title.html("Play at your own risk!");
    title.position(displayWidth/2-100, 20);
    }
    var F11 = createElement("h4");
    F11.html("press F11 on the keyboard to play on fullscreen:)");
    F11.position(10,5);
    // text("press F11 to play on fullscreen", 20,30);    
    this.input.position(displayWidth/2-100,100);
    this.button.position(displayWidth/2+30, 125);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      title.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-100, displayHeight/10);
    });
    //this.botton.mousePressed(()=>{
    //   player.updateCount(0);
    //   game.update(0);
    //   Player.Rupdate(0);
    // })
  }
}
