

var computerNumber = '0';

var dictionary = {
    rock : '0',
    scissors: '-142px',
    paper : '-284px'
}

setInterval(function (){

    if(computerNumber === dictionary.rock){
        computerNumber = dictionary.scissors;

    } else if(computerNumber === dictionary.scissors){
        computerNumber = dictionary.paper;

    } else {
        computerNumber = dictionary.rock;
    }
    //console.log('computerNumber: ', computerNumber);
    document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + computerNumber + ' 0';
}, 300);

// querySelectorAll() 함수는 forEach() 함수를 지원한다.
document.querySelectorAll('.btn').forEach(function(btn){

    btn.addEventListener('click', function(){
        var mySelection = this.textContent;
        console.log(mySelection, computerNumber);
    });

});


 

