class App{
    runApplication(){
        let start = this.rollstat();
        console.log(start)
        let start1 = this.rollstat();
        console.log(start1)
        let start2 = this.rollstat();
        console.log(start2)
        let start3 = this.rollstat();
        console.log(start3)
        let start4 = this.rollstat();
        console.log(start4)
        let start5 = this.rollstat();
        console.log(start5)
    }

    rollstat(){

        let d1 = this.rollDice();
        let d2 = this.rollDice();
        let d3 = this.rollDice();
        let d4 = this.rollDice();

        let dicelist = [d1, d2, d3, d4];
        dicelist.sort();
        let som = dicelist[1] + dicelist[2] + dicelist[3];
        return som ;
    }

    rollDice(){
        let dice = Math.floor(Math.random()* 6 + 1);
        return dice;

    }
}

let app = new App();
app.runApplication();