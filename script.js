const studentName="Alex";
let score = 83;
console.log("Student:" + studentName);
console.log("Score:" + score);

function getGrade(s){
    if (s > 100 || s < 0){
        console.log("Invalid score");
        return;
    }
    if (s >= 90){
        return "A";
    }else if (s >= 80){
        return "B";
    }else if(s >= 75){
        return "C";
    }else{
        return "F";
    }
}


function checkStudent (name, s) {
    const grade = getGrade(s);
    if (grade === "F"){
        console.log("Student: " + name + ",Score" + s + "- Grade " + grade + ". Falling!" );
    } else{
        console.log("Student: " + name + ",Score" + s + "- Grade: " + grade + ". Passing!")
    }
}

var ludenScore = 95
checkStudent("Alex", 83);
checkStudent("Sam", 60);
checkStudent("Lee", 95);
checkStudent("Jo", 75);

checkStudent("luden", ludenScore)