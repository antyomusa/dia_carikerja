import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModel } from 'src/app/module/admin/profile/model/profile.model';
import { AddSalaryService } from 'src/app/services/add-salary/add-salary.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AddSalaryModel } from './model/add-salary.model';

@Component({
  selector: 'app-modal-add-salary',
  templateUrl: './modal-add-salary.component.html',
  styleUrls: ['./modal-add-salary.component.scss']
})
export class ModalAddSalaryComponent implements OnInit {

  @Input() closeModal: any;
  salary: any = {};
  salaryId: any = {};
  salaryModel = new AddSalaryModel();
  submitted: boolean = false;
  profileModel = new ProfileModel;
  allCurrency: any = [];
  jobseekerId: any;
  userData: any = {};
  value: any;
  ngModelExample: number = 10;

  constructor(
    public activeModal: NgbActiveModal,
    private readonly salaryService: AddSalaryService,
    public readonly authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.salaryService.getCurrency().subscribe(
      (response) => {
        this.salaryModel.allCurrency = response.data;
      },
      (error) => {

      });
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
  }

  editSalary(): void {
    const formData = this.salaryModel.formGroupEditSalary.getRawValue();
    const data = {
      ...formData,
      jobseekerId: this.jobseekerId
    }
    this.salaryModel.formGroupEditSalary.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    console.log(this.salaryModel.formGroupEditSalary.value, data);
    this.salaryService.editSalary(this.salaryModel.formGroupEditSalary.value).subscribe(
      (response: any) => {
        this.salaryService.editSalary(response.data)
        this.submitted = true
        this.activeModal.dismiss('Cross click');
        window.location.reload();
      },
      (error) => {
      })
  }

  updateSalary(): void {
    const formData = this.salaryModel.formGroupUpdateSalary.getRawValue();
    const data = {
      ...formData,
      salaryId: this.salaryId
    }
    this.salaryModel.formGroupUpdateSalary.controls['salaryId'].setValue(this.userData.jobseekerId);
    console.log(this.salaryModel.formGroupUpdateSalary.value, data)
    this.salaryService.updateSalary(this.salaryModel.formGroupUpdateSalary.value, data).subscribe(
      (response: any) => {
        this.salaryService.updateSalary(response.data1, data)
        this.submitted = true
        this.activeModal.dismiss('Cross click');
      },
      (error) => {
      })
  }
}
