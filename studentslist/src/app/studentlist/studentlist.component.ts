import { Component } from '@angular/core';
import { StudentRepository } from '../model/model.repository';
import { Student } from '../model/student.model';


@Component({
    selector:"studentlist",
    templateUrl:"studentlist.component.html"

})
export class StudentComponent{
   public selectedDepartment=null;
   public selectedPage=1;
   public studentsPerPage=3;
    constructor(private repository: StudentRepository){}

    get students(): Student[]{
        let pageindex=(this.selectedPage-1)*(this.studentsPerPage);
        return this.repository.getStudents(this.selectedDepartment).slice(pageindex,pageindex+this.studentsPerPage);
    }

    get departments(): String[]{
        return this.repository.getDepartment();
    }
    get pageNumbers(): number[]{
        return Array(Math.ceil(this.repository.getStudents(this.selectedDepartment).length/this.studentsPerPage)).fill(0).map((x,i)=>i+1);
    }

    changeDepartment(newDepartment?:string){
      this.selectedDepartment=newDepartment;
      this.selectedPage=1;
    }

    changePage(newPage:number){
        this.selectedPage=newPage;
    }

    changePageSize(numberperpage:number){
        this.studentsPerPage=Number(numberperpage);
        this.selectedPage=1;
    }
    




}