let btn = document.getElementById('btn');
const box = document.querySelector('.box');
let display1 = document.getElementById('display1');
let display2 = document.getElementById('display2');
let dispdate1 = document.getElementById('datedisp1');
let dispdate2 = document.getElementById('datedisp2');

var chat = ['hello', 'how are you doing', 'what is your name', 'from where you are', 'do you love coffee', 'great', 'it is good to know you'];

btn.addEventListener('click', function () {
    var randomchat = chat[Math.floor(Math.random() * chat.length)]
    display1.innerHTML = randomchat;

    let display = document.getElementById('userbox').value;
    document.getElementById('display2').innerHTML = display;
    document.getElementById('userbox').value = '';

    function date() {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let date = today.getDate();
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let nmonth = month[today.getMonth()];
        let fullyear = today.getFullYear();

        let current_date = `${hours}:${minutes} ${ampm}, ${date}th ${nmonth}, ${fullyear}`;
        dispdate1.innerHTML=current_date;
        dispdate2.innerHTML=current_date;
        
    }

    function renderMessege(txt,type){
        let idName = 'mainDiv';
       
        const messegeDiv = document.createElement('div');
        document.getElementById('mainDiv')[0].set 
        // const txtNode = document.createTextNode(txt);
        // messegeDiv.classList.add(idName);
        // messegeDiv.append(txtNode);
        // box.append(messegeDiv);
    }
    date();
    renderMessege();
    




})




