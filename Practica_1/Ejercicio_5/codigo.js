var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.onload = function () {
    var course = new Course("Pedro Lopez", 18, "1CFSJ", "Primer curso de grado superior de DAW");
    alert("Mi nombre es " + course.studentName + "\n" +
        "Tengo " + course.age + " años" + "\n" +
        "Estoy en " + course.course + " " + course.nameOfCourse);
};
var Student = /** @class */ (function () {
    function Student(name, age, course) {
        this.studentName = name;
        this.age = age;
        this.course = course;
    }
    Student.prototype.getName = function () {
        return this.studentName;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.getCourse = function () {
        return this.course;
    };
    return Student;
}());
var Course = /** @class */ (function (_super) {
    __extends(Course, _super);
    function Course(studentName, age, course, nameOfCourse) {
        var _this = _super.call(this, studentName, age, course) || this;
        _this.nameOfCourse = nameOfCourse;
        return _this;
    }
    Course.prototype.getNameOfCourse = function () {
        return this.nameOfCourse;
    };
    return Course;
}(Student));
