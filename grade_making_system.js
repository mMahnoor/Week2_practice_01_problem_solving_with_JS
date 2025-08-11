const showGrade = (marks) => {
    if (marks < 0) {
        console.log("failed");
    } 
    else if (marks >= 0 && marks < 40) {
        console.log("Your grade is C.");
    } 
    else if (marks >= 40 && marks < 60) {
        console.log("Your grade is B.");
    } 
    else if (marks >= 60 && marks < 70) {
        console.log("Your grade is A-.");
    } 
    else if (marks >= 70 && marks < 80){
        console.log("Your grade is A.");
    }
    else if (marks >= 80 && marks <= 100){
        console.log("Your grade is A+.");
    }
    else console.log("Invalid");
}

showGrade(99);