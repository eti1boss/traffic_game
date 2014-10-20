var largeurRoute = 20;

// Cette fonction a pour but de créer un circuit rectangulaire avec les angles arrondis
// Plus précisemment, cela créé l'objet 3D et le tableau de coordonnées du chemin des voitures
function map_rect(x, y, longueurX, longueurY){

    //Création de la forme HAUT
    x1 = x  + largeurRoute*2;
    y1 = y  - largeurRoute;
    x2 = x1 + longueurX
    y2 = y1 + largeurRoute;

    drawRect(x1,y1,x2,y2);

    //Création de la forme HAUT DROITE
    x1 = x  + largeurRoute*2+longueurX;
    y1 = y;
    x2 = x1 + largeurRoute*2;
    y2 = y1 - largeurRoute*2;

    drawCurve(x1,y1,x2,y2,'HD');//RT

    //Création de la forme DROITE
    x1 = x  + largeurRoute*2+longueurX+largeurRoute;
    y1 = y  - largeurRoute*2;
    x2 = x  + largeurRoute*2+longueurX+largeurRoute*2;
    y2 = y  - largeurRoute*2-longueurY;

    drawRect(x1,y1,x2,y2);

    //Création de la forme BAS DROITE
    x1 = x  + largeurRoute*2+longueurX+largeurRoute*2;
    y1 = y  - largeurRoute*2-longueurY;
    x2 = x1 - largeurRoute*2;
    y2 = y1 - largeurRoute*2;

    drawCurve(x1,y1,x2,y2,'BD');//RB

    //Création de la forme BAS
    x1 = x  + largeurRoute*2+longueurX;
    y1 = y  - largeurRoute*2-longueurY-largeurRoute;
    x2 = x1 - longueurX;
    y2 = y1 - largeurRoute;

    drawRect(x1,y1,x2,y2);

    //Création de la forme BAS GAUCHE
    x1 = x + largeurRoute*2;
    y1 = y - largeurRoute*4-longueurY;
    x2 = x;
    y2 = y - largeurRoute*2-longueurY

    drawCurve(x1,y1,x2,y2,'BG');//LB
    
    //Création de la forme GAUCHE
    x1 = x + largeurRoute;
    y1 = y - largeurRoute*2 - longueurY;
    x2 = x;
    y2 = y - largeurRoute*2;

    drawRect(x1,y1,x2,y2);
    
    //Création de la forme HAUT GAUCHE
    x1 = x;
    y1 = y - largeurRoute*2;
    x2 = x + largeurRoute*2;
    y2 = y;

    drawCurve(x1,y1,x2,y2,'HG');//LT
}







        differenceX = x2 - x1;
        differenceY = y2 - y1;

        if( Math.abs(differenceX) > Math.abs(differenceY) ){
            if(differenceX > 0){
                for(i=x1;i<x2;i+=2){
                    way.push({x:i,y:7,z:-(largeurRoute*.25),free:true});
                    way2.push({x:i,y:7,z:-(largeurRoute*.75),free:true});
                }
            }
            else{        
	            for(i=x1;i>x2;i-=2){
		            way.push({x:i,y:7,z:(y2*-1)-largeurRoute*.75,free:true});
		            way2.push({x:i,y:7,z:(y2*-1)-largeurRoute*.25,free:true});
		        }

            }
        }
        else{
            if(differenceY > 0){
		        for(i=(y1*-1);i>(y2*-1);i-=2){
		            way.push({x:x2+(largeurRoute*.75),y:7,z:i,free:true});
		            way2.push({x:x2+(largeurRoute*.25),y:7,z:i,free:true});
		        }
            }
            else{
                for(i=(y1*-1);i<(y2*-1);i+=2){
                    way.push({x:x2-(largeurRoute*.75),y:7,z:i,free:true});
                    way2.push({x:x2-(largeurRoute*.25),y:7,z:i,free:true});
                }
            }
        }