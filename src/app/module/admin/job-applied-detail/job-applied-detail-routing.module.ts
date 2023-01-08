import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobAppliedDetailComponent } from './job-applied-detail.component';

const routes: Routes = [
  {
    path: '',
    component: JobAppliedDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobAppliedDetailRoutingModule { }
