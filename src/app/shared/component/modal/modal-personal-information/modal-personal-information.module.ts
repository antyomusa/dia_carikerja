import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalPersonalInformationComponent } from './modal-personal-information.component';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ModalPersonalInformationComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatIntlTelInputComponent,
    MatFormFieldModule,

  ],
  exports: [
    ModalPersonalInformationComponent,
  ]
})
export class ModalPersonalInformationModule { }
