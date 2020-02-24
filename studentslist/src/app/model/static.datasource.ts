import { Student } from './student.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';


@Injectable()
export class StaticDataSource{
    private students: Student[]=[
        new Student(1,"Arul Anand","Computer Science","address - Arul"),
        new Student(2,"Satyabhama Prabhu","Computer Science","address - Satyabhama"),
        new Student(3,"Nitisha Shetty","Computer Science","address - Nitisha"),
        new Student(4,"Anvitha Prabhu","Computer Science","address - Anvitha"),
        new Student(5,"Mehak Roy","Computer Science","address - Mehak"),
        new Student(6,"Saunak Sahoo","Information Science","address - Saunak"),
        new Student(7,"Anmol Jain","Information Science","address - Anmol"),
        new Student(8,"Ravi Solanki","Information Science","address - Ravi"),
        new Student(9,"Prateeksha","Information Science","address - Prateeksha"),
        new Student(10,"Pritvi Adyar","Information Science","address - Pritvi"),
        new Student(11,"Meghana S P","Mechnaical","address - Meghana"),
        new Student(12,"Shibani Bhandary","Mechnaical","address - Shiibani"),
        new Student(13,"Raj Shukla","Mechnaical","address - Raj"),
        new Student(14,"Numan Shoaib","Mechnaical","address - Numan"),
        new Student(15,"Rashmi Desai","Mechnaical","address - Rashmi"),
        new Student(16,"Shehnaz Gill","Electrical","address - Shehnaz"),
        new Student(17,"Arthi Singh","Electrical","address - Arthi"),
        new Student(18,"Sidharth Shukla","Electrical","address - Sidharth"),
        new Student(19,"Vishal Aditya Singh","Electrical","address - Vishal"),
        new Student(20,"Mahira Sharma","Electrical","address - Mahira")
    ];

    getStudents(): Observable<Student[]>{
        return from([this.students]);
    }


}