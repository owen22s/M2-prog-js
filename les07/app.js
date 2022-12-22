class Dino
{
constructor(naam, vleeseter, leeftijd)
{
this.naam = naam;
this.vleeseter = true;
this.leeftijd = 200 
}
}
class app
{
    runapplication(){
        let trex = new Dino("Trex",true,10);
        console.log(trex);
    }

}
let app = new App();
app.runapplication();