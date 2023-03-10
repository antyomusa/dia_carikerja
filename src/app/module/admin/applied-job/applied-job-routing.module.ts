import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedJobComponent } from './applied-job.component';

const routes: Routes = [
  {
    path: '',
    component: AppliedJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppliedJobRoutingModule { }
