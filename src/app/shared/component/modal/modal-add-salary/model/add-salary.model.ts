import { FormControl, FormGroup, Validators } from "@angular/forms";

export class AddSalaryModel {
    allCurrency: any = [];
    formGroupEditSalary = new FormGroup({
        jobseekerId: new FormControl(""),
        currentCurrency: new FormControl(""),
        expectedCurrency: new FormControl(""),
        currentSalary: new FormControl("", Validators.required),
        expectedMinimum: new FormControl("", Validators.required),
        expectedMaximum: new FormControl("", Validators.required)
    });
    formGroupUpdateSalary = new FormGroup({
        salaryId: new FormControl(""),
        currentCurrency: new FormControl(""),
        expectedCurrency: new FormControl(""),
        currentSalary: new FormControl("", Validators.required),
        expectedMinimum: new FormControl("", Validators.required),
        expectedMaximum: new FormControl("", Validators.required)
    });
}