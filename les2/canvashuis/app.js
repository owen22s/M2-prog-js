class App
{
    runAplication()
    {
        console.log("hello world");
            
        let canvas = document.getElementById("canvasid");
        let g = canvas.getContext("2d");
    
      
        console.log(canvas); 
        //line
    
        g.beginPath()
        g.moveTo(100,300);
        g.lineTo(300,300);
        g.stroke();
        g.beginPath()
        g.moveTo(100,300);
        g.lineTo(100,100);
        g.stroke()
        g.beginPath()
        g.moveTo(300,100);
        g.lineTo(100,100);
        g.stroke()
        g.beginPath()
        g.moveTo(300,300);
        g.lineTo(300,100);
        g.stroke()
        g.beginPath()
        g.moveTo(200,0);
        g.lineTo(100,100);
        g.stroke()
        g.beginPath()
        g.moveTo(200,0);
        g.lineTo(300,100);
        g.stroke()
        
    }
}
let app = new App
app.runAplication() 