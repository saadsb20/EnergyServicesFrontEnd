import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-approuve-account',
  templateUrl: './approuve-account.component.html',
  styleUrls: ['./approuve-account.component.css']
})
export class ApprouveAccountComponent implements OnInit {

  form: FormGroup;
  constructor(private authService: AuthService, private Formbuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.Formbuilder.group({
      username: '',
      code: ''
    });
  }

  approuveAccount() {
    const data = {
      username: this.form.getRawValue().username,
      code: this.form.getRawValue().code
    }

    this.authService.activateAccount(data).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/auth/login");
    });
  }

}
