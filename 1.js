let usertoss='';
let userch=0;
let scorec=0;
let use=0;
let scoreu=0;
function log(){
    console.log(usertoss);
    document.getElementById("toss").innerHTML=`
    <button onclick="
    userch=1;
    tosswing();"> <img src="1.jpg" alt=""><br></button>
    
    <button onclick="
    userch=2;
    tosswing();"> <img src="2.jpg" alt=""><br></button>
    
    <button onclick="
    userch=3;
    tosswing();"> <img src="3.jpg" alt=""><br></button>
    
    <button onclick="
    userch=4;
    tosswing();"> <img src="4.jpg" alt=""><br></button>
    
    <button onclick="
    userch=5;
    tosswing();"> <img src="5.jpg" alt=""><br></button>
    
    <button onclick="
    userch=6;
    tosswing();"> <img src="6.jpg" alt=""><br></button>
    `
}
function genrandom(){
    let a=Math.random();
    if(a>5/6) return 6;
    else if(a>4/6) return 5;
    else if(a>3/6) return 4;
    else if(a>2/6) return 3;
    else if(a>1/6) return 2;
    else return 1;
}
function tosswing(){
    let c=genrandom();
    c+=userch;
    if(usertoss=="even" && c%2==0){
        alert("You win the toss");
        batting();
    }
    else if(usertoss=="odd" && c%2!=0){
        alert("You win the toss");
        batting();
    }
    else{
        alert("You loss the toss");
        bolwing();
    }
}
function batting(){
    document.getElementById("hd2").innerHTML=`<h2>You are bating.</h2><br>
    <h2> your score = ${scoreu}</h2>`
    document.getElementById("toss").innerHTML=`
    <button onclick="
    scoreu+=1;
    use=1;
    batingresultgen();
    "> <img src="1.jpg" alt=""><br></button>
    
    <button onclick="
    scoreu+=2;
    use=2;
    batingresultgen();
    "> <img src="2.jpg" alt=""><br></button>
    
    <button onclick="
    scoreu+=3;
    use=3;
    batingresultgen();
    "> <img src="3.jpg" alt=""><br></button>
    
    <button onclick="
    scoreu+=4;
    use=4;
    batingresultgen();
    "> <img src="4.jpg" alt=""><br></button>
    
    <button onclick="
    scoreu+=5;
    use=5;
    batingresultgen();
    "> <img src="5.jpg" alt=""><br></button>
    
    <button onclick="
    scoreu+=6;
    use=6;
    batingresultgen();
    "> <img src="6.jpg" alt=""><br></button>
    `
    console.log(scoreu);
}
function batingresultgen(){
    let a=genrandom();
    if(a!=use){
        batting();
    }
    else{
        scoreu-=use;
        alert("Oh! You are out");
        outbat();
    }
}
function batingresultgen3(){
    let a=genrandom();
    if(a!=use){
        bolwing();
        scorec+=a;
    }
    else{
        alert("Oh! You are out the computer");
        bolout();
    }
    
}
function batingresultgen4(){
    let a=genrandom();
    if(a!=use){
        bolout();
    }
    if(scoreu>scorec){
        resultgen();
    }
    else{
        alert("Oh! You are out by computer");
        resultgen();
    }
}
function bolout(){
    document.getElementById("hd2").innerHTML=`<h2>You are batting.</h2><br>
    <h2> your score = ${scoreu}</h2><br> <h2> Computer score = ${scorec}.</h2>`
    document.getElementById("toss").innerHTML=`
    <button onclick="
    scoreu+=1;
    use=1;
    batingresultgen4();
    "> <img src="1.jpg" alt=""><br></button>
    
    <button onclick="
    scoreu+=2;
    use=2;
    batingresultgen4();
    "> <img src="2.jpg" alt=""><br></button>
    
    <button onclick="
    scoreu+=3;
    use=3;
    batingresultgen4();
    "> <img src="3.jpg" alt=""><br></button>
    
    <button onclick="
    scoreu+=4;
    use=4;
    batingresultgen4();
    "> <img src="4.jpg" alt=""><br></button>
    
    <button onclick="
    scoreu+=5;
    use=5;
    batingresultgen4();
    "> <img src="5.jpg" alt=""><br></button>
    
    <button onclick="
    scoreu+=6;
    use=6;
    batingresultgen4();
    "> <img src="6.jpg" alt=""><br></button>
    `
    console.log(scoreu);
}
function bolwing(){
    document.getElementById("hd2").innerHTML=`<h2>You are bolwing.</h2><br>
    <h2> computer score = ${scorec}</h2> `
    document.getElementById("toss").innerHTML=`
    <button onclick="
    use=1;
    batingresultgen3();
    "> <img src="1.jpg" alt=""><br></button>
    
    <button onclick="
    use=2;
    batingresultgen3();
    "> <img src="2.jpg" alt=""><br></button>
    
    <button onclick="
    use=3;
    batingresultgen3();
    "> <img src="3.jpg" alt=""><br></button>
    
    <button onclick="
    use=4;
    batingresultgen3();
    "> <img src="4.jpg" alt=""><br></button>
    
    <button onclick="
    use=5;
    batingresultgen3();
    "> <img src="5.jpg" alt=""><br></button>
    
    <button onclick="
    use=6;
    batingresultgen3();
    "> <img src="6.jpg" alt=""><br></button>
    `
    console.log(scorec);
}
function batingresultgen2(){
    let a=genrandom();
    if(a!=use){
        outbat();
    }
    if(scorec>scoreu){
        resultgen();
    }
    else{
        alert("Oh! You are out the computer");
        resultgen();
    }
    scorec+=a;
}
function outbat(){
    document.getElementById("hd2").innerHTML=`<h2>You are bolwing.</h2><br>
    <h2> your score = ${scoreu}</h2> <h2> Computer score = ${scorec}.</h2>`
    document.getElementById("toss").innerHTML=`
    <button onclick="
    use=1;
    batingresultgen2();
    "> <img src="1.jpg" alt=""><br></button>
    
    <button onclick="
    use=2;
    batingresultgen2();
    "> <img src="2.jpg" alt=""><br></button>
    
    <button onclick="
    use=3;
    batingresultgen2();
    "> <img src="3.jpg" alt=""><br></button>
    
    <button onclick="
    use=4;
    batingresultgen2();
    "> <img src="4.jpg" alt=""><br></button>
    
    <button onclick="
    use=5;
    batingresultgen2();
    "> <img src="5.jpg" alt=""><br></button>
    
    <button onclick="
    use=6;
    batingresultgen2();
    "> <img src="6.jpg" alt=""><br></button>
    `
    console.log(scorec);
}
function resultgen(){
    if(scorec<scoreu){
        document.getElementById("hd2").innerHTML=`<h1> WINNER </h1><br>
        `
        document.getElementById("toss").innerHTML=` <h2> your score = ${scoreu}</h2>
        <h2> Computer score = ${scorec}</h2>`
    }
    else if(scorec>scoreu){
        document.getElementById("hd2").innerHTML=`<h1> LOSSER </h1><br>
        `
        document.getElementById("toss").innerHTML=` <h2> your score = ${scoreu}</h2> <br>
        <h2> Computer score = ${scorec}.</h2>`
    }
    else{
        document.getElementById("hd2").innerHTML=`<h1> TIE </h1><br>
        `
        document.getElementById("toss").innerHTML=`<h2> your score = ${scoreu}</h2><br>
        <h2> Computer score = ${scorec}.</h2> `
    }
}