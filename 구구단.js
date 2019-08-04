var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);

var multiply = num1 * num2;

var div = document.createElement('div');
div.textContent = num1 + ' 곱하기 ' + num2 + ' 는?';
document.body.append(div);


var form = document.createElement('form');
document.body.append(form);

var inputField = document.createElement('input');
inputField.type ='number';
form.append(inputField);

var btn = document.createElement('button');
btn.textContent = '입력!';
form.append(btn);

var result = document.createElement('div');
document.body.append(result);


form.addEventListener('submit', function callback(event){

    event.preventDefault();

    console.log("multiply, inputField.value: " , multiply, inputField.value);


    // html 내의 value 값은 기본적으로 String 타입이다.
    // type을 number로 바꾼다고 하더라도 value의 타입은 무조건 string이다.
    // javascript에서 inputField.type = 'number'; 이런식으로도 수정이 가능하고
    // html에서 input type = 'number' 이런식으로도 사용가능하다
     if( multiply === Number(inputField.value) ){

        result.textContent = '딩동댕';
        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        multiply = num1 * num2;
        div.textContent = num1 + ' 곱하기 ' + num2 + ' 는?';
        inputField.value = '';
        inputField.focus();

     } else {

        result.textContent = '땡';
        inputField.value = '';
        inputField.focus();

     }


});