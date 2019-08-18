

var imageCoordinate = '0';

var rockPaperScissors = {
    rock : '0',
    scissors: '-142px',
    paper : '-284px'
}

var rockPaperScissors2 = {
    '0' : 'rock',
    '-142px' : 'scissors',
    '-284px' : 'paper',
}

// Object.entries() 함수는 최신문법이고 객체를 2차원 배열로 변환해주는 함수이다.
// Array.find() 는 반복문 이지만 원하는 것을 찾으면 return trun 일 때 멈추게 된다.

// indexOf() 함수는 1차원 배열에 사용하지만
// 2차원 배열에서는 Object.entries() 함수를 사용한다.
console.log('Object.entries():' , Object.entries(rockPaperScissors));

// var resultFind = Object.entries(rockPaperScissors).find(function (v){

//     console.log('entries: v' , v);
//     return v[0] === 'paper';


// });

// console.log('resultFind: ' , resultFind);

//findIndex() 라는 함수는 return 조건에 해당하는 인덱스를 리턴해준다.
// var resultFind2 = Object.entries(rockPaperScissors).findIndex(function (v){

//     console.log('entries: v' , v);
//     return v[0] === 'scissors';


// });
//console.log('resultFind2: ' , resultFind2);





// 여기서 함수로 만드는 이유는
// 반환받을 key이 이름이 rock, paper, scissors 이렇게 3가지의 경우가 있기 때문에
// 해당아이디를 일일이 수정할 수 없어서 함수로 만든다.

function selectedValue (imageCoordinate) {

    return Object.entries(rockPaperScissors).find(function (v){

        console.log('v: ', v);

        // 여기서 리턴되는 값은 해당 일치하는 Array 자체를 리턴한다.
        // 예를 들어서 imageCoordinate에 '0'이 들어왔다면
        // 반복문을 통해서 2차원 배열을 각각 확인해서
        // 여기서 v는 해당 어레이 자체이고
        // index 0은 rock, scissors, paper
        // index 1은 0, -142px, -284px 에 해당한다.

        // 예를 들어 파라미터의 값이 -142px 라면
        // 여기서는 1번째 인덱스에 해당하므로 두번째 배열이 리턴된다.
        return v[1] === imageCoordinate;
    });
}



setInterval(function (){

    if(imageCoordinate === rockPaperScissors.rock){
        imageCoordinate = rockPaperScissors.scissors;

    } else if(imageCoordinate === rockPaperScissors.scissors){
        imageCoordinate = rockPaperScissors.paper;

    } else {
        imageCoordinate = rockPaperScissors.rock;
    }
    //console.log('imageCoordinate: ', imageCoordinate);
    document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + imageCoordinate + ' 0';
}, 300);


// querySelectorAll() 함수는 forEach() 함수를 지원한다.
document.querySelectorAll('.btn').forEach(function(btn){

    btn.addEventListener('click', function(){
        var mySelection = this.textContent;
        console.log(mySelection, selectedValue(imageCoordinate));
    });

});


 

