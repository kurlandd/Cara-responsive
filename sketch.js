let w = 600;
let h = 600;
let mic;


function setup() {



    createCanvas(windowWidth, windowHeight);

    noStroke();
    mic = new p5.AudioIn();
    mic.start();
    //   img = loadImage('DIEGO.png');

}

function draw() {


    micLevel = mic.getLevel();

    mov = map(micLevel, 0, 1, 1, 3000);

    background(6, 32, 74);


    push();


    scale(mouseX / 1000);
    translate(mouseX, mouseY);


    //////wasy
    push()

    noStroke();
    translate(0, 380);
    fill(162, 110, 59);
    beginShape();
    vertex(42 - mov, 0);
    vertex(85 - mov, -10);
    vertex(500, 60);
    vertex(915 + mov, -10);
    vertex(952 + mov, 0);
    vertex(975 + mov, 60);
    vertex(930 + mov, 60);
    vertex(960 + mov, 185);
    vertex(910 + mov, 170);
    vertex(960 + mov, 310 + mov)
    vertex(500, 265);
    vertex(60 - mov, 310 + mov);
    vertex(90 - mov, 170);
    vertex(40 - mov, 185);
    vertex(70 - mov, 60);
    vertex(25 - mov, 60);
    endShape(CLOSE);
    pop()

    push()
    //boca abajo
    translate(0, 380);
    fill(181, 130, 82);
    beginShape();
    vertex(330, 500);
    vertex(670, 500);
    vertex(670, 650);
    bezierVertex(690, 770 + mov, 310, 770 + mov, 330, 650);
    vertex(330, 650);
    endShape();
    pop()

    push()

    //boca mitad
    translate(0, 380);
    fill(85, 60, 51);
    beginShape();
    vertex(290, 400);
    vertex(710, 400);
    vertex(690, 485);
    vertex(645, 565 + mov);
    bezierVertex(550, 590 + mov, 450, 590 + mov, 355, 565 + mov);
    vertex(355, 565 + mov);
    vertex(310, 485);

    endShape();
    pop()

    push()
    //diente izquierdo
    translate(0, 380);
    fill(224, 216, 237);
    beginShape();
    vertex(360, 400);
    vertex(300, 400);
    vertex(340, 800 + mov);
    endShape();
    pop()

    push()
    //diente derecho
    translate(0, 380);
    fill(224, 216, 237);
    beginShape();
    vertex(640, 400);
    vertex(700, 400);
    vertex(660, 800 + mov);
    endShape();
    pop()

    push()
    //boca arriba
    translate(0, 380);
    fill(181, 130, 82);
    beginShape();
    vertex(300, 180);
    vertex(700, 180);
    bezierVertex(740, 270, 730, 335, 720, 422);
    vertex(720, 422);
    bezierVertex(600, 445, 400, 445, 280, 422);
    vertex(280, 422);
    bezierVertex(270, 335, 260, 270, 300, 180);
    endShape();
    pop()

    push()
    //oreja base izq
    translate(85, 33);
    beginShape();
    fill(181, 130, 82);
    vertex(0, 15 + mov);
    bezierVertex(0, 0, 100, 10, 170, 145); // C1, C2, V2
    vertex(75, 230);
    bezierVertex(20, 150, 1, 90, 0, 15 + mov); // C1, C2, V2
    endShape();


    //oreja dentro izq
    fill(244, 240, 215);
    beginShape();
    vertex(0, 15 + mov);
    bezierVertex(40, 30 + mov, 70, 130 + mov, 75, 230); // C1, C2, V2
    bezierVertex(20, 150, 0, 90, 0, 15 + mov); // C1, C2, V2
    endShape();

    pop()

    //oreja base der
    push()
    translate(0, 33);
    beginShape();
    fill(181, 130, 82);

    vertex(915, 15 + mov);

    bezierVertex(915, 0, 825, 10, 745, 145); // C1, C2, V2
    vertex(840, 230);
    bezierVertex(895, 150, 914, 10, 915, 15 + mov); // C1, C2, V2

    endShape();

    //oreja dentro der

    fill(244, 240, 215);
    beginShape();
    vertex(915, 15 + mov);
    bezierVertex(875, 30 + mov, 845, 130 + mov, 840, 230); // C1, C2, V2
    bezierVertex(895, 150, 915, 90, 915, 15 + mov); // C1, C2, V2
    endShape();

    pop()

    push()
    //boca arriba
    translate(0, 380);
    fill(181, 130, 82);
    beginShape();
    vertex(300, 180);
    vertex(700, 180);
    bezierVertex(740, 270, 730, 335, 720, 422);
    vertex(720, 422);
    bezierVertex(600, 445, 400, 445, 280, 422);
    vertex(280, 422);
    bezierVertex(270, 335, 260, 270, 300, 180);
    endShape();
    pop()


    push()
    //cabeza
    fill(181, 130, 82);
    translate(0, 380);
    ellipse(500, 0, 800, 530);
    pop();

    push()
    //boca dentro
    translate(0, 380);
    fill(59, 28, 15);
    beginShape();
    vertex(370, 450);
    vertex(630, 450);
    bezierVertex(640, 480, 640, 525, 630, 555);
    vertex(630, 555 + mov);
    vertex(370, 555 + mov);
    bezierVertex(360, 525, 360, 480, 370, 450);
    endShape();
    pop()

    push()
    //dientes arriba
    translate(0, 380);
    fill(224, 216, 237);
    beginShape();
    vertex(380, 455);
    vertex(620, 455);
    vertex(600, 501);
    vertex(400, 501);
    endShape();
    pop()


    push()
    //dientes abajo
    translate(0, 380);
    fill(224, 216, 237);
    beginShape();
    vertex(600, 503 + mov);
    vertex(620, 550 + mov);
    vertex(380, 550 + mov);
    vertex(400, 503 + mov);
    endShape();
    pop()

    push()
    //nariz sombra
    fill(39, 19, 10);
    translate(0, 380)
    beginShape();
    vertex(330, 180);
    vertex(670, 180);
    vertex(670, 228 - mov);
    vertex(500, 380 - mov);
    vertex(330, 228 - mov);

    endShape(CLOSE);

    pop()




    push()
    //ceja izquierda
    fill(244, 240, 215);
    beginShape();
    vertex(150, 420 - mov);
    bezierVertex(157, 365 - mov, 190, 330 - mov, 230, 295 - mov);
    vertex(230, 295 - mov);
    bezierVertex(255, 270 - mov, 345, 260 - mov, 370, 305 - mov);
    vertex(370, 305 - mov);
    bezierVertex(372, 310 - mov, 385, 315 - mov, 400, 410 - mov);
    vertex(400, 410 - mov);
    bezierVertex(340, 310 - mov, 160, 360 - mov, 150, 420 - mov);


    endShape(CLOSE);
    pop();

    push()
    //ceja derecha
    fill(244, 240, 215);
    beginShape();
    vertex(850, 420 - mov);
    bezierVertex(840, 360 - mov, 640, 310 - mov, 600, 410 - mov);
    vertex(600, 410 - mov);
    bezierVertex(615, 315 - mov, 628, 310 - mov, 630, 305 - mov);
    vertex(630, 305 - mov);
    bezierVertex(655, 260 - mov, 745, 270 - mov, 770, 295 - mov);
    vertex(770, 295 - mov);
    bezierVertex(810, 330 - mov, 843, 365 - mov, 850, 420 - mov);
    endShape(CLOSE);
    pop();

    push()
    //ojo izq
    fill(255);
    beginShape();
    vertex(390, 440);
    bezierVertex(320, 455, 255, 450, 195, 411);
    vertex(195, 411);
    bezierVertex(208, 380, 238, 365, 300, 375);
    vertex(300, 375);
    bezierVertex(360, 384, 385, 408, 390, 440);
    endShape(CLOSE);

    //ojo der
    fill(255);
    beginShape();
    vertex(805, 411);
    bezierVertex(745, 450, 680, 455, 610, 440);
    vertex(610, 440);
    bezierVertex(615, 408, 638, 384, 700, 375);
    vertex(700, 375);
    bezierVertex(765, 365, 795, 380, 805, 411);
    endShape(CLOSE);
    pop();

    push();
    //ojo izq dentro
    fill(47, 135, 82);
    beginShape();
    vertex(255, 439);
    bezierVertex(240, 422, 235, 390, 257, 372);
    vertex(257, 372);
    bezierVertex(270, 370, 295, 370, 330, 381);
    vertex(330, 381);
    bezierVertex(350, 410, 332, 440, 312, 448);
    vertex(312, 448);
    bezierVertex(290, 448, 275, 445, 255, 439);
    endShape(CLOSE);

    //ojo der dentro
    fill(47, 135, 82);
    beginShape();
    vertex(743, 372);
    bezierVertex(765, 390, 767, 422, 745, 439);
    vertex(745, 439);
    bezierVertex(725, 445, 708, 448, 688, 448);
    vertex(688, 448);
    bezierVertex(668, 440, 650, 410, 670, 381);
    vertex(670, 381);
    bezierVertex(705, 370, 730, 370, 743, 372);


    endShape(CLOSE);
    pop();

    //ojo izq dentro dentro
    fill(0)
    ellipse(290, 405, 40 + mov, 40 + mov);

    //ojo izq dentro dentro
    fill(0)
    ellipse(710, 405, 40 + mov, 40 + mov);

    //pod okiem izq
    fill(244, 240, 215);
    beginShape();
    vertex(185, 480);
    bezierVertex(165, 435, 190, 430, 235, 445);
    vertex(235, 445);
    bezierVertex(280, 460, 340, 465, 433, 470);
    vertex(433, 470);
    bezierVertex(350, 500, 270, 510, 185, 480);
    endShape(CLOSE);

    //pod okiem der
    fill(244, 240, 215);
    beginShape();
    vertex(567, 470);
    bezierVertex(660, 465, 720, 460, 765, 445);
    vertex(765, 445);
    bezierVertex(810, 430, 835, 435, 815, 480);
    vertex(815, 480);
    bezierVertex(730, 510, 650, 500, 567, 470);
    endShape(CLOSE);


    push();
    //nariz
    translate(0, 380);
    fill(175, 115, 62);
    beginShape();
    vertex(405, 60);
    vertex(595, 60);
    vertex(690, 180);
    vertex(500, 350);
    vertex(310, 180);
    endShape(CLOSE);
    pop();

    pop();


}


function touchStarted() {
    getAudioContext().resume();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
