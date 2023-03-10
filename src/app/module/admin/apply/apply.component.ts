import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JobService } from 'src/app/services/job/job.service';
import { UploadFileService } from 'src/app/services/upload-cv/upload-file.service';
import { ModalUploadCvComponent } from 'src/app/shared/component/modal/modal-upload-cv/modal-upload-cv.component';
import { ApplyModel } from './model/apply.model';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  applyModel = new ApplyModel();
  jobName: any;
  recruiterCompany: any;
  isUploaded: unknown;
  userData: any = {};
  jobseekerId: any;
  jobId: any;
  submitted: boolean = false;

  constructor(
    private readonly modalService: NgbModal,
    public readonly jobService: JobService,
    public readonly uploadCvService: UploadFileService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute,
    public readonly authService: AuthService,
  ) { }

  ngOnInit(): void {

    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }

    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobId: id,
          jobStatus: "visible",
        }

      console.log(data.params)
      this.jobService.getDetailJob(params).subscribe(
        (response: any) => {
          this.applyModel.applyModelForm.patchValue(response.data);
        },
        (error) => {
        })

      this.applyModel.checkStatus.controls['jobseekerId'].setValue(this.userData.jobseekerId);
      this.applyModel.checkStatus.controls['jobId'].setValue(data.params);
      this.uploadCvService.getApplyStatus(this.applyModel.checkStatus.value, params).subscribe(
        (response: any) => {
          this.submitted = true
        },
        (error) => {
          this.isUploaded = true;
        })
    })
  }

  openUploadCv() {
    const modal = this.modalService.open(
      ModalUploadCvComponent, { size: 'md' });
    modal.componentInstance.file = this.applyModel.applyModelForm.controls['jobseekerResume'];
    modal.componentInstance.onUpload = () => { this.onUpload() }
  }

  onUpload(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobId: id,
        }
      this.applyModel.applyModelForm.controls['jobseekerId'].setValue(this.userData.jobseekerId);
      console.log(this.applyModel.applyModelForm.value, params)
      this.uploadCvService.onUploadCv(this.applyModel.applyModelForm.value).subscribe(
        (event: any) => {
          if (typeof (event) === 'object' != null) {
            this.isUploaded = true;
          }
        }
      );
    }
    )
  }

}
