window.onload=function(){
    let canvasWidth=900;
    let canvasHeight=600;
    let blockSize=30;
    let ctx;
    let delay=200;
    var xCoord=0;
    var yCoord=0;
    let snakee;
    let applee;
    var widthInBlock=canvasWidth/blockSize;
    var heightInBlock=canvasHeight/blockSize;
    let score;
    let timeOut;

    function init(){
        // alert("ca fonctionne!!");
        let canvas=document.createElement('canvas');
        canvas.width=canvasWidth;
        canvas.height=canvasHeight;
        canvas.style.border="10px solid grey";
        canvas.style.margin="auto";
        canvas.style.display="block";
        canvas.style.backgroundColor="#ddd";
        document.body.appendChild(canvas);
        
        //pour dessiner dans canvas,besoin d'un contexte
        ctx = canvas.getContext("2d");
        //le corp du snake
        snakee=new Snake([[6,4],[5,4],[4,4],[3,4],[2,4]], "right");
        //la pomme
        applee=new Apple ([8,6],);
        //pour remettre le canvas a vide
        score=0;
        refreshCanvas();
    }

    function refreshCanvas(){
        snakee.advance();

        if(snakee.checkCollision()){
            delay=200;
            // alert('game OVER');
            gameOver(); 
        }
        else{
            if(snakee.isEatingApple(applee)){
                snakee.eatApple=true;;
                faster();
                //snake eating apple
                do{
                    applee.setNewPosition();
                }
                while(applee.notOnSnake(snakee.body)==true);
            }
            // console.log(applee);
            ctx.clearRect(0, 0 ,canvasWidth,canvasHeight);
            drawScore();
            snakee.draw();
            applee.draw();
            timeOut=  setTimeout(refreshCanvas,delay);
        }
    }

    function drawBlock(ctx, position){
        var x =blockSize*position[0];
        var y =blockSize*position[1];
        ctx.fillRect(x,y,blockSize,blockSize);
    }

    function Snake(body, direction){
        this.body=body;
        this.direction=direction;
        this.eatApple=false;

        this.draw=function(){
            ctx.save();
            ctx.fillStyle = "rgb(200, 0, 0)";
            for(let i=0;i<this.body.length;i++){
                drawBlock(ctx,this.body[i])
            }
            ctx.restore();
        }
        this.advance=function(){
            let nextPosition=this.body[0].slice();
            switch(this.direction){
                case'left':
                    nextPosition[0]-=1;
                    break;
                case'right':
                    nextPosition[0]+=1;
                    break;
                case'up':
                    nextPosition[1]-=1
                    break;
                case'down':
                    nextPosition[1]+=1
                    break;
                default:
                    console.log('no touch');
                    throw('invalid direction');
                    // break;
            }
            this.body.unshift(nextPosition);
            if(!this.eatApple){
                this.body.pop();
            }else{
                this.eatApple=false;
            }
        }
        this.setDirection=function(newDirection){
            var allowedDirections;
            switch(this.direction){
                case'left':
                    allowedDirections=["up","down"];
                    break;
                case'right':
                    allowedDirections=["up","down"];
                    break;
                case'up':
                    allowedDirections=["left","right"];
                    break;
                case'down':
                    allowedDirections=["left","right"];
                    break;
                default:
                    return
            }
            if(allowedDirections.indexOf(newDirection)>-1){
                this.direction=newDirection;
            }
        }
        this.checkCollision=function(){
            let wallCollision=false;
            let snakeCollision=false;
            let headSnake=snakee.body[0];
            let bodySnake=snakee.body.slice(1);
            let snakeX=headSnake[0];
            let snakeY=headSnake[1];
            let minX=0;
            let minY=0;
            let maxX=widthInBlock-1;
            let maxY=heightInBlock-1;
            let isNotBetweenHorizontalWalls= snakeX<minX ||snakeX>maxX;
            let isNotBetweenVerticalWalls= snakeY<minY ||snakeY>maxY;
            if(isNotBetweenHorizontalWalls ||isNotBetweenVerticalWalls){
                wallCollision=true;
            }
            for(let i=0;i<bodySnake.length;i++){
                if(snakeX==bodySnake[i][0] && snakeY==bodySnake[i][1]){
                    snakeCollision=true;
                }
            }
            return wallCollision||snakeCollision;
        }
        this.isEatingApple=function(appToEat){
            let headSnake=this.body[0];
            if(headSnake[0]==appToEat.applePosition[0] && headSnake[1]==appToEat.applePosition[1]){
                score++;
                return true;
            }
            else return false;
        }
    }

    //on créer la pomme
    function Apple(position ){
        this.applePosition=position;
        this.draw=function(){
            ctx.save();
            ctx.fillStyle="#33cc33";
            ctx.beginPath();
            var radius=blockSize/2;
            var x=this.applePosition[0]*blockSize+radius;
            var y=this.applePosition[1]*blockSize+radius;
            ctx.arc(x,y,radius,0,Math.PI*2,true);
            ctx.fill();
            ctx.restore();
        }
        this.setNewPosition=function(){
            let newX=Math.round(Math.random()*widthInBlock-1);
            let newY=Math.round(Math.random()*heightInBlock-1);
            this.applePosition=[newX,newY];
        }
        this.notOnSnake=function(snakeBody){
            let isOnSnake=false;
            console.log(snakeBody);
            for(let i=0;i<snakeBody.length;i++){

                if(this.applePosition[0]==snakeBody[i][0] && this.applePosition[1]==snakeBody[i][1]){
                    // alert("onthe snake");
                    isOnSnake=true;
                    return;
                }
            }
            return isOnSnake;
        }
    }

    function gameOver(){
        ctx.save();
        ctx.font="bold 50px sans-serif";
        ctx.fillStyle="green";
        ctx.textBaseline="middle";
        ctx.textAlign="center";
        ctx.strokeStyle="white";
        ctx.lineWidth=8;
        ctx.strokeText("Game Over", canvasWidth/2,45);
        ctx.fillText("Game Over", canvasWidth/2,45);
        ctx.strokeText("Appuyer sur espace pour rejouer", canvasWidth/2,canvasHeight/2);
        ctx.fillText("Appuyer sur espace pour rejouer", canvasWidth/2,canvasHeight/2);
        ctx.restore();
    }
    function restart(){
        //le corp du snake
        snakee=new Snake([[6,4],[5,4],[4,4],[3,4],[2,4]], "right");
        //la pomme
        applee=new Apple ([8,6],);
        //pour remettre le canvas a vide
        score=0;
        clearTimeout(timeOut);
        refreshCanvas();
    }
    function drawScore(){
        ctx.save();
        ctx.font="bold 150px sans-serif";
        ctx.fillStyle="gray";
        ctx.textBaseline="middle";
        ctx.textAlign="center";
        ctx.fillText(score.toString(), canvasWidth/2,canvasHeight/2);
        ctx.restore();
    }

    function faster(){
        if(score%2==0 && score>0){
            delay=delay/1.2;
        }
    }

    document.onkeydown=function handleKeyDown(e){
        // console.log(e);
        var key=e.keyCode;
        // console.log(key);
        switch (key){
            case 37:
                newDirection='left';
                break;
            case 39:
                newDirection='right';
                break;
            case 38:
                newDirection='up';
                break;
            case 40:
                newDirection='down';
                break;
            case 32:
                restart();
                return;
            default:
                return;
        }
        snakee.setDirection(newDirection);
    }
    
    init();
}