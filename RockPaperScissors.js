

var intervalCoordinate = '0';

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

function generatedCoordinate (coordinate) {

    return Object.entries(rockPaperScissors).find(function (v){

        console.log('v: ', v);

        // 여기서 리턴되는 값은 해당 일치하는 Array 자체를 리턴한다.
        // 예를 들어서 coordinate에 '0'이 들어왔다면
        // 반복문을 통해서 2차원 배열을 각각 확인해서
        // 여기서 v는 해당 어레이 자체이고
        // index 0은 rock, scissors, paper
        // index 1은 0, -142px, -284px 에 해당한다.

        // 예를 들어 파라미터의 값이 -142px 라면
        // 여기서는 1번째 인덱스에 해당하므로 두번째 배열이 리턴된다.
        return v[1] === coordinate;
    });
}



var interval;

function createInterval(){

    interval = setInterval(function (){

        if(intervalCoordinate === rockPaperScissors.rock){
            intervalCoordinate = rockPaperScissors.scissors;
    
        } else if(intervalCoordinate === rockPaperScissors.scissors){
            intervalCoordinate = rockPaperScissors.paper;
    
        } else {
            intervalCoordinate = rockPaperScissors.rock;
        }
        //console.log('intervalCoordinate: ', intervalCoordinate);
        document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + intervalCoordinate + ' 0';
    }, 300);

}

createInterval();


 var numberOfRockPaperScissors = {

     // 강좌 7.5 에서 rock과 scissors의 숫자를 바꿔 적어서 결과가 이상했었다.
     rock: 0,
     scissors: 1,
     paper: -1,
 };


// querySelectorAll() 함수는 forEach() 함수를 지원한다.
document.querySelectorAll('.btn').forEach(function(btn){

    btn.addEventListener('click', function(){

        // 이벤트가 클릭되었을 때 비동기 interval을 멈춤
        clearInterval(interval);

        // interval이 멈춘 상태로 유지되면 안되니까 
        // 1초 뒤에 다시 가위바위보가 실행되도록 설정
        setTimeout(function(){
            
             createInterval();

        }, 1000);


        var mySelection = this.textContent;

        var myNumber = numberOfRockPaperScissors[mySelection];
        var computerNumber = numberOfRockPaperScissors[generatedCoordinate(intervalCoordinate)[0]];


        if( myNumber - computerNumber === 0 ) {

            console.log("비겼습니다.")

        // } else if( myNumber -computerNumber === -1 ||
        //            myNumber -computerNumber === 2 ) {
        
          // Array.includes() 함수를 사용하면 배열에 있는 값이 함수의 인자에 포함되어 있다면 includes() 함수는 true를 리턴한다.
          // myNumber - computerNumber = -1 or 2 일 경우 true
        } else if( [-1, 2].includes( myNumber - computerNumber ) ) {

            console.log("이겼습니다.")
            
        } else { 
            console.log("졌습니다.")
        }

        console.log('mySelection: ', mySelection);
        console.log('intervalCoordinate: ', intervalCoordinate);
        console.log( 'myNumber: ', myNumber );
        // console.log('generatedCoordinate(intervalCoordinate)[0]: ', generatedCoordinate(intervalCoordinate)[0] );
        // console.log('numberOfRockPaperScissors[generatedCoordinate(intervalCoordinate)[0]]: ',computerNumber );
        // console.log('myNumber - numberOfRockPaperScissors[generatedCoordinate(intervalCoordinate)[0]: ', myNumber - computerNumber );

        // console.log('mySelection: ', mySelection);
        // console.log('generatedCoordinate(intervalCoordinate): ', generatedCoordinate(intervalCoordinate));
        // console.log('generatedCoordinate(intervalCoordinate)[0]: ', generatedCoordinate(intervalCoordinate)[0]);

        // if(mySelection === 'rock'){

        //     if(generatedCoordinate(intervalCoordinate)[0] === 'rock') {
        //         console.log('비겼습니다.');

        //     } else if(generatedCoordinate(intervalCoordinate)[0] === 'paper') {
        //         console.log('졌습니다.');

        //     } else if(generatedCoordinate(intervalCoordinate)[0] === 'scissors') {
        //         console.log('이겼습니다.');
        //     }

        // } else if( mySelection === 'paper' ) {

        //     if(generatedCoordinate(intervalCoordinate)[0] === 'rock') {
        //         console.log('이겼습니다.');

        //     } else if(generatedCoordinate(intervalCoordinate)[0] === 'paper') {
        //         console.log('비겼습니다.');

        //     } else if(generatedCoordinate(intervalCoordinate)[0] === 'scissors') {
        //         console.log('졌습니다.');
        //     }

        // } else if( mySelection === 'scissors' ) {

        //     if(generatedCoordinate(intervalCoordinate)[0] === 'rock') {
        //         console.log('졌습니다.');

        //     } else if(generatedCoordinate(intervalCoordinate)[0] === 'paper') {
        //         console.log('이겼습니다.');

        //     } else if(generatedCoordinate(intervalCoordinate)[0] === 'scissors') {
        //         console.log('비겼습니다.');
        //     }

        // }
    });

});


// 가위: 1, 바위: 0, 보: -1
// 나/컴퓨터   가위  바위    보
//       가위  1 1   1 0   1 -1
//       바위  0 1   0 0   0 -1
//         보 -1 1  -1 0  -1 -1