setTimeout(() => {
  document.location.reload();
}, 1000);
class App
{
    runApplication()
    {
      let randomgetal = Math.random();
        console.log("Hello world!");
        let canvas = document.getElementById("canvasId")
        console.log(canvas)
        let g = canvas.getContext("2d");
    
        var ctx = canvas.getContext("2d");
        g.fillStyle = "#4b52d1" 
        g.fillRect(0,0,1200,1200)

        g.font = "30px Arial";
        g.fillText("vrolijk kerst feest", 40, 50);
        this.tekenHuis(g, 600, 10);
        this.tekenHuis(g,0,400 )
        this.tekenHuis(g, 0,0)
        this.tekenHuis(g, 0,200)
        this.tekenHuis(g, 600,200)
        this.tekenHuis(g, 600,400)
        g.fillStyle = "black"
        g.fillRect(500,0,100,1250)
        g.fillStyle = "yellow"
        g.fillRect(545,25,10,60)
        g.fillRect(545,125,10,60)
        g.fillRect(545,225,10,60)
        g.fillRect(545,325,10,60)
        g.fillRect(545,425,10,60)
        g.fillRect(545,525,10,60)
        g.fillRect(545,625,10,60)
        g.fillRect(545,725,10,60)
        g.fillStyle = "#964B00"
        g.fillRect(450,300,30,60)
        g.beginPath();
        g.fillStyle = "lightgreen";
        g.moveTo(430, 320);
        g.lineTo(500, 320);
        g.lineTo(450,250);
        g.fill();
        g.closePath();
        g.fillStyle = "#fa6988"
      g.font = "30px cursive";
      g.fillText("Vrolijk kerstfeest", 500, 300);
      g.fillStyle = "yellow"
      g.fillRect(445,250,10,10)
      g.fillRect(445,280,10,10)
      g.fillRect(460,300,10,10)
      g.fillRect(430,320,10,10)
      g.fillRect(450,320,10,10)
      g.fillRect(440,300,10,10)
      g.fillStyle = "red"
      g.fillRect(470,320,10,10)
      g.fillRect(490,320,10,10)
      g.fillRect(480,300,10,10)
      g.fillRect(460,280,10,10)

       
    }
    boom(g,x,y){

        g.fillStyle = "green";
    
        g.beginPath();
    
        g.moveTo(30 + x, 120 + y);
    
        g.lineTo(130 + x, 20 + y);
    
        g.lineTo(230 + x, 120 + y);
    
        g.fill();

      }
    tekenHuis(g, x, y){
      let randomgetal = Math.random();
      g.beginPath()
      g.fillStyle = "blue"
      g.moveTo(150+x,50+y);
      g.lineTo(100+x,150+y);
      g.lineTo(300+x,200+y);
      g.lineTo(350+x,100+y);
      g.closePath();
      g.stroke();
      g.fill();

      //muren
      g.beginPath()
      g.fillStyle = "green"
      g.moveTo(300+x,200+y);
      g.lineTo(100+x,150+y);
      g.lineTo(100+x,250+y);
      g.lineTo(300+x,300+y);
      g.lineTo(400+x,250+y);
      g.lineTo(400+x,150+y);
      g.lineTo(350+x,100+y);
      g.lineTo(300+x,200+y);
      g.closePath();
      g.stroke();
      g.fill();

      //deur
      g.beginPath()
      g.moveTo(300+x, 200+y)
      g.lineTo(300+x,300+y);
      g.moveTo(300+x,300+y)
      g.lineTo(325+x,287+y)
      g.moveTo(325+x,287+y)
      g.lineTo(325+x,230+y)
      g.moveTo(325+x,230+y)
      g.lineTo(300+x,240+y)
      g.closePath();
      g.stroke();
      g.fill();


      g.beginPath()
      if (randomgetal >= 0.5){
        g.fillStyle = "yellow"
      }
      if (randomgetal <= 0.5){
        g.fillStyle = "black"
      }
      g.lineTo(175+x,250+y); //lo
      g.lineTo(230+x,265+y); //ro
      g.lineTo(230+x,215+y); //rb
      g.lineTo(175+x,200+y); //lb

      g.closePath();
      g.stroke();
      g.fill();
    }
  }
let app = new App();

app.runApplication();