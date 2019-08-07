
console.log('틱택토.js...');


var table = document.createElement('table');

var lines = [];
var blanks = [];


var aync_callback = function(event){
    console.log('event.target: ', event.target);
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

console.log(blanks);
console.log(lines);