//this is a java file

let bullet =0, star=0, golden=0, mushroom=0, banana = 0;//the variables to tally amount that each item has been chosen
let n;
let n_max = document.getElementById('items').value;

//when generate button clicked, will tally items that get generated
document.getElementById('button1').addEventListener('click',item_1);
function item_1() {
    let firstHalf = false,secondHalf = false ,warning = false;
    let position = document.getElementById('position').value;
    if (position > 0 && position <= 6) {//if the position is 1-6, will generate items based on those positions
        firstHalf = true;
    } else if (position > 6 && position <= 12) {//if position is 7-12, will generate items based on those positions
        secondHalf = true;
    } else if (position <= 0 || position >12) {//if not within range of position, it will give a warning message
        warning = true;
    }
    //for positions 1-6
    if (firstHalf) {
        let random = Math.floor(Math.random() * 100) + 1;//random int between 1-100
        if(random > 0 && random <=1) {//1%
            bullet++;
            //changes when generated
            document.getElementById('bullet').style.border = '2px solid black';
            document.getElementById('output5').style.textDecoration = 'underline';
        }else {//default
            document.getElementById('bullet').style.border = 'none';
            document.getElementById('output5').style.textDecoration = 'none';
        }
        if(random > 1 && random <=5) {//4%
            golden++;
            //changes when generated
            document.getElementById('golden').style.border = '2px solid black';
            document.getElementById('output4').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('golden').style.border = 'none';
            document.getElementById('output4').style.textDecoration = 'none';
        }
        if(random > 5 && random <=20) {//15%
            star++;
            //changes when generated
            document.getElementById('star').style.border = '2px solid black';
            document.getElementById('output3').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('star').style.border = 'none';
            document.getElementById('output3').style.textDecoration = 'none';
        }
        if(random > 20 && random <= 55) {//35%
            mushroom++;
            //changes when generated
            document.getElementById('mushroom').style.border = '2px solid black';
            document.getElementById('output2').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('mushroom').style.border = 'none';
            document.getElementById('output2').style.textDecoration = 'none';
        }
        if(random > 55 && random <=100) {//45%
            banana++;
            //changes when generated
            document.getElementById('banana').style.border = '2px solid black';
            document.getElementById('output1').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('banana').style.border = 'none';
            document.getElementById('output1').style.textDecoration = 'none';
        }
    }
    //for positions 7-12
    if (secondHalf) {
        let random = Math.floor(Math.random() * 100) + 1;//random int between 1-100
        if(random > 0 && random <=30) {//30%
            bullet++;
            //changes when generated
            document.getElementById('bullet').style.border = '2px solid black';
            document.getElementById('output5').style.textDecoration = 'underline';
        } else {
            document.getElementById('bullet').style.border = 'none';
            document.getElementById('output5').style.textDecoration = 'none';
        }
        if(random > 30 && random <=65) {//35%
            golden++;
            //changes when generated
            document.getElementById('golden').style.border = '2px solid black';
            document.getElementById('output4').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('golden').style.border = 'none';
            document.getElementById('output4').style.textDecoration = 'none';
        }
        if(random > 65 && random <=90) {//25%
            star++;
            //changes when generated
            document.getElementById('star').style.border = '2px solid black';
            document.getElementById('output3').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('star').style.border = 'none';
            document.getElementById('output3').style.textDecoration = 'none';
        }
        if(random > 90 && random <= 95) {//5%
            mushroom++;
            //changes when generated
            document.getElementById('mushroom').style.border = '2px solid black';
            document.getElementById('output2').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('mushroom').style.border = 'none';
            document.getElementById('output2').style.textDecoration = 'none';
        }
        if(random > 95 && random <=100) {//5%
            banana++;
            //changes when generated
            document.getElementById('banana').style.border = '2px solid black';
            document.getElementById('output1').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('banana').style.border = 'none';
            document.getElementById('output1').style.textDecoration = 'none';
        }
    }
    //invalid number
    if (warning) {
        alert("Invalid number. Enter another number between 1-12.");//alert message->input another number
    }
    //changes amount that each item has based on the number randomly chosen-> changes output element on html
    document.getElementById('output1').innerHTML = banana;
    document.getElementById('output2').innerHTML = mushroom;
    document.getElementById('output3').innerHTML = star;
    document.getElementById('output4').innerHTML = golden;
    document.getElementById('output5').innerHTML = bullet;
}

//when button clicked, will generate 5 items
document.getElementById('button2').addEventListener('click',items_5);
function items_5() {
let bullet =0, star=0, golden=0, mushroom=0, banana = 0;//restarts the amount of items chosen
n=0;
let firstHalf = false,secondHalf = false ,warning = false;
    let position = document.getElementById('position').value;
    if (position > 0 && position <= 6) {//if the position is 1-6, will generate items based on those positions
        firstHalf = true;
    } else if (position > 6 && position <= 12) {//if position is 7-12, will generate items based on those positions
        secondHalf = true;
    } else if (position <= 0 || position >12) {//if not within range of position, it will give a warning message
        warning = true;
    }
    //for positions 1-6
while (n<5) {//will loop until 5 items are chosen
    if (firstHalf) {
        let random = Math.floor(Math.random() * 100) + 1;//random int between 1-100
        if(random > 0 && random <=1) {//1%
            bullet++;
            //changes when generated
            document.getElementById('bullet').style.border = '2px solid black';
            document.getElementById('output5').style.textDecoration = 'underline';
        }else {//default
            document.getElementById('bullet').style.border = 'none';
            document.getElementById('output5').style.textDecoration = 'none';
        }
        if(random > 1 && random <=5) {//4%
            golden++;
            //changes when generated
            document.getElementById('golden').style.border = '2px solid black';
            document.getElementById('output4').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('golden').style.border = 'none';
            document.getElementById('output4').style.textDecoration = 'none';
        }
        if(random > 5 && random <=20) {//15%
            star++;
            //changes when generated
            document.getElementById('star').style.border = '2px solid black';
            document.getElementById('output3').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('star').style.border = 'none';
            document.getElementById('output3').style.textDecoration = 'none';
        }
        if(random > 20 && random <= 55) {//35%
            mushroom++;
            //changes when generated
            document.getElementById('mushroom').style.border = '2px solid black';
            document.getElementById('output2').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('mushroom').style.border = 'none';
            document.getElementById('output2').style.textDecoration = 'none';
        }
        if(random > 55 && random <=100) {//45%
            banana++;
            //changes when generated
            document.getElementById('banana').style.border = '2px solid black';
            document.getElementById('output1').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('banana').style.border = 'none';
            document.getElementById('output1').style.textDecoration = 'none';
        }
    }
    //for positions 7-12
    if (secondHalf) {
        let random = Math.floor(Math.random() * 100) + 1;//random int between 1-100
        if(random > 0 && random <=30) {//30%
            bullet++;
            //changes when generated
            document.getElementById('bullet').style.border = '2px solid black';
            document.getElementById('output5').style.textDecoration = 'underline';
        } else {
            document.getElementById('bullet').style.border = 'none';
            document.getElementById('output5').style.textDecoration = 'none';
        }
        if(random > 30 && random <=65) {//35%
            golden++;
            //changes when generated
            document.getElementById('golden').style.border = '2px solid black';
            document.getElementById('output4').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('golden').style.border = 'none';
            document.getElementById('output4').style.textDecoration = 'none';
        }
        if(random > 65 && random <=90) {//25%
            star++;
            //changes when generated
            document.getElementById('star').style.border = '2px solid black';
            document.getElementById('output3').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('star').style.border = 'none';
            document.getElementById('output3').style.textDecoration = 'none';
        }
        if(random > 90 && random <= 95) {//5%
            mushroom++;
            //changes when generated
            document.getElementById('mushroom').style.border = '2px solid black';
            document.getElementById('output2').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('mushroom').style.border = 'none';
            document.getElementById('output2').style.textDecoration = 'none';
        }
        if(random > 95 && random <=100) {//5%
            banana++;
            //changes when generated
            document.getElementById('banana').style.border = '2px solid black';
            document.getElementById('output1').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('banana').style.border = 'none';
            document.getElementById('output1').style.textDecoration = 'none';
        }
    }
    n++;//will increase until 5
}
    //invalid number
    if (warning) {
        alert("Invalid number. Enter another number between 1-12.");//alert message->input another number
    }
    //changes amount that each item has based on the number randomly chosen-> changes output element on html
    document.getElementById('output1').innerHTML = banana;
    document.getElementById('output2').innerHTML = mushroom;
    document.getElementById('output3').innerHTML = star;
    document.getElementById('output4').innerHTML = golden;
    document.getElementById('output5').innerHTML = bullet;
}

//when button clicked, will generate items until 10 bullet bill has been chosen
document.getElementById('button3').addEventListener('click',item_bulletbill); 
function item_bulletbill() {
    let bullet =0, star=0, golden=0, mushroom=0, banana = 0;//restarts the amount of items chosen
    n=0;
let firstHalf = false,secondHalf = false ,warning = false;
    let position = document.getElementById('position').value;
    if (position > 0 && position <= 6) {//if the position is 1-6, will generate items based on those positions
        firstHalf = true;
    } else if (position > 6 && position <= 12) {//if position is 7-12, will generate items based on those positions
        secondHalf = true;
    } else if (position <= 0 || position >12) {//if not within range of position, it will give a warning message
        warning = true;
    }
    //for positions 1-6
    while (n<10){
    if (firstHalf) {
        let random = Math.floor(Math.random() * 100) + 1;//random int between 1-100
        if(random > 0 && random <=1) {//1%
            bullet++;
            n++;//since bullet bill chosen, it'll increase by one
            //changes when generated
            document.getElementById('bullet').style.border = '2px solid black';
            document.getElementById('output5').style.textDecoration = 'underline';
        }else {//default
            document.getElementById('bullet').style.border = 'none';
            document.getElementById('output5').style.textDecoration = 'none';
        }
        if(random > 1 && random <=5) {//4%
            golden++;
            //changes when generated
            document.getElementById('golden').style.border = '2px solid black';
            document.getElementById('output4').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('golden').style.border = 'none';
            document.getElementById('output4').style.textDecoration = 'none';
        }
        if(random > 5 && random <=20) {//15%
            star++;
            //changes when generated
            document.getElementById('star').style.border = '2px solid black';
            document.getElementById('output3').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('star').style.border = 'none';
            document.getElementById('output3').style.textDecoration = 'none';
        }
        if(random > 20 && random <= 55) {//35%
            mushroom++;
            //changes when generated
            document.getElementById('mushroom').style.border = '2px solid black';
            document.getElementById('output2').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('mushroom').style.border = 'none';
            document.getElementById('output2').style.textDecoration = 'none';
        }
        if(random > 55 && random <=100) {//45%
            banana++;
            //changes when generated
            document.getElementById('banana').style.border = '2px solid black';
            document.getElementById('output1').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('banana').style.border = 'none';
            document.getElementById('output1').style.textDecoration = 'none';
        }
    }
    //for positions 7-12
    if (secondHalf) {
        let random = Math.floor(Math.random() * 100) + 1;//random int between 1-100
        if(random > 0 && random <=30) {//30%
            bullet++;
            n++;//since bullet bill chosen, will increase by one
            //changes when generated
            document.getElementById('bullet').style.border = '2px solid black';
            document.getElementById('output5').style.textDecoration = 'underline';
        } else {
            document.getElementById('bullet').style.border = 'none';
            document.getElementById('output5').style.textDecoration = 'none';
        }
        if(random > 30 && random <=65) {//35%
            golden++;
            //changes when generated
            document.getElementById('golden').style.border = '2px solid black';
            document.getElementById('output4').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('golden').style.border = 'none';
            document.getElementById('output4').style.textDecoration = 'none';
        }
        if(random > 65 && random <=90) {//25%
            star++;
            //changes when generated
            document.getElementById('star').style.border = '2px solid black';
            document.getElementById('output3').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('star').style.border = 'none';
            document.getElementById('output3').style.textDecoration = 'none';
        }
        if(random > 90 && random <= 95) {//5%
            mushroom++;
            //changes when generated
            document.getElementById('mushroom').style.border = '2px solid black';
            document.getElementById('output2').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('mushroom').style.border = 'none';
            document.getElementById('output2').style.textDecoration = 'none';
        }
        if(random > 95 && random <=100) {//5%
            banana++;
            //changes when generated
            document.getElementById('banana').style.border = '2px solid black';
            document.getElementById('output1').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('banana').style.border = 'none';
            document.getElementById('output1').style.textDecoration = 'none';
        }
    }
}
    //invalid number
    if (warning) {
        alert("Invalid number. Enter another number between 1-12.");//alert message->input another number
    }
    //changes amount that each item has based on the number randomly chosen-> changes output element on html
    document.getElementById('output1').innerHTML = banana;
    document.getElementById('output2').innerHTML = mushroom;
    document.getElementById('output3').innerHTML = star;
    document.getElementById('output4').innerHTML = golden;
    document.getElementById('output5').innerHTML = bullet;
}

//when button clicked, will generate items until the amouunt chosen by user has been reached
document.getElementById('button4').addEventListener('click',items_n);
function items_n() {
let bullet =0, star=0, golden=0, mushroom=0, banana = 0;//restarts the ammount of items chosen
n=0;
let n_max = document.getElementById('items').value;//amount chosen by user

let firstHalf = false,secondHalf = false ,warning = false;
    let position = document.getElementById('position').value;
    if (position > 0 && position <= 6) {//if the position is 1-6, will generate items based on those positions
        firstHalf = true;
    } else if (position > 6 && position <= 12) {//if position is 7-12, will generate items based on those positions
        secondHalf = true;
    } else if (position <= 0 || position >12) {//if not within range of position, it will give a warning message
        warning = true;
    }
    //for positions 1-6
while (n<n_max) {
    if (firstHalf) {
        let random = Math.floor(Math.random() * 100) + 1;//random int between 1-100
        if(random > 0 && random <=1) {//1%
            bullet++;
            //changes when generated
            document.getElementById('bullet').style.border = '2px solid black';
            document.getElementById('output5').style.textDecoration = 'underline';
        }else {//default
            document.getElementById('bullet').style.border = 'none';
            document.getElementById('output5').style.textDecoration = 'none';
        }
        if(random > 1 && random <=5) {//4%
            golden++;
            //changes when generated
            document.getElementById('golden').style.border = '2px solid black';
            document.getElementById('output4').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('golden').style.border = 'none';
            document.getElementById('output4').style.textDecoration = 'none';
        }
        if(random > 5 && random <=20) {//15%
            star++;
            //changes when generated
            document.getElementById('star').style.border = '2px solid black';
            document.getElementById('output3').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('star').style.border = 'none';
            document.getElementById('output3').style.textDecoration = 'none';
        }
        if(random > 20 && random <= 55) {//35%
            mushroom++;
            //changes when generated
            document.getElementById('mushroom').style.border = '2px solid black';
            document.getElementById('output2').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('mushroom').style.border = 'none';
            document.getElementById('output2').style.textDecoration = 'none';
        }
        if(random > 55 && random <=100) {//45%
            banana++;
            //changes when generated
            document.getElementById('banana').style.border = '2px solid black';
            document.getElementById('output1').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('banana').style.border = 'none';
            document.getElementById('output1').style.textDecoration = 'none';
        }
    }
    //for positions 7-12
    if (secondHalf) {
        let random = Math.floor(Math.random() * 100) + 1;//random int between 1-100
        if(random > 0 && random <=30) {//30%
            bullet++;
            //changes when generated
            document.getElementById('bullet').style.border = '2px solid black';
            document.getElementById('output5').style.textDecoration = 'underline';
        } else {
            document.getElementById('bullet').style.border = 'none';
            document.getElementById('output5').style.textDecoration = 'none';
        }
        if(random > 30 && random <=65) {//35%
            golden++;
            //changes when generated
            document.getElementById('golden').style.border = '2px solid black';
            document.getElementById('output4').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('golden').style.border = 'none';
            document.getElementById('output4').style.textDecoration = 'none';
        }
        if(random > 65 && random <=90) {//25%
            star++;
            //changes when generated
            document.getElementById('star').style.border = '2px solid black';
            document.getElementById('output3').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('star').style.border = 'none';
            document.getElementById('output3').style.textDecoration = 'none';
        }
        if(random > 90 && random <= 95) {//5%
            mushroom++;
            //changes when generated
            document.getElementById('mushroom').style.border = '2px solid black';
            document.getElementById('output2').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('mushroom').style.border = 'none';
            document.getElementById('output2').style.textDecoration = 'none';
        }
        if(random > 95 && random <=100) {//5%
            banana++;
            //changes when generated
            document.getElementById('banana').style.border = '2px solid black';
            document.getElementById('output1').style.textDecoration = 'underline';
        } else {//default
            document.getElementById('banana').style.border = 'none';
            document.getElementById('output1').style.textDecoration = 'none';
        }
    }
    n++;//will increase until amount chosen
}
    //invalid number
    if (warning) {
        alert("Invalid number. Enter another number between 1-12.");//alert message->input another number
    }
    //changes amount that each item has based on the number randomly chosen-> changes output element on html
    document.getElementById('output1').innerHTML = banana;
    document.getElementById('output2').innerHTML = mushroom;
    document.getElementById('output3').innerHTML = star;
    document.getElementById('output4').innerHTML = golden;
    document.getElementById('output5').innerHTML = bullet;
}