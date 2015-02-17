

function engine(player,type) {
    speed = parseFloat($("#player"+player+"_speed").val());

    // console.log('parseFloat($("#player_"+name+"_speed").val());');

    if(player == 1){
        speedP1 = parseFloat(scene.getObjectByName('player1').speed);
        if(type==1){
            if(speedP1 >= speed ) {
                clearInterval(engineOnP1);
                speedP1 = speed;
            } else {
                speedP1 += .1 ;
            }
        } else {
            if(speedP1 <= speed ) {
                clearInterval(engineOffP1);
                speedP1 = speed;
            } else {
                if(speed == 0) {
                    speedP1 -= .5 ;
                } else {
                    speedP1 -= .25 ;
                }
            }   
        }
        scene.getObjectByName('player1').speed = speedP1;
        $("#player1_speed").text(Math.floor(speedP1*50));
    }

    if(player == 2){
        speedP2 = parseFloat(scene.getObjectByName('player2').speed);
        if(type==1){
            if(speedP2 >= speed ) {
                clearInterval(engineOnP2);
                speedP2 = speed;
            } else {
                speedP2 += .1 ;
            }
        } else {
            if(speedP2 <= speed ) {
                clearInterval(engineOffP2);
                speedP2 = speed;
            } else {
                if(speed == 0) {
                    speedP2 -= .5 ;
                } else {
                    speedP2 -= .25 ;
                }
            }   
        }
        scene.getObjectByName('player2').speed = speedP2;
        $("#player2_speed").text(Math.floor(speedP2*50));
    }
}
    

    function go(wayID,name){
        var obj = scene.getObjectByName(name);


        if(name=='dae3'){
            inc=0;
        } else {
            inc = 0; //pour faire varier la vitesse en fonction des objets
        }

        for (var i = 0; i <= 5; i++) {
            if( obj.pos >= fires[name][i].pos  && obj.pos <= fires[name][i].pos ){
                state = fires[name][i].state;
                if(state != "Green") {
                    penalites[name][state]++
                    // console.log("penalites[name][state] : " + penalites[name][state]);
                    $("#"+name+"_"+state).text(penalites[name][state]);
                    // console.log(name + " est passe au feu : " + fires[name][i].state);
                }
            }
        }


        for (var i = 0; i < obj.speed+inc; i++) {
            // console.log(obj.pos);

            if(obj.pos >= ways[wayID].length){
                obj.pos = 0;
            }


            if (type == "ogre") {
            	var direction = new THREE.Vector3(
	                ways[wayID][obj.pos].x,
	                ways[wayID][obj.pos].y+3,
	                ways[wayID][obj.pos].z
                );            	
            }
            if (type == "mclaren") {
            	var direction = new THREE.Vector3(
	                ways[wayID][obj.pos].x,
	                ways[wayID][obj.pos].y-7.1,
	                ways[wayID][obj.pos].z
                );            	
            }
            if (type == "cube") {
            	var direction = new THREE.Vector3(
	                ways[wayID][obj.pos].x,
	                ways[wayID][obj.pos].y,
	                ways[wayID][obj.pos].z
                );            	
            }

            
            obj.position.x = direction.x;
            obj.position.y = direction.y;
            obj.position.z = direction.z;

            if(ways[wayID][obj.pos].rot != undefined){
                sens = ways[wayID][obj.pos].rot;
                // if(wayID%2 == 0){
                	if(ogre){
		                if(sens != 1){
		                    obj.rotation.y-=((Math.PI*.5)/39);
		                }
		                else{
		                    obj.rotation.y+=((Math.PI*.5)/39);   
		                }
                	} else {
		                if(sens == 1){
		                    obj.rotation.y-=((Math.PI*.5)/39);
		                }
		                else{
		                    obj.rotation.y+=((Math.PI*.5)/39);   
		                }
                	}
            }
            else{
                if(-obj.rotation.y > 1.5 && -obj.rotation.y < 1.6 ) obj.rotation.y = -Math.PI* .5;
                if(-obj.rotation.y > 3.1 && -obj.rotation.y < 3.2 ) obj.rotation.y = -Math.PI* 1;
                if(-obj.rotation.y > 4.7 && -obj.rotation.y < 4.8 ) obj.rotation.y = -Math.PI* 1.5;
                if(-obj.rotation.y > 6.2 && -obj.rotation.y < 6.3 ) obj.rotation.y = -Math.PI* 2;
            }       
            if(obj.rotation.y <= -Math.PI*2){
                obj.rotation.y=0;
            }
            obj.pos+=1;
            obj.dist++;
        };
        $("#"+obj.name+"_dist").text(obj.dist);
    }
