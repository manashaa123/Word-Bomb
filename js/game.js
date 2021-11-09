class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(100,300);
    player1.addImage("player1",player_img);
    player1.scale = 0.4
    
    player2 = createSprite(700,500);
    player2.addImage("player2", player_img2);
    player2.scale = 0.7

    Bomb = createSprite(500, 300);
    Bomb.addImage("Bomb", Bomb_img);
    Bomb.scale = 0.5
    fill("black");
    textSize(25);
    text("Press the bomb to get started.", 500, 700);

  
    

    players=[player1,player2];

    

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 //image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                
                 if (mousePressedOver(Bomb)) {
                    Letters = createSprite(500, 100);
                    Letters.addImage("Letters", Letters_img);
                   // Letters.scale = 0.4
                   // Bomb.changeImage(Letters_Img);
                }

                 for(var plr in allPlayers){
                    
                    
                


                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
                 
                  if(player.index !== null) {
                     //fill code here, to destroy the objects.
                    
                    //if(fruitGroup.collide(player1) || fruitGroup.collide(player2)){
                       // fruitGroup.destroyEach();
                   // }
                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}