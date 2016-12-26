console.log("Loaded");

var Body = document.getElementById("Body");
var Link = document.getElementById("Css");

var Home = '<p><h1>Velkommen!</h1><h3>Her finner du oppgavene</h3><p>For å velge oppgave klikk på klappene overnfor<br/> eller start på <a onclick="a('+'"oppgave_1"'+');">oppgave 1</a><br/>Filene til hver oppgave finner du under CSS eller HTML.<br/>Hvis du har spørsmål kontakt Læren.</p></p>';

function H(){
    Body.innerHTML = Home;
}

function A(name){

    var HTML = new XMLHttpRequest();
    HTML.onreadystatechange = function(){
            if(this.readyState == 4){
                Body.innerHTML = this.responseText;
            }}   

    HTML.open("GET","HTML/"+name+".html");
    HTML.send();
    Link.setAttribute("href","CSS/"+name+".css")
}

H();

