function load(){
    var date = new Date();
    var hours = date.getHours();
    showMsg(hours);
    document.getElementById('range').value = hours;
}

function showMsg(hours){
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var page = document.body.style;

    hours != 1 ? msg.innerHTML = `Agora são ${hours} horas!` : msg.innerHTML = `Agora são ${hours} hora!`;
    if(hours > 0 && hours <= 12){
        //DIA
        img.src = './imgs/day1.jpg'
        page.background = '#98D5F4';
        
    }else if (hours > 12 && hours < 18){
        img.src = './imgs/day2.jpg'
        page.background = '#f2772b';
    }else{
        img.src = './imgs/day3.jpeg'
        page.background = '#02182D';
    }
}

function customHour(){
    hours = document.getElementById('range').value;
    showMsg(hours);
}