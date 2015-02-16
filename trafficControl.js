
    function seq1Green(){
        mesh.material = matGreen;
        mesh4.material = matGreen;
        mesh5.material = matGreen;
        mesh8.material = matGreen;
        mesh9.material = matGreen;
        mesh12.material = matGreen;
        fires["player1"][0].state = fires["player1"][3].state = fires["player1"][4].state = fires["player2"][1].state = fires["player2"][2].state = fires["player2"][5].state = "Green";
    }
    function seq1Orange(){
        mesh.material = matOrange;
        mesh4.material = matOrange;
        mesh5.material = matOrange;
        mesh8.material = matOrange;
        mesh9.material = matOrange;
        mesh12.material = matOrange;
        fires["player1"][0].state = fires["player1"][3].state = fires["player1"][4].state = fires["player2"][1].state = fires["player2"][2].state = fires["player2"][5].state = "Orange";
    }
    function seq1Red(){
        mesh.material = matRed;
        mesh4.material = matRed;
        mesh5.material = matRed;
        mesh8.material = matRed;
        mesh9.material = matRed;
        mesh12.material = matRed;
        fires["player1"][0].state = fires["player1"][3].state = fires["player1"][4].state = fires["player2"][1].state = fires["player2"][2].state = fires["player2"][5].state = "Red";
    }
    function seq2Green(){
        mesh2.material = matGreen;
        mesh3.material = matGreen;
        mesh6.material = matGreen;
        mesh7.material = matGreen;
        mesh10.material = matGreen;
        mesh11.material = matGreen;
        fires["player1"][1].state = fires["player1"][2].state = fires["player1"][5].state = fires["player2"][0].state = fires["player2"][3].state = fires["player2"][4].state = "Green";
    }
    function seq2Orange(){
        mesh2.material = matOrange;
        mesh3.material = matOrange;
        mesh6.material = matOrange;
        mesh7.material = matOrange;
        mesh10.material = matOrange;
        mesh11.material = matOrange;
        fires["player1"][1].state = fires["player1"][2].state = fires["player1"][5].state = fires["player2"][0].state = fires["player2"][3].state = fires["player2"][4].state = "Orange";

    }
    function seq2Red(){
        mesh2.material = matRed;
        mesh3.material = matRed;
        mesh6.material = matRed;
        mesh7.material = matRed;
        mesh10.material = matRed;
        mesh11.material = matRed;
        fires["player1"][1].state = fires["player1"][2].state = fires["player1"][5].state = fires["player2"][0].state = fires["player2"][3].state = fires["player2"][4].state = "Red";

    }

    function switchFiresP1(){
        seq1Green();

        timer11 = setTimeout(function(){
            seq1Orange();
        },5000);

        timer12 = setTimeout(function(){
            seq1Red();
        },8000);

        //////////////////////

        seq2Red();

        timer21 = setTimeout(function(){
            seq2Green();
        },8000);

        timer22 = setTimeout(function(){
            seq2Orange();
        },13000);

    }

    function switchFiresP2(){
        seq2Green();

        timer11 = setTimeout(function(){
            seq2Orange();
        },5000);

        timer12 = setTimeout(function(){
            seq2Red();
        },8000);

        //////////////////////

        seq1Red();

        timer21 = setTimeout(function(){
            seq1Green();
        },8000);

        timer22 = setTimeout(function(){
            seq1Orange();
        },13000);
    }

    function switchFires(player){
        clearInterval(timerSeq);
        clearTimeout(timer11);
        clearTimeout(timer12);
        clearTimeout(timer21);
        clearTimeout(timer22);

        if(player == "player1") {
            if( (mesh.material.name == "orange" || mesh.material.name == "red") && mesh2.material.name != "orange" ) {
                switchFiresP1();
                timerSeq = setInterval(function(){switchFiresP1();},16000);
            } else  {
                switchFiresP2();
                timerSeq = setInterval(function(){switchFiresP2();},16000);
            }            
        }
        if(player == "player2") {
            if( (mesh7.material.name == "orange" || mesh7.material.name == "red") && mesh8.material.name != "orange" ) {
                switchFiresP2();
                timerSeq = setInterval(function(){switchFiresP2();},16000);
            } else {
                switchFiresP1();
                timerSeq = setInterval(function(){switchFiresP1();},16000);
            }
        }


    }