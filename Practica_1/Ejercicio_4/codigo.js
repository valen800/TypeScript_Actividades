window.onload = function () {
    var student = new Student("Pedro Lopez", 18, "1CFSJ");
    document.write("Name=" + student.getName() + ", Edad=" + student.getAge() + ", Curso=" + student.getCourse());
};
var Student = /** @class */ (function () {
    function Student(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.getCourse = function () {
        return this.course;
    };
    return Student;
}());
