import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from '../apply/apply.component';
import { JobDetailComponent } from './job-detail.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobDetailRoutingModule { }
