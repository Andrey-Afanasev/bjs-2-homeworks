
function Student (name, gender, age) {

    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
 
}

let student = new Student("Andrey", "male", 28);


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}



Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    return this.marks.push(...marks);
  } else {
    return 'otchislen';
  }
}

Student.prototype.getAverage = function () {
    if (this.marks && this.marks.length) {
       
          return this.marks.reduce((acc, item) => acc += item ,0) / this.marks.length;
      
} else {
  return 0;
}
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  
}
