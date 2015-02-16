
    function checkKey(e){
        e = e || window.event;

        if(e.keyCode == '90'){//Z
            clearInterval(engineOnP1);
            clearInterval(engineOffP1);
            currentSpeed = $("#player1_speed").val();
            if( currentSpeed == 0) {
                currentSpeed = .5;
                if(ogre){
					scene.getObjectByName('player1').playAnimation('run', 10 );
				}
        	}
            else if( currentSpeed == .5) {
                currentSpeed = 1;
                if(ogre){
					scene.getObjectByName('player1').playAnimation('run', 12 );
				}
            }
            else if( currentSpeed == 1) {
                currentSpeed = 1.5;
                if(ogre){
					scene.getObjectByName('player1').playAnimation('run', 14 );
				}
            }
            else if( currentSpeed == 1.5) {
                currentSpeed = 2;
                if(ogre){
					scene.getObjectByName('player1').playAnimation('run', 16 );
				}
            }
            $("#player1_speed").val(currentSpeed);
            engineOnP1 = setInterval(function(){engine(1,1)},200);



        }
        if(e.keyCode == '83'){//S
            clearInterval(engineOnP1);
            clearInterval(engineOffP1);
            currentSpeed = $("#player1_speed").val();
            if( currentSpeed == 2) {
                currentSpeed = 1.5;
                if(ogre){
					scene.getObjectByName('player1').playAnimation('run', 14 );
                }
            }
            else if( currentSpeed == 1.5) {
                currentSpeed = 1;
                if(ogre){
					scene.getObjectByName('player1').playAnimation('run', 12 );
				}
            }
            else if( currentSpeed == 1) {
                currentSpeed = .5;
                if(ogre){
					scene.getObjectByName('player1').playAnimation('run', 10 );
				}
            }
            else if( currentSpeed == .5) {
                currentSpeed = 0;
                if(ogre){
					scene.getObjectByName('player1').playAnimation('stand', 10 );
				}
            }
            $("#player1_speed").val(currentSpeed);
            engineOffP1 = setInterval(function(){engine(1,0)},200);
        }
        if(e.keyCode == '65'){//A
            if($("#player1").attr("class") == "switch"){
                switchFires('player1');   
            }
        }

        if(e.keyCode == '79'){//O
            clearInterval(engineOnP2);
            clearInterval(engineOffP2);
            currentSpeed = $("#player2_speed").val();
            if( currentSpeed == 0) {
                currentSpeed = .5;
                if(ogre){
					scene.getObjectByName('player2').playAnimation('run', 10 );
				}
            }
            else if( currentSpeed == .5) {
                currentSpeed = 1;
                if(ogre){
					scene.getObjectByName('player2').playAnimation('run', 12 );
				}
            }
            else if( currentSpeed == 1) {
                currentSpeed = 1.5;
                if(ogre){
					scene.getObjectByName('player2').playAnimation('run', 14 );
				}
            }
            else if( currentSpeed == 1.5) {
                currentSpeed = 2;
                if(ogre){
					scene.getObjectByName('player2').playAnimation('run', 16 );
				}
            }
            $("#player2_speed").val(currentSpeed);
            engineOnP2 = setInterval(function(){engine(2,1)},200);
        }
        if(e.keyCode == '76'){//L
            clearInterval(engineOnP2);
            clearInterval(engineOffP2);
            currentSpeed = $("#player2_speed").val();
            if( currentSpeed == 2) {
                currentSpeed = 1.5;
                if(ogre){
					scene.getObjectByName('player2').playAnimation('run', 14 );
                }
            }
            else if( currentSpeed == 1.5) {
                currentSpeed = 1;
                if(ogre){
					scene.getObjectByName('player2').playAnimation('run', 12 );
                }
            }
            else if( currentSpeed == 1) {
                currentSpeed = .5;
                if(ogre){
					scene.getObjectByName('player2').playAnimation('run', 10 );
                }
            }
            else if( currentSpeed == .5) {
                currentSpeed = 0;
                if(ogre){
					scene.getObjectByName('player2').playAnimation('stand', 10 );
                }
            }
            $("#player2_speed").val(currentSpeed);
            engineOffP2 = setInterval(function(){engine(2,0)},200);
        }
        if(e.keyCode == '80'){//P
            if($("#player2").attr("class") == "switch"){
                switchFires('player2');   
            }
        }




    }
