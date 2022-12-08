class App{
    runapplication(){
    let arr =["billie eilish", "black panther sound track 2019","joost","BARKIE BOY", "gekke jongen"];
    let headers = document.getElementsByTagName("h1")
    headers[0].innerHTML = arr[0];
    headers[1].innerHTML = arr[1];
    headers[2].innerHTML = arr[2];
    headers[3].innerHTML = arr[3];
    headers[4].innerHTML = arr[4];
    

}
}
let app = new App();
app.runapplication();