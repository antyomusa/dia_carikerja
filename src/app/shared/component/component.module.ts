import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalUploadCvComponent } from './modal/modal-upload-cv/modal-upload-cv.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddExperienceComponent } from './modal/modal-add-experience/modal-add-experience.component';
import { ModalEditSkillsModule } from './modal/modal-edit-skills/modal-edit-skills.module';
import { ModalPersonalInformationModule } from './modal/modal-personal-information/modal-personal-information.module';
import { ModalAddSalaryModule } from './modal/modal-add-salary/modal-add-salary.module';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";
import { ModalAddEducationModule } from './modal/modal-add-education/modal-add-education.module';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};
@NgModule({
  declarations: [
    ModalUploadCvComponent,
    ModalAddExperienceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  exports: [
    ModalPersonalInformationModule,
    ModalAddEducationModule,
    ModalEditSkillsModule,
    FormsModule,
    CurrencyMaskModule,
    ReactiveFormsModule,
    ModalAddSalaryModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CURRENCY_MASK_CONFIG }
  ],
})
export class ComponentModule { }
