
/*
    6-1. 로또추첨기 Array & fill
*/

// var CandidateArray = Array(45); // [] 배열 45개
// console.log(CandidateArray);

// Array로 통한 배열 생성 시 empty가 들어있는데

// 첫번째 forEach
// CandidateArray.forEach(function (element){
//     console.log('CandidateArray forEach');
//     console.log(element);
// });

// 두번째 forEach
// [undefined, undefined, undefined].forEach(function (element){
//     console.log('undefined: ' , element);
// });


// 첫번째 forEach는 비어 있기 때문에 forEach이 한번도 실행되지 않지만
// 두번째 forEach는 undefined 라는 값 자체가 들어있어서 3번 반복된다.

// 첫번째 forEach는 현재 전부 empty 상태이기 때문에
// undefined의 값들이 각각 들어가도록 설정하려면 fill() 함수를 사용해줘야한다.
// *IE 브라우저에서는 fill() 함수를 사용하지 못한다...

// var 필 = CandidateArray.fill();
// console.log('필: ', 필);

// 필.forEach(function(element, index){
//     console.log(element, index + 1);


//     필[index] = index + 1;

    
// });
// console.log('필: ', 필);



/*
    6-2. 배열 map 메서드
*/

// Array(45): 45개의 empty가 있는 배열이 반환된다.
// Array.fill(): undefined로 값이 모두 대입된 상태인 배열이 반환된다.

// forEach를 쓰는것보다 map() 함수를 쓰는 것이 더 좋다.
var CandidateArray = Array(45).fill().map( function(elements, index ) {

    return index + 1;

});

console.log('CandidateArray: ', CandidateArray);



// 숫자들을 전부 랜덤하게 섞고
// 앞의 6개와 뒤의 6개를 가져온다.
// 그걸 "셔플"이라고 한다.

// for문은 자신이 정확하게 몇번 반복할지 알 때
// while문은 자신이 정확하게 몇번 반복할지 모를 때 쓰고 또는
// while문은 기준 값이 계속 바뀔 때
// 여기서 기준 값은 for문에서 Array.length에서 이 length 값을 의미한다.
// 이 Array.length가 45에서 0까지 감소한다면 기준 값이 계속 바뀐다. 
// 이럴 때 while 문을 사용하는게 좋다.

// 여기서 기준값이 감소하는 이유는 
// Array의 배열에서 값을 하나씩 빼면 그때마다 length가 감소되기 때문이다.

var shuffle = [];
while(CandidateArray.length > 0) {

    //console.log('CandidateArray.length: ', CandidateArray.length);

    // Array.splice() 함수는 배열로 반환된다.
    var movedValue = CandidateArray.splice(Math.random() * CandidateArray.length, 1)[0];
    shuffle.push(movedValue);
}

// 위의 코드는 shuffle이라는 배열에 우리가 만든 CandidateArray의 값들을 랜덤하기 위해서 만든것이고
// CandidateArray에서 랜덤하게 값을 가져올 때 마다 shuffle에 그 값을 바로 넣음으로써
// shuffle에서는 45개의 랜덤한 값이 들어갈 수 있다.
// 추가적으로 Math.random() 함수는 우리가 연습할 때는 사용할 수 있지만
// 엄밀하게 정확한 랜덤한 값은 아니기 때문에 실전에서는 정확한 알고리즘으로 만들어야한다.
console.log('shuffle: ', shuffle);


/*
    6-3. 배열 slice & sort
 */

var bonusNumber = shuffle[shuffle.length -1];
var lotteryNumbers = shuffle.slice(0, 6);

// sort() 함수는 정렬을 해주기는 하는데 제일 앞에 있는 숫자 기준으로 오름차순 정렬을 해준다.
console.log('lotteryNumbers: ', lotteryNumbers.sort(), ' bonusNumber: ', bonusNumber);

// 정확하게 오름차순을 하고 싶다면 아래와 같이 하면 된다.
console.log('정확한 오름차순');
console.log('lotteryNumbers: ', 
    lotteryNumbers.sort(function(p, c){
        return p - c}), 
    ' bonusNumber: ', bonusNumber);

 
// p: 이전 숫자
// c: 현재 숫자
// [7, 3, 4, 8]

// <오름차순 정렬>

// 처음에 7, 3이 들어와서 빼면 4가 나온다.
// 뺀 결과가 0보다 크면 순서를 바꾼다.
// 처음에 7,3이 들어왔는데 0보다 크니까 3, 7로 순서가 바뀐다.
// 그 다음에 4가 들어오면 3, 7, 4
// 7 - 4 = 3 의 결과로 0보다 크므로 3, 4, 7이 된다.
// 그 다음에 8이 들어오면
// 3, 4, 7, 8
// 7 - 8 = -1 결과로 0보다 작다.
// 뺀 결과가 0보다 작으면 순서를 바꾸지 않는다.


// 정확하게 내림차순을 하고 싶다면 아래와 같이 한다.
console.log('정확한 내림차순');
console.log('lotteryNumbers: ', lotteryNumbers.sort(function(p, c){return p - c}), ' bonusNumber: ', bonusNumber);


// <내림차순 정렬>
// 현재 숫자(c) - 이전 숫자(p)
// 3 - 7 = -4 의 결과로 0보다 작으니 그대로 유지한다.
// 결과: 7, 3

// 4 - 3 = 1의 결과로 0보다 크니 순서를 바꾼다.
// 결과: 7, 4, 3 

// 8 - 3 = 5의 결과로 0보다 크니 순서를 바꾼다.
// 결과: 7, 4, 8, 3
// 그리고 여기서 또 비교를 계속 해나가서 
// 내림차순 정렬이 된다.

// 이런 알고리즘인데 이렇게 순서대로 계속 비교하는것은 아니고
// 머지소트나 합병정렬이나 퀵소트 이런 알고리즘을 사용할 것이다.
// 원리는 0보다 크면 순서를 바꾸는 것이다.
// 그리고 숫자도 정렬할 수 있지만, 문자도 정렬할 수 있다.
// 문자에 숫자를 부여해서 서로 뺄 수 있게 할 수 있다.



/*
        6-4. JS로 HTML 태그 선택하기
 */



// 아래 코드는 클로저(closure) 문제라 반복문 안에 비동기를 사용하는 것은 
// 클로저를 배운 후에 알아본다.
// 이러한 상황은 자바스크립트에서 유명하다.
// for(var i = 0; i < lotteryNumbers.length; i+= 1) {

//     setTimeout(function 비동기콜백함수() {

//         var 공 = document.createElement('div');
//         공.textContent = lotteryNumbers[i];
//         결과창.append(공);
//     }, 1000);

    
//  }



/*
        6-5. JS로 CSS 조작하기
 */

var LotteryNumbersDiv = document.getElementById('LotteryNumbersDiv');
console.log('LotteryNumbersDiv: ', LotteryNumbersDiv);

 function PaintBalls(textNumber, printDiv) {

    
    var createdDiv = document.createElement('div');
    createdDiv.textContent = textNumber;
    createdDiv.style.display = 'inline-block';
    createdDiv.style.border = '1px solid black';
    createdDiv.style.borderRadius = '10px';
    createdDiv.style.width = '20px';
    createdDiv.style.height = '20px';
    createdDiv.style.textAlign = 'center';
    createdDiv.style.marginRight = '10px';
    printDiv.append(createdDiv);
 }
setTimeout(function aynchronous_Callback() {
    PaintBalls(lotteryNumbers[0], LotteryNumbersDiv); 
}, 1000);
setTimeout(function aynchronous_Callback() {
    PaintBalls(lotteryNumbers[1], LotteryNumbersDiv);
}, 2000);
setTimeout(function aynchronous_Callback() {
    PaintBalls(lotteryNumbers[2], LotteryNumbersDiv);
}, 3000);
setTimeout(function aynchronous_Callback() {
    PaintBalls(lotteryNumbers[3], LotteryNumbersDiv);
}, 4000);
setTimeout(function aynchronous_Callback() {
    PaintBalls(lotteryNumbers[4], LotteryNumbersDiv);
}, 5000);
setTimeout(function aynchronous_Callback() {
    PaintBalls(lotteryNumbers[5], LotteryNumbersDiv);
}, 6000); 

setTimeout(function aynchronous_Callback(){
    // class는 같은 이름을 여러개 사용할 수 있어서 배열로 가져와야한다.
    var bonusNumberDiv = document.getElementsByClassName('BonusNumberDiv')[0];
    PaintBalls(bonusNumber, bonusNumberDiv);
}, 7000);