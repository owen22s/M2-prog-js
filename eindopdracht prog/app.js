class App
{
    runApplication()
    {
      let randomgetal = Math.random();
        console.log("Hello world!");
        let canvas = document.getElementById("canvasId")
        console.log(canvas)
        let g = canvas.getContext("2d");

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