import { NgModule } from '@angular/core';
import { StudentComponent } from './studentlist.component';
import { ModelModule } from '../model/model.module';
import { CommonModule } from '@angular/common';


@NgModule(
    {  imports:[ModelModule,CommonModule],
        declarations:[StudentComponent],
        exports:[StudentComponent]
    }
)



export class StudentModule{}
