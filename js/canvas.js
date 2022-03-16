function dibujarMuneco(puntos){
    if(puntos==8) {
        pincel.moveTo(120, 400);
        pincel.lineTo(120, 100);
        pincel.stroke();
    } else if(puntos==7){
        pincel.moveTo(120, 100);
        pincel.lineTo(240, 100);
        pincel.stroke();
    }else if(puntos==6){
        pincel.moveTo(240, 100);
        pincel.lineTo(240, 140);
        pincel.stroke();
    }else if(puntos==5) {
        pincel.beginPath();
        pincel.arc(240, 160, 20, 0, Math.PI * 2 );
        pincel.stroke();
    }else if(puntos==4){
        pincel.beginPath();
        pincel.moveTo(240, 180);
        pincel.lineTo(240, 280);
        pincel.stroke();
    }else if(puntos==3){
        pincel.moveTo(240, 280);
        pincel.lineTo(210, 310);
        pincel.stroke();
    }else if(puntos==2){
        pincel.moveTo(240, 280);
        pincel.lineTo(270, 310);
        pincel.stroke();
    }else if(puntos==1){
        pincel.moveTo(240, 190);
        pincel.lineTo(210, 230);
        pincel.stroke();
    }else if(puntos==0){
        pincel.moveTo(240, 190);
        pincel.lineTo(270, 230);
        pincel.stroke();
        alert("Fin del juego!");
        enJuego = false;
    }

}
