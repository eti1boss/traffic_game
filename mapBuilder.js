
function map_custom1(idWay1, idWay2){

    drawRect(   0   ,   -20   ,   40  ,   0 , idWay1, idWay2);
    drawCurve(  40  ,   0   ,   80  ,   -40 , 'HD', 1,  idWay1, idWay2);
    drawRect(   60  ,   -40 ,   80  ,   -80 , idWay1, idWay2);
    drawCurve(  100  ,   -120 ,   60 ,   -80, 'BG', -1, idWay1, idWay2);
    drawRect(   100 ,   -120,   180 ,   -100, idWay1, idWay2);
    drawCurve(  220 ,   -80, 180 ,   -120 , 'BD', -1, idWay1, idWay2);
    drawRect(   220 ,   -80 ,   200 ,   -40 , idWay1, idWay2);
    drawCurve(  180 ,   0 , 220 ,   -40     , 'HD', -1, idWay1, idWay2);
    drawCurve(  140 ,   -40 , 180 ,   0   ,    'HG', -1, idWay1, idWay2);
    drawRect(   140 ,   -40 ,   160 ,   -120, idWay1, idWay2);
    drawCurve(  160 ,   -120,   120 ,   -160, 'BD', 1, idWay1, idWay2);
    drawCurve(  80  ,   -180, 120 ,   -140,    'HG', -1, idWay1, idWay2);
    drawRect(   80  ,   -180,   100 ,   -200, idWay1, idWay2);
    drawCurve(  100 ,   -200,   60  ,   -240, 'BD', 1, idWay1, idWay2);
    drawRect(   60  ,   -220,   0   ,   -240, idWay1, idWay2);
    drawCurve(  0   ,   -240,   -40 ,   -200, 'BG', 1, idWay1, idWay2);
    drawRect(   -20 ,   -200,   -40 ,   -40 , idWay1, idWay2);
    drawCurve(  -40 ,   -40 ,   0   ,   0   , 'HG', 1, idWay1, idWay2);

}

function map_custom2(idWay1, idWay2){

    drawRect(   -100    , -60   , 260   , -40   , idWay1, idWay2);
    // drawRect(   20    , -60   , 260   , -40   , idWay1, idWay2);

    drawCurve(  260     , -40   , 300   , -80   , 'HD', 1, idWay1, idWay2);
    drawCurve(  300     , -80   , 260   , -120  , 'BD', 1, idWay1, idWay2);
    drawCurve(  220     , -140  , 260   , -100  , 'HG', -1, idWay1, idWay2);
    drawRect(   220     , -140  , 240   , -200  , idWay1, idWay2);
    drawCurve(  260     , -240  , 220   , -200  , 'BG', -1, idWay1, idWay2);
    drawCurve(  300     , -200  , 260   , -240  , 'BD', -1, idWay1, idWay2);
    drawCurve(  260     , -160   , 300   , -200   , 'HD', -1, idWay1, idWay2);
    drawRect(   260     , -160  , 140   , -180   , idWay1, idWay2);
    drawCurve(  100     , -200  , 140   , -160  , 'HG', -1, idWay1, idWay2);
    drawRect(   100     , -200  , 120   , -220   , idWay1, idWay2);
    drawCurve(  120     , -220  , 80    , -260  , 'BD', 1, idWay1, idWay2);
    drawCurve(  80      , -260  , 40    , -220  , 'BG', 1, idWay1, idWay2);
    drawRect(   60      , -220  , 40    , -180  , idWay1, idWay2);
    drawCurve(  20      , -140  , 60    , -180  , 'HD', -1, idWay1, idWay2);

    drawRect(   20      , -140  , -100  , -160  , idWay1, idWay2);
    drawCurve(  -100    , -160  , -140  , -120  , 'BG', 1, idWay1, idWay2);
    drawRect(   -120    , -120  , -140  , -80   , idWay1, idWay2);
    drawCurve(  -140    , -80   , -100  , -40   , 'HG', 1, idWay1, idWay2);

    // drawCurve(  20    , -160  , -20  , -120  , 'BG', 1, idWay1, idWay2);
    // drawRect(   0    , -120  , -20  , -80   , idWay1, idWay2);
    // drawCurve(  -20    , -80   , 20  , -40   , 'HG', 1, idWay1, idWay2);

}


    // Cette fonction a pour but de créer un circuit rectangulaire avec les angles arrondis
// Plus précisemment, cela créé l'objet 3D et le tableau de coordonnées du chemin des voitures
function map_rect(x, y, longueurX, longueurY, idWay1, idWay2){

    console.log("x : " + x + " " + "y : " + y + " " + "longueurX : " + longueurX + " " + "longueurY : " + longueurY);

    //Création de la forme HAUT
    x1 = x  + largeurRoute*2;
    y1 = y  - largeurRoute;
    x2 = x1 + longueurX
    y2 = y1 + largeurRoute;

    console.log("HAUT");
    console.log("\t" + "x1 : " + x1)
    console.log("\t" + "y1 : " + y1)
    console.log("\t" + "x2 : " + x2)
    console.log("\t" + "y2 : " + y2)

    drawRect(x1,y1,x2,y2, idWay1, idWay2);

    //Création de la forme HAUT DROITE
    x1 = x  + largeurRoute*2+longueurX;
    y1 = y;
    x2 = x1 + largeurRoute*2;
    y2 = y1 - largeurRoute*2;

    console.log("HAUT DROIT");
    console.log("\t" + "x1 : " + x1)
    console.log("\t" + "y1 : " + y1)
    console.log("\t" + "x2 : " + x2)
    console.log("\t" + "y2 : " + y2)

    drawCurve(x1,y1,x2,y2,'HD', idWay1, idWay2);//RT

    //Création de la forme DROITE
    x1 = x  + largeurRoute*2+longueurX+largeurRoute;
    y1 = y  - largeurRoute*2;
    x2 = x  + largeurRoute*2+longueurX+largeurRoute*2;
    y2 = y  - largeurRoute*2-longueurY;

    console.log("DROIT");
    console.log("\t" + "x1 : " + x1)
    console.log("\t" + "y1 : " + y1)
    console.log("\t" + "x2 : " + x2)
    console.log("\t" + "y2 : " + y2)

    drawRect(x1,y1,x2,y2, idWay1, idWay2);

    //Création de la forme BAS DROITE
    x1 = x  + largeurRoute*2+longueurX+largeurRoute*2;
    y1 = y  - largeurRoute*2-longueurY;
    x2 = x1 - largeurRoute*2;
    y2 = y1 - largeurRoute*2;

    console.log("BAS DROITE");
    console.log("\t" + "x1 : " + x1)
    console.log("\t" + "y1 : " + y1)
    console.log("\t" + "x2 : " + x2)
    console.log("\t" + "y2 : " + y2)

    drawCurve(x1,y1,x2,y2,'BD', idWay1, idWay2);//RB

    //Création de la forme BAS
    x1 = x  + largeurRoute*2+longueurX;
    y1 = y  - largeurRoute*2-longueurY-largeurRoute;
    x2 = x1 - longueurX;
    y2 = y1 - largeurRoute;

    console.log("BAS");
    console.log("\t" + "x1 : " + x1)
    console.log("\t" + "y1 : " + y1)
    console.log("\t" + "x2 : " + x2)
    console.log("\t" + "y2 : " + y2)

    drawRect(x1,y1,x2,y2, idWay1, idWay2);

    //Création de la forme BAS GAUCHE
    x1 = x + largeurRoute*2;
    y1 = y - largeurRoute*4-longueurY;
    x2 = x;
    y2 = y - largeurRoute*2-longueurY

    console.log("BAS GAUCHE");
    console.log("\t" + "x1 : " + x1)
    console.log("\t" + "y1 : " + y1)
    console.log("\t" + "x2 : " + x2)
    console.log("\t" + "y2 : " + y2)

    drawCurve(x1,y1,x2,y2,'BG', idWay1, idWay2);//LB
    
    //Création de la forme GAUCHE
    x1 = x + largeurRoute;
    y1 = y - largeurRoute*2 - longueurY;
    x2 = x;
    y2 = y - largeurRoute*2;

    console.log("GAUCHE");
    console.log("\t" + "x1 : " + x1)
    console.log("\t" + "y1 : " + y1)
    console.log("\t" + "x2 : " + x2)
    console.log("\t" + "y2 : " + y2)

    drawRect(x1,y1,x2,y2, idWay1, idWay2);
    
    //Création de la forme HAUT GAUCHE
    x1 = x;
    y1 = y - largeurRoute*2;
    x2 = x + largeurRoute*2;
    y2 = y;

    console.log("HAUT GAUCHE");
    console.log("\t" + "x1 : " + x1)
    console.log("\t" + "y1 : " + y1)
    console.log("\t" + "x2 : " + x2)
    console.log("\t" + "y2 : " + y2)

    drawCurve(x1,y1,x2,y2,'HG', idWay1, idWay2);//LT
}