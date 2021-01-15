window.onload = () => {
    let student = new Student("Pedro Lopez", 18, "1CFSJ");

    document.write("Name=" + student.getName() + ", Edad=" + student.getAge() + ", Curso=" + student.getCourse())
}

class Student {
    name: string;
    age: number;
    course: string;
    
    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getCourse() {
        return this.course;
    }
}