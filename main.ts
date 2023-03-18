
//alle variabelen
let startTijd = 0
let opKnopGedrukt=false
let posititieMol=0
let spelBezig =false

//bij bewegen van microbit
input.onGesture(Gesture.Shake,function(){
    basic.showString("3,2,1") //toon 
    spelBezig =true //ja spel is bezig
    //terwijl het spel begonnen is ,geef een radom getal tussen (0,1
    
    while (spelBezig ==true){
        posititieMol =Math.randomRange(0,2)
        opKnopGedrukt=false  //men heeft niet op de knop gedrukt
        basic.pause(300)  //om de 300msec begin opnieuw

//alt µ £`` toets rechts onder
    if(posititieMol==0){
        basic.showLeds(`#....
       #....
       #....
       .....
       #.... `)
    } //if tot hier
    

//als positieMol gelijk is aan 1
        if (posititieMol == 1) {
            basic.showLeds(`....#
       ....#
       ....#
       .....
       ....# `)
        } // if tot hier

        if (posititieMol == 2) {
            basic.showLeds(`#...#
       #...#
       #...#
       #....
       #...# `)
        } // if tot hier

    startTijd=input.runningTime()//tijd van de start van programma

while(opKnopGedrukt==false){
    //starttijd van het programma-destarttijd spel moet kleiner zijn dan 1sec
    if(input.runningTime()- startTijd>1000) {
        game.gameOver()
    }  //if tot hier
    
//als je op de juiste knop drukt zie je een vinkje yes andrs game over
    if (posititieMol==0 && input.buttonIsPressed(Button.A)){
        opKnopGedrukt=true
        basic.showIcon(IconNames.Yes)
        game.addScore(1)
    }//einde if
    else if (posititieMol == 0 && input.buttonIsPressed(Button.B)) {
        opKnopGedrukt=true
        game.isGameOver()
           } //einde if else
    else if (posititieMol == 1 && input.buttonIsPressed(Button.B)){
        opKnopGedrukt = true
        basic.showIcon(IconNames.Yes)
        game.addScore(1)
    }//einde 2de if else
    else if (posititieMol == 1 && input.buttonIsPressed(Button.A)){
        opKnopGedrukt = true
        game.isGameOver()
    }  //einde 3de if else

    else if (posititieMol == 2 && input.buttonIsPressed(Button.AB)) {
        opKnopGedrukt = true
        basic.showIcon(IconNames.Yes)
        game.addScore(1)
    }//einde 2de if else
    else if (posititieMol == 2 && input.buttonIsPressed(Button.AB)) {
        opKnopGedrukt = true
        game.isGameOver()
    }  //einde 3de if else
    else if (posititieMol == 2 && input.buttonIsPressed(Button.B)) {
        opKnopGedrukt = true
        game.isGameOver()
    } //einde if else
    else if (posititieMol == 2 && input.buttonIsPressed(Button.A)) {
        opKnopGedrukt = true
        game.isGameOver()
    } //einde if else
    }  //while 2 tot hier



} //while 1 einde


})  //einde functie

basic.forever(function () {
	input.runningTime()
})
