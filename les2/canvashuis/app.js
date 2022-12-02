class App
{
  randomgetal = Math.random();
    runApplication()
    {
        console.log("Hello world!");
        let canvas = document.getElementById("canvasId")
        console.log(canvas)
        let g = canvas.getContext("2d");
        let randomgetal = Math.random();

        //dak
        g.beginPath()
        g.fillStyle = "purple"
        g.moveTo(150,50);
        g.lineTo(100,150);
        g.lineTo(300,200);
        g.lineTo(350,100);
        g.closePath();
        g.stroke();
        g.fill();

        //muren
        g.beginPath()
        g.fillStyle = "green"
        g.moveTo(300,200);
        g.lineTo(100,150);
        g.lineTo(100,250);
        g.lineTo(300,300);
        g.lineTo(400,250);
        g.lineTo(400,150);
        g.lineTo(350,100);
        g.lineTo(300,200);
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
        g.lineTo(175,250); //lo
        g.lineTo(230,265); //ro
        g.lineTo(230,215); //rb
        g.lineTo(175,200); //lb

        g.closePath();
        g.stroke();
        g.fill();
    }
}

let app = new App();

app.runApplication();