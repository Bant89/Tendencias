
class Rack {
    constructor() {
        this.balls = [];
    }

    add(ball){
        if(this.balls.length == 0){
            this.balls.push(ball);
        }
        if(this.balls[0] > ball)
            this.balls.unshift(ball);
        else if(this.balls[this.balls.length - 1] < ball)
            this.balls.push(ball);
        else {
            for(let i = 0; i < this.balls.length; i++){
                if(this.balls[i] > ball){
                    this.balls.splice(i, 0, ball);
                    i = this.balls.length;
                }
            }
        }
    }
}

let rack = new Rack();
let mapa = Object.create(null), abecedario = 'abcdefghijklmnopqrstuvwxyz';
let proofText = 'When not studying nuclear physics, Bambi likes to play beach volleyball.';

let printLetters = () => {
    let entries = Object.entries(mapa);
    let result = "";
    for(let [letter, amount] of entries) {
        let q = amount;
        while(q--){
            result += letter;
        }
    }
    return result;
};

let characterSort = (text) => {
    let lowerCaseText = text.toLowerCase();
    lowerCaseText = lowerCaseText.replace(/\s/g, "");
    lowerCaseText = lowerCaseText.trim();
    for(let q = 0; q < lowerCaseText.length; q++){
        if(mapa[lowerCaseText[q]] != undefined){
            mapa[lowerCaseText[q]]++;
        }
    }
    let finalResult = printLetters();
    return finalResult;
};


for(let i = 0; i < abecedario.length; i++){
    mapa[abecedario[i]] = 0;
}

console.log(rack.balls);
rack.add(20);
console.log(rack.balls);
rack.add(10);
console.log(rack.balls);
rack.add(30);
console.log(rack.balls);
rack.add(25);
console.log(rack.balls);
rack.add(15);
console.log(rack.balls);
rack.add(45);
console.log(rack.balls);
rack.add(0);
console.log(rack.balls);

console.log(characterSort(proofText));




