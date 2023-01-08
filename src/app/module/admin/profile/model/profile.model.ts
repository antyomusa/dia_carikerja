import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ProfileModel {

    salaryId: any = [];
    userProfile: any = [];
    education: any = [];
    experience: any = [];
    allUniversity: any = [];
    allDegree: any = [];
    salary: any = {};
    skills: any = [];
    addSkill(skill: any) {
    }
    removeSkill(skill: any) {
    }

    addSalaryModelForm = new FormGroup(
        {
            jobseekerId: new FormControl(0, [Validators.required]),
            currentCurrency: new FormControl('', [Validators.required]),
            expectedCurrency: new FormControl('', [Validators.required]),
            currentSalary: new FormControl('', [Validators.required]),
            expectedMinimum: new FormControl('', [Validators.required]),
            expectedMaximum: new FormControl('', [Validators.required]),
        }
    );

    editSkillModelForm = new FormGroup(
        {
            jobseekerId: new FormControl(0, [Validators.required]),
            skillId: new FormControl('', [Validators.required]),
        }
    );

}