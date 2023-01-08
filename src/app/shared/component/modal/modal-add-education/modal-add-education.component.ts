import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ModalEducationModel } from './model/modal-education.model';

@Component({
  selector: 'app-modal-add-education',
  templateUrl: './modal-add-education.component.html',
  styleUrls: ['./modal-add-education.component.scss']
})
export class ModalAddEducationComponent implements OnInit {

  educationModel = new ModalEducationModel();

  userData: any = {};
  jobseekerId: any;
  submitted: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    public readonly authService: AuthService,
    public readonly profileService: ProfileService
  ) { }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
  }

  addEducation(): void {
    const formData = this.educationModel.formGroupAddEducation.getRawValue();
    const data = {
      ...formData,
      jobseekerId: this.jobseekerId
    }
    this.educationModel.formGroupAddEducation.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    this.profileService.addEducation(this.educationModel.formGroupAddEducation.value).subscribe(
      (response: any) => {
        this.profileService.addEducation(response.data)
        this.submitted = true
        this.activeModal.dismiss('Cross click');
        window.location.reload();
      },
      (error) => {
      })
  }

}
