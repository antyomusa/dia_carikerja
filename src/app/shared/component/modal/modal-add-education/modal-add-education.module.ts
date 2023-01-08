import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddEducationComponent } from './modal-add-education.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalAddEducationComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalAddEducationComponent
  ]
})
export class ModalAddEducationModule { }
