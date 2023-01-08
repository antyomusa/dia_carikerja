import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ApplyModel {
    status: any;
    applyModelForm = new FormGroup(
        {
            jobseekerId: new FormControl(0, [Validators.required]),
            jobseekerResume: new FormControl('', [Validators.required]),
            jobName: new FormControl(''),
            recruiterCompany: new FormControl(''),
            jobId: new FormControl('')
        }
    );

    applyForm = new FormGroup(
        {
            jobseekerId: new FormControl(''),
            jobId: new FormControl('')
        }
    );

    checkStatus = new FormGroup(
        {
            jobseekerId: new FormControl(''),
            jobId: new FormControl(''),
        }
    );
}