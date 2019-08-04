
console.log('틱택토.js...');


var table = document.createElement('table');


for(var i = 1; i <= 3; i+= 1) {

    var line = document.createElement('tr');

    for(var j = 1; j <= 3; j += 1) {

        var blank = document.createElement('td');
        line.appendChild(blank);
    }

    table.appendChild(line);

}

document.body.appendChild(table);