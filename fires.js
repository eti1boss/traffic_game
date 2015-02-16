
function loadFires(){

//On charge les materials
    matRed = new THREE.MeshLambertMaterial(
            {
                map:THREE.ImageUtils.loadTexture(
                        "assets/models/trafficlights/trafficlight_red3.png"),
                morphTargets: true , morphNormals: true
            }
    );
    matRed.name = "red";

    matGreen = new THREE.MeshLambertMaterial(
            {

                map:THREE.ImageUtils.loadTexture(
                        "assets/models/trafficlights/trafficlight_green3.png"),
                morphTargets: true , morphNormals: true
            }
    );
    matGreen.name = "green";

    matOrange = new THREE.MeshLambertMaterial(
            {
                map:THREE.ImageUtils.loadTexture(
                        "assets/models/trafficlights/trafficlight_orange3.png"),
                morphTargets: true , morphNormals: true
            }
    );
    matOrange.name = "orange";

    matAll = new THREE.MeshLambertMaterial(
            {
                map:THREE.ImageUtils.loadTexture(
                        "assets/models/trafficlights/trafficlight.png"),
                morphTargets: true , morphNormals: true
            }
    );
    matAll.name = "all";




    ////On lance le modele////
    loader = new THREE.JSONLoader();
    loader.load('assets/models/trafficlights/trafficlight1.js', function (geometry){
        geometry.computeMorphNormals();

        mat = matAll;

        mesh = new THREE.MorphBlendMesh(geometry,mat);
        // mesh.position.x = 0;
        mesh.position.y = 0;
        // mesh.position.z = 0;

        var actualtube = new THREE.CylinderGeometry(2, 2, 45, 45, 0, false);

        var actualtubeMesh = new THREE.Mesh(actualtube, new THREE.MeshBasicMaterial(
                { color: 0x333333, shading: THREE.FlatShading, side: THREE.DoubleSide, wireframe: false, transparent: false,
                    vertexColors: THREE.FaceColors, overdraw: false
                }));

        actualtubeMesh.position.x = 0;
        actualtubeMesh.position.y = -10;
        actualtubeMesh.position.z = 0;


        //ajout du tube dans le mesh principal
        mesh.add(actualtubeMesh);

        mesh.scale.x = .5;
        mesh.scale.y = .5;
        mesh.scale.z = .5;
        mesh.name = "feu1;"

        mesh.position.x = ways[0][59].x-11;
        mesh.position.y = ways[0][59].y;
        mesh.position.z = ways[0][59].z;
        scene.add(mesh);

        mesh2 = mesh.clone();
        mesh2.name = "feu3";
        mesh2.position.x = ways[0][212].x+11;
        mesh2.position.y = ways[0][212].y;
        mesh2.position.z = ways[0][212].z;
        mesh2.rotation.y = Math.PI;
        scene.add(mesh2);
        
        mesh3 = mesh.clone();
        mesh3.name = "feu5";
        mesh3.position.x = ways[0][302].x-11;
        mesh3.position.y = ways[0][302].y;
        mesh3.position.z = ways[0][302].z;
        scene.add(mesh3);
        
        mesh4 = mesh.clone();
        mesh4.name = "feu7";
        mesh4.position.x = ways[0][475].x;
        mesh4.position.y = ways[0][475].y;
        mesh4.position.z = ways[0][475].z-11;
        mesh4.rotation.y=-Math.PI*.5;
        scene.add(mesh4);
        
        mesh5 = mesh.clone();
        mesh5.name = "feu9";
        mesh5.position.x = ways[0][568].x+11;
        mesh5.position.y = ways[0][568].y;
        mesh5.position.z = ways[0][568].z;
        mesh5.rotation.y=Math.PI;
        scene.add(mesh5);
        
        mesh6 = mesh.clone();
        mesh6.name = "feu11";
        mesh6.position.x = ways[0][618].x+11;
        mesh6.position.y = ways[0][618].y;
        mesh6.position.z = ways[0][618].z;
        mesh6.rotation.y=Math.PI;
        scene.add(mesh6);

        //////////////////////////////



        mesh7 = mesh.clone();
        mesh7.name = "feu2";
        mesh7.position.x = ways[2][79].x;
        mesh7.position.y = ways[2][79].y;
        mesh7.position.z = ways[2][79].z+11;
        mesh7.rotation.y=Math.PI*.5;
        scene.add(mesh7);

        mesh8 = mesh.clone();
        mesh8.name = "feu6";
        mesh8.position.x = ways[2][119].x;
        mesh8.position.y = ways[2][119].y;
        mesh8.position.z = ways[2][119].z+11;
        mesh8.rotation.y=Math.PI*.5;
        scene.add(mesh8);

        mesh9 = mesh.clone();
        mesh9.name = "feu4";
        mesh9.position.x = ways[2][149].x;
        mesh9.position.y = ways[2][149].y;
        mesh9.position.z = ways[2][149].z+11;
        mesh9.rotation.y=Math.PI*.5;
        scene.add(mesh9);

        mesh10 = mesh.clone();
        mesh10.name = "feu8";
        mesh10.position.x = ways[2][621].x-20;
        mesh10.position.y = ways[2][621].y;
        mesh10.position.z = ways[2][621].z;
        mesh10.rotation.y=Math.PI*1.2;
        scene.add(mesh10);

        mesh11 = mesh.clone();
        mesh11.name = "feu10";
        mesh11.position.x = ways[2][727].x;
        mesh11.position.y = ways[2][727].y;
        mesh11.position.z = ways[2][727].z-11;
        mesh11.rotation.y=Math.PI*-.5;
        scene.add(mesh11);

        mesh12 = mesh.clone();
        mesh12.name = "feu12";
        mesh12.position.x = ways[2][29].x
        mesh12.position.y = ways[2][29].y;
        mesh12.position.z = ways[2][29].z+11;
        mesh12.rotation.y=Math.PI*.5;
        scene.add(mesh12);
        

});

}

    function initFeux(){

        mesh.material = matGreen;
        mesh2.material = matRed;
        mesh3.material = matRed;
        mesh4.material = matGreen;
        mesh5.material = matGreen;
        mesh6.material = matRed;
        mesh7.material = matRed;
        mesh8.material = matGreen;
        mesh9.material = matGreen;
        mesh10.material = matRed;
        mesh11.material = matRed;
        mesh12.material = matGreen;

        switchFiresP1();

        fires["player1"].push({pos:59, state:"Green"});
		fires["player1"].push({pos:212, state:"Red"});
		fires["player1"].push({pos:302, state:"Red"});
		fires["player1"].push({pos:475, state:"Green"});
		fires["player1"].push({pos:568, state:"Green"});
		fires["player1"].push({pos:618, state:"Red"});

		fires["player2"].push({pos:79, state:"Red"});
		fires["player2"].push({pos:119, state:"Green"});
		fires["player2"].push({pos:149, state:"Green"});
		fires["player2"].push({pos:621, state:"Red"});
		fires["player2"].push({pos:727, state:"Red"});
		fires["player2"].push({pos:29, state:"Green"});


    }