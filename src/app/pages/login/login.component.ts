import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  constructor(private authService: AuthService, private Formbuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem("token") != null && localStorage.getItem("Role") != "0") {
      this.router.navigateByUrl("/user/user-dashboard");

    }


    this.form = this.Formbuilder.group({
      username: '',
      password: ''
    });
  }
  ngOnDestroy() {
  }

  onLogin() {
    const data = {
      username: this.form.getRawValue().username,
      password: this.form.getRawValue().password
    }
    let status;
    localStorage.setItem("username", data.username);
    localStorage.setItem("password", data.password);
    this.authService.getAccountStatus(data).subscribe((response: any) => {
      status = response.active;
      console.log("this is your account Status : " + status);
      if (status == 1) {
        this.authService.login(data).subscribe(res => {
          console.log(res);
          console.log(res.headers.get('Authorization'))
          let jwt = res.headers.get('Authorization');
          this.authService.saveToken(jwt);
          if (localStorage.getItem("Role") != "0") {
            this.router.navigateByUrl("/user/user-dashboard");

          } else {
            this.router.navigateByUrl("/admin/dashboard");

          }
        });
      } else if (status == 0) {
        this.router.navigateByUrl("/auth/approuveAccount");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    });



  }

}
