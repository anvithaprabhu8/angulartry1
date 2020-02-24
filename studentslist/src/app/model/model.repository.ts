import { Student } from './student.model';
import { StaticDataSource } from './static.datasource';
import { Injectable } from '@angular/core';


@Injectable()
export class StudentRepository{
    private students: Student[]=[];
    private departments: string[]=[];

    constructor(private datasource: StaticDataSource){
       datasource.getStudents().subscribe(data=>{
           this.students=data;
           this.departments=data.map(s=>s.department).filter((c,index,array)=>array.indexOf(c)==index).sort();
       } );
    }
       getStudents(department: string=null): Student[]{
           return this.students.filter(s=>department==null||department==s.department);
       }
       getDepartment(): string[]{
        return this.departments;
        
    }
}