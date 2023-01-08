import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JobService } from 'src/app/services/job/job.service';
import { AppliedDetailModel } from './model/applied-detail.model';

@Component({
  selector: 'app-job-applied-detail',
  templateUrl: './job-applied-detail.component.html',
  styleUrls: ['./job-applied-detail.component.scss']
})
export class JobAppliedDetailComponent {

  appliedDetailModel = new AppliedDetailModel();
  job: any = {};
  id: any;
  userData: any = {};

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute,
    public readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobId: id,
        }
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
    this.appliedDetailModel.detailedForm.controls['jobseekerId'].setValue(this.userData.jobseekerId);
    this.appliedDetailModel.detailedForm.controls['jobId'].setValue(data.params);
    console.log(this.appliedDetailModel.detailedForm.value);
    this.jobService.getAppliedDetailJob(this.appliedDetailModel.detailedForm.value, params).subscribe(
      (response: any) => {
        this.appliedDetailModel.singleJobs = response.data;
        this.job = this.appliedDetailModel.singleJobs;
      },
      (error) => {
      })
    }) 
  }
}