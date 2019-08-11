

var 후보군 = Array(45); // [] 배열 45개
console.log(후보군);

// Array로 통한 배열 생성 시 empty가 들어있는데

// 첫번째 forEach
후보군.forEach(function (element){
    console.log('후보군 forEach');
    console.log(element);
});

// 두번째 forEach
[undefined, undefined, undefined].forEach(function (element){
    console.log('undefined: ' , element);
});


// 첫번째 forEach는 비어 있기 때문에 forEach이 한번도 실행되지 않지만
// 두번째 forEach는 undefined 라는 값 자체가 들어있어서 3번 반복된다.

// 첫번째 forEach는 현재 전부 empty 상태이기 때문에
// undefined의 값들이 각각 들어가도록 설정하려면 fill() 함수를 사용해줘야한다.
// *IE 브라우저에서는 fill() 함수를 사용하지 못한다...

var 필 = 후보군.fill();
console.log(필);

필.forEach(function(요소, 인덱스){
    console.log(요소, 인덱스 + 1);


    필[인덱스] = 인덱스 + 1;

    
});

console.log('필: ', 필);