console.log("Loaded");

var head = "<title>Oppgaver</title>";
head +='<link rel="stylesheet" type="text/css" href="Misc/css.css" />';
head +='<link id="Css" rel="stylesheet" type="text/css" href="" />';
head +='<meta charset="UTF-8"/>';

document.head.innerHTML = head;

var Body;
var Link;

var Body = document.getElementById("Body");
var Link = document.getElementById("Css");

var Home = '<p><h1>Velkommen!</h1>';
Home += "<h3>Her finner du oppgavene</h3>";
Home += '<p>For å velge oppgave klikk på klappene overnfor<br/> eller start på <a onclick="a('+'"oppgave_1"'+');">oppgave 1</a>';
Home += '<br/>Filene til hver oppgave finner du under CSS eller HTML.<br/>Hvis du har spørsmål kontakt Læren.</p></p>';

function addlink(){
    a = Body.getElementsByTagName("link");
    for(var i=0;i<a.length();i++){
        document.head.append(a[i]); 
    };
    
};

function H(){
    Body.innerHTML = Home;
}

function A(name){
    document.head.innerHTML = head;
    Body = document.getElementById("Body");
    Link = document.getElementById("Css");
   
    var HTML = new XMLHttpRequest();
    HTML.onreadystatechange = function(){
            if(this.readyState == 4){
                Body.innerHTML = this.responseText;
                try{
                addlink();
                }catch(err){

                }
            }}   

    HTML.open("GET","HTML/"+name+".html");
    HTML.send();
    Link.setAttribute("href","CSS/"+name+".css")
}

H();

