window.onload = () => {
    let course = new Course("Pedro Lopez", 18, "1CFSJ", "Primer curso de grado superior de DAW");

    alert( 
        "Mi nombre es " + course.studentName + "\n" +
        "Tengo " + course.age + " años" + "\n" +
        "Estoy en " + course.course + " " + course.nameOfCourse
    )
}

class Student {
    studentName: string;
    age: number;
    course: string;
    
    constructor(name: string, age: number, course: string) {
        this.studentName = name;
        this.age = age;
        this.course = course;
    }

    getName() {
        return this.studentName;
    }

    getAge() {
        return this.age;
    }

    getCourse() {
        return this.course;
    }
}

class Course extends Student {

    nameOfCourse: string;

    constructor(studentName: string, age: number, course: string, nameOfCourse: string) {
        super(studentName, age, course);
        this.nameOfCourse = nameOfCourse;
    }

    getNameOfCourse() {
        return this.nameOfCourse;
    }
}