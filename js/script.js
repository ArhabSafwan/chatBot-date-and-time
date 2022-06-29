let btn = document.getElementById('btn');
let display1 = document.getElementById('display1');
let display2 = document.getElementById('display2');
let dispdate1 = document.getElementById('datedisp1');
let dispdate2 = document.getElementById('datedisp2');

var chat = ['hello', 'Zuhan ekta horny pola', 'tawssef vhai is best', 'tonmoy vhai zulumkari', 'sharif vhai osthir', 'tareq vhai extra terrstrial', 'foysal vhai boy'];

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
        let date = today.getDate();
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let nmonth = month[today.getMonth()];
        let fullyear = today.getFullYear();



        let current_date = `${date}th ${nmonth}, ${fullyear} ${hours}:${minutes}`;
        dispdate1.innerHTML=current_date;
        dispdate2.innerHTML=current_date;
        
    }
    date();
    




})




