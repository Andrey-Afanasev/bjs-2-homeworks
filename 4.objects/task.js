
function Student (name, gender, age) {

    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
 
}

let student1 = new Student("Andrey", "male", 28);
let student2 = new Student("Anton", "male", 25);
let student3 = new Student("Vlad", "male", 28);

Student.prototype.setSubject = function (subjectName) {
    this.setSubject = subjectName;
}



Student.prototype.addMarks = function (...marks) {
  if (Student.hasOwnProperty("marks") === true) {
    addMarks = marks;
  }
}

Student.prototype.getAverage = function () {
    if (Student.HasOwnProperty("marks") !== false) {
        getAverage = 0;
      } else {
        getAverage = addMarcs.reduce((acc, item, index) => {acc += item
            if (index === addMarks.length){
                return acc/addMarks.length} },0);
      }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.exclude = reason;
  
}
