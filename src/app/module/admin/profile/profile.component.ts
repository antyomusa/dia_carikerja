import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../../services/login/login.service';
import { ModalAddEducationComponent } from 'src/app/shared/component/modal/modal-add-education/modal-add-education.component';
import { ModalAddExperienceComponent } from 'src/app/shared/component/modal/modal-add-experience/modal-add-experience.component';
import { ModalPersonalInformationComponent } from 'src/app/shared/component/modal/modal-personal-information/modal-personal-information.component';
import { ProfileModel } from './model/profile.model';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ModalEditSkillsComponent } from 'src/app/shared/component/modal/modal-edit-skills/modal-edit-skills.component';
import { ModalAddSalaryComponent } from 'src/app/shared/component/modal/modal-add-salary/modal-add-salary.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileModel = new ProfileModel();
  profile: any = {};
  degree: any = {};
  id: any;
  userData: any = {};
  isUploaded: unknown;
  education: any = {};

  constructor(
    public readonly loginService: LoginService,
    public readonly profileService: ProfileService,
    public readonly router: Router,
    private readonly modalService: NgbModal,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobseekerId: id,
        }
      this.profileService.getUserProfile(params).subscribe(
        (response: any) => {
          this.profileModel.userProfile = response.data;
          this.profile = this.profileModel.userProfile;
          this.profileModel.skills = response.data.skills;
          this.profileModel.salary = response.data.jobseekerSalary;
          this.profileModel.education = response.data.jobseekerEducation;
          this.profileModel.experience = response.data.jobseekerExperience;
        },
        (error) => {
        })

      this.profileService.getAllDegree().subscribe(
        (response) => {
          this.profileModel.allDegree = response.data;
          this.degree = this.profileModel.allDegree;
        },
        (error) => {
        })
    })
  }

  openAddExperience() {
    const modal = this.modalService.open(
      ModalAddExperienceComponent, { size: 'lg' }
    );
  }

  openAddEducation() {
    const modal = this.modalService.open(
      ModalAddEducationComponent, { size: 'lg' }
    );
  }

  openEditPersonalInformation() {
    const modal = this.modalService.open(
      ModalPersonalInformationComponent, { size: 'lg' }
    );
    modal.componentInstance.data = this.profileModel.userProfile;
  }

  openEditSkills() {
    const modal = this.modalService.open(
      ModalEditSkillsComponent, { size: 'lg' }
    );
    modal.componentInstance.data = this.profileModel.userProfile;
    // modal.componentInstance.data = this.profileModel.editSkillModelForm.controls['skillId'];
    modal.componentInstance.onEdit = () => { this.onEdit() }
  }

  onEdit() {
    this.profileModel.editSkillModelForm.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    this.profileService.editSkill(this.profileModel.editSkillModelForm.value).subscribe(
      (event: any) => {
        if (typeof (event) === 'string') {
          this.isUploaded = true;
        }
      }
    );
  }

  openEditSalary() {
    const modal = this.modalService.open(
      ModalAddSalaryComponent, { size: 'lg' }
    );
  }
}
