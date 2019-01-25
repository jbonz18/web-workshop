var students = [
    {name: "John", score : 90 },
    {name: "Larry", score : 60 },
    {name: "Joseph", score : 50 },
    {name: "Mike", score : 100 },
];

//document.writeln(students.lenght);
///document.write(students);
document.write("<pre>");
document.write(JSON.stringify(students, undefined, 2)); // we can use 'undefined' or 'null'
document.write("</pre>");

var names = [];

students.forEach(student => {
    names.push(student.name);
});

document.writeln(names);

function loadData(){
    var i = 0;
    let dataList = document.getElementById("dataList"); //the "dataList" is imported from html document <ol id="dataList">

    while(i < students.length)
    {
        var listItem = document.createElement("li"); //this is also obtained from html ' <li>First</li> '
        
        console.log(students[i]);
        listItem.innerText = students[i].name;

        dataList.appendChild(listItem);
        i = i + 1;  //  or use this ] // Alternatively use 'i++'  
        // i += 2;
        // i += 3;
    }
}

document.write("<pre>");
document.writeln("Average:  " + calculateAverage());
document.writeln(`Average: ${calculateAverage()}`);
document.write("</pre>");

//create a function using 'return' statement for the score average
function calculateAverage(){
    var average = 0;
    for (var i=0; i<students.length;i++){
    average+=students[i].score;    
    }
    //console.log(average/students.length);

    return (average/(students.length));  
}

function displayAverage(){
    var averageText = document.getElementById("averageText");
    averageText.innerText = calculateAverage();
}

//create a function using 'return' statement
function fullName(first, last){
    var name = first + "" + last;
    return name;
}