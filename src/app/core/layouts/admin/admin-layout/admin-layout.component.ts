import { Component, OnInit } from '@angular/core';
import { arrow } from '@popperjs/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  jobs = new Array<any>();
  login = new Array<any>();
  userData: any = {};
  status: boolean = false;

  constructor(
    public readonly authService: AuthService,
    public readonly loaderService: LoaderService
  ) {
    loaderService.isLoading.subscribe(
      (status) => {
        this.status = status;
      }
    )
  }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.userData = this.authService.loadUserData()
    }
  }

  logout() {
    this.authService.logOut()
  }

  opened = false;

}
