import { NgModule } from '@angular/core';
import { StudentRepository } from './model.repository';
import { StaticDataSource } from './static.datasource';

@NgModule({
    providers:[StudentRepository,StaticDataSource]
    
})

export class ModelModule{}