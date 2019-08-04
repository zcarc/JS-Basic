

var body = document.body;

var CandidateOfNumber;
var ArrayOfNumber;

function DrawingNumbers() {

    console.log('DrawingNumbers...');

    CandidateOfNumber = [1,2,3,4,5,6,7,8,9];
    ArrayOfNumber = [];

    for(var i = 0; i < 4; i += 1){

        // CadidateOfNumber 배열에 있는 값들은 문제의 답이 될 수 있는 숫자들이다.
        // 이 배열의 값들 중에서 랜덤 숫자 4개를 각각 가져와서
        // ArrayOfNumber에 4개의 인덱스에 각각 넣어줘야한다.
        // splice() 함수는 특성상 값을 가져올 때 배열로 가져오기 때문에 [0] 첫번째 배열을 가져와야한다.
        var splice = CandidateOfNumber.splice( Math.floor( Math.random() * (9 - i) ) , 1 )[0];
        console.log('DrawingNumbers - splice: ', splice);
        ArrayOfNumber.push(splice);
    
        console.log('DrawingNumbers - ArrayOfNumber: ', ArrayOfNumber);
    } 
}


DrawingNumbers();


// 배열의 값을 빼고 추가하는 함수가 있다.

// push: 마지막 인덱스에 추가
// pop: 마지막 인덱스 값 꺼내기 (복사하지 않고 완전히 꺼낸다.)

// unshift: 처음 인덱스에 추가
// shift: 처음 인덱스 꺼내기

// splice: 랜덤한 인덱스에서 꺼내기


var h1 = document.createElement('h1');
body.append(h1);


var form = document.createElement('form');
body.append(form);


var inputField = document.createElement('input');
inputField.type ='text';
inputField.maxLength = 4;
form.append(inputField);


var btn = document.createElement('button');
btn.textContent = '입력!';
form.append(btn);


// 남은 횟수 카운트 (강의 안보고 직접 만듦)
var remainingCount = document.createElement('div');
remainingCount.textContent = '남은횟수 10번';
body.prepend(remainingCount);


// indexOf() 함수는 배열에서 쓸 수 있는 함수인데
// 인자에 번호를 넣어서 해당하는 인덱스에 값이 존재한다면
// 해당 값이 존재하는 인덱스 번호를 반환한다.
// 해당 인덱스에 값이 존재하지 않는다면 -1 을 반환한다.
// 여기서 반환되는 타입은 number 이다.

// console.log([0,1,2,3,4,5].indexOf(6));
// console.log([0,1,2,3,4,8].indexOf(8));

// var val = [0,1,2,3,4];
// console.log(typeof(val.indexOf(0)));


var wrongCount = 0;
var count = 10;

// inputField에서 enter를 쳤을 때
form.addEventListener('submit', function callback(event){

    event.preventDefault();


    var answer = inputField.value;

    // 현재 ArrayOfNumber 에는 배열로 [2,5,7,8] 이런식으로 저장되어 있는데
    // 전부빼서 합쳐주는 그런 함수가 있을까? 생각해볼 수 있다.
    // 그 함수는 join() 이라는 함수를 사용하면된다.
    // 사용할 때 인자로는 저 배열안에 있는 값들 사이에 구분자를 인자로 넣으면된다.
    // 예를 들어 [4,7,5,2] 가 있고
    // join(':'); 이런식으로 함수를 호출하면
    // "4:7:5:2" 이런식으로 String 배열로 합쳐져서 반환된다.


    // 만약 문자열을 배열로 만들고 싶다면
    // 배열에서 문자열은 join('구분자'); 였다면
    // 문자열에서 배열은 split('구분자');이다.

    // 문자열에서 배열로 변환할 때 split 함수에 넣는 구분자는
    // 배열에 그 구분자가 포함되어 있어야하고
    // 그 구분자를 기준으로 잘라내고 잘라낸 첫번째 문자열부터 인덱스에 차례대로 추가한다.
    // 만약 split() 함수에 아무런 구분자를 넣지 않는다면 그 문자열 그대로 전부 그대로 배열로 변환한다.
    
    console.log(answer, ArrayOfNumber, answer === ArrayOfNumber);

    console.log( 'value: ' , '/' , ArrayOfNumber.join('') , '/' , ' type: ' , typeof( ArrayOfNumber.join('') ) );
    console.log('answer: ' , "/" , answer , "/" , ' type: ' , typeof(answer));


    
    if(answer === ArrayOfNumber.join('')) { // 정답일 경우

        console.log('if');
        h1.textContent = '홈런';
        inputField.value = '';
        inputField.focus();


        // 이제 답을 맞췄으니 4개의 인덱스에 각각 숫자가 들어있는 배열을 다시 생성해서 문제를 내야한다.
        DrawingNumbers();

        wrongCount = 0;

    } else { // 정답이 아닐 경우

        console.log('정답이 아닙니다.');




        // 10번 틀린 경우
        // 정답이 아닐 경우 틀린 횟수를 0부터 10까지 늘리고
        // 11이 되면 답을 알려주고 틀린 횟수를 초기화해야한다.
        wrongCount += 1;
        
        if(wrongCount >= 10) {


            console.log('if - wrongCount: ' , wrongCount);
            console.log('답: ', '답은:',  ArrayOfNumber.join(',') , '였습니다!')


            //h1.textContent = '10번 넘게 틀려서 실패! 답은: ' + ArrayOfNumber.join(',') + '였습니다!';
            h1.innerHTML = '10번 넘게 틀려서 실패! <br> 답은: ' + ArrayOfNumber.join(',') + '였습니다!';
            remainingCount.textContent = '남은횟수 10번';
            inputField.value = '';
            inputField.focus();


            // 10번의 기회를 다 썼으니 새로운 문제를 낸다.
            DrawingNumbers();

            // 10번 이상 문제를 틀렸으니 틀린 횟수를 초기화한다.
            wrongCount = 0;


            // 10번 미만까지 틀린 경우
            // 이 else 안이 아니고 if ~ else 아래에쪽에 현재 else 에 있는 코드를 넣지 않으면 
            // if 다음에 무조건 해당 코드들이 실행되기 때문에
            // h1.textContent = strike + '스트라이크, ' + ball + '볼 입니다.'; 이 부분이 if든 else든 무조건 실행된다.
        } else { 


        console.log('else - wrongCount: ' , wrongCount);            


        // 이 부분은 내가 따로 만든 것
        // 남은 횟수를 화면에 출력
        if( (10 - wrongCount) >= 0) {

            
            console.log('남은 횟수: ', (10 - wrongCount));
            remainingCount.textContent = '남은횟수 ' + (10 - wrongCount) + '번';
        }


        // 스트라이크와 볼이 몇개인지 알려주는 변수를 생성한다.
        var strike = 0;
        var ball = 0;

        // answer의 값을 4개의 인덱스로 이루어진 배열로 만들어서
        // 랜덤으로 값이 추가된 ArrayOfNumber 배열에 우리가 입력한 값들 중에서
        // 각 배열에서 같은 인덱스 위치에 동일한 값이 있거나,
        // 위치는 다르지만 서로 동일한 값이 있는 경우를 만들어야한다.
        // 그래서 각 인덱스에 접근해야하기 때문에 0에서 3까지 총 4번 반복하는 for문을 만들어야한다.
        for(var i = 0; i < 4; i += 1) {

            var arrayOfAnswer = answer.split('');

            console.log('answer: ' , answer);
            console.log('arrayOfAnswer: ' , arrayOfAnswer);
            console.log('ArrayOfNumber: ' , ArrayOfNumber);
            console.log('typeof(ArrayOfNumber[0]): ' , typeof(ArrayOfNumber[0]));
            console.log('typeof(arrayOfAnswer[0]): ' , typeof(arrayOfAnswer[0]));

            console.log('ArrayOfNumber.toString(): ' + ArrayOfNumber.toString());




            // 랜덤값으로 생성된 4개의 값이 한 배열에 각 인덱스에 저장되어 있고
            // 우리가 입력한 값 4개를 배열로 만들어서
            // 서로 비교해서 맞는게 있다면 strike를 1을 올려줘야한다.
            if(ArrayOfNumber[i] === Number( arrayOfAnswer[i]) ){ // 각 서로의 인덱스에서 서로 동일한 값인지 확인
                strike += 1;
            }
            // 볼인지 체크해야하는 조건
            // 근데 이 조건을 먼저 if 조건에 넣어버리면
            // 스트라이크인 조건도 충족되고 볼의 조건도 충족되기 때문에
            // 스트라이크인지 볼인지 확신할 수 없다.
            // 그래서 else if로 우선순위를 스트라이크 다음으로 해야한다.
            else if(ArrayOfNumber.indexOf( Number(arrayOfAnswer[i]) ) > -1) { // 같은 인덱스는 아니지만 서로 동일한 값은 있는지 확인

                
                console.log('else if - ArrayOfNumber.indexOf(arrayOfAnswer[i]): ' + ArrayOfNumber.indexOf(arrayOfAnswer[i]));
                

                ball += 1;
            }
        }

        h1.textContent = strike + '스트라이크, ' + ball + '볼 입니다.';
        
        
    } // else 10번까지 틀린 경우 

}




        
});
