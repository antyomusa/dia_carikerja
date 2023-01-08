import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public getUserProfile(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/user', { params: params });
  }

  public getUserSkills(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('jobseekerId', body.jobseekerId);
    return this.http.get('http://54.251.83.205:9091/api/v1/jobseeker/detail/get-skill', { params: params });
  }

  public getAllSkills(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/get-skill';
    return this.http.get(url);
  }

  public getAllUniversity(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/education/get-university';
    return this.http.get(url);
  }

  public getAllDegree(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/v1/jobseeker/education/get-degree';
    return this.http.get(url);
  }

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

  public editSkill(body: any): Observable<any> {
    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/add/skill', body);
  }

  public addEducation(body: any): Observable<any> {
    const formData = new FormData();
    formData.append("jobseekerId", body.jobseekerId);
    formData.append("schoolUniversity", body.schoolUniversity);
    formData.append("degreeName", body.degreeName);
    formData.append("majorName", body.majorName);
    formData.append("startPeriodMonth", body.startPeriodMonth);
    formData.append("endPeriodMonth", body.endPeriodMonth);
    formData.append("startPeriodYear", body.startPeriodYear);
    formData.append("endPeriodYear", body.endPeriodYear);
    formData.append("gradePointMax", body.gradePointMax);
    formData.append("educationDescription", body.educationDescription);
    formData.append("gradePoint", body.gradePoint);

    return this.http.post('http://54.251.83.205:9091/api/v1/jobseeker/create/education', formData)
  }


}
