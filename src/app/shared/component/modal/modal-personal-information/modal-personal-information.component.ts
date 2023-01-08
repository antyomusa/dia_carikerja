import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Data } from 'popper.js';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ModalPersonalModel } from './model/modal-personal-information.model';

@Component({
  selector: 'app-modal-personal-information',
  templateUrl: './modal-personal-information.component.html',
  styleUrls: ['./modal-personal-information.component.scss']
})
export class ModalPersonalInformationComponent implements OnInit {
  // static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  //   throw new Error('Method not implemented.');
  // }

  @Input() data: any;

  modalPersonalModel = new ModalPersonalModel();
  profile: any = {};
  id: any;
  userData: any = {};
  fill = '';


  constructor(
    public activeModal: NgbActiveModal,
    public readonly authService: AuthService,
    public readonly profileService: ProfileService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
      console.log(this.authService.loadUserData())
    }
    const param = {
      jobseekerId: this.data.jobseekerId
    }
    this.profileService.getUserProfile(param).subscribe(
      (response: any) => {
        this.modalPersonalModel.userProfile = response.data;
        this.profile = this.modalPersonalModel.userProfile;
        this.modalPersonalModel.skills = response.data.skills;
      })
  }

}
