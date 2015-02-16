function addLights(){
        // ambientLight = new THREE.AmbientLight(0xffffff);
        // ambientLight.name='ambient';
        // scene.add(ambientLight);

        dirLight = new THREE.DirectionalLight(0xf54123,.4);
        dirLight.position.set(0,500,0);
        dirLight.target.position.set(0,0,0);
        scene.add(dirLight);

        dirLight1 = new THREE.DirectionalLight(0xcccc11,.4);
        dirLight1.position.set(0,-500,0);
        dirLight1.target.position.set(0,0,0);
        scene.add(dirLight1);

        dirLight2 = new THREE.DirectionalLight(0xeeeeef,.5);
        dirLight2.position.set(50,50,0);
        dirLight2.target.position.set(0,50,0);
        scene.add(dirLight2);

        dirLight3 = new THREE.DirectionalLight(0xeeeeef,.5);
        dirLight3.position.set(0,50,50);
        dirLight3.target.position.set(0,50,0);
        scene.add(dirLight3);

        dirLight4 = new THREE.DirectionalLight(0xeeeeef,.5);
        dirLight4.position.set(-50,50,0);
        dirLight4.target.position.set(0,50,0);
        scene.add(dirLight4);

        dirLight45 = new THREE.DirectionalLight(0xeeeeef,.5);
        dirLight45.position.set(0,50,-50);
        dirLight45.target.position.set(0,50,0);
        scene.add(dirLight45);

        // create light
        spotLight = new THREE.SpotLight(0xffffff,.75);
        spotLight.position.set(0,500,0);
        spotLight.target.position.set(120,0,120);
        scene.add(spotLight);

        // spotLight2 = new THREE.SpotLight(0xff0000,.7);
        // spotLight2.position.set(100,50,0);
        // spotLight2.target.position.set(20,0,0);
        // scene.add(spotLight2);

        // spotLight3 = new THREE.SpotLight(0x00ff00,.7);
        // spotLight3.position.set(0,50,100);
        // spotLight3.target.position.set(0,0,20);
        // scene.add(spotLight3);

        // spotLight4 = new THREE.SpotLight(0x0000ff,.7);
        // spotLight4.position.set(-100,50,-100);
        // spotLight4.target.position.set(-20,0,-20);
        // scene.add(spotLight4);

        // spotLight4 = new THREE.SpotLight(0xffff00,.7);
        // spotLight4.position.set(50,50,50);
        // spotLight4.target.position.set(20,0,20);
        // scene.add(spotLight4);
    }