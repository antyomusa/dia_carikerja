import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddSalaryService {

  constructor(
    private http: HttpClient
  ) { }

  public addSalary(body: any): Observable<any> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId)
      .set('currentCurrency', body.currentCurrency)
      .set('expectedCurrency', body.expectedCurrency)
      .set('currentSalary', body.currentSalary)
      .set('expectedMinimum', body.expectedMinimum)
      .set('expectedMaximum', body.expectedMaximum);

    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/detail/salary', params);
  }

  public editSalary(body: any): Observable<any> {
    const formData = new FormData();
    formData.append("jobseekerId", body.jobseekerId);
    formData.append("currentCurrency", body.currentCurrency);
    formData.append("expectedCurrency", body.expectedCurrency);
    formData.append("currentSalary", body.currentSalary);
    formData.append("expectedMinimum", body.expectedMinimum);
    formData.append("expectedMaximum", body.expectedMaximum);

    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/detail/salary', formData)
  }

  public getCurrency(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/education/get-currency';
    return this.http.get(url);
  }

  saveData(data: any) {
    sessionStorage.setItem('profile', JSON.stringify(data))
  }

  public updateSalary(body: any, data: any): Observable<any> {
    const params = new HttpParams()
      .set('salaryId', data.salaryId)
      .set('currentCurrency', body.currentCurrency)
      .set('expectedCurrency', body.expectedCurrency)
      .set('currentSalary', body.currentSalary)
      .set('expectedMinimum', body.expectedMinimum)
      .set('expectedMaximum', body.expectedMaximum);

    return this.http.patch('http://54.251.83.205:9091/api/v1/jobseeker/update/salary', params);
  }

}
