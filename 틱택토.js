
console.log('틱택토.js...');


var table = document.createElement('table');

var lines = [];
var blanks = [];
var turn = 'X';


var aync_callback = function(event){
    console.log('event.target: ', event.target);
    console.log('event.target.parentNode: ' , event.target.parentNode);
    console.log('event.target.parentNode.parentNode: ' , event.target.parentNode.parentNode);

    // 현재 라인에 대한 정보는
    // 배열에 저장된 정보에서 가져와야한다.
    var targetLine = lines.indexOf(event.target.parentNode);
    console.log('targetLine: ', targetLine);

    var targetBlank = blanks[targetLine].indexOf(event.target);
    console.log('targetBlank: ', targetBlank);


    //선택했을 때 해당 칸의 value가 비어있는지 확인
    if(blanks[targetLine][targetBlank].textContent !== ''){
        console.log('빈칸이 아닙니다.');
        
    } else {
        console.log('빈칸 입니다.');

        blanks[targetLine][targetBlank].textContent = turn;

        var allTrue = false;

        // 가로줄 검사
        if( blanks[targetLine][0].textContent === turn &&
            blanks[targetLine][1].textContent === turn &&
            blanks[targetLine][2].textContent === turn ) {

            console.log('가로줄 검사');
            allTrue = true;
        }

        // 세로줄 검사
        if( blanks[0][targetBlank].textContent === turn &&
            blanks[1][targetBlank].textContent === turn &&
            blanks[2][targetBlank].textContent === turn ) {


            
            console.log('세로줄 검사');
            allTrue = true;
        }

        // 대각선 검사
        if( targetBlank - targetLine === 0 ||  
            Math.abs(targetBlank - targetLine) === 2){

            if( blanks[0][0].textContent === turn &&
                blanks[1][1].textContent === turn && 
                blanks[2][2].textContent === turn ) {
                    console.log('대각선 검사');
                    allTrue = true;
                }

            
        }

        // 3칸이라면 승리하고
        // 아니라면 turn을 바꿈
        if(allTrue){
            console.log(turn, '의 승리입니다.');
        } else {

            if(turn === 'X'){
                turn = 'O';
            } else {
                turn = 'X';
            }

        }

       
    }

    
};


for(var i = 1; i <= 3; i+= 1) {

    var line = document.createElement('tr');

    lines.push(line);
    blanks.push([]);

    for(var j = 1; j <= 3; j += 1) {

        var blank = document.createElement('td');
        blank.addEventListener('click', aync_callback);
        blanks[i - 1].push(blank);
        line.appendChild(blank);
    }

    table.appendChild(line);

}

document.body.appendChild(table);

console.log('blanks: ', blanks);
console.log('lines: ', lines);