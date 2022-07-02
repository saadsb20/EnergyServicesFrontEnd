import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(private Formbuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("token") != null && localStorage.getItem("Role") != "0") {
      this.router.navigateByUrl("/user/user-dashboard");
    }

    this.form = this.Formbuilder.group({
      username: "",
      password: "",
      confirmedPassword: "",
      address: ""
    });
  }
  onRegister() {
    const data = {
      username: this.form.getRawValue().username,
      password: this.form.getRawValue().password,
      confirmedPassword: this.form.getRawValue().confirmedPassword,
      address: this.form.getRawValue().address
    }
    console.log(data.username);
    console.log(data.password);
    console.log(data.confirmedPassword);
    console.log(data.address);
    this.authService.register(data).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/auth/approuveAccount");
    })
  }

}
