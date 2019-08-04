
var body = document.body;

var word = document.createElement('div');
word.textContent = '제로초';
document.body.append(word);

var form = document.createElement('form');
document.body.append(form);

var inputForm = document.createElement('input');
form.append(inputForm);

var btn = document.createElement('button');
btn.textContent = '입력!';
form.append(btn);

var result = document.createElement('div');
document.body.append(result);

// addEventListner의 두번째 인자의
// function은 callback 함수이다.
form.addEventListener('submit', function callback(event){

    event.preventDefault();

    console.log("word: " + word);
    console.log("word.textContent: " + word.textContent);

    console.log("inputForm: " + inputForm);
    console.log("inputForm.value: " + inputForm.value);

    // word === inputForm 제로초 === 초밥
    // word는 div 태그이고 그 태그 안에 단순히 text가 포함되어 있고
    // 그 text의 첫번째 문자는 textContent로 접근한다.
    if(word.textContent[word.textContent.length -1] === inputForm.value[0]){
        console.log('딩동댕');
        result.textContent = '딩동댕';
        inputForm.value = '';
        inputForm.focus();
    } else {
        console.log('땡');
        result.textContent = '땡';
        inputForm.value = '';
        inputForm.focus();
    }

});

// console.log("console.log - document.querySelector('.test'): " + document.querySelector('.test'));
// console.dir("console.dir - document.querySelector('.test'): " + document.querySelector('.test'));

// 내가 원하는 것은 현재 .text 태그 내의 텍스트인데 성공적으로 그 결과를 얻을 수 있다.
// console.log("console.log - document.querySelector('.test').textContent: " + document.querySelector('.test').textContent);

// var init = '제로초';

// while(true){
    
//     var inputVal = prompt(init);

//     if(init[init.length -1] === inputVal[0]){
//         console.log('정답입니다.');
//         init = inputVal;
//     }
        

//     else {
//         console.log('정답이 아닙니다.');
//         break;
//     }
// }